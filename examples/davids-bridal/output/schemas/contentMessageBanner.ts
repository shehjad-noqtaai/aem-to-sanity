import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/dbi/components/content/message-banner
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const contentMessageBanner = defineType({
  name: "contentMessageBanner",
  title: "Message Banner",
  type: "object",
  preview: {
    prepare() {
      return { title: "Message Banner" };
    },
  },
  fields: [
    defineField({
      name: "copytext",
      title: "Copy Text",
      description: "Copy Text",
      type: "string",
    }),
    defineField({
      name: "categoryPath",
      title: "PLP Path",
      description:
        'TODO: no Sanity mapping for AEM resource type "/libs/commerce/gui/components/common/cifcategoryfield". Falling back to string.',
      type: "string",
    }),
    defineField({
      name: "productPath",
      title: "Product Path",
      description:
        'TODO: no Sanity mapping for AEM resource type "/libs/commerce/gui/components/common/cifproductfield". Falling back to string.',
      type: "string",
    }),
    defineField({
      name: "ctaLink",
      title: "CTA Link",
      description: "CTA Link",
      type: "string",
    }),
    defineField({
      name: "ctaText",
      title: "CTA Text",
      description: "CTA Text",
      type: "string",
    }),
    defineField({
      name: "enabledCheck",
      title: "Enabled Checkbox",
      description: "Button to disable messageBanner",
      type: "boolean",
      initialValue: true,
    }),
  ],
});
