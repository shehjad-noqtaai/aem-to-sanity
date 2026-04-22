import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/aem-integration/components/color-carousel
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const colorCarousel = defineType({
  name: "colorCarousel",
  title: "Color carousel",
  type: "object",
  groups: [
    { name: "properties", title: "Properties" },
    { name: "colors", title: "Colors" },
  ],
  preview: {
    select: {
      prMedia: "colors.0.fileReference",
    },
    prepare({ prMedia }) {
      return {
        title: "Color carousel",
        media: prMedia,
      };
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
    defineField({
      name: "theme",
      title: "Theme",
      type: "string",
      group: "properties",
      options: {
        list: [
          { title: "White", value: "white" },
          { title: "Seashell", value: "seashell" },
          { title: "Seashell-alt", value: "seashell-alt" },
          { title: "Mocassin", value: "mocassin" },
          { title: "Mocassin-alt", value: "mocassin-alt" },
          { title: "Claret", value: "claret" },
          { title: "Claret-alt", value: "claret-alt" },
          { title: "Black", value: "black" },
          { title: "Black-alt", value: "black-alt" },
        ],
      },
    }),
    defineField({
      name: "colors",
      title: "Add colors",
      type: "array",
      group: "colors",
      of: [
        {
          type: "object",
          title: "Add colors",
          fields: [
            defineField({
              name: "name",
              title: "Color name",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "string",
            }),
            defineField({
              name: "hexValue",
              title: "HEX VALUE",
              type: "string",
            }),
            defineField({
              name: "fileReferenceAemPath",
              title: "Image (AEM DAM path)",
              description:
                "Original AEM path from migration (read-only). Use the Sanity asset field below for previews and delivery.",
              type: "string",
              readOnly: true,
            }),
            defineField({
              name: "fileReference",
              title: "Image",
              type: "image",
            }),
            defineField({ name: "link", title: "Color link", type: "string" }),
          ],
        },
      ],
    }),
    defineField({
      name: "buttons",
      title: "Buttons",
      type: "array",
      of: [
        {
          type: "object",
          title: "Buttons",
          fields: [
            defineField({
              name: "text",
              title: "Button text",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "link",
              title: "Button link",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "buttonHexColor",
              title: "Button color",
              type: "string",
            }),
            defineField({
              name: "type",
              title: "Button type",
              type: "string",
              options: {
                list: [
                  { title: "Ghost", value: "ghost" },
                  { title: "Filled", value: "filled" },
                  { title: "link", value: "link" },
                ],
              },
            }),
            defineField({
              name: "ctaTextHexColor",
              title: "CTA Text Color",
              type: "string",
            }),
          ],
        },
      ],
    }),
    defineField({ name: "id", title: "Component ID", type: "string" }),
  ],
});
