import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/dbi/components/common/dbi-store-locator
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const commonDbiStoreLocator = defineType({
  name: "commonDbiStoreLocator",
  title: "Store Locator",
  type: "object",
  preview: {
    select: {
      prMedia: "backgroundImage",
    },
    prepare({ prMedia }) {
      return {
        title: "Store Locator",
        media: prMedia,
      };
    },
  },
  fields: [
    defineField({
      name: "scriptHeading",
      title: "Script Heading",
      description: "Hand written heading text",
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
      name: "storeId",
      title: "Store Identifier",
      description: "Please provide the store identifier",
      type: "string",
    }),
    defineField({
      name: "heading",
      title: "Heading text",
      description: "Please provide the heading text",
      type: "string",
    }),
    defineField({
      name: "changeStoreText",
      title: "Change store text",
      type: "string",
    }),
    defineField({
      name: "changeStoreCategoryPath",
      title: "PLP Path",
      description:
        'TODO: no Sanity mapping for AEM resource type "/libs/commerce/gui/components/common/cifcategoryfield". Falling back to string.',
      type: "string",
    }),
    defineField({
      name: "changeStoreProductPath",
      title: "Product Path",
      description:
        'TODO: no Sanity mapping for AEM resource type "/libs/commerce/gui/components/common/cifproductfield". Falling back to string.',
      type: "string",
    }),
    defineField({
      name: "changeStoreLink",
      title: "Change Store Link",
      description: "Please provide the change store link",
      type: "string",
    }),
    defineField({
      name: "changeStoreTitle",
      title: "Change store Title",
      type: "string",
    }),
    defineField({
      name: "storeDetailText",
      title: "Store Details Text",
      type: "string",
    }),
    defineField({
      name: "storeDetailsCategoryPath",
      title: "PLP Path",
      description:
        'TODO: no Sanity mapping for AEM resource type "/libs/commerce/gui/components/common/cifcategoryfield". Falling back to string.',
      type: "string",
    }),
    defineField({
      name: "storeDetailsProductPath",
      title: "Product Path",
      description:
        'TODO: no Sanity mapping for AEM resource type "/libs/commerce/gui/components/common/cifproductfield". Falling back to string.',
      type: "string",
    }),
    defineField({
      name: "storeDetailLink",
      title: "Store Details Link",
      description: "Please provide the store link",
      type: "string",
    }),
    defineField({
      name: "storeDetailsTitle",
      title: "Store Details Title",
      type: "string",
    }),
    defineField({ name: "storeName", title: "Store Name", type: "string" }),
    defineField({ name: "storePlace", title: "Store Place", type: "string" }),
    defineField({
      name: "addressLineOne",
      title: "Address Line One",
      type: "string",
    }),
    defineField({
      name: "addressLineTwo",
      title: "Address Line Two",
      type: "string",
    }),
    defineField({ name: "storeTime", title: "Store Time", type: "string" }),
    defineField({
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
    }),
    defineField({
      name: "buttonLabel",
      title: "Book appointment Button Text",
      type: "string",
    }),
    defineField({
      name: "categoryPath",
      title: "PLP Path",
      description:
        'TODO: no Sanity mapping for AEM resource type "/libs/commerce/gui/components/common/cifcategoryfield". Falling back to string.',
      type: "string",
    }),
    defineField({
      name: "productPath",
      title: "Product Path",
      description:
        'TODO: no Sanity mapping for AEM resource type "/libs/commerce/gui/components/common/cifproductfield". Falling back to string.',
      type: "string",
    }),
    defineField({
      name: "buttonLink",
      title: "Book appointment button link",
      type: "string",
    }),
    defineField({
      name: "buttonTitle",
      title: "Book appointment Button Title",
      type: "string",
    }),
    defineField({
      name: "buttonHeader",
      title: "Button Header",
      description: "Book Appointment button header",
      type: "string",
    }),
    defineField({
      name: "mobileBackgroundImage",
      title: "Mobile Background Image",
      type: "image",
    }),
    defineField({ name: "imageTitle", title: "Image Title", type: "string" }),
    defineField({ name: "altTag", title: "Alt Tag", type: "string" }),
  ],
});
