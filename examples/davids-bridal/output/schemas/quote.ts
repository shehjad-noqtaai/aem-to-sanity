import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/aem-integration/components/quote
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const quote = defineType({
  name: "quote",
  title: "Quote",
  type: "object",
  groups: [{ name: "properties", title: "Properties" }],
  preview: {
    select: {
      prMedia: "fileReference",
    },
    prepare({ prMedia }) {
      return {
        title: "Quote",
        media: prMedia,
      };
    },
  },
  fields: [
    defineField({
      name: "quote",
      title: "Quote",
      type: "array",
      group: "properties",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "personName",
      title: "Person name",
      type: "string",
      group: "properties",
    }),
    defineField({
      name: "align",
      title: "Copy position",
      type: "string",
      group: "properties",
      options: {
        list: [
          { title: "left", value: "left" },
          { title: "right", value: "right" },
          { title: "center", value: "center" },
        ],
      },
    }),
    defineField({
      name: "size",
      title: "Size",
      type: "string",
      group: "properties",
      options: {
        list: [
          { title: "large", value: "large" },
          { title: "small", value: "small" },
        ],
      },
    }),
    defineField({
      name: "backgroundColor",
      title: "Background color",
      type: "string",
      group: "properties",
    }),
    defineField({
      name: "fileReferenceAemPath",
      title: "Background image (AEM DAM path)",
      description:
        "Original AEM path from migration (read-only). Use the Sanity asset field below for previews and delivery.",
      type: "string",
      group: "properties",
      readOnly: true,
    }),
    defineField({
      name: "fileReference",
      title: "Background image",
      type: "image",
      group: "properties",
    }),
    defineField({
      name: "theme",
      title: "Theme",
      type: "string",
      group: "properties",
      options: {
        list: [
          { title: "Image dark", value: "image-dark" },
          { title: "Image light", value: "image-light" },
          { title: "White", value: "white" },
          { title: "Seashell", value: "seashell" },
          { title: "Mocassin", value: "mocassin" },
          { title: "Claret", value: "claret" },
          { title: "Black", value: "black" },
          { title: "Gem", value: "gem" },
        ],
      },
    }),
    defineField({
      name: "quotationMarksEnabled",
      type: "boolean",
      group: "properties",
      initialValue: true,
    }),
    defineField({ name: "id", title: "Component ID", type: "string" }),
  ],
});
