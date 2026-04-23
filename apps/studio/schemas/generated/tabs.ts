import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/aem-integration/components/tabs
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const tabs = defineType({
  name: "tabs",
  title: "Tabs",
  type: "object",
  groups: [
    { name: "tabIcons", title: "Tab Icons" },
    { name: "properties", title: "Properties" },
  ],
  preview: {
    select: {
      prMedia: "tabImages.0.fileReference",
    },
    prepare({ prMedia }) {
      return {
        title: "Tabs",
        media: prMedia,
      };
    },
  },
  fields: [
    defineField({
      name: "tabImages",
      title: "Tab images",
      type: "array",
      group: "tabIcons",
      of: [
        {
          type: "object",
          title: "Tab images",
          fields: [
            defineField({
              name: "fileReferenceAemPath",
              title: "Tab Image (AEM DAM path)",
              description:
                "Original AEM path from migration (read-only). Use the Sanity asset field below for previews and delivery.",
              type: "string",
              readOnly: true,
            }),
            defineField({
              name: "fileReference",
              title: "Tab Image",
              type: "image",
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),
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
