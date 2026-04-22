import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/dbi/components/content/full-width-messaging
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const contentFullWidthMessaging = defineType({
  name: "contentFullWidthMessaging",
  title: "store's error page (404)",
  type: "object",
  groups: [
    { name: "image", title: "Image" },
    { name: "properties", title: "Properties" },
  ],
  preview: {
    select: {
      prMedia: "desktopImage",
    },
    prepare({ prMedia }) {
      return {
        title: "store's error page (404)",
        media: prMedia,
      };
    },
  },
  fields: [
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
      name: "title",
      title: "Title",
      type: "string",
      group: "properties",
    }),
    defineField({
      name: "backdropSelection",
      title: "Backdrop",
      type: "string",
      group: "properties",
      options: {
        list: [
          { title: "Full Backdrop", value: "component-backdrop--full" },
          { title: "Half Backdrop", value: "component-backdrop--half" },
          { title: "Offset Backdrop", value: "component-backdrop--offset" },
          { title: "Overlap Backdrop", value: "component-backdrop--overlap" },
        ],
      },
    }),
    defineField({
      name: "copyText",
      title: "Copy Text",
      type: "string",
      group: "properties",
    }),
    defineField({
      name: "ctaText",
      title: "CTA Text",
      description: "CTA Text",
      type: "string",
      group: "properties",
    }),
    defineField({
      name: "ctaCategoryPath",
      title: "PLP Path",
      description:
        'TODO: no Sanity mapping for AEM resource type "/libs/commerce/gui/components/common/cifcategoryfield". Falling back to string.',
      type: "string",
      group: "properties",
    }),
    defineField({
      name: "ctaProductPath",
      title: "Product Path",
      description:
        'TODO: no Sanity mapping for AEM resource type "/libs/commerce/gui/components/common/cifproductfield". Falling back to string.',
      type: "string",
      group: "properties",
    }),
    defineField({
      name: "ctaLink",
      title: "CTA Link",
      description: "CTA Link",
      type: "string",
      group: "properties",
    }),
  ],
});
