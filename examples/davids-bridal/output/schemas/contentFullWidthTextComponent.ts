import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/dbi/components/content/full-width-text-component
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const contentFullWidthTextComponent = defineType({
  name: "contentFullWidthTextComponent",
  title: "Full Width Text",
  type: "object",
  preview: {
    select: {
      prMedia: "desktopImage",
    },
    prepare({ prMedia }) {
      return {
        title: "Full Width Text",
        media: prMedia,
      };
    },
  },
  fields: [
    defineField({
      name: "title",
      title: "Title",
      description: "Title",
      type: "string",
    }),
    defineField({
      name: "desktopImage",
      title: "Desktop Image",
      description: "Give Desktop Image",
      type: "image",
    }),
    defineField({
      name: "mobileImage",
      title: "Mobile Image",
      description: "Give Mobile Image",
      type: "image",
    }),
    defineField({
      name: "scriptTitle",
      title: "Script Title",
      description: "Script Title",
      type: "string",
    }),
    defineField({
      name: "ctaText",
      title: "Cta Text",
      description: "Give Cta Text",
      type: "string",
    }),
    defineField({
      name: "ctaCategoryPath",
      title: "PLP Path",
      description:
        'TODO: no Sanity mapping for AEM resource type "/libs/commerce/gui/components/common/cifcategoryfield". Falling back to string.',
      type: "string",
    }),
    defineField({
      name: "ctaProductPath",
      title: "Product Path",
      description:
        'TODO: no Sanity mapping for AEM resource type "/libs/commerce/gui/components/common/cifproductfield". Falling back to string.',
      type: "string",
    }),
    defineField({
      name: "ctaLink",
      title: "Cta Link",
      description: "Give Cta Link",
      type: "string",
    }),
    defineField({ name: "altText", title: "Alt Text", type: "string" }),
    defineField({
      name: "titleTag",
      title: "Title Tag",
      description: "Tag to display when hover over the link",
      type: "string",
    }),
    defineField({
      name: "copyText",
      title: "Copy Text",
      description: "Copy Text",
      type: "string",
    }),
    defineField({
      name: "backdropSelection",
      title: "Backdrop",
      type: "string",
      options: {
        list: [
          { title: "Full Backdrop", value: "component-backdrop--full" },
          { title: "Half Backdrop", value: "component-backdrop--half" },
          { title: "Offset Backdrop", value: "component-backdrop--offset" },
          { title: "Overlap Backdrop", value: "component-backdrop--overlap" },
        ],
      },
    }),
  ],
});
