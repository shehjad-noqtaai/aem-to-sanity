import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/aem-integration/components/hero-slide
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const heroSlide = defineType({
  name: "heroSlide",
  title: "Hero slide",
  type: "object",
  groups: [
    { name: "template", title: "Template" },
    { name: "background", title: "Background" },
    { name: "buttons", title: "Buttons" },
  ],
  preview: {
    select: {
      prMedia: "textAsImages.0.fileReference",
    },
    prepare({ prMedia }) {
      return {
        title: "Hero slide",
        media: prMedia,
      };
    },
  },
  fields: [
    defineField({
      name: "type",
      title: "Template type",
      type: "string",
      group: "template",
      options: {
        list: [
          { title: "Template A", value: "type_a" },
          { title: "Template B", value: "type_b" },
          { title: "Template C", value: "type_c" },
          { title: "Template D", value: "type_d" },
        ],
      },
    }),
    defineField({
      name: "image",
      title: "image",
      description:
        'TODO: no Sanity mapping for AEM resource type "aem-integration/components/dialog/dialogimage". Falling back to string.',
      type: "string",
      group: "template",
    }),
    defineField({
      name: "image2",
      title: "image",
      description:
        'TODO: no Sanity mapping for AEM resource type "aem-integration/components/dialog/dialogimage". Falling back to string.',
      type: "string",
      group: "template",
    }),
    defineField({
      name: "image3",
      title: "image",
      description:
        'TODO: no Sanity mapping for AEM resource type "aem-integration/components/dialog/dialogimage". Falling back to string.',
      type: "string",
      group: "template",
    }),
    defineField({
      name: "image4",
      title: "image",
      description:
        'TODO: no Sanity mapping for AEM resource type "aem-integration/components/dialog/dialogimage". Falling back to string.',
      type: "string",
      group: "template",
    }),
    defineField({
      name: "contentPosition",
      title: "Content position",
      type: "string",
      group: "template",
      options: {
        list: [
          { title: "left", value: "left" },
          { title: "center", value: "center" },
          { title: "right", value: "right" },
        ],
      },
    }),
    defineField({
      name: "textBackgroundColor",
      title: "Text Background color",
      type: "string",
      group: "template",
      options: {
        list: [
          { title: "Transparent", value: "transparent" },
          { title: "Claret", value: "wine" },
          { title: "DBI Black", value: "gray800" },
          { title: "Mocassin", value: "secondary" },
          { title: "Petal", value: "petal" },
          { title: "Seashell", value: "secondaryLight" },
          { title: "White", value: "white" },
          { title: "Plum", value: "plum" },
        ],
      },
    }),
    defineField({
      name: "buttonsBlockHeight",
      title: "Height of buttons block for mobile",
      type: "number",
      group: "template",
    }),
    defineField({
      name: "textType",
      title: "Text type",
      type: "string",
      group: "template",
      options: {
        list: [
          { title: "Live text", value: "type_text" },
          { title: "Image as text", value: "type_image" },
        ],
      },
    }),
    defineField({
      name: "textAsImages",
      title: "Image options",
      type: "array",
      group: "template",
      of: [
        {
          type: "object",
          title: "Image options",
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
          ],
        },
      ],
    }),
    defineField({
      name: "lineOneText",
      title: "Line 1",
      type: "string",
      group: "template",
    }),
    defineField({
      name: "lineTwoText",
      title: "Line 2",
      type: "string",
      group: "template",
    }),
    defineField({
      name: "lineThreeText",
      title: "Line 3",
      type: "string",
      group: "template",
    }),
    defineField({
      name: "lineFourText",
      title: "Line 4",
      type: "string",
      group: "template",
    }),
    defineField({
      name: "lineFiveText",
      title: "Line 5",
      type: "string",
      group: "template",
    }),
    defineField({
      name: "textAlign",
      title: "Text alignment",
      type: "string",
      group: "template",
    }),
    defineField({
      name: "textColor",
      title: "Text color",
      type: "string",
      group: "template",
    }),
    defineField({
      name: "bgImages",
      title: "Background images",
      type: "array",
      group: "background",
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
      group: "buttons",
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
    defineField({
      name: "buttonHeightMobile",
      title: "Button Blocks Height Mobile",
      type: "number",
      group: "buttons",
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: "buttonHeightDesktop",
      title: "Button Blocks Height Desktop",
      type: "number",
      group: "buttons",
      validation: (Rule) => Rule.min(0),
    }),
  ],
});
