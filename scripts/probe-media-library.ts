#!/usr/bin/env node
/**
 * Probe: AEM DAM → Sanity Media Library → GDR-link to dataset.
 *
 * Task cd8YOXWC. Validates the end-to-end flow that `aem-assets` will
 * implement in `packages/aem-to-sanity-content/src/assets.ts`.
 *
 * Run:
 *   cd packages/aem-to-sanity-content
 *   ./node_modules/.bin/tsx ../../scripts/probe-media-library.ts
 *
 * Required env:
 *   AEM_AUTHOR_URL, AEM_AUTHOR_USERNAME, AEM_AUTHOR_PASSWORD
 *   SANITY_PROJECT_ID, SANITY_DATASET, SANITY_TOKEN, SANITY_MEDIA_LIBRARY_ID
 * Optional env:
 *   PROBE_DAM_PATH       default: /content/dam/dbi/silhouette-alterations.svg
 *   SANITY_API_VERSION   default: 2025-02-19  (ML support requires this)
 *   SANITY_ML_LINK_TOKEN  personal/OAuth token for the link step. If unset,
 *                         falls back to SANITY_TOKEN (works only if the
 *                         latter is a personal token with read/write on both
 *                         the Media Library and the project dataset).
 *
 * Findings from the first end-to-end probe run (2026-04-22):
 * - `@sanity/client@7.21.0` upload with `resource:{type:'media-library'}`
 *   succeeds (asset lands in ML) BUT returns `undefined` instead of the
 *   typed `SanityImageAssetDocument` — use raw HTTP to get `{asset,assetInstance}`.
 * - The `/assets/media-library-link/{dataset}` endpoint refuses the
 *   project robot token with `401 Invalid non-global session for user id g-…`.
 *   Per Sanity docs it requires a **personal authorization token** with
 *   read/write on both the ML and the project.  Blocker — see channel.
 */
import "dotenv/config";
import { createClient } from "@sanity/client";

function must(name: string): string {
  const v = process.env[name];
  if (!v) {
    console.error(`Missing env var: ${name}`);
    process.exit(2);
  }
  return v;
}
function authBasic(user: string, pass: string): string {
  return "Basic " + Buffer.from(`${user}:${pass}`, "utf8").toString("base64");
}
function mimeFromExt(path: string): string {
  const ext = path.toLowerCase().split(".").pop() ?? "";
  const map: Record<string, string> = {
    svg: "image/svg+xml", png: "image/png", jpg: "image/jpeg", jpeg: "image/jpeg",
    gif: "image/gif", webp: "image/webp", avif: "image/avif", pdf: "application/pdf",
  };
  return map[ext] ?? "application/octet-stream";
}

async function main() {
  const aemBase = must("AEM_AUTHOR_URL");
  const aemUser = must("AEM_AUTHOR_USERNAME");
  const aemPass = must("AEM_AUTHOR_PASSWORD");
  const projectId = must("SANITY_PROJECT_ID");
  const dataset = must("SANITY_DATASET");
  const uploadToken = must("SANITY_TOKEN");
  const linkToken = process.env.SANITY_ML_LINK_TOKEN ?? uploadToken;
  const mlId = must("SANITY_MEDIA_LIBRARY_ID");
  const apiVersion = process.env.SANITY_API_VERSION ?? "2025-02-19";
  const damPath = process.env.PROBE_DAM_PATH ?? "/content/dam/dbi/silhouette-alterations.svg";

  console.error(`[probe] AEM         ${aemBase}`);
  console.error(`[probe] project     ${projectId} / dataset ${dataset}`);
  console.error(`[probe] ML id       ${mlId}`);
  console.error(`[probe] apiVersion  ${apiVersion}`);
  console.error(`[probe] DAM path    ${damPath}`);
  console.error(`[probe] linkToken   ${linkToken === uploadToken ? "same as SANITY_TOKEN" : "SANITY_ML_LINK_TOKEN (separate)"}`);

  // ── 1. Download from AEM ─────────────────────────────────────────────────
  console.error("\n── 1. Download from AEM ──");
  const damRes = await fetch(`${aemBase}${damPath}`, {
    headers: { Authorization: authBasic(aemUser, aemPass) },
  });
  if (!damRes.ok) {
    console.error(`  AEM HTTP ${damRes.status}: ${(await damRes.text()).slice(0, 300)}`);
    process.exit(1);
  }
  const mimeType = damRes.headers.get("content-type")?.split(";")[0].trim() ?? mimeFromExt(damPath);
  const body = Buffer.from(await damRes.arrayBuffer());
  const filename = damPath.split("/").pop() ?? "asset";
  console.error(`  ✓ ${body.length} bytes, mime=${mimeType}, filename=${filename}`);

  // ── 2. Upload to Media Library (raw HTTP) ────────────────────────────────
  // @sanity/client@7.21.0 routes client.assets.upload() to the right endpoint
  // when `resource:{type:'media-library'}` is set, but returns `undefined`
  // and drops `{asset,assetInstance}` — we need both IDs so raw POST it is.
  console.error("\n── 2. Upload to Media Library (raw HTTP) ──");
  const kind: "image" | "file" = mimeType.startsWith("image/") ? "image" : "file";
  const uploadUrl = `https://api.sanity.io/v${apiVersion}/media-libraries/${mlId}/upload?filename=${encodeURIComponent(filename)}`;
  console.error(`  POST ${uploadUrl}`);
  const upRes = await fetch(uploadUrl, {
    method: "POST",
    headers: { Authorization: `Bearer ${uploadToken}`, "Content-Type": mimeType },
    body,
  });
  const upText = await upRes.text();
  if (!upRes.ok) {
    // 409 'asset already exists' is informational: we can recover the IDs from GROQ.
    let parsed: any;
    try { parsed = JSON.parse(upText); } catch { parsed = { raw: upText }; }
    console.error(`  upload HTTP ${upRes.status}: ${JSON.stringify(parsed).slice(0, 500)}`);
    if (upRes.status === 409 && parsed?.error?.existingAssetId) {
      console.error(`  (asset already uploaded, looking up parent via GROQ)`);
      const mlClient = createClient({
        resource: { type: "media-library", id: mlId },
        apiVersion, token: uploadToken, useCdn: false,
      });
      const existingInstance = parsed.error.existingAssetId as string;
      const parent = await mlClient.fetch(
        `*[_type=="sanity.asset" && references($id)][0]{_id}`,
        { id: existingInstance },
      ) as { _id: string } | null;
      if (!parent?._id) { console.error("  could not resolve parent asset"); process.exit(1); }
      console.error(`  assetInstanceId  = ${existingInstance}`);
      console.error(`  assetId (parent) = ${parent._id}`);
      return runLink({ projectId, dataset, apiVersion, mlId, linkToken, assetId: parent._id, assetInstanceId: existingInstance });
    }
    process.exit(1);
  }
  const upJson = JSON.parse(upText) as { asset: { _id: string }; assetInstance: { _id: string; url?: string } };
  const assetId = upJson.asset._id;
  const assetInstanceId = upJson.assetInstance._id;
  console.error(`  ✓ asset._id (assetId)            = ${assetId}`);
  console.error(`  ✓ assetInstance._id (instanceId) = ${assetInstanceId}`);
  console.error(`  ✓ CDN url                         = ${upJson.assetInstance.url}`);

  return runLink({ projectId, dataset, apiVersion, mlId, linkToken, assetId, assetInstanceId, kind });
}

async function runLink(args: {
  projectId: string; dataset: string; apiVersion: string; mlId: string;
  linkToken: string; assetId: string; assetInstanceId: string; kind?: "image" | "file";
}) {
  const { projectId, dataset, apiVersion, mlId, linkToken, assetId, assetInstanceId } = args;

  // ── 3. Link to project dataset (GDR) ─────────────────────────────────────
  console.error("\n── 3. Link to dataset (GDR) ──");
  const linkUrl = `https://${projectId}.api.sanity.io/v${apiVersion}/assets/media-library-link/${dataset}`;
  const linkBody = { mediaLibraryId: mlId, assetInstanceId, assetId };
  console.error(`  POST ${linkUrl}`);
  console.error(`  body ${JSON.stringify(linkBody)}`);
  const linkRes = await fetch(linkUrl, {
    method: "POST",
    headers: { Authorization: `Bearer ${linkToken}`, "Content-Type": "application/json" },
    body: JSON.stringify(linkBody),
  });
  const linkText = await linkRes.text();
  if (!linkRes.ok) {
    console.error(`  ✗ link HTTP ${linkRes.status}: ${linkText}`);
    if (linkRes.status === 401 && linkText.includes("non-global session")) {
      console.error("");
      console.error("  ⚠ The token was accepted for ML upload but rejected by /assets/media-library-link.");
      console.error("    Per https://www.sanity.io/docs/media-library/link-media-assets this endpoint");
      console.error("    requires a PERSONAL authorization token (not a project robot token).");
      console.error("    Set SANITY_ML_LINK_TOKEN to a token from `sanity login` with R/W on both");
      console.error("    the Media Library and the project, then re-run this probe.");
    }
    process.exit(1);
  }
  const linkJson = JSON.parse(linkText) as {
    document: { _id: string; _type: string; url?: string; media?: { _ref?: string }; mimeType?: string; size?: number };
  };
  const linkedRef = linkJson.document._id;
  console.error(`  ✓ linked doc _id  (= asset._ref in docs)   = ${linkedRef}`);
  console.error(`  ✓ linked doc _type                          = ${linkJson.document._type}`);
  console.error(`  ✓ media._ref (GDR)                          = ${linkJson.document.media?._ref}`);

  // ── 4. Resolve via project client ────────────────────────────────────────
  console.error("\n── 4. Resolve via project client ──");
  const projectClient = createClient({ projectId, dataset, token: linkToken, apiVersion, useCdn: false });
  const doc = await projectClient.getDocument(linkedRef);
  if (!doc) {
    console.error(`  ✗ getDocument(${linkedRef}) returned null — ref not resolvable`);
    process.exit(1);
  }
  console.error(`  ✓ resolved, _type=${doc._type}, size=${(doc as any).size}, mimeType=${(doc as any).mimeType}`);
  console.error(`  ✓ url=${(doc as any).url}`);

  console.error("\n── SUCCESS — end-to-end OK ──");
  // Machine-readable summary on stdout
  console.log(JSON.stringify({
    damPath: process.env.PROBE_DAM_PATH ?? "/content/dam/dbi/silhouette-alterations.svg",
    mediaLibraryAssetId: assetId,
    linkedAssetInstanceId: assetInstanceId,
    linkedRef,
    mediaRef: linkJson.document.media?._ref,
    url: (doc as any).url,
  }, null, 2));
}

main().catch((err) => {
  console.error("FATAL:", err);
  process.exit(1);
});
