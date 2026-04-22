import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/dbi/components/content/dbi-store-details
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const contentDbiStoreDetails = defineType({
  name: "contentDbiStoreDetails",
  title: "Store Details",
  type: "object",
  groups: [
    { name: "mainInfo", title: "Main Info" },
    { name: "storeDesigners", title: "Store Designers" },
    { name: "storeServices", title: "Store Services" },
    { name: "storeSizes", title: "Store Sizes" },
    { name: "storeStylists", title: "Store Stylists" },
  ],
  preview: {
    prepare() {
      return { title: "Store Details" };
    },
  },
  fields: [
    defineField({
      name: "googleMapsKey",
      title: "google maps key",
      description: "Google Maps Key",
      type: "string",
      group: "mainInfo",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "aboutUsImage",
      title: "About Us Image",
      description: "Path of the about us image",
      type: "string",
      group: "mainInfo",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "storeTimings",
      title: "Store timings",
      description: "store timings",
      type: "string",
      group: "mainInfo",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "appointmentsUrl",
      title: "Appointments Page",
      description: "Please provide path to Appointments Page",
      type: "string",
      group: "mainInfo",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "storeDesigners",
      title: "Store Designers",
      description: "Add Designer Information",
      type: "array",
      group: "storeDesigners",
      of: [
        {
          type: "object",
          title: "Store Designers",
          fields: [
            defineField({
              name: "designerImage",
              title: "Designers Image",
              description: "Path of the designer image",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "designerTitle",
              title: "Designers Title",
              description: "Designer Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "storeServices",
      title: "Store Services",
      description: "Add Store Service",
      type: "array",
      group: "storeServices",
      of: [
        {
          type: "object",
          title: "Store Services",
          fields: [
            defineField({
              name: "serviceIcon",
              title: "Service Icon",
              description: "Path of the service icon",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "serviceTitle",
              title: "Service Title",
              description: "Service Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "serviceDescription",
              title: "Service Description",
              description: "Service Description",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "storeSizes",
      title: "Store Sizes",
      description: "Add Size",
      type: "array",
      group: "storeSizes",
      of: [
        {
          type: "object",
          title: "Store Sizes",
          fields: [
            defineField({
              name: "sizeImage",
              title: "Size Image",
              description: "Path of the size image",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "sizeTitle",
              title: "Size Title",
              description: "Size Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "storeStylists",
      title: "Store Stylists",
      description: "Add Store Stylists",
      type: "array",
      group: "storeStylists",
      of: [
        {
          type: "object",
          title: "Store Stylists",
          fields: [
            defineField({
              name: "stylistImage",
              title: "Stylist Image",
              description: "Path of the service icon",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "stylistName",
              title: "Stylist Name",
              description: "Service Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "stylistDescription",
              title: "Stylist Description",
              description: "Stylist Description",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),
  ],
});
