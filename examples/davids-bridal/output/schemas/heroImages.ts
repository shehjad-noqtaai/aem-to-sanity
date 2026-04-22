import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/aem-integration/components/hero-images
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const heroImages = defineType({
  name: "heroImages",
  title: "Hero images",
  type: "object",
  groups: [
    { name: "mainImage", title: "Main image" },
    { name: "rightImages", title: "Right images" },
  ],
  preview: {
    select: {
      prMedia: "mainImages.0.fileReference",
    },
    prepare({ prMedia }) {
      return {
        title: "Hero images",
        media: prMedia,
      };
    },
  },
  fields: [
    defineField({
      name: "mainImages",
      title: "Main image options",
      type: "array",
      group: "mainImage",
      of: [
        {
          type: "object",
          title: "Main image options",
          fields: [
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
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "visible",
              title: "Devices",
              type: "string",
              options: {
                list: [
                  { title: "desktop", value: "desktop" },
                  { title: "tablet", value: "tablet" },
                  { title: "mobile", value: "mobile" },
                ],
              },
            }),
            defineField({
              name: "imageLink",
              title: "Image Link",
              type: "string",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "rightImages",
      title: "Right images",
      type: "array",
      group: "rightImages",
      of: [
        {
          type: "object",
          title: "Right images",
          fields: [
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
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "imageLink",
              title: "Image link",
              type: "string",
            }),
            defineField({ name: "text", title: "Button text", type: "string" }),
            defineField({ name: "link", title: "Button link", type: "string" }),
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
  ],
});
