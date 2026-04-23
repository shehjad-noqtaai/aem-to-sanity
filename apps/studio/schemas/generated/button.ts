import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/aem-integration/components/button
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const button = defineType({
  name: "button",
  title: "Button",
  type: "object",
  preview: {
    prepare() {
      return { title: "Button" };
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
