import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/dbi/components/content/rich-text-with-header
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const contentRichTextWithHeader = defineType({
  name: "contentRichTextWithHeader",
  title: "Rich Text Editor with Header",
  type: "object",
  preview: {
    prepare() {
      return { title: "Rich Text Editor with Header" };
    },
  },
  fields: [
    defineField({
      name: "backdropSelection",
      title: "Backdrop",
      type: "string",
      options: {
        list: [
          { title: "Full Backdrop", value: "component-backdrop--full" },
          { title: "Half Backdrop", value: "component-backdrop--half" },
          { title: "Offset Backdrop", value: "component-backdrop--offset" },
          { title: "Overlap Backdrop", value: "component-backdrop--overlap" },
        ],
      },
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
  ],
});
