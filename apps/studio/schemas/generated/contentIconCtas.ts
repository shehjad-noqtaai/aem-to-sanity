import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/dbi/components/content/icon-ctas
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const contentIconCtas = defineType({
  name: "contentIconCtas",
  title: "icon-ctas",
  type: "object",
  preview: {
    select: {
      prMedia: "shopAllOccasions.0.shopImage",
    },
    prepare({ prMedia }) {
      return {
        title: "icon-ctas",
        media: prMedia,
      };
    },
  },
  fields: [
    defineField({
      name: "title",
      title: "Shop All Occasions Title",
      description: "Shop All Occasions Title",
      type: "string",
    }),
    defineField({
      name: "handwrittenTitle",
      title: "Shop All Occasions Handwritten Title",
      description: "Shop All Occasions Handwritten Title",
      type: "string",
    }),
    defineField({
      name: "shopAllOccasions",
      title: "Shop All Occasions",
      type: "array",
      of: [
        {
          type: "object",
          title: "Shop All Occasions",
          fields: [
            defineField({
              name: "shopTitle",
              title: "Shop Title",
              description: "Give occasions Title Text",
              type: "string",
            }),
            defineField({
              name: "shopImage",
              title: "Shop Image",
              description: "Give Occasions Image",
              type: "image",
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
              title: "Shop Link",
              description: "Give Occasions Link",
              type: "string",
            }),
          ],
        },
      ],
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
