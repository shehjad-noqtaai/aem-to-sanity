import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/dbi/components/common/dbi-hero-banner
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const commonDbiHeroBanner = defineType({
  name: "commonDbiHeroBanner",
  title: "herobanner",
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
        title: "herobanner",
        media: prMedia,
      };
    },
  },
  fields: [
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
      name: "header",
      title: "Header",
      type: "string",
      group: "properties",
    }),
    defineField({
      name: "tab3",
      title: "RTE Text Copy",
      description:
        'TODO: no Sanity mapping for AEM resource type "granite/ui/components/foundation/section". Falling back to string.',
      type: "string",
      group: "properties",
    }),
    defineField({
      name: "ctaLabel",
      title: "Cta Label",
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
      title: "Cta Link ",
      type: "string",
      group: "properties",
    }),
    defineField({
      name: "linkTitleTag",
      title: "Link Title Tag",
      type: "string",
      group: "properties",
    }),
    defineField({
      name: "ctaType",
      title: "Cta Type",
      description: "To set the type to either Button or Link",
      type: "string",
      group: "properties",
      options: {
        list: [
          { title: "Link", value: "link" },
          { title: "Button", value: "button" },
        ],
      },
    }),
    defineField({
      name: "secondCtaLabel",
      title: "Second Cta Label",
      type: "string",
      group: "properties",
    }),
    defineField({
      name: "secondCtaCategoryPath",
      title: "PLP Path",
      description:
        'TODO: no Sanity mapping for AEM resource type "/libs/commerce/gui/components/common/cifcategoryfield". Falling back to string.',
      type: "string",
      group: "properties",
    }),
    defineField({
      name: "secondCtaProductPath",
      title: "Product Path",
      description:
        'TODO: no Sanity mapping for AEM resource type "/libs/commerce/gui/components/common/cifproductfield". Falling back to string.',
      type: "string",
      group: "properties",
    }),
    defineField({
      name: "secondCtaLink",
      title: "Second Cta Link ",
      type: "string",
      group: "properties",
    }),
    defineField({
      name: "secondLinkTitleTag",
      title: "Second Link Title Tag",
      type: "string",
      group: "properties",
    }),
    defineField({
      name: "secondCtaType",
      title: "Second Cta Type",
      description: "To set the type to either Button or Link",
      type: "string",
      group: "properties",
      options: {
        list: [
          { title: "Link", value: "link" },
          { title: "Button", value: "button" },
        ],
      },
    }),
    defineField({
      name: "captionBoxPosition",
      title: "Caption Box Position",
      type: "string",
      group: "properties",
      options: {
        list: [
          { title: "Fix Right", value: "right" },
          { title: "Fix Left", value: "left" },
          { title: "Bottom Left", value: "bottomLeft" },
          { title: "Bottom Right", value: "bottomRight" },
        ],
      },
    }),
    defineField({
      name: "imageLocationControl",
      title: "Image Location Control",
      type: "string",
      group: "properties",
      options: {
        list: [
          { title: "Flush Left", value: "left" },
          { title: "Flush Right", value: "right" },
          { title: "Full Width", value: "width" },
        ],
      },
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
          {
            title: "Offset Top Right Backdrop",
            value: "component-backdrop__offset--top-right",
          },
          {
            title: "Offset Top Left Backdrop",
            value: "component-backdrop__offset--top-left",
          },
        ],
      },
    }),
    defineField({
      name: "themeColor",
      title: "Theme Color",
      type: "string",
      group: "properties",
    }),
    defineField({
      name: "textColor",
      title: "Text Color",
      type: "string",
      group: "properties",
    }),
    defineField({
      name: "headerTypeSize",
      title: "Header Type Size",
      type: "string",
      group: "properties",
      options: {
        list: [
          { title: "peta - 56pt", value: "text-size-fluid--tera-peta" },
          { title: "giga - 40pt", value: "text-size-fluid--mega-giga" },
          { title: "mega - 32pt", value: "text-size-fluid--kilo-mega" },
          { title: "kilo - 24pt", value: "text-size-fluid--base-kilo" },
        ],
      },
    }),
  ],
});
