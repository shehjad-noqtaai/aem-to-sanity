import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/dbi/components/content/faq-menu-navigation
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const contentFaqMenuNavigation = defineType({
  name: "contentFaqMenuNavigation",
  title: "FAQ Menu Navigation",
  type: "object",
  preview: {
    prepare() {
      return { title: "FAQ Menu Navigation" };
    },
  },
  fields: [
    defineField({
      name: "navMulti",
      title: "Navigation Multifield",
      type: "array",
      of: [
        {
          type: "object",
          title: "Navigation Multifield",
          fields: [
            defineField({ name: "header", title: "Header", type: "string" }),
            defineField({
              name: "menuItems",
              title: "Menu Items",
              type: "array",
              of: [
                {
                  type: "object",
                  title: "Menu Items",
                  fields: [
                    defineField({
                      name: "text",
                      title: "Menu Item Text",
                      description: "Menu Item Text",
                      type: "string",
                    }),
                    defineField({
                      name: "link",
                      title: "Menu link",
                      description: "Menu link",
                      type: "string",
                    }),
                  ],
                },
              ],
            }),
          ],
        },
      ],
    }),
  ],
});
