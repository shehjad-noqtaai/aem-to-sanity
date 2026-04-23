import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/dbi/components/content/4-column-staggered-grid-2-column-mobile
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const content4ColumnStaggeredGrid2ColumnMobile = defineType({
  name: "content4ColumnStaggeredGrid2ColumnMobile",
  title: "4 Column Staggered Grid 2 Column Mobile",
  type: "object",
  preview: {
    prepare() {
      return { title: "4 Column Staggered Grid 2 Column Mobile" };
    },
  },
  fields: [
    defineField({ name: "heading", title: "Header", type: "string" }),
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
          {
            title: "Offset Mid Right Backdrop",
            value: "component-backdrop__offset--mid-right",
          },
        ],
      },
    }),
    defineField({ name: "scriptTitle", title: "Script Title", type: "string" }),
    defineField({
      name: "imageDisplay",
      title: "Image Display",
      type: "string",
      options: { list: [{ title: "Inline", value: "staggered-grid--inline" }] },
    }),
    defineField({
      name: "headerMargin",
      title: "Header Margin",
      type: "string",
      options: {
        list: [
          { title: "Default Margin", value: "header-margin--base" },
          { title: "Less Margin", value: "header-margin--tight" },
          { title: "More Margin", value: "header-margin--loose" },
        ],
      },
    }),
    defineField({
      name: "styleimage",
      description: "what is your style",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "styleimagemobile",
              title: "Mobile Image",
              type: "string",
            }),
            defineField({
              name: "styleimagedesktop",
              title: "desktop Image",
              type: "string",
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
              name: "ctaText",
              title: "CTA Text",
              description: "what is your style",
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
              title: "CTA Link",
              description: "redirectionlink",
              type: "string",
            }),
            defineField({
              name: "linkType",
              title: "Link Type",
              description: "For Choosing underlined or without underlined link",
              type: "string",
              options: {
                list: [
                  {
                    title: "No Underline",
                    value: "link-primary--no-underline",
                  },
                  { title: "With Underline", value: "link-primary" },
                ],
              },
            }),
          ],
        },
      ],
    }),
  ],
});
