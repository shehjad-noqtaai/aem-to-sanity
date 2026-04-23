import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/dbi/components/content/4-column-staggered-grid-mobile-carousel
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const content4ColumnStaggeredGridMobileCarousel = defineType({
  name: "content4ColumnStaggeredGridMobileCarousel",
  title: "4 Column Staggered Grid Mobile Carousel",
  type: "object",
  preview: {
    select: {
      prMedia: "multiImage.0.mobileImage",
    },
    prepare({ prMedia }) {
      return {
        title: "4 Column Staggered Grid Mobile Carousel",
        media: prMedia,
      };
    },
  },
  fields: [
    defineField({
      name: "title",
      title: "Title",
      description: "Section Title",
      type: "string",
    }),
    defineField({
      name: "scriptTitle",
      title: "Script Title",
      description: "Script Title",
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
    defineField({
      name: "imageDisplay",
      title: "Image Display",
      type: "string",
      options: { list: [{ title: "Inline", value: "staggered-grid--inline" }] },
    }),
    defineField({
      name: "multiImage",
      title: "Image Multifield",
      type: "array",
      of: [
        {
          type: "object",
          title: "Image Multifield",
          fields: [
            defineField({
              name: "mobileImage",
              title: "Mobile Image  Path",
              description: "Mobile Image  Path",
              type: "image",
            }),
            defineField({
              name: "desktopImage",
              title: "Desktop Image  Path",
              description: "Desktop Image  Path",
              type: "image",
            }),
            defineField({
              name: "altText",
              title: "Alt Text",
              description: "Alt Text",
              type: "string",
            }),
            defineField({
              name: "imageTitle",
              title: "Image Title",
              description: "Image Title",
              type: "string",
            }),
            defineField({
              name: "ctaLabel",
              title: "Cta Label",
              description: "Cta Label",
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
              title: "Link",
              description: "Redirection Link",
              type: "string",
            }),
          ],
        },
      ],
    }),
  ],
});
