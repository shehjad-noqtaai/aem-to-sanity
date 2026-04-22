import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/dbi/components/content/dbi-our-partners
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const contentDbiOurPartners = defineType({
  name: "contentDbiOurPartners",
  title: "3 Column Staggered Grid Square Images Mobile Stacked",
  type: "object",
  preview: {
    select: {
      prMedia: "ourpartnersImage.0.ourpartnersMobileImage",
    },
    prepare({ prMedia }) {
      return {
        title: "3 Column Staggered Grid Square Images Mobile Stacked",
        media: prMedia,
      };
    },
  },
  fields: [
    defineField({
      name: "title",
      title: "Our Partners Title",
      description: "Our Partners Title",
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
      name: "ourpartnersImage",
      title: "Image Multifield",
      type: "array",
      of: [
        {
          type: "object",
          title: "Image Multifield",
          fields: [
            defineField({
              name: "ourpartnersMobileImage",
              title: "Mobile Image Path",
              description: "Image  Path",
              type: "image",
            }),
            defineField({
              name: "ourpartnersDesktopImage",
              title: "Desktop Image Path",
              description: "Image  Path",
              type: "image",
            }),
            defineField({
              name: "imageText",
              title: "Image Text",
              description: "Image Text",
              type: "string",
            }),
            defineField({
              name: "titleTag",
              title: "Title Tag",
              description: "Tag to display when hover over the link",
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
              name: "ctaText",
              title: "CTA Text",
              description: "CTA Text",
              type: "string",
            }),
          ],
        },
      ],
    }),
  ],
});
