import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/dbi/components/content/dbi-stores-list
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const contentDbiStoresList = defineType({
  name: "contentDbiStoresList",
  title: "Stores List",
  type: "object",
  preview: {
    prepare() {
      return { title: "Stores List" };
    },
  },
  fields: [
    defineField({
      name: "storeDetailsUrl",
      title: "Store Details Page",
      description: "Please provide path to the Store Details Page",
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
  ],
});
