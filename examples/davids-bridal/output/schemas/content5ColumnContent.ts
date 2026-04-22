import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/dbi/components/content/5-column-content
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const content5ColumnContent = defineType({
  name: "content5ColumnContent",
  title: "5 Columns Content",
  type: "object",
  preview: {
    select: {
      prMedia: "fiveColumnImage.0.mobileImage",
    },
    prepare({ prMedia }) {
      return {
        title: "5 Columns Content",
        media: prMedia,
      };
    },
  },
  fields: [
    defineField({
      name: "fiveColumnHeading",
      title: "Heading",
      description: "Section heading",
      type: "string",
    }),
    defineField({
      name: "fiveColumnImage",
      title: "Image Multifield",
      type: "array",
      of: [
        {
          type: "object",
          title: "Image Multifield",
          fields: [
            defineField({
              name: "mobileImage",
              title: "Mobile Image",
              description: "Image  Path",
              type: "image",
            }),
            defineField({
              name: "desktopImage",
              title: "Desktop Image",
              description: "Image  Path",
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
              name: "ctaCopy",
              title: "CTA Label",
              description: "CTA Label",
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
              name: "link",
              title: "Link",
              description: "Redirection Link",
              type: "string",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "ctaText",
      title: "CTA Copy",
      description: "CTA Copy",
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
