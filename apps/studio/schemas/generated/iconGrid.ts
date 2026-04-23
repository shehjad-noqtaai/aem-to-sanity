import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/aem-integration/components/icon-grid
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const iconGrid = defineType({
  name: "iconGrid",
  title: "Icon grid",
  type: "object",
  preview: {
    prepare() {
      return { title: "Icon grid" };
    },
  },
  fields: [
    defineField({
      name: "content",
      title: "content",
      description:
        'TODO: no Sanity mapping for AEM resource type "unknown". Falling back to string.',
      type: "string",
    }),
  ],
});
