import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/dbi/components/content/dbi-shop-your-looks
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const contentDbiShopYourLooks = defineType({
  name: "contentDbiShopYourLooks",
  title: "Dbi-Shop-Your-Looks",
  type: "object",
  preview: {
    prepare() {
      return { title: "Dbi-Shop-Your-Looks" };
    },
  },
  fields: [
    defineField({
      name: "heading",
      title: "Shop Your Looks Title",
      description: "Shop Your Looks Title",
      type: "string",
    }),
    defineField({
      name: "ctaText",
      title: "Shop Your Looks CTA Text",
      description: "Give CTA Text",
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
      title: "Shop Your Looks CTA Link",
      description: "Give a CTA Link to redoirect to the CTA Text",
      type: "string",
    }),
  ],
});
