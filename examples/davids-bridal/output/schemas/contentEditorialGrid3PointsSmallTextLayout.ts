import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/dbi/components/content/editorial-grid-3-points-small-text-layout
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const contentEditorialGrid3PointsSmallTextLayout = defineType({
  name: "contentEditorialGrid3PointsSmallTextLayout",
  title: "Editorial Grid - 3 Points Small Text Layout",
  type: "object",
  preview: {
    select: {
      prMedia: "imageDesktop",
    },
    prepare({ prMedia }) {
      return {
        title: "Editorial Grid - 3 Points Small Text Layout",
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
            title: "Offset Mid Left Backdrop",
            value: "component-backdrop__offset--mid-left",
          },
        ],
      },
    }),
    defineField({
      name: "scriptTitle",
      title: "Script Title",
      description: "Handwritten subtitle",
      type: "string",
    }),
    defineField({
      name: "copyText",
      title: "Copy Text",
      description: "Copy Text",
      type: "string",
    }),
    defineField({
      name: "imageDesktop",
      title: "Desktop Image",
      description: "Give Desktop Image",
      type: "image",
    }),
    defineField({
      name: "imageMobile",
      title: "Mobile Image",
      description: "Give Mobile Image",
      type: "image",
    }),
    defineField({
      name: "imageCtaText",
      title: "Image Cta Text",
      description: "Image Cta Text",
      type: "string",
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
      name: "imageCtaLink",
      title: "Image Cta Link",
      description: "Image Cta Link",
      type: "image",
    }),
    defineField({
      name: "altText",
      title: "Alt Text",
      description: "Alt Text",
      type: "string",
    }),
    defineField({
      name: "titleTag",
      title: "Title Tag",
      description: "Title Tag",
      type: "string",
    }),
    defineField({
      name: "secondImageDesktop",
      title: "Desktop Image",
      description: "Give Desktop Image",
      type: "image",
    }),
    defineField({
      name: "secondImageMobile",
      title: "Mobile Image",
      description: "Give Mobile Image",
      type: "image",
    }),
    defineField({
      name: "secondImageCtaText",
      title: "Second Image Cta Text",
      description: "Image Cta Text",
      type: "string",
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
      name: "secondImageCtaLink",
      title: "Second Image Cta Link",
      description: "Image Cta Link",
      type: "image",
    }),
    defineField({
      name: "secondAltText",
      title: "Second Alt Text",
      description: "Second Alt Text",
      type: "string",
    }),
    defineField({
      name: "secondTitleTag",
      title: "Second Title Tag",
      description: "Second Title Tag",
      type: "string",
    }),
    defineField({
      name: "thirdImageDesktop",
      title: "Desktop Image",
      description: "Give Desktop Image",
      type: "image",
    }),
    defineField({
      name: "thirdImageMobile",
      title: "Mobile Image",
      description: "Give Mobile Image",
      type: "image",
    }),
    defineField({
      name: "thirdImageCtaText",
      title: "Third Image Cta Text",
      description: "Image Cta Text",
      type: "string",
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
      name: "thirdImageCtaLink",
      title: "Third Image Cta Link",
      description: "Image Cta Link",
      type: "image",
    }),
    defineField({
      name: "thirdAltText",
      title: "Third Alt Text",
      description: "Third  Alt Text",
      type: "string",
    }),
    defineField({
      name: "thirdTitleTag",
      title: "Third Title Tag",
      description: "Third Title Tag",
      type: "string",
    }),
    defineField({
      name: "bottomCtaText",
      title: "Bottom Cta Text",
      description: "Text for the Link at the Bottom",
      type: "text",
    }),
    defineField({
      name: "ctaCategoryPath4",
      title: "PLP Path",
      description:
        'TODO: no Sanity mapping for AEM resource type "/libs/commerce/gui/components/common/cifcategoryfield". Falling back to string.',
      type: "string",
    }),
    defineField({
      name: "ctaProductPath4",
      title: "Product Path",
      description:
        'TODO: no Sanity mapping for AEM resource type "/libs/commerce/gui/components/common/cifproductfield". Falling back to string.',
      type: "string",
    }),
    defineField({
      name: "bottomCtaLink",
      title: "Bottom Cta Link",
      description: "Link at the Bottom",
      type: "string",
    }),
  ],
});
