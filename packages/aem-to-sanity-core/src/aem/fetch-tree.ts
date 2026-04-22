import type { FetchDeps, FetchInfinityOptions } from "./fetcher.ts";
import { fetchInfinityJson, AemFetchError } from "./fetcher.ts";
import type { ContentNode } from "./infinity.ts";

/**
 * Result of a tree fetch with depth-5 follow-up splicing.
 *
 * - `tree` is the root AEM response with every truncation marker that
 *   resolved within the expansion budget replaced by its real subtree.
 *   Markers that remain unresolved after the budget are replaced with a
 *   `{ __truncated: "maxDepth", jcrPath }` sentinel — the same shape
 *   `transform.ts` already produces at its own depth limit. Downstream
 *   `transform.ts:222` guard treats both identically.
 *
 * - `stats` reports what happened so the extract report can surface it:
 *   `markersFound` total across every round, `markersResolved` = how many
 *   spliced successfully, `expansionsUsed` = rounds executed (<=
 *   `maxDepthExpansions`).
 */
export interface FetchInfinityTreeResult {
  tree: unknown;
  stats: {
    markersFound: number;
    markersResolved: number;
    expansionsUsed: number;
    markersTruncated: number;
    markersFailed: number;
  };
}

export interface FetchInfinityTreeOptions extends FetchInfinityOptions {
  /**
   * How many rounds of follow-up fetches to run. Default: 3. Each round
   * walks the current tree, collects every unresolved marker, and fetches
   * them in parallel. After the budget is exhausted any remaining markers
   * are replaced with `{ __truncated: "maxDepth", jcrPath }`.
   */
  maxDepthExpansions?: number;
  /**
   * Parallelism for follow-up fetches within a round. Default: 4.
   * The per-round waves are still sequential so that depth-N's results
   * are visible before depth-(N+1) starts — this keeps the cycle guard
   * sane and lets a deeply nested marker chain resolve in `maxDepthExpansions`
   * rounds rather than quadratic time.
   */
  concurrency?: number;
  /**
   * Notified each time a follow-up fetch starts. Useful for progress
   * reporting and test instrumentation (verifying parallelism).
   */
  onFollowUp?: (marker: string, round: number) => void;
  /**
   * Cooperative cancellation. When the signal fires, in-flight follow-ups
   * are allowed to complete but no new rounds are started.
   */
  signal?: AbortSignal;
}

const DEFAULT_MAX_DEPTH_EXPANSIONS = 3;
const DEFAULT_FOLLOWUP_CONCURRENCY = 4;

/**
 * Fetch a JCR path as `.infinity.json`, then recursively follow up on every
 * AEM depth-5 truncation marker (`detectTruncations` output) and splice the
 * resolved subtree back into the parent at the correct key. This is what the
 * runbook has always claimed `aem-extract` does; the old `fetchInfinityJson`
 * only fetched the root and left markers as bare string values, silently
 * losing every subtree below the AEM depth cap.
 *
 * The splice walk is iterative (stack-safe) and keeps a `Set<absolutePath>`
 * of already-fetched paths as a cycle guard. Markers still present after
 * `maxDepthExpansions` rounds are replaced with
 * `{ __truncated: "maxDepth", jcrPath }` so the transform stage's existing
 * guard at `transform.ts:222,264,277` treats them as opaque rather than as
 * broken string values.
 *
 * Errors fetching a follow-up are *non-fatal*: the marker is replaced with
 * `{ __truncated: "error", jcrPath, error }` and the outer walker continues.
 * A single 404/oversize on a deep descendant should never abort a whole
 * root the way an `auth` error does for the initial fetch.
 */
export async function fetchInfinityTree(
  deps: FetchDeps,
  rootPath: string,
  opts: FetchInfinityTreeOptions = {},
): Promise<FetchInfinityTreeResult> {
  const maxExpansions = opts.maxDepthExpansions ?? DEFAULT_MAX_DEPTH_EXPANSIONS;
  const concurrency = opts.concurrency ?? DEFAULT_FOLLOWUP_CONCURRENCY;

  // Root fetch. Forwarded options (onAmbiguous, maxResponseBytes) are carried
  // through both the root and every follow-up for behavioural parity with
  // the pre-fix `fetchInfinityJson` call in `extract.ts`.
  const rootOpts: FetchInfinityOptions = {
    onAmbiguous: opts.onAmbiguous,
    maxResponseBytes: opts.maxResponseBytes,
  };

  let tree = await fetchInfinityJson(deps, rootPath, undefined, rootOpts);

  const fetched = new Set<string>([rootPath]);
  let markersFound = 0;
  let markersResolved = 0;
  let markersFailed = 0;
  let expansionsUsed = 0;

  for (let round = 0; round < maxExpansions; round++) {
    if (opts.signal?.aborted) break;
    const markers = collectMarkers(tree, rootPath);
    if (markers.length === 0) break;

    expansionsUsed = round + 1;
    markersFound += markers.length;

    // Skip any marker whose path we've already visited (splice result still
    // surfaced one). The cycle guard covers the pathological case of AEM
    // returning a marker that points back to an ancestor, and also the
    // benign case of a terminal empty node (`{jcr:primaryType: nt:unstructured}`)
    // which the suspiciously-empty heuristic keeps re-detecting each round.
    let cycleThisRound = 0;
    const toFetch: MarkerHit[] = [];
    for (const m of markers) {
      if (fetched.has(m.absolutePath)) {
        // Cycle / already-resolved terminal node — replace with a sentinel
        // so the next round doesn't re-collect it. Counts as resolved for
        // the purpose of "total markers dealt with".
        spliceAt(tree, rootPath, m.absolutePath, {
          __truncated: "cycle",
          jcrPath: m.absolutePath,
        });
        cycleThisRound++;
        continue;
      }
      fetched.add(m.absolutePath);
      toFetch.push(m);
    }
    markersResolved += cycleThisRound;

    if (toFetch.length === 0) continue;

    const results = await runPool(
      toFetch,
      async (hit) => {
        opts.onFollowUp?.(hit.absolutePath, round);
        try {
          const sub = await fetchInfinityJson(
            deps,
            hit.absolutePath,
            undefined,
            rootOpts,
          );
          return { hit, ok: true as const, value: sub };
        } catch (err) {
          const message =
            err instanceof AemFetchError
              ? err.message
              : (err as Error).message;
          const status =
            err instanceof AemFetchError ? err.details?.status : undefined;
          return { hit, ok: false as const, error: message, status };
        }
      },
      concurrency,
      opts.signal,
    );

    for (const r of results) {
      if (r.ok) {
        spliceAt(tree, rootPath, r.hit.absolutePath, r.value);
        markersResolved++;
      } else {
        // Non-fatal: mark the node as truncated-with-error so transform's
        // __truncated guard handles it and doesn't try to walk a broken
        // string. Status is captured for the extract report.
        spliceAt(tree, rootPath, r.hit.absolutePath, {
          __truncated: "error",
          jcrPath: r.hit.absolutePath,
          error: r.error,
          status: r.status,
        });
        markersFailed++;
      }
    }
  }

  // After the budget: convert any still-present markers into maxDepth sentinels.
  const leftover = collectMarkers(tree, rootPath);
  for (const m of leftover) {
    spliceAt(tree, rootPath, m.absolutePath, {
      __truncated: "maxDepth",
      jcrPath: m.absolutePath,
    });
  }
  const markersTruncated = leftover.length;
  markersFound += markersTruncated;

  return {
    tree,
    stats: {
      markersFound,
      markersResolved,
      expansionsUsed,
      markersTruncated,
      markersFailed,
    },
  };
}

/**
 * Represents a truncation marker discovered in the tree: its absolute JCR
 * path (the string value) and the parent node + key so `spliceAt` can
 * substitute the resolved subtree without re-walking.
 */
interface MarkerHit {
  absolutePath: string;
  parent: ContentNode;
  key: string;
}

/**
 * Walk the tree iteratively, returning every truncation marker hit with
 * enough context to splice the resolved subtree back in.
 *
 * Matches the two detection rules from `infinity.ts:detectTruncations`:
 *   1. A string property value equal to an absolute descendant JCR path.
 *   2. A child object that's suspiciously empty when its siblings carry
 *      content.
 */
function collectMarkers(root: unknown, rootPath: string): MarkerHit[] {
  const hits: MarkerHit[] = [];
  if (!isPlainContentNode(root)) return hits;

  interface Frame {
    node: ContentNode;
    basePath: string;
  }
  const stack: Frame[] = [{ node: root, basePath: rootPath }];

  while (stack.length > 0) {
    const frame = stack.pop();
    if (!frame) continue;
    const siblingsHaveContent = anyChildCarriesProperties(frame.node);

    for (const [key, value] of Object.entries(frame.node)) {
      const childPath = `${frame.basePath}/${key}`;

      if (isStringMarker(value, frame.basePath)) {
        hits.push({ absolutePath: value, parent: frame.node, key });
        continue;
      }

      if (isPlainContentNode(value)) {
        if (siblingsHaveContent && isSuspiciouslyEmpty(value)) {
          hits.push({ absolutePath: childPath, parent: frame.node, key });
          continue;
        }
        stack.push({ node: value, basePath: childPath });
      }
    }
  }
  return hits;
}

/**
 * Splice a value into the tree at the given absolute path. Uses the fact
 * that `fetchInfinityTree` keeps a handle on the parent+key from the marker
 * collection pass — we resolve to that handle rather than re-walking. When
 * called after a round of follow-ups the parent reference is still valid
 * because the tree is mutated in place (not cloned).
 *
 * Implementation note: we re-walk here because in the rare case where a
 * follow-up's resolved subtree *itself* contains a marker at the same
 * absolute path (shouldn't happen with AEM, but defensive), the splice
 * target could have moved. Re-walk by path is O(depth), not O(tree).
 */
function spliceAt(
  root: unknown,
  rootPath: string,
  absolutePath: string,
  value: unknown,
): void {
  if (!absolutePath.startsWith(`${rootPath}/`) && absolutePath !== rootPath) {
    return; // Defensive — marker outside the tree.
  }
  const relative = absolutePath === rootPath
    ? []
    : absolutePath.slice(rootPath.length + 1).split("/");
  if (relative.length === 0) return; // Can't replace the root.
  let cursor: unknown = root;
  for (let i = 0; i < relative.length - 1; i++) {
    if (!isPlainContentNode(cursor)) return;
    const next = (cursor as ContentNode)[relative[i]!];
    cursor = next;
  }
  if (!isPlainContentNode(cursor)) return;
  (cursor as ContentNode)[relative[relative.length - 1]!] = value;
}

function isStringMarker(value: unknown, parentPath: string): value is string {
  if (typeof value !== "string") return false;
  if (!value.startsWith(`${parentPath}/`)) return false;
  return true;
}

function isPlainContentNode(value: unknown): value is ContentNode {
  return (
    typeof value === "object" &&
    value !== null &&
    !Array.isArray(value) &&
    (value as { __truncated?: unknown }).__truncated === undefined
  );
}

function isSuspiciouslyEmpty(node: ContentNode): boolean {
  const keys = Object.keys(node);
  if (keys.length === 0) return true;
  if (keys.length === 1 && keys[0] === "jcr:primaryType") return true;
  return false;
}

function anyChildCarriesProperties(node: ContentNode): boolean {
  for (const value of Object.values(node)) {
    if (isPlainContentNode(value)) {
      const keys = Object.keys(value);
      if (keys.length > 1) return true;
    }
  }
  return false;
}

/**
 * Small async pool: runs up to `concurrency` workers in parallel,
 * preserves result order matching the input order. No abort short-circuit —
 * follow-up errors are downgraded to per-marker `__truncated` sentinels so a
 * single 404 shouldn't wipe out an entire round.
 */
async function runPool<T, R>(
  items: T[],
  worker: (item: T) => Promise<R>,
  concurrency: number,
  signal?: AbortSignal,
): Promise<R[]> {
  const results: Array<R | undefined> = new Array(items.length);
  let cursor = 0;
  const width = Math.max(1, Math.min(concurrency, items.length));
  const runners = Array.from({ length: width }, async () => {
    while (true) {
      if (signal?.aborted) return;
      const i = cursor++;
      if (i >= items.length) return;
      results[i] = await worker(items[i]!);
    }
  });
  await Promise.all(runners);
  return results.filter((r): r is R => r !== undefined);
}
