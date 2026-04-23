import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/dbi/components/content/faq-container
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const contentFaqContainer = defineType({
  name: "contentFaqContainer",
  title: "FAQ Container",
  type: "object",
  preview: {
    prepare() {
      return { title: "FAQ Container" };
    },
  },
  fields: [],
});
