import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/aem-integration/components/row
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const row = defineType({
  name: "row",
  title: "Row",
  type: "object",
  groups: [{ name: "general", title: "General" }],
  preview: {
    prepare() {
      return { title: "Row" };
    },
  },
  fields: [
    defineField({
      name: "alignItems",
      title: "Grid align items type",
      type: "string",
      group: "general",
    }),
    defineField({
      name: "justifyContent",
      title: "Grid justify content type",
      type: "string",
      group: "general",
    }),
  ],
});
