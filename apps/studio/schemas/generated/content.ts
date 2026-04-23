import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/aem-integration/components/content
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const content = defineType({
  name: "content",
  title: "Text Content",
  type: "object",
  preview: {
    prepare() {
      return { title: "Text Content" };
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
