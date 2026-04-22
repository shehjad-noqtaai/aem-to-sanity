import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  AemFetchError,
  buildFixturesFetch,
  fetchInfinityJson,
  fixtureFilenameForUrl,
  type FetchDeps,
} from "../src/aem/index.ts";
import type { Config } from "../src/config/schema.ts";

const baseUrl = "https://aem.test";

const cfg: Config = {
  env: "author",
  baseUrl,
  auth: { kind: "basic", username: "u", password: "p" },
  componentPathsFile: "",
  contentRootsFile: "",
  outputDir: "",
  concurrency: 4,
};

function deps(fetchImpl: typeof globalThis.fetch): FetchDeps {
  return { config: cfg, fetch: fetchImpl };
}

describe("fetcher-fixtures", () => {
  let dir: string;
  beforeEach(() => {
    dir = mkdtempSync(join(tmpdir(), "aem-fixture-"));
  });
  afterEach(() => {
    rmSync(dir, { recursive: true, force: true });
  });

  it("fixtureFilenameForUrl encodes slashes to __", () => {
    expect(fixtureFilenameForUrl("/content/dbi.infinity.json")).toBe(
      "content__dbi.infinity.json",
    );
    expect(
      fixtureFilenameForUrl(
        "/apps/dbi/components/content/about/_cq_dialog.infinity.json",
      ),
    ).toBe(
      "apps__dbi__components__content__about___cq_dialog.infinity.json",
    );
    expect(fixtureFilenameForUrl("/content/dbi.4.json")).toBe(
      "content__dbi.4.json",
    );
  });

  it("returns the JSON body for a 200 fixture", async () => {
    writeFileSync(
      join(dir, "content__a.infinity.json"),
      JSON.stringify({ hello: "world" }),
    );
    const fetchImpl = buildFixturesFetch(dir, baseUrl);
    const tree = await fetchInfinityJson(deps(fetchImpl), "/content/a");
    expect(tree).toEqual({ hello: "world" });
  });

  it("missing fixture → 404 (closed-world)", async () => {
    const fetchImpl = buildFixturesFetch(dir, baseUrl);
    await expect(
      fetchInfinityJson(deps(fetchImpl), "/content/missing"),
    ).rejects.toThrow(/404/);
  });

  it("404 meta → network error with status 404", async () => {
    writeFileSync(
      join(dir, "content__gone.infinity.json.meta.json"),
      JSON.stringify({ status: 404 }),
    );
    const fetchImpl = buildFixturesFetch(dir, baseUrl);
    let caught: AemFetchError | undefined;
    try {
      await fetchInfinityJson(deps(fetchImpl), "/content/gone");
    } catch (err) {
      caught = err as AemFetchError;
    }
    expect(caught).toBeDefined();
    expect(caught?.kind).toBe("network");
    expect(caught?.details?.status).toBe(404);
  });

  it("401 meta → auth error kind", async () => {
    writeFileSync(
      join(dir, "content__x.infinity.json.meta.json"),
      JSON.stringify({ status: 401, body: "denied" }),
    );
    const fetchImpl = buildFixturesFetch(dir, baseUrl);
    let caught: AemFetchError | undefined;
    try {
      await fetchInfinityJson(deps(fetchImpl), "/content/x");
    } catch (err) {
      caught = err as AemFetchError;
    }
    expect(caught?.kind).toBe("auth");
    expect(caught?.details?.status).toBe(401);
  });

  it("300 meta triggers .N.json refetch (real AEM ambiguous flow)", async () => {
    // Simulate AEM: /content/site.infinity.json → 300 with JSON array of
    // alternatives; the fetcher picks the highest depth (4) and refetches.
    writeFileSync(
      join(dir, "content__site.infinity.json.meta.json"),
      JSON.stringify({
        status: 300,
        body: JSON.stringify([
          "/content/site.4.json",
          "/content/site.3.json",
          "/content/site.2.json",
        ]),
      }),
    );
    writeFileSync(
      join(dir, "content__site.4.json"),
      JSON.stringify({ "jcr:primaryType": "cq:Page", depth4: true }),
    );
    const fetchImpl = buildFixturesFetch(dir, baseUrl);
    const ambiguous: Array<{ chosenDepth: number }> = [];
    const tree = await fetchInfinityJson(
      deps(fetchImpl),
      "/content/site",
      undefined,
      { onAmbiguous: (r) => ambiguous.push(r) },
    );
    expect(tree).toEqual({ "jcr:primaryType": "cq:Page", depth4: true });
    expect(ambiguous).toHaveLength(1);
    expect(ambiguous[0]?.chosenDepth).toBe(4);
  });

  it("oversize fixture → tooLarge error (via content-length override)", async () => {
    writeFileSync(
      join(dir, "content__big.infinity.json"),
      JSON.stringify({ big: "x".repeat(200) }),
    );
    const fetchImpl = buildFixturesFetch(dir, baseUrl);
    let caught: AemFetchError | undefined;
    try {
      await fetchInfinityJson(deps(fetchImpl), "/content/big", undefined, {
        maxResponseBytes: 32,
      });
    } catch (err) {
      caught = err as AemFetchError;
    }
    expect(caught?.kind).toBe("tooLarge");
  });
});
