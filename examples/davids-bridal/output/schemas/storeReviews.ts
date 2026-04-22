import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/aem-integration/components/store/reviews
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const storeReviews = defineType({
  name: "storeReviews",
  title: "Reviews",
  type: "object",
  preview: {
    prepare() {
      return { title: "Reviews" };
    },
  },
  fields: [
    defineField({
      name: "headline1",
      title: "Headline 1 (script)",
      type: "string",
    }),
    defineField({
      name: "headline2",
      title: "Headline 2 (sans serif)",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "removeTopPadding",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "removeBottomPadding",
      type: "boolean",
      initialValue: true,
    }),
  ],
});
