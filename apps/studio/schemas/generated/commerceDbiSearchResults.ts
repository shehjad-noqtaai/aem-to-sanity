import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/dbi/components/commerce/dbi-search-results
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const commerceDbiSearchResults = defineType({
  name: "commerceDbiSearchResults",
  title: "Search Result",
  type: "object",
  preview: {
    prepare() {
      return { title: "Search Result" };
    },
  },
  fields: [
    defineField({
      name: "noResultMessage",
      title: "No results message",
      type: "string",
    }),
    defineField({
      name: "contentOffsetLimit",
      title: "Content Offset Limit",
      description:
        "Offset to display number of content pages (articles) to display on SLP",
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
      name: "contactLink",
      title: "Contact Us Link",
      description:
        "Contact Us link to redirect customers on search no results page",
      type: "string",
    }),
  ],
});
