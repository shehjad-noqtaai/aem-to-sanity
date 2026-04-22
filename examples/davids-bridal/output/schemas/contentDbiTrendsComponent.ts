import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/dbi/components/content/dbi-trends-component
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const contentDbiTrendsComponent = defineType({
  name: "contentDbiTrendsComponent",
  title: "Editorial Grid - 3 Points Script Text Layout",
  type: "object",
  preview: {
    select: {
      prSubtitle: "description",
      prMedia: "imageone",
    },
    prepare({ prSubtitle, prMedia }) {
      return {
        title: "Editorial Grid - 3 Points Script Text Layout",
        subtitle:
          typeof prSubtitle === "string" && prSubtitle.trim()
            ? prSubtitle.trim()
            : undefined,
        media: prMedia,
      };
    },
  },
  fields: [
    defineField({
      name: "title",
      title: "Title",
      description: "Title",
      type: "string",
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      description: "Subtitle",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      description: "Description",
      type: "string",
    }),
    defineField({
      name: "pullout",
      title: "Pullout Quote",
      description: "Pullout quote",
      type: "string",
    }),
    defineField({
      name: "imageone",
      title: "Mobile Image",
      description: "Give Mobile Image",
      type: "image",
    }),
    defineField({
      name: "ctaCategoryPath1",
      title: "PLP Path",
      description:
        'TODO: no Sanity mapping for AEM resource type "/libs/commerce/gui/components/common/cifcategoryfield". Falling back to string.',
      type: "string",
    }),
    defineField({
      name: "ctaProductPath1",
      title: "Product Path",
      description:
        'TODO: no Sanity mapping for AEM resource type "/libs/commerce/gui/components/common/cifproductfield". Falling back to string.',
      type: "string",
    }),
    defineField({
      name: "linkone",
      title: "Link One",
      description: "First Link title for description ",
      type: "string",
    }),
    defineField({
      name: "ctatextone",
      title: "CTA Text One",
      description: "CTA Text One",
      type: "text",
    }),
    defineField({
      name: "imagetwo",
      title: "Mobile Image",
      description: "Give Mobile Image",
      type: "image",
    }),
    defineField({
      name: "ctaCategoryPath2",
      title: "PLP Path",
      description:
        'TODO: no Sanity mapping for AEM resource type "/libs/commerce/gui/components/common/cifcategoryfield". Falling back to string.',
      type: "string",
    }),
    defineField({
      name: "ctaProductPath2",
      title: "Product Path",
      description:
        'TODO: no Sanity mapping for AEM resource type "/libs/commerce/gui/components/common/cifproductfield". Falling back to string.',
      type: "string",
    }),
    defineField({
      name: "linktwo",
      title: "Link Two",
      description: "Second Link title for description",
      type: "string",
    }),
    defineField({
      name: "ctatexttwo",
      title: "CTA Text Two",
      description: "CTA Text Two",
      type: "text",
    }),
    defineField({
      name: "imagethree",
      title: "Mobile Image",
      description: "Give Mobile Image",
      type: "image",
    }),
    defineField({
      name: "ctaCategoryPath3",
      title: "PLP Path",
      description:
        'TODO: no Sanity mapping for AEM resource type "/libs/commerce/gui/components/common/cifcategoryfield". Falling back to string.',
      type: "string",
    }),
    defineField({
      name: "ctaProductPath3",
      title: "Product Path",
      description:
        'TODO: no Sanity mapping for AEM resource type "/libs/commerce/gui/components/common/cifproductfield". Falling back to string.',
      type: "string",
    }),
    defineField({
      name: "linkthree",
      title: "Link Three",
      description: "Second Link title for description",
      type: "string",
    }),
    defineField({
      name: "ctatextthree",
      title: "CTA Text Three",
      description: "CTA Text Three",
      type: "text",
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
