import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/dbi/components/universal/dbi-footer
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const universalDbiFooter = defineType({
  name: "universalDbiFooter",
  title: "Global Footer",
  type: "object",
  preview: {
    prepare() {
      return { title: "Global Footer" };
    },
  },
  fields: [
    defineField({
      name: "tab1",
      title: "References",
      description:
        'TODO: no Sanity mapping for AEM resource type "granite/ui/components/foundation/section". Falling back to string.',
      type: "string",
    }),
    defineField({
      name: "tab2",
      title: "Contact Information",
      description:
        'TODO: no Sanity mapping for AEM resource type "granite/ui/components/foundation/section". Falling back to string.',
      type: "string",
    }),
    defineField({
      name: "tab3",
      title: "Copyright Text",
      description:
        'TODO: no Sanity mapping for AEM resource type "granite/ui/components/foundation/section". Falling back to string.',
      type: "string",
    }),
  ],
});
