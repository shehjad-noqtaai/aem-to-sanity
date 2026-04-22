import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/aem-integration/components/store/banner
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const storeBanner = defineType({
  name: "storeBanner",
  title: "Store banner",
  type: "object",
  groups: [
    { name: "section", title: "Section" },
    { name: "properties", title: "Properties" },
  ],
  preview: {
    select: {
      prMedia: "iconFileReference",
    },
    prepare({ prMedia }) {
      return {
        title: "Store banner",
        media: prMedia,
      };
    },
  },
  fields: [
    defineField({
      name: "headline1",
      title: "Headline 1 (script)",
      type: "string",
      group: "section",
    }),
    defineField({
      name: "headline2",
      title: "Headline 2 (sans serif)",
      type: "string",
      group: "section",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      group: "section",
      of: [{ type: "block" }],
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
      name: "backgroundColorHex",
      title: "Background color(hex)",
      type: "string",
      group: "properties",
    }),
    defineField({
      name: "iconFileReferenceAemPath",
      title: "Icon (AEM DAM path)",
      description:
        "Original AEM path from migration (read-only). Use the Sanity asset field below for previews and delivery.",
      type: "string",
      group: "properties",
      readOnly: true,
    }),
    defineField({
      name: "iconFileReference",
      title: "Icon",
      type: "file",
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
      name: "bgImages",
      title: "Background images",
      type: "array",
      of: [
        {
          type: "object",
          title: "Background images",
          fields: [
            defineField({
              name: "fileReferenceAemPath",
              title: "Background Image (AEM DAM path)",
              description:
                "Original AEM path from migration (read-only). Use the Sanity asset field below for previews and delivery.",
              type: "string",
              readOnly: true,
            }),
            defineField({
              name: "fileReference",
              title: "Background Image",
              type: "image",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "visible",
              title: "Devices",
              type: "string",
              options: {
                list: [
                  { title: "desktop", value: "desktop" },
                  { title: "XL", value: "xl" },
                  { title: "tablet", value: "tablet" },
                  { title: "mobile", value: "mobile" },
                ],
              },
            }),
            defineField({
              name: "alignment",
              title: "Image alignment",
              type: "string",
              options: {
                list: [
                  { title: "Top left", value: "top-left" },
                  { title: "Top center", value: "top-center" },
                  { title: "Top right", value: "top-right" },
                  { title: "Middle left", value: "middle-left" },
                  { title: "Middle center", value: "middle-center" },
                  { title: "Middle right", value: "middle-right" },
                  { title: "Bottom left", value: "bottom-left" },
                  { title: "Bottom center", value: "bottom-center" },
                  { title: "Bottom right", value: "bottom-right" },
                ],
              },
            }),
            defineField({
              name: "imageLink",
              title: "Image Link",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
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
