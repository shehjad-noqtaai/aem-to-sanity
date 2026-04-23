import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/aem-integration/components/image
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const image = defineType({
  name: "image",
  title: "Image",
  type: "object",
  preview: {
    prepare() {
      return { title: "Image" };
    },
  },
  fields: [
    defineField({
      name: "metadata",
      title: "metadata",
      description:
        'TODO: no Sanity mapping for AEM resource type "unknown". Falling back to string.',
      type: "string",
    }),
  ],
});
