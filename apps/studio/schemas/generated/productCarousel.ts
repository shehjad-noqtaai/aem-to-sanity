import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/aem-integration/components/product-carousel
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const productCarousel = defineType({
  name: "productCarousel",
  title: "Product carousel",
  type: "object",
  groups: [
    { name: "section", title: "Section" },
    { name: "layout", title: "Layout" },
    { name: "products", title: "Products" },
    { name: "id", title: "ID" },
  ],
  preview: {
    prepare() {
      return { title: "Product carousel" };
    },
  },
  fields: [
    defineField({
      name: "headline1",
      title: "Headline 1 (script)",
      type: "string",
      group: "section",
    }),
    defineField({
      name: "headline2",
      title: "Headline 2 (sans serif)",
      type: "string",
      group: "section",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      group: "section",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "removeTopPadding",
      type: "boolean",
      group: "section",
      initialValue: true,
    }),
    defineField({
      name: "removeBottomPadding",
      type: "boolean",
      group: "section",
      initialValue: true,
    }),
    defineField({
      name: "linkText",
      title: "Link text",
      type: "string",
      group: "section",
    }),
    defineField({
      name: "linkTo",
      title: " Link",
      type: "string",
      group: "section",
    }),
    defineField({
      name: "columns",
      title: "Number of columns",
      type: "string",
      group: "layout",
      options: {
        list: [
          { title: "4", value: "4" },
          { title: "5", value: "5" },
        ],
      },
    }),
    defineField({
      name: "mobileLayout",
      title: "Mobile layout",
      type: "string",
      group: "layout",
      options: {
        list: [
          { title: "carousel", value: "carousel" },
          { title: "scroll", value: "scroll" },
        ],
      },
    }),
    defineField({
      name: "theme",
      title: "Theme",
      type: "string",
      group: "layout",
      options: {
        list: [
          { title: "White", value: "white" },
          { title: "Seashell", value: "seashell" },
          { title: "Seashell-alt", value: "seashell-alt" },
          { title: "Mocassin", value: "mocassin" },
          { title: "Mocassin-alt", value: "mocassin-alt" },
          { title: "Claret", value: "claret" },
          { title: "Claret-alt", value: "claret-alt" },
          { title: "Black", value: "black" },
          { title: "Black-alt", value: "black-alt" },
        ],
      },
    }),
    defineField({
      name: "layoutWidth",
      title: "Layout width",
      type: "string",
      group: "layout",
      options: {
        list: [
          { title: "full-width", value: "full-width" },
          { title: "in-set", value: "in-set" },
        ],
        layout: "radio",
      },
    }),
    defineField({
      name: "products",
      title: "Add products",
      type: "array",
      group: "products",
      of: [
        {
          type: "object",
          title: "Add products",
          fields: [
            defineField({
              name: "skuNumber",
              title: "Configurable SKU Number",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "simpleSkuNumber",
              title: "Simple SKU Number",
              type: "string",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "id",
      title: "Component ID",
      type: "string",
      group: "id",
    }),
    defineField({
      name: "categoryId",
      title: "Category ID",
      type: "string",
      group: "id",
    }),
  ],
});
