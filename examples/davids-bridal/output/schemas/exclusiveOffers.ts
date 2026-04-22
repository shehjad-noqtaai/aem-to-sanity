import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/aem-integration/components/exclusive-offers
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const exclusiveOffers = defineType({
  name: "exclusiveOffers",
  title: "Exclusive Offers",
  type: "object",
  groups: [
    { name: "offers", title: "Offers" },
    { name: "properties", title: "Properties" },
  ],
  preview: {
    select: {
      prMedia: "fileReference",
    },
    prepare({ prMedia }) {
      return {
        title: "Exclusive Offers",
        media: prMedia,
      };
    },
  },
  fields: [
    defineField({
      name: "tagLevel",
      title: "Headlines tag level",
      type: "string",
      group: "offers",
      options: {
        list: [
          { title: "h1", value: "h1" },
          { title: "h2", value: "h2" },
          { title: "h3", value: "h3" },
          { title: "h4", value: "h4" },
          { title: "h5", value: "h5" },
          { title: "h6", value: "h6" },
        ],
      },
    }),
    defineField({
      name: "headline",
      title: "HeadLine",
      type: "string",
      group: "offers",
    }),
    defineField({
      name: "headlineFontFamily",
      title: "Font family (Headline)",
      type: "string",
      group: "offers",
    }),
    defineField({
      name: "headlineColorHex",
      title: "HeadLine Text Color",
      type: "string",
      group: "offers",
    }),
    defineField({
      name: "text",
      title: "Text",
      type: "text",
      group: "offers",
      rows: 20,
    }),
    defineField({
      name: "textFontFamily",
      title: "Font family (Text)",
      type: "string",
      group: "offers",
    }),
    defineField({
      name: "textColorHex",
      title: "Text color",
      type: "string",
      group: "offers",
    }),
    defineField({
      name: "fileReferenceAemPath",
      title: "Image (AEM DAM path)",
      description:
        "Original AEM path from migration (read-only). Use the Sanity asset field below for previews and delivery.",
      type: "string",
      group: "offers",
      readOnly: true,
    }),
    defineField({
      name: "fileReference",
      title: "Image",
      type: "image",
      group: "offers",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "ctaText",
      title: "Button text",
      type: "string",
      group: "offers",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "link",
      title: "Button link",
      type: "string",
      group: "offers",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "type",
      title: "Button type",
      type: "string",
      group: "offers",
      options: {
        list: [
          { title: "Ghost", value: "ghost" },
          { title: "Filled", value: "filled" },
          { title: "link", value: "link" },
        ],
      },
    }),
    defineField({
      name: "buttonHexColor",
      title: "Button color",
      type: "string",
      group: "offers",
    }),
    defineField({
      name: "ctaTextHexColor",
      title: "CTA Text Color",
      type: "string",
      group: "offers",
    }),
    defineField({
      name: "categoryTag",
      title: "Category Id",
      description: "Please, insert Category <div> tag from Curalate",
      type: "string",
      group: "properties",
    }),
  ],
});
