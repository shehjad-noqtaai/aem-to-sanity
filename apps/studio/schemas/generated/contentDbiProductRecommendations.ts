import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/dbi/components/content/dbi-product-recommendations
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const contentDbiProductRecommendations = defineType({
  name: "contentDbiProductRecommendations",
  title: "Product Recommendation Carousel",
  type: "object",
  groups: [
    {
      name: "selectTheBestSellingProducts",
      title: "Select the Best Selling products",
    },
  ],
  preview: {
    prepare() {
      return { title: "Product Recommendation Carousel" };
    },
  },
  fields: [
    defineField({
      name: "handWrittenHeader",
      title: "Hand Written Header",
      description: "Product recommendations Hand Written Header",
      type: "string",
      group: "selectTheBestSellingProducts",
    }),
    defineField({
      name: "header",
      title: "Header",
      description: "Product recommendations Header",
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
          {
            title: "Offset Right Backdrop",
            value: "component-backdrop__offset--right",
          },
        ],
      },
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
  ],
});
