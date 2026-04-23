import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/aem-integration/components/store/details
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const storeDetails = defineType({
  name: "storeDetails",
  title: "Store details",
  type: "object",
  groups: [{ name: "properties", title: "Properties" }],
  preview: {
    prepare() {
      return { title: "Store details" };
    },
  },
  fields: [
    defineField({
      name: "bookAppointmentsButtonText",
      title: "Book Appointments Button Text",
      type: "string",
      group: "properties",
    }),
    defineField({
      name: "bookAppointmentsButtonLink",
      title: "Book Appointments Button Link",
      type: "string",
      group: "properties",
    }),
    defineField({ name: "id", title: "Component ID", type: "string" }),
  ],
});
