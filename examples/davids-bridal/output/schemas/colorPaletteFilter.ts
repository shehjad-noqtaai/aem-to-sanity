import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/aem-integration/components/color-palette-filter
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const colorPaletteFilter = defineType({
  name: "colorPaletteFilter",
  title: "Color palette filter",
  type: "object",
  groups: [{ name: "properties", title: "Properties" }],
  preview: {
    prepare() {
      return { title: "Color palette filter" };
    },
  },
  fields: [
    defineField({
      name: "selectEmptyText",
      title: "Select empty text",
      type: "string",
      group: "properties",
    }),
    defineField({
      name: "resetButtonText",
      title: "Reset button text",
      type: "string",
      group: "properties",
    }),
  ],
});
