import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/dbi/components/content/bv-curation-grid
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const contentBvCurationGrid = defineType({
  name: "contentBvCurationGrid",
  title: "BV Curation Grid",
  type: "object",
  preview: {
    prepare() {
      return { title: "BV Curation Grid" };
    },
  },
  fields: [
    defineField({
      name: "heading",
      title: "BV Curation Grid Title",
      description: "BV Curation Grid Title",
      type: "string",
    }),
    defineField({
      name: "tag",
      title: "BV Curation Grid Tag Name",
      description: "BV Curation Grid Tag Name",
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
