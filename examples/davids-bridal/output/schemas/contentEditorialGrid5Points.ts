import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/dbi/components/content/editorial-grid-5-points
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const contentEditorialGrid5Points = defineType({
  name: "contentEditorialGrid5Points",
  title: "Editorial Grid - 5 Points",
  type: "object",
  preview: {
    select: {
      prMedia: "desktopImage1",
    },
    prepare({ prMedia }) {
      return {
        title: "Editorial Grid - 5 Points",
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
            title: "Offset Bottom Right Backdrop",
            value: "component-backdrop__offset--bottom-right",
          },
          {
            title: "Offset Mid Left Backdrop",
            value: "component-backdrop__offset--mid-left",
          },
        ],
      },
    }),
    defineField({
      name: "scriptText",
      title: "Script Text",
      description: "Script Text",
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
      description: "Script Copy",
      type: "string",
    }),
    defineField({
      name: "scriptCopyAuthor",
      title: "Script Copy Author",
      description: "Script Copy Author",
      type: "string",
    }),
    defineField({
      name: "desktopImage1",
      title: "Image 1 Desktop",
      description: "Image 1 Desktop",
      type: "image",
    }),
    defineField({
      name: "mobileImage1",
      title: "Image 1 Mobile",
      description: "Image 1 Mobile",
      type: "image",
    }),
    defineField({
      name: "imageAltText1",
      title: "Alternative Text Image 1",
      description: "Altenative Text Image 1 ",
      type: "string",
    }),
    defineField({
      name: "imageTitle1",
      title: "Title Image 1 ",
      description: "Title Image 1 ",
      type: "string",
    }),
    defineField({
      name: "ctaText1",
      title: "Cta Text 1",
      description: "Cta Text 1",
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
      name: "ctaLink1",
      title: "Cta Link 1",
      description: "Cta Link 1",
      type: "string",
    }),
    defineField({
      name: "desktopImage2",
      title: "Image 2 Desktop",
      description: "Image 2 Desktop",
      type: "image",
    }),
    defineField({
      name: "mobileImage2",
      title: "Image 2 Mobile",
      description: "Image 2 Mobile",
      type: "image",
    }),
    defineField({
      name: "imageAltText2",
      title: "Alternative Text Image 2",
      description: "Altenative Text Image 2",
      type: "string",
    }),
    defineField({
      name: "imageTitle2",
      title: "Title Image 2",
      description: "Title Image 2",
      type: "string",
    }),
    defineField({
      name: "ctaText2",
      title: "Cta Text 2",
      description: "Cta Text 2",
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
      name: "ctaLink2",
      title: "Cta Link 2",
      description: "Cta Link 2",
      type: "string",
    }),
    defineField({
      name: "desktopImage3",
      title: "Image 3 Desktop",
      description: "Image 3 Desktop",
      type: "image",
    }),
    defineField({
      name: "mobileImage3",
      title: "Image 3 Mobile",
      description: "Image 3 Mobile",
      type: "image",
    }),
    defineField({
      name: "imageAltText3",
      title: "Alternative Text Image 3",
      description: "Altenative Text Image 3",
      type: "string",
    }),
    defineField({
      name: "imageTitle3",
      title: "Title Image 3",
      description: "Title Image 3",
      type: "string",
    }),
    defineField({
      name: "ctaText3",
      title: "Cta Text 3",
      description: "Cta Text 3",
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
      name: "ctaLink3",
      title: "Cta Link 3",
      description: "Cta Link 3",
      type: "string",
    }),
    defineField({
      name: "desktopImage4",
      title: "Image 4 Desktop",
      description: "Image 4 Desktop",
      type: "image",
    }),
    defineField({
      name: "mobileImage4",
      title: "Image 4 Mobile",
      description: "Image 4 Mobile",
      type: "image",
    }),
    defineField({
      name: "imageAltText4",
      title: "Alternative Text Image 4",
      description: "Altenative Text Image 4",
      type: "string",
    }),
    defineField({
      name: "imageTitle4",
      title: "Title Image 4",
      description: "Title Image 4",
      type: "string",
    }),
    defineField({
      name: "ctaText4",
      title: "Cta Text 4",
      description: "Cta Text 4",
      type: "string",
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
      name: "ctaLink4",
      title: "Cta Link 4",
      description: "Cta Link 4",
      type: "string",
    }),
    defineField({
      name: "desktopImage5",
      title: "Image 5 Desktop",
      description: "Image 5 Desktop",
      type: "image",
    }),
    defineField({
      name: "mobileImage5",
      title: "Image 5 Mobile",
      description: "Image 5 Mobile",
      type: "image",
    }),
    defineField({
      name: "imageAltText5",
      title: "Alternative Text Image 5",
      description: "Altenative Text Image 5",
      type: "string",
    }),
    defineField({
      name: "imageTitle5",
      title: "Title Image 5",
      description: "Title Image 5",
      type: "string",
    }),
    defineField({
      name: "ctaText5",
      title: "Cta Text 5",
      description: "Cta Text 5",
      type: "string",
    }),
    defineField({
      name: "ctaCategoryPath5",
      title: "PLP Path",
      description:
        'TODO: no Sanity mapping for AEM resource type "/libs/commerce/gui/components/common/cifcategoryfield". Falling back to string.',
      type: "string",
    }),
    defineField({
      name: "ctaProductPath5",
      title: "Product Path",
      description:
        'TODO: no Sanity mapping for AEM resource type "/libs/commerce/gui/components/common/cifproductfield". Falling back to string.',
      type: "string",
    }),
    defineField({
      name: "ctaLink5",
      title: "Cta Link 5",
      description: "Cta Link 5",
      type: "string",
    }),
    defineField({
      name: "ctaButtonLink",
      title: "CTA Link",
      description: "CTA Link",
      type: "string",
    }),
    defineField({
      name: "ctaButtonText",
      title: "CTA Text",
      description: "CTA Text",
      type: "string",
    }),
  ],
});
