import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/dbi/components/content/captioned-image
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const contentCaptionedImage = defineType({
  name: "contentCaptionedImage",
  title: "Captioned Image",
  type: "object",
  groups: [
    { name: "textProperties", title: "Text Properties" },
    { name: "imageProperties", title: "Image Properties" },
    { name: "image", title: "Image" },
  ],
  preview: {
    select: {
      prMedia: "desktopImage",
    },
    prepare({ prMedia }) {
      return {
        title: "Captioned Image",
        media: prMedia,
      };
    },
  },
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      group: "textProperties",
    }),
    defineField({
      name: "descriptionText",
      type: "array",
      group: "textProperties",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "copyBackground",
      title: "Backdrop Color?",
      description: "Is the backdrop active?",
      type: "boolean",
      group: "textProperties",
      initialValue: true,
    }),
    defineField({
      name: "ctaText",
      title: "Cta Text",
      type: "string",
      group: "textProperties",
    }),
    defineField({
      name: "categoryPath",
      title: "PLP Path",
      description:
        'TODO: no Sanity mapping for AEM resource type "/libs/commerce/gui/components/common/cifcategoryfield". Falling back to string.',
      type: "string",
      group: "textProperties",
    }),
    defineField({
      name: "productPath",
      title: "Product Path",
      description:
        'TODO: no Sanity mapping for AEM resource type "/libs/commerce/gui/components/common/cifproductfield". Falling back to string.',
      type: "string",
      group: "textProperties",
    }),
    defineField({
      name: "ctaLink",
      title: "Cta Link ",
      type: "string",
      group: "textProperties",
    }),
    defineField({
      name: "desktopImage",
      title: "Desktop Image",
      description: "Give Desktop Image",
      type: "image",
      group: "image",
    }),
    defineField({
      name: "mobileImage",
      title: "Mobile Image",
      description: "Give Mobile Image",
      type: "image",
      group: "image",
    }),
    defineField({
      name: "altText",
      title: "Alt Text",
      type: "string",
      group: "image",
    }),
    defineField({
      name: "titleTag",
      title: "Title Tag",
      description: "Tag to display when hover over the link",
      type: "string",
      group: "image",
    }),
    defineField({
      name: "imageAlignmentControl",
      title: "Image Alignment Control",
      type: "string",
      group: "imageProperties",
      options: {
        list: [
          { title: "Left", value: "left" },
          { title: "Right", value: "right" },
        ],
      },
    }),
  ],
});
