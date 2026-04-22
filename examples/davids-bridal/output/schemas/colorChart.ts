import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/aem-integration/components/color-chart
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const colorChart = defineType({
  name: "colorChart",
  title: "Color chart",
  type: "object",
  groups: [{ name: "colors", title: "Colors" }],
  preview: {
    select: {
      prSubtitle: "caption",
      prMedia: "colors.0.fileReference",
    },
    prepare({ prSubtitle, prMedia }) {
      return {
        title: "Color chart",
        subtitle:
          typeof prSubtitle === "string" && prSubtitle.trim()
            ? prSubtitle.trim()
            : undefined,
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
      name: "colorPaletteId",
      title: "Color palette ID",
      type: "string",
      group: "colors",
    }),
    defineField({
      name: "caption",
      title: "Caption",
      type: "string",
      group: "colors",
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
            defineField({
              name: "popupButtons",
              title: "Popup buttons",
              type: "array",
              of: [
                {
                  type: "object",
                  title: "Popup buttons",
                  fields: [
                    defineField({
                      name: "text",
                      title: "Button text",
                      type: "string",
                      validation: (Rule) => Rule.required(),
                    }),
                    defineField({
                      name: "link",
                      title: "Button location",
                      type: "string",
                      validation: (Rule) => Rule.required(),
                    }),
                    defineField({
                      name: "buttonColor",
                      title: "Button color",
                      type: "string",
                      options: {
                        list: [
                          { title: "Claret", value: "claret" },
                          { title: "Spanish Crimson", value: "primary" },
                          { title: "Black", value: "black" },
                          { title: "White", value: "white" },
                          { title: "Seashell", value: "seashell" },
                          { title: "Mocassin", value: "mocassin" },
                          { title: "Black ghost", value: "black-ghost" },
                          { title: "White ghost", value: "white-ghost" },
                        ],
                      },
                    }),
                  ],
                },
              ],
            }),
            defineField({
              name: "popupLinks",
              title: "Popup links",
              type: "array",
              of: [
                {
                  type: "object",
                  title: "Popup links",
                  fields: [
                    defineField({
                      name: "text",
                      title: "Link text",
                      type: "string",
                      validation: (Rule) => Rule.required(),
                    }),
                    defineField({
                      name: "link",
                      title: "Link location",
                      type: "string",
                      validation: (Rule) => Rule.required(),
                    }),
                  ],
                },
              ],
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
