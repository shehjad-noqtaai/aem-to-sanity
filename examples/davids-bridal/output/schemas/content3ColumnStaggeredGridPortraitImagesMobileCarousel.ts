import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/dbi/components/content/3-column-staggered-grid-portrait-images-mobile-carousel
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const content3ColumnStaggeredGridPortraitImagesMobileCarousel =
  defineType({
    name: "content3ColumnStaggeredGridPortraitImagesMobileCarousel",
    title: "3 Column Staggered Grid Portrait Images Mobile Carousel",
    type: "object",
    preview: {
      select: {
        prMedia: "multi.0.desktopImage",
      },
      prepare({ prMedia }) {
        return {
          title: "3 Column Staggered Grid Portrait Images Mobile Carousel",
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
        options: {
          list: [{ title: "Inline", value: "staggered-grid--inline" }],
        },
      }),
      defineField({
        name: "multi",
        title: "Multifield",
        type: "array",
        of: [
          {
            type: "object",
            title: "Multifield",
            fields: [
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
                name: "imageAltText",
                title: "Image ALT Text",
                description: "Image ALT Text",
                type: "string",
              }),
              defineField({
                name: "imageTitle",
                title: "Image Title",
                description: "Image Title",
                type: "string",
              }),
              defineField({
                name: "copyTitle",
                title: "Copy Title",
                description: "Copy Title",
                type: "string",
              }),
              defineField({
                name: "copyText",
                title: "Copy Text",
                description: "Copy Text",
                type: "string",
              }),
              defineField({
                name: "ctaText",
                title: "Cta Text",
                description: "Cta Text",
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
                description: "Cta Link",
                type: "string",
              }),
            ],
          },
        ],
      }),
      defineField({
        name: "ctaButtonCategoryPath",
        title: "PLP Path",
        description:
          'TODO: no Sanity mapping for AEM resource type "/libs/commerce/gui/components/common/cifcategoryfield". Falling back to string.',
        type: "string",
      }),
      defineField({
        name: "ctaButtonProductPath",
        title: "Product Path",
        description:
          'TODO: no Sanity mapping for AEM resource type "/libs/commerce/gui/components/common/cifproductfield". Falling back to string.',
        type: "string",
      }),
      defineField({
        name: "ctaButtonLink",
        title: "CTA Link",
        description: "CTA Link",
        type: "string",
      }),
      defineField({
        name: "ctaButtonText",
        title: "CTA Text",
        description: "CTA Text",
        type: "string",
      }),
    ],
  });
