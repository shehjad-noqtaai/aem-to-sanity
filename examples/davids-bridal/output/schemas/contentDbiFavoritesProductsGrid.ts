import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/dbi/components/content/dbi-favorites-products-grid
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const contentDbiFavoritesProductsGrid = defineType({
  name: "contentDbiFavoritesProductsGrid",
  title: "DBI Favorites Product Grid",
  type: "object",
  preview: {
    prepare() {
      return { title: "DBI Favorites Product Grid" };
    },
  },
  fields: [
    defineField({
      name: "dashboardLink",
      title: "Dashboard Page",
      description: "Please provide a path to dashboard page",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "myOrdersLink",
      title: "My Orders Page",
      description: "Please provide a path to my orders page",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "myReturnsLink",
      title: "My Returns Page",
      description: "Please provide a path to returns page",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "addressBookLink",
      title: "Address Book Page",
      description: "Please provide a path to address book page",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "accountInfoLink",
      title: "Account Info page",
      description: "Please provide a path to account info page",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "newsLetterLink",
      title: "Newletter Subscriptions Page",
      description: "Please provide a path to newsletter page",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
