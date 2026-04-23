import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/dbi/components/content/dbi-heading-module
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const contentDbiHeadingModule = defineType({
  name: "contentDbiHeadingModule",
  title: "DBI Heading Module",
  type: "object",
  preview: {
    prepare() {
      return { title: "DBI Heading Module" };
    },
  },
  fields: [
    defineField({
      name: "title",
      title: "Title",
      description: "Section Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "scriptTitle",
      title: "Script Title",
      description: "Script Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
