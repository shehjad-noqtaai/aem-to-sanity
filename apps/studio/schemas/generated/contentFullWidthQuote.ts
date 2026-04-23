import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/dbi/components/content/full-width-quote
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const contentFullWidthQuote = defineType({
  name: "contentFullWidthQuote",
  title: "Full Width Quote",
  type: "object",
  preview: {
    prepare() {
      return { title: "Full Width Quote" };
    },
  },
  fields: [
    defineField({ name: "scriptText", title: "Script Text", type: "string" }),
    defineField({
      name: "scriptAuthor",
      title: "Script Author",
      description: "Script Author",
      type: "string",
    }),
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
  ],
});
