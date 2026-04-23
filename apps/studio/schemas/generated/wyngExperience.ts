import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/aem-integration/components/wyng-experience
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const wyngExperience = defineType({
  name: "wyngExperience",
  title: "Wyng experience",
  type: "object",
  groups: [{ name: "properties", title: "Properties" }],
  preview: {
    prepare() {
      return { title: "Wyng experience" };
    },
  },
  fields: [
    defineField({
      name: "htmlElement",
      title: "Wyng html element",
      type: "text",
      group: "properties",
    }),
    defineField({
      name: "scriptSrc",
      title: "Wyng JS script src",
      type: "string",
      group: "properties",
    }),
    defineField({ name: "id", title: "Component ID", type: "string" }),
  ],
});
