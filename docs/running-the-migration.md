# Running the AEM → Sanity migration end-to-end

This is the operator's guide: every env var, every command, and the order to run them in so you can go from a running AEM instance to content in Sanity.

The pipeline has three independent stages. Stage 3 is itself a four-step chain:

1. **Schemas** — read AEM component dialogs (`_cq_dialog`) → emit Sanity object types.
2. **TypeGen** — produce `sanity.types.ts` for typed GROQ clients.
3. **Content** — `aem-extract` → `aem-transform` → `aem-assets` → `aem-import`. Walks AEM `.infinity.json` trees, transforms JCR nodes into Sanity docs, uploads DAM assets, and commits via `@sanity/client`. **Dry-run by default**; set `MIGRATION_DRY_RUN=false` to write to Sanity.

A fourth, one-time step scaffolds the **Studio** that consumes the emitted schemas.

---

## 0. Prerequisites

- **Node** ≥ 20
- **pnpm** ≥ 9 (this repo is pnpm-only; npm/yarn will not resolve `workspace:*`)
- **AEM access** — an account that can `GET` both `*.infinity.json` on component paths and content paths, or an equivalent bearer token.
- **Sanity project** — create at [sanity.io/manage](https://www.sanity.io/manage). You need the project id, dataset name, and a write token (role: Editor or higher).

```bash
pnpm install
pnpm build   # builds all three packages into packages/*/dist
```

---

## 1. Configure environment variables

There are two `.env` files — one for the pipeline CLIs, one for the Studio. They can share values; they live in different directories because each tool loads `.env` from its own cwd.

### 1a. Pipeline `.env` — `examples/davids-bridal/.env`

```bash
cp examples/davids-bridal/.env.example examples/davids-bridal/.env
```

| Variable | Required? | Purpose |
| --- | --- | --- |
| `AEM_ENV` | yes | `author` or `publish` — which of the URL/credential pairs below to use. Default: `author`. |
| `AEM_AUTHOR_URL` | conditional | Base URL of your author instance. Required when `AEM_ENV=author`. |
| `AEM_AUTHOR_USERNAME` | conditional | Basic-auth user for author. |
| `AEM_AUTHOR_PASSWORD` | conditional | Basic-auth password for author. |
| `AEM_PUBLISH_URL` / `USERNAME` / `PASSWORD` | conditional | Same, for publish. |
| `AEM_TOKEN` | optional | Bearer token. If set, overrides basic auth for whichever env is active. |
| `AEM_COMPONENT_PATHS_FILE` | optional | File listing component JCR paths to migrate (one per line, `#` for comments). Default: `./aem-component-paths`. |
| `AEM_CONTENT_ROOTS_FILE` | optional | File listing content roots to walk during extraction. Default: `./aem-content-roots`. See `aem-content-roots.example` for syntax. |
| `AEM_COMPONENT_EXCEPTIONS_FILE` | optional | File listing `sling:resourceType` values to skip during transform. Default: `./aem-component-exceptions`. |
| `AEM_MAX_RESPONSE_MB` | optional | Cap per-fetch payload size during extract. Pages exceeding this are recorded as `tooLarge` failures. |
| `OUTPUT_DIR` | optional | Where schemas, reports, and audit live. Default: `./output`. |
| `CONCURRENCY` | optional | Parallel AEM fetches. Default: `4`. |
| `MIGRATION_DRY_RUN` | optional | `aem-assets` and `aem-import` are dry-run unless this is explicitly set to `false`. Default (unset): dry-run. |
| `SANITY_PROJECT_ID` | required for writes | Only read when `MIGRATION_DRY_RUN=false`. |
| `SANITY_DATASET` | required for writes | |
| `SANITY_TOKEN` | required for writes | Write-scoped API token. |
| `SANITY_API_VERSION` | optional | Default: `2024-01-01`. |

Auth precedence: `AEM_TOKEN` > (`*_USERNAME` + `*_PASSWORD`). If neither is set for the active `AEM_ENV`, the CLI fails fast with a clear message.

### 1b. Studio `.env` — `apps/studio/.env`

```bash
cp apps/studio/.env.example apps/studio/.env
```

Sanity CLI auto-loads variables with the `SANITY_STUDIO_` prefix from this file:

```
SANITY_STUDIO_PROJECT_ID=your-project-id
SANITY_STUDIO_DATASET=production
```

The studio config also accepts unprefixed `SANITY_PROJECT_ID` / `SANITY_DATASET` as a fallback, so if you already exported those in your shell for the content CLI you don't need to duplicate them.

### 1c. Component path list — `examples/davids-bridal/aem-component-paths`

One JCR path per line. Lines beginning with `#` are ignored. Example:

```
/apps/davidsbridal/components/content/heroBanner
/apps/davidsbridal/components/content/promo
# add or remove paths as you migrate in waves
```

The schema CLI fetches `{path}/_cq_dialog.infinity.json` for each entry.

### 1c-bis. Content roots list — `examples/davids-bridal/aem-content-roots`

Consumed by `aem-extract` (stage 3). Supports `@base` sections to avoid repeating long paths, plus absolute JCR paths. Example:

```
@base /content/dbi/en

homepage
about-us
/content/dbi/en/sitemap
```

Each line becomes a Sanity page doc with its slug derived from the last segment. See `aem-content-roots.example` for the full syntax (comments, absolute paths, multiple `@base` blocks).

### 1c-ter. Component exceptions — `examples/davids-bridal/aem-component-exceptions`

Consumed by `aem-transform`. One `sling:resourceType` (or `apps/...` prefix) per line; matching nodes and their subtrees are skipped. Use this for decorative wrappers or AEM-only utilities that don't belong in Sanity.

### 1d. Resource-type registry — `output/content-type-registry.json`

**Generated** by `migrate:schema`; you don't hand-author it. Maps AEM `sling:resourceType` values to the Sanity type names that stage 1 emitted, plus the field names (used by the drift auditor):

```json
{
  "__generated": "GENERATED by aem-to-sanity-schema. Remove this field (or delete the file) to take ownership; the next run will preserve your edits.",
  "entries": [
    { "resourceType": "dbi/components/content/promo", "sanityType": "promo", "fields": ["headline1","description","image"] },
    { "resourceType": "aem-integration/components/button", "sanityType": "button", "fields": ["label","href"] }
  ]
}
```

- `resourceType` — derived by stripping `/apps/` from each component path. Override via `jcrPrefix` on the programmatic API if your install uses a different prefix.
- `sanityType` — the emitted schema's `name`.
- `fields` — mapped field names; the content auditor uses these to flag AEM props your Sanity schema doesn't expect.

**Taking ownership:** if your AEM content uses `sling:resourceSuperType` chains or unusual mappings, delete the `__generated` marker (or rewrite the file as a bare `[...]` array). The next `migrate:schema` run will preserve it and log that it skipped regeneration. The content CLI accepts both shapes.

Anything outside this registry is still extracted but tagged `_type: "aemUnmapped"` and flagged in the audit.

---

## 2. Stage 1 — emit Sanity schemas

```bash
pnpm --filter example-davids-bridal migrate:schema
```

**Outputs under `output/`:**

| Path | What it is |
| --- | --- |
| `schemas/*.ts` | One Sanity object type per AEM component, named `componentNameInCamelCase`. |
| `schemas/pageBuilder.ts` | Array type with every emitted block in `of: [...]`. Regenerated each run. |
| `schemas/page.ts` | Minimal document type (`title`, `slug`, `pageBuilder`). Preserved if you hand-author it. |
| `schemas/index.ts` | Barrel exporting `allSchemaTypes` — plug straight into `defineConfig`. |
| `content-type-registry.json` | AEM `sling:resourceType` → Sanity type + field names, consumed by stage 3. Preserved if you hand-edit. |
| `aem/components/**/*.json` | Raw dialog snapshots — audit trail. |
| `migration-report.json` | Pass/fail per component + unmapped props inventory. |
| `audit/unmapped-examples.json` | Real-world examples per unmapped AEM type. Feed these back into `mapping-table.ts` when adding new mappings. |

Re-run any time — output is deterministic, so `git diff` shows only real changes.

### Registering new block types between migrations

If you hand-add a `schemas/myBlock.ts` without re-running the whole migration, refresh the page-builder registration with:

```bash
pnpm --filter example-davids-bridal pagebuilder:refresh
# or
npx aem-to-sanity-pagebuilder --output-dir ./output --exclude xfPage
```

This rescans `schemas/`, rebuilds `pageBuilder.ts`, and refreshes `schemas/index.ts`. It preserves `page.ts` if you've removed the `GENERATED` marker comment.

---

## 3. Stage 2 — TypeGen

```bash
pnpm --filter example-davids-bridal typegen
```

Produces `output/sanity.types.ts`. Runs in-process via tsx + `@sanity/schema` internals — **no network call**, no `sanity schema extract` required.

Consume it in a downstream Sanity client like:

```ts
import type { HeroBanner } from "./output/sanity.types";
const doc = await client.fetch<HeroBanner>(`*[_type == "heroBanner"][0]`);
```

---

## 4. Stage 3 — content migration

Stage 3 is four independent CLIs, run in order. The `migrate:content` pnpm script chains them (`extract && transform && assets && import`), but you can run each step on its own — each reads from the output directory of the previous one, so re-running just one stage is cheap.

```bash
pnpm --filter example-davids-bridal migrate:content
# equivalent to:
pnpm --filter example-davids-bridal extract
pnpm --filter example-davids-bridal transform
pnpm --filter example-davids-bridal assets
pnpm --filter example-davids-bridal import
```

**All writes to Sanity are dry-run unless `MIGRATION_DRY_RUN=false` is set.** The `extract` and `transform` stages are read/local-only regardless; only `assets` and `import` touch Sanity.

### 4a. `aem-extract` — AEM `.infinity.json` → `output/raw/`

Reads every entry in `aem-content-roots`, fetches `{root}.infinity.json` from AEM, and writes one JSON file per page to `output/raw/`. Transparently follows depth-5 truncation markers (AEM returns a string marker like `"...section_0": "...section_0"` at the depth boundary; the fetcher detects these plus suspiciously-empty nodes, issues follow-up fetches, and splices resolved subtrees back in).

| Flag / env | Effect |
| --- | --- |
| `--overwrite` | Re-fetch pages that already have a cached raw file. Default: skip. |
| `AEM_CONTENT_ROOTS_FILE` | Path to roots file. Default: `./aem-content-roots`. |
| `AEM_MAX_RESPONSE_MB` | Per-fetch payload cap. Oversized responses are recorded as `tooLarge` failures. |

**Outputs:** `output/raw/*.json`, `output/extract-report.json` (counts + categorized failures), and `output/extract-404.log` if any roots weren't found.

### 4b. `aem-transform` — `output/raw/` → `output/clean/`

Walks each raw JCR tree, maps `sling:resourceType` values via `content-type-registry.json`, and emits one `page` doc per input file with a `pageBuilder` array of typed blocks. Each doc gets a deterministic `_id` (from JCR path) and each block a stable `_key` (from `jcr:uuid` or path SHA1). Unknown resource types and nodes listed in `aem-component-exceptions` are skipped but noted in the audit.

| Flag / env | Effect |
| --- | --- |
| `--registry <file>` | Override the default `./content-type-registry.json`. |
| `--include type1,type2` | Restrict to a comma-separated allow-list of `sling:resourceType` values. |
| `AEM_COMPONENT_EXCEPTIONS_FILE` | Path to exceptions file. Default: `./aem-component-exceptions`. |

**Outputs:** `output/clean/*.json` (one per page, containing the transformed doc) and `output/transform-report.json` (unknown resource types, unknown props per component, transform bails — with first-N example paths per finding).

### 4c. `aem-assets` — upload DAM → Sanity

Scans `output/clean/` for `/content/dam/...` references, downloads each asset from AEM using the pipeline's credentials, and uploads it to Sanity's asset pipeline. Rewrites the clean docs in place so fileupload fields contain Sanity asset refs (`{_type: "image", asset: {_ref: "image-..."}}`) instead of DAM path strings.

Maintains `output/assets/manifest.json` — a per-DAM-path record of cache state, Sanity asset id, and upload status. Re-runs skip already-uploaded assets.

- **Dry-run default.** Without `MIGRATION_DRY_RUN=false`, assets are catalogued but nothing is uploaded and clean docs are not rewritten.
- **Requires** `SANITY_PROJECT_ID`, `SANITY_DATASET`, `SANITY_TOKEN` when not dry-running.

### 4d. `aem-import` — `output/clean/` → Sanity

Reads every file under `output/clean/` and commits the docs via `@sanity/client` using `transaction().createOrReplace(doc).commit()`. Because `_id` values are derived from JCR paths, re-runs upsert rather than duplicate.

- **Dry-run default.** With `MIGRATION_DRY_RUN` unset or truthy, the command only prints what it *would* write.
- **Requires** `SANITY_PROJECT_ID`, `SANITY_DATASET`, `SANITY_TOKEN` when writing.

### Depth-5 truncation — handled for you

AEM's `.infinity.json` truncates the tree at depth ~5, inserting path-string markers like `"/content/.../section_0": "/content/.../section_0"`. `aem-extract` detects these (and suspiciously-empty nodes at depth boundaries), issues follow-up fetches, and splices resolved subtrees back in. Nothing to configure unless a page is pathologically deep — in which case raise `maxDepthExpansions` on the programmatic API in `aem-to-sanity-core`.

---

## 5. Orchestrated — one command for the full pipeline

```bash
pnpm turbo run migrate:schema typegen migrate:content --filter=example-davids-bridal
```

Turbo respects the ordering declared in `turbo.json`: schema → typegen → content. Network-dependent tasks are `"cache": false`; pure emit steps cache against input hashes.

---

## 6. Studio (visual verification)

```bash
pnpm --filter studio dev
# Opens http://localhost:3333 with every emitted schema loaded.
```

Or validate schema shape without booting the UI:

```bash
pnpm --filter studio exec sanity schema validate
# Expects: 0 errors, 0 warnings.
```

The studio's `schemas/index.ts` re-exports `allSchemaTypes` from `examples/davids-bridal/output/schemas/index.ts`, and `sanity.config.ts` runs them through `sanitizeSchemaTypes` (from `aem-to-sanity-schema/sanitize`) at import time — it's a real consumer of the pipeline output, not a toy fixture. If you change the emitted schemas, `sanity schema validate` is the gate that catches breakage.

---

## 7. Troubleshooting

| Symptom | Cause / fix |
| --- | --- |
| `AEM_AUTHOR_URL is required when AEM_ENV=author` | Either set the matching URL/creds, switch `AEM_ENV` to `publish`, or use `AEM_TOKEN`. |
| `Missing credentials. Set AEM_TOKEN, or AEM_AUTHOR_USERNAME and AEM_AUTHOR_PASSWORD.` | No auth resolved for the active env. |
| `401` or `403` on fetches | Creds valid but account lacks read access to the JCR paths. Verify in AEM's CRXDE. |
| `aem-import` prints `DRY RUN` and nothing lands in Sanity | That's the default. Export `MIGRATION_DRY_RUN=false` (also set `SANITY_PROJECT_ID`, `SANITY_DATASET`, `SANITY_TOKEN`) and re-run. |
| `aem-import` → `Missing env var: SANITY_TOKEN` | You set `MIGRATION_DRY_RUN=false` but the write token isn't in the env. Source it into `examples/davids-bridal/.env`. |
| `aem-extract` fails with `HTTP 300` on a root | AEM returned an ambiguous-path response (the path may point at a folder). Check `output/extract-report.json` → `ambiguous[]` for the resolution suggestion. |
| `aem-transform` → `No raw files in output/raw` | Run `aem-extract` first. The transform stage only reads from disk — it never hits AEM. |
| Studio boots but shows no schemas | `output/schemas/index.ts` is missing or stale. Run `pnpm --filter example-davids-bridal migrate:schema`. |
| `sanity schema validate` → `Type has property "fields", but is not an object/document type` | The sanitizer is injecting placeholder fields into a non-object type. Confirm you're on the latest schema package (this is fixed). |
| `ERR_PACKAGE_PATH_NOT_EXPORTED` when running sanity CLI | Rebuild: `pnpm build`. The bundled CJS loader the Sanity CLI uses needs the `default` export condition that `dist/` ships. |
| Depth-5 follow-ups never fire on a deep page | Make sure you're calling `aem-extract`, not hitting `.infinity.json` manually. Raise `maxDepthExpansions` if you have pages > 6 follow-up rounds deep. |

---

## 8. What's **not** automated yet

- **`pathfield` → Sanity `reference`** — AEM path fields stay as strings. Resolving them to document references is still a follow-up.
- **Custom page document types** — the generator writes one generic `page` doc. Hand-author `landingPage` / `productPage` types in `output/schemas/` (or a separate authored directory you merge into `allSchemaTypes`); the generator won't touch files missing the `GENERATED` marker.
- **CI publish** — `changeset publish` is wired but not yet triggered from GitHub Actions.
