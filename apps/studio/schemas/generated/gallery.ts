import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/aem-integration/components/gallery
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const gallery = defineType({
  name: "gallery",
  title: "Gallery",
  type: "object",
  groups: [{ name: "properties", title: "Properties" }],
  preview: {
    prepare() {
      return { title: "Gallery" };
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
      name: "galleryTag",
      title: "Gallery tag",
      description: "Please, insert gallery <div> tag from Curalate",
      type: "string",
      group: "properties",
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
          { title: "Seashell-cropped", value: "seashell-cropped" },
          { title: "Mocassin", value: "mocassin" },
          { title: "Mocassin-cropped", value: "mocassin-cropped" },
          { title: "Claret", value: "claret" },
          { title: "Claret-cropped", value: "claret-cropped" },
          { title: "Black", value: "black" },
          { title: "Black-cropped", value: "black-cropped" },
        ],
      },
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
