import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/aem-integration/components/hr
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const hr = defineType({
  name: "hr",
  title: "Hr",
  type: "object",
  groups: [{ name: "general", title: "General" }],
  preview: {
    prepare() {
      return { title: "Hr" };
    },
  },
  fields: [
    defineField({
      name: "color",
      title: "Color",
      type: "string",
      group: "general",
    }),
    defineField({ name: "mt", title: "mt", type: "number" }),
    defineField({ name: "mr", title: "mr", type: "number" }),
    defineField({ name: "mb", title: "mb", type: "number" }),
    defineField({ name: "ml", title: "ml", type: "number" }),
    defineField({ name: "pt", title: "pt", type: "number" }),
    defineField({ name: "pr", title: "pr", type: "number" }),
    defineField({ name: "pb", title: "pb", type: "number" }),
    defineField({ name: "pl", title: "pl", type: "number" }),
  ],
});
