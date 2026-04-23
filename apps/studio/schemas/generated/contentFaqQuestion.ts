import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/dbi/components/content/faq-question
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const contentFaqQuestion = defineType({
  name: "contentFaqQuestion",
  title: "FAQ Question",
  type: "object",
  preview: {
    prepare() {
      return { title: "FAQ Question" };
    },
  },
  fields: [
    defineField({
      name: "title",
      title: "Title",
      description: "Title",
      type: "string",
    }),
  ],
});
