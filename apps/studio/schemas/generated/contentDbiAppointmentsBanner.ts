import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/dbi/components/content/dbi-appointments-banner
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const contentDbiAppointmentsBanner = defineType({
  name: "contentDbiAppointmentsBanner",
  title: "Appointments",
  type: "object",
  preview: {
    select: {
      prMedia: "appointmentsDesktopImage",
    },
    prepare({ prMedia }) {
      return {
        title: "Appointments",
        media: prMedia,
      };
    },
  },
  fields: [
    defineField({
      name: "titleHeader",
      title: "Appointments Banner Title",
      description: "Appointments Banner Title",
      type: "string",
    }),
    defineField({
      name: "appointmentsCopyText",
      title: "Appointments Text",
      description: "Appointments Text",
      type: "string",
    }),
    defineField({
      name: "addressLineOne",
      title: "Address Line One",
      description: "Appointments Banner Address Line one",
      type: "string",
    }),
    defineField({
      name: "addressLineTwo",
      title: "Address Line Two",
      description: "Appointments Banner Address Line Two",
      type: "string",
    }),
    defineField({
      name: "addressLineThree",
      title: "Address Line Three",
      description: "Appointments Banner Address Line Three",
      type: "string",
    }),
    defineField({
      name: "addressLineThreeCategoryPath",
      title: "PLP Path",
      description:
        'TODO: no Sanity mapping for AEM resource type "/libs/commerce/gui/components/common/cifcategoryfield". Falling back to string.',
      type: "string",
    }),
    defineField({
      name: "addressLineThreeProductPath",
      title: "Product Path",
      description:
        'TODO: no Sanity mapping for AEM resource type "/libs/commerce/gui/components/common/cifproductfield". Falling back to string.',
      type: "string",
    }),
    defineField({
      name: "addressLineThreeLink",
      title: "Address Line Three Link",
      description: "Appointments Banner Address Line Three Link",
      type: "string",
    }),
    defineField({
      name: "addressLineThreeTitle",
      title: "Address Line Three Title",
      description: "Appointments Banner Address Line Three Title",
      type: "string",
    }),
    defineField({
      name: "ctaText",
      title: "Cta Text",
      description: "Cta Text",
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
      title: "Cta Link",
      description: "Cta Link",
      type: "string",
    }),
    defineField({
      name: "ctaLinkTitle",
      title: "Cta Link Title",
      description: "Appointments Banner Cta Link Title",
      type: "string",
    }),
    defineField({
      name: "ctaButtonText",
      title: "Cta Button Text",
      description: "Cta Button Text",
      type: "string",
    }),
    defineField({
      name: "ctaButtonCategoryPath",
      title: "PLP Path",
      description:
        'TODO: no Sanity mapping for AEM resource type "/libs/commerce/gui/components/common/cifcategoryfield". Falling back to string.',
      type: "string",
    }),
    defineField({
      name: "ctaButtonProductPath",
      title: "Product Path",
      description:
        'TODO: no Sanity mapping for AEM resource type "/libs/commerce/gui/components/common/cifproductfield". Falling back to string.',
      type: "string",
    }),
    defineField({
      name: "ctaButtonLink",
      title: "Cta Button Link",
      description: "Cta Button Link",
      type: "string",
    }),
    defineField({
      name: "ctaButtonLinkTitle",
      title: "Cta Button Link Title",
      description: "Appointments Banner Cta Button Link Title",
      type: "string",
    }),
    defineField({
      name: "ctaChatText",
      title: "Cta Chat Text",
      description: "Cta Chat Text",
      type: "string",
    }),
    defineField({
      name: "ctaChatCategoryPath",
      title: "PLP Path",
      description:
        'TODO: no Sanity mapping for AEM resource type "/libs/commerce/gui/components/common/cifcategoryfield". Falling back to string.',
      type: "string",
    }),
    defineField({
      name: "ctaChatProductPath",
      title: "Product Path",
      description:
        'TODO: no Sanity mapping for AEM resource type "/libs/commerce/gui/components/common/cifproductfield". Falling back to string.',
      type: "string",
    }),
    defineField({
      name: "ctaChatLink",
      title: "Cta Chat Link",
      description: "Cta Chat Link",
      type: "string",
    }),
    defineField({
      name: "ctaChatLinkTitle",
      title: "Cta Chat Link Title",
      description: "Appointments Banner Cta Chat Link Title",
      type: "string",
    }),
    defineField({
      name: "appointmentsDesktopImage",
      title: "Appointments Desktop Image",
      description: "Give Appointments Desktop Image",
      type: "image",
    }),
    defineField({
      name: "appointmentsMobileImage",
      title: "Appointments Mobile Image",
      description: "Give Appointments Mobile Image",
      type: "image",
    }),
    defineField({
      name: "imageCopyText",
      title: "Image Copy Text",
      description: "Image Copy Text",
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
