import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/dbi/components/content/size-guide
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const contentSizeGuide = defineType({
  name: "contentSizeGuide",
  title: "Size Guide",
  type: "object",
  preview: {
    prepare() {
      return { title: "Size Guide" };
    },
  },
  fields: [
    defineField({
      name: "title",
      title: "Title",
      description: "Title",
      type: "string",
    }),
    defineField({
      name: "explainText",
      title: "Copy Text For Explanation",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "header",
      title: "Header",
      description: "Header",
      type: "string",
    }),
    defineField({
      name: "tab3",
      title: "RTE Text Copy",
      description:
        'TODO: no Sanity mapping for AEM resource type "granite/ui/components/foundation/section". Falling back to string.',
      type: "string",
    }),
    defineField({
      name: "secondHeader",
      title: "Second Header ",
      description: "Header for second column",
      type: "string",
    }),
    defineField({
      name: "rteTextCopy",
      title: "RTE Text Copy",
      description:
        'TODO: no Sanity mapping for AEM resource type "granite/ui/components/foundation/section". Falling back to string.',
      type: "string",
    }),
    defineField({
      name: "errorMsg",
      title: "Error Message",
      description: "Error Message",
      type: "string",
    }),
  ],
});
