import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/aem-integration/components/variable-column
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const variableColumn = defineType({
  name: "variableColumn",
  title: "Variable column",
  type: "object",
  groups: [
    { name: "layout", title: "Layout" },
    { name: "columnContent", title: "Column content" },
    { name: "sectionCta", title: "Section CTA" },
  ],
  preview: {
    select: {
      prMedia: "columnContents.0.fileReference",
    },
    prepare({ prMedia }) {
      return {
        title: "Variable column",
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
      name: "columns",
      title: "Number of columns",
      type: "string",
      group: "layout",
      options: {
        list: [
          { title: "2", value: "2" },
          { title: "3", value: "3" },
          { title: "4", value: "4" },
          { title: "5", value: "5" },
        ],
      },
    }),
    defineField({
      name: "theme",
      title: "Theme",
      type: "string",
      group: "layout",
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
      name: "textAlign",
      title: "Text alignment",
      type: "string",
      group: "layout",
    }),
    defineField({
      name: "mobileLayout",
      title: "Mobile layout",
      type: "string",
      group: "layout",
      options: {
        list: [
          { title: "carousel", value: "carousel" },
          { title: "scroll", value: "scroll" },
          { title: "stack", value: "stack" },
          { title: "grid", value: "grid" },
          { title: "grid-2-line", value: "grid-2-line" },
        ],
      },
    }),
    defineField({
      name: "aspectRatio",
      title: "Aspect ratio",
      type: "string",
      group: "layout",
      options: {
        list: [
          { title: "3:2", value: "3:2" },
          { title: "1:1", value: "1:1" },
        ],
      },
    }),
    defineField({
      name: "gridType",
      title: "Card size",
      type: "string",
      group: "layout",
      options: {
        list: [
          { title: "Normal", value: "inset" },
          { title: "Large", value: "full" },
        ],
      },
    }),
    defineField({
      name: "cardType",
      title: "Card type",
      type: "string",
      group: "columnContent",
      options: {
        list: [
          { title: "Below Image Text (Default)", value: "type_belowImage" },
          { title: "On Hover", value: "type_OnHover" },
        ],
      },
    }),
    defineField({
      name: "columnContents",
      title: "Column content",
      type: "array",
      group: "columnContent",
      of: [
        {
          type: "object",
          title: "Column content",
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
            defineField({
              name: "headline",
              title: "Headline",
              type: "string",
            }),
            defineField({
              name: "columnText",
              title: "Body text",
              type: "array",
              of: [{ type: "block" }],
            }),
            defineField({
              name: "cta",
              title: "Column CTAs",
              type: "array",
              of: [
                {
                  type: "object",
                  title: "Column CTAs",
                  fields: [
                    defineField({
                      name: "type",
                      title: "CTA type",
                      type: "string",
                      options: {
                        list: [
                          { title: "Button", value: "button" },
                          { title: "Link", value: "link" },
                        ],
                      },
                    }),
                    defineField({
                      name: "text",
                      title: "CTA text",
                      type: "string",
                    }),
                    defineField({
                      name: "ariaLabel",
                      title: "Aria label",
                      type: "string",
                    }),
                    defineField({
                      name: "link",
                      title: "CTA link",
                      type: "string",
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
      name: "cardtextColor",
      title: "Text color",
      type: "string",
      group: "columnContent",
    }),
    defineField({
      name: "cardtextBackgroundColor",
      title: "Text Background color",
      type: "string",
      group: "columnContent",
    }),
    defineField({
      name: "buttons",
      title: "Section CTA Options",
      type: "array",
      group: "sectionCta",
      of: [
        {
          type: "object",
          title: "Section CTA Options",
          fields: [
            defineField({
              name: "type",
              title: "CTA type",
              type: "string",
              options: {
                list: [
                  { title: "Button", value: "button" },
                  { title: "Link", value: "link" },
                ],
                layout: "radio",
              },
            }),
            defineField({ name: "text", title: "CTA text", type: "string" }),
            defineField({ name: "link", title: "CTA link", type: "string" }),
            defineField({
              name: "ariaLabel",
              title: "Aria label",
              type: "string",
            }),
          ],
        },
      ],
    }),
    defineField({ name: "id", title: "Component ID", type: "string" }),
  ],
});
