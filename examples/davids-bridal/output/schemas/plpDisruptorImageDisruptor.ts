import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/dbi/components/plp/disruptor/image-disruptor
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const plpDisruptorImageDisruptor = defineType({
  name: "plpDisruptorImageDisruptor",
  title: "Image Disruptor",
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
        title: "Image Disruptor",
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
      name: "scriptText",
      title: "Script Text",
      type: "string",
      group: "properties",
    }),
    defineField({
      name: "productPath",
      title: "Select Product ",
      description:
        'TODO: no Sanity mapping for AEM resource type "/libs/commerce/gui/components/common/cifproductfield". Falling back to string.',
      type: "string",
    }),
  ],
});
