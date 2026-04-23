import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/dbi/components/content/dbi-personalized-style
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const contentDbiPersonalizedStyle = defineType({
  name: "contentDbiPersonalizedStyle",
  title: "4 Point Editorial Grid",
  type: "object",
  preview: {
    prepare() {
      return { title: "4 Point Editorial Grid" };
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
      name: "scriptText",
      title: "Script Text",
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
      name: "scriptCopy",
      title: "Script Copy",
      description: "Copy Hand Writting",
      type: "string",
    }),
    defineField({
      name: "scriptCopyAuthor",
      title: "Script Copy Author",
      description: "For giving author's name",
      type: "string",
    }),
    defineField({
      name: "imageDesktop",
      title: "Desktop Image",
      description: "Desktop Image",
      type: "string",
    }),
    defineField({
      name: "imageMobile",
      title: "Mobile Image",
      description: "Mobile Image",
      type: "string",
    }),
    defineField({
      name: "imageCtaText",
      title: "Image Cta Text",
      description: "Image Cta Text",
      type: "string",
    }),
    defineField({
      name: "imageCtaCategoryPath",
      title: "PLP Path",
      description:
        'TODO: no Sanity mapping for AEM resource type "/libs/commerce/gui/components/common/cifcategoryfield". Falling back to string.',
      type: "string",
    }),
    defineField({
      name: "imageCtaProductPath",
      title: "Product Path",
      description:
        'TODO: no Sanity mapping for AEM resource type "/libs/commerce/gui/components/common/cifproductfield". Falling back to string.',
      type: "string",
    }),
    defineField({
      name: "imageCtaLink",
      title: "Image Cta Link",
      description: "Image Cta Link",
      type: "string",
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
      title: "Second Desktop Image Desktop",
      description: "Second  Desktop Image",
      type: "string",
    }),
    defineField({
      name: "secondImageMobile",
      title: "Second Mobile Image",
      description: "Second Mobile Image  ",
      type: "string",
    }),
    defineField({
      name: "secondImageCtaText",
      title: "Second Image Cta Text",
      description: "Image Cta Text",
      type: "string",
    }),
    defineField({
      name: "secondImageCtaCategoryPath",
      title: "PLP Path",
      description:
        'TODO: no Sanity mapping for AEM resource type "/libs/commerce/gui/components/common/cifcategoryfield". Falling back to string.',
      type: "string",
    }),
    defineField({
      name: "secondImageCtaProductPath",
      title: "Product Path",
      description:
        'TODO: no Sanity mapping for AEM resource type "/libs/commerce/gui/components/common/cifproductfield". Falling back to string.',
      type: "string",
    }),
    defineField({
      name: "secondImageCtaLink",
      title: "Second Image Cta Link",
      description: "Image Cta Link",
      type: "string",
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
      title: "Third Desktop Image",
      description: "Third Desktop Image",
      type: "string",
    }),
    defineField({
      name: "thirdImageMobile",
      title: "Third Mobile Image",
      description: "Third Mobile Image",
      type: "string",
    }),
    defineField({
      name: "thirdImageCtaText",
      title: "Third Image Cta Text",
      description: "Image Cta Text",
      type: "string",
    }),
    defineField({
      name: "thirdImageCtaCategoryPath",
      title: "PLP Path",
      description:
        'TODO: no Sanity mapping for AEM resource type "/libs/commerce/gui/components/common/cifcategoryfield". Falling back to string.',
      type: "string",
    }),
    defineField({
      name: "thirdImageCtaProductPath",
      title: "Product Path",
      description:
        'TODO: no Sanity mapping for AEM resource type "/libs/commerce/gui/components/common/cifproductfield". Falling back to string.',
      type: "string",
    }),
    defineField({
      name: "thirdImageCtaLink",
      title: "Third Image Cta Link",
      description: "Image Cta Link",
      type: "string",
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
      name: "fourthImageDesktop",
      title: "Fourth Desktop Image",
      description: "Fourth Desktop Image",
      type: "string",
    }),
    defineField({
      name: "fourthImageMobile",
      title: "Fourth Mobile Image",
      description: "Fourth Mobile Image",
      type: "string",
    }),
    defineField({
      name: "fourthImageCtaText",
      title: "Fourth Image Cta Text",
      description: "Image Cta Text",
      type: "string",
    }),
    defineField({
      name: "fourthImageCtaCategoryPath",
      title: "PLP Path",
      description:
        'TODO: no Sanity mapping for AEM resource type "/libs/commerce/gui/components/common/cifcategoryfield". Falling back to string.',
      type: "string",
    }),
    defineField({
      name: "fourthImageCtaProductPath",
      title: "Product Path",
      description:
        'TODO: no Sanity mapping for AEM resource type "/libs/commerce/gui/components/common/cifproductfield". Falling back to string.',
      type: "string",
    }),
    defineField({
      name: "fourthImageCtaLink",
      title: "Fourth Image Cta Link",
      description: "Image Cta Link",
      type: "string",
    }),
    defineField({
      name: "fourthTitleTag",
      title: "Fourth Title Tag",
      description: "Fourth Title Tag",
      type: "string",
    }),
    defineField({
      name: "fourthAltText",
      title: "Fourth Alt Text",
      description: "Fourth Alt Text",
      type: "string",
    }),
    defineField({
      name: "bottomCtaText",
      title: "Bottom Cta Text",
      description: "Text for the Link at the Bottom",
      type: "text",
    }),
    defineField({
      name: "bottomCtaLink",
      title: "Bottom Cta Link",
      description: "Link at the Bottom",
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
