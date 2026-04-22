import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/dbi/components/content/dbi-personalized-sales
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const contentDbiPersonalizedSales = defineType({
  name: "contentDbiPersonalizedSales",
  title: "Favoritable 4 Column - Staggered Grid",
  type: "object",
  groups: [
    {
      name: "selectTheBestSellingProducts",
      title: "Select the Best Selling products",
    },
    { name: "image", title: "Image" },
  ],
  preview: {
    select: {
      prMedia: "desktopImage",
    },
    prepare({ prMedia }) {
      return {
        title: "Favoritable 4 Column - Staggered Grid",
        media: prMedia,
      };
    },
  },
  fields: [
    defineField({
      name: "titleText",
      title: "Title Header Text",
      description: "Title Header Text",
      type: "string",
      group: "selectTheBestSellingProducts",
    }),
    defineField({
      name: "products",
      title: "Select Products",
      type: "array",
      group: "selectTheBestSellingProducts",
      of: [
        {
          type: "object",
          title: "Select Products",
          fields: [
            defineField({
              name: "productPath",
              title: "Select Product ",
              description:
                'TODO: no Sanity mapping for AEM resource type "/libs/commerce/gui/components/common/cifproductfield". Falling back to string.',
              type: "string",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "ctaText",
      title: "CTA Text",
      description: "CTA Text",
      type: "text",
      group: "selectTheBestSellingProducts",
    }),
    defineField({
      name: "ctaCategoryPath",
      title: "PLP Path",
      description:
        'TODO: no Sanity mapping for AEM resource type "/libs/commerce/gui/components/common/cifcategoryfield". Falling back to string.',
      type: "string",
      group: "selectTheBestSellingProducts",
    }),
    defineField({
      name: "ctaProductPath",
      title: "Product Path",
      description:
        'TODO: no Sanity mapping for AEM resource type "/libs/commerce/gui/components/common/cifproductfield". Falling back to string.',
      type: "string",
      group: "selectTheBestSellingProducts",
    }),
    defineField({
      name: "ctaLink",
      title: "CTA Link",
      description: "CTA Link",
      type: "string",
      group: "selectTheBestSellingProducts",
    }),
    defineField({
      name: "backdropSelection",
      title: "Backdrop",
      type: "string",
      group: "selectTheBestSellingProducts",
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
      group: "selectTheBestSellingProducts",
      options: { list: [{ title: "Inline", value: "staggered-grid--inline" }] },
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
  ],
});
