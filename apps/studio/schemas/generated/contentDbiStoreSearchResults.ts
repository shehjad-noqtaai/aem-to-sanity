import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/dbi/components/content/dbi-store-search-results
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const contentDbiStoreSearchResults = defineType({
  name: "contentDbiStoreSearchResults",
  title: "Store Search",
  type: "object",
  preview: {
    prepare() {
      return { title: "Store Search" };
    },
  },
  fields: [
    defineField({
      name: "heading",
      title: "Title Header",
      description: "Store Locator Header",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "seoText",
      title: "Store Locator Seo Text",
      description: "Store Locator Seo Text",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subHeading",
      title: "Sub heading",
      description: "Store Locator Header sub heading",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "googleMapsKey",
      title: "google maps key",
      description: "Google Maps Key",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "storeListUrl",
      title: "Store List Page",
      description: "Please provide path to the Store Lost Page",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "appointmentsUrl",
      title: "Appointments Page",
      description: "Please provide path to Appointments Page",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "storeDetailsUrl",
      title: "Store Details Page",
      description: "Please provide path to the Store Details Page",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
