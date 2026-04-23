import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/dbi/components/content/image
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const contentImage = defineType({
  name: "contentImage",
  title: "Image",
  type: "object",
  groups: [
    { name: "image", title: "Image" },
    { name: "variations", title: "Variations" },
  ],
  preview: {
    select: {
      prMedia: "desktopImage",
    },
    prepare({ prMedia }) {
      return {
        title: "Image",
        media: prMedia,
      };
    },
  },
  fields: [
    defineField({
      name: "asset",
      title: "asset",
      description:
        'TODO: no Sanity mapping for AEM resource type "unknown". Falling back to string.',
      type: "string",
    }),
    defineField({
      name: "metadata",
      title: "metadata",
      description:
        'TODO: no Sanity mapping for AEM resource type "unknown". Falling back to string.',
      type: "string",
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
      name: "classVariation",
      title: "Class Variation",
      type: "string",
      group: "variations",
      options: {
        list: [
          { title: "Full Width", value: "media-ratio--full-width-image" },
          { title: "Half Height", value: "media-ratio--half-height-image" },
          { title: "Half Width", value: "media-ratio--half-width-image" },
        ],
      },
    }),
    defineField({
      name: "imageAlignment",
      title: "Image Alignment",
      type: "string",
      group: "variations",
      options: {
        list: [
          { title: "Left", value: "start" },
          { title: "Center", value: "center" },
          { title: "Right", value: "end" },
        ],
      },
    }),
  ],
});
