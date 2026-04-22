import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/dbi/components/content/bv-curation-carousel
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const contentBvCurationCarousel = defineType({
  name: "contentBvCurationCarousel",
  title: "BV Curation Carousel",
  type: "object",
  preview: {
    prepare() {
      return { title: "BV Curation Carousel" };
    },
  },
  fields: [
    defineField({
      name: "heading",
      title: "BV Curation Carousel Title",
      description: "BV Curation Carousel Title",
      type: "string",
    }),
    defineField({
      name: "tag",
      title: "BV Curation Carousel Tag Name",
      description: "BV Curation Carousel Tag Name",
      type: "string",
    }),
    defineField({
      name: "ctaText",
      title: "BV Curation Carousel CTA Text",
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
      title: "BV Curation Carousel CTA Link",
      description: "Give a CTA Link to redirect to the CTA Text",
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
          {
            title: "Offset Bottom Backdrop",
            value: "component-backdrop__offset--bottom",
          },
        ],
      },
    }),
  ],
});
