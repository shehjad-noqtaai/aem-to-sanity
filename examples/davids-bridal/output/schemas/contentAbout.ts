import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/dbi/components/content/about
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const contentAbout = defineType({
  name: "contentAbout",
  title: "About",
  type: "object",
  preview: {
    select: {
      prMedia: "products.0.desktopImage",
    },
    prepare({ prMedia }) {
      return {
        title: "About",
        media: prMedia,
      };
    },
  },
  fields: [
    defineField({
      name: "heading",
      title: "Title Header",
      description: "About Why David's Bridal",
      type: "string",
    }),
    defineField({
      name: "products",
      title: "Products",
      description: "Please provide the details",
      type: "array",
      of: [
        {
          type: "object",
          title: "Products",
          fields: [
            defineField({
              name: "copyTitle",
              title: "Copy Title",
              description: "Product Title",
              type: "string",
            }),
            defineField({
              name: "copyText",
              title: "Copy Text",
              description: "Give Some Copy Text",
              type: "string",
            }),
            defineField({
              name: "copyTextStrong",
              title: "Bold Text",
              description: "Give Some Copy Text which has to be bold",
              type: "string",
            }),
            defineField({
              name: "copyTextDescription",
              title: "Copy Text (After Bold Text)",
              description:
                "Give Some Copy Text which has to come after bold text",
              type: "string",
            }),
            defineField({
              name: "ctaText",
              title: "CTA Text",
              description: "Give Some CTA Text ",
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
              description: "Give redirection URL",
              type: "string",
            }),
            defineField({
              name: "desktopImage",
              title: "Desktop Image",
              description: "Desktop Image",
              type: "image",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "mobileImage",
              title: "Mobile Image",
              description: "Mobile Image",
              type: "image",
              validation: (Rule) => Rule.required(),
            }),
            defineField({ name: "altText", title: "Alt Text", type: "string" }),
            defineField({
              name: "titleTag",
              title: "Title Tag",
              description: "Tag to display when hover over the link",
              type: "string",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "buttonLabel",
      title: "Learn More Button",
      description: "Give Some Text to come for Button",
      type: "string",
    }),
    defineField({
      name: "buttonCategoryPath",
      title: "PLP Path",
      description:
        'TODO: no Sanity mapping for AEM resource type "/libs/commerce/gui/components/common/cifcategoryfield". Falling back to string.',
      type: "string",
    }),
    defineField({
      name: "buttonProductPath",
      title: "Product Path",
      description:
        'TODO: no Sanity mapping for AEM resource type "/libs/commerce/gui/components/common/cifproductfield". Falling back to string.',
      type: "string",
    }),
    defineField({
      name: "buttonLink",
      title: "Learn More Button Link",
      description: "Give some redirection link for Button",
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
