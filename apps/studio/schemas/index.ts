/**
 * Re-exports from the generated schemas barrel that lives alongside this
 * Studio (`./generated/`). The `aem-to-sanity-schema` CLI writes there when
 * the example package sets `SCHEMAS_OUT_DIR` to
 * `../../apps/studio/schemas/generated`.
 *
 * Studio consumers should import `allSchemaTypes` from here (or inline their
 * own mapping when they want to filter / rename before handing it to
 * `defineConfig({ schema: { types } })`).
 */
export { allSchemaTypes } from "./generated/index.ts";
