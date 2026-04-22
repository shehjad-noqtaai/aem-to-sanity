import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/dbi/components/universal/dbi-header
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const universalDbiHeader = defineType({
  name: "universalDbiHeader",
  title: "Header",
  type: "object",
  groups: [
    { name: "general", title: "General" },
    { name: "iconTab", title: "Icon Tab" },
    { name: "navigation", title: "Navigation" },
    { name: "welcomeMessage", title: "Welcome Message" },
  ],
  preview: {
    prepare() {
      return { title: "Header" };
    },
  },
  fields: [
    defineField({
      name: "logoPath",
      title: "Logo Path",
      description: "Navigate to the home page root location.",
      type: "string",
      group: "general",
    }),
    defineField({
      name: "hideSearch",
      title: "Hide Search",
      description: "Button to disable Search",
      type: "boolean",
      group: "iconTab",
      initialValue: true,
    }),
    defineField({
      name: "helpPath",
      title: "Help Path",
      description: "Please provide path to the Help Page",
      type: "string",
      group: "iconTab",
    }),
    defineField({
      name: "storeLocatorPath",
      title: "Store Locator Path",
      description: "Please provide path to the Store Locator Page",
      type: "string",
      group: "iconTab",
    }),
    defineField({
      name: "appointmentPath",
      title: "Appointment Path",
      description: "Please provide path to the Appointments Page",
      type: "string",
      group: "iconTab",
    }),
    defineField({
      name: "favouritePath",
      title: "Favourite Icon Path",
      description: "Please provide path to the Favourite Page",
      type: "string",
      group: "iconTab",
    }),
    defineField({
      name: "userPath",
      title: "User Path",
      description: "Please provide path to the User Page",
      type: "string",
      group: "iconTab",
    }),
    defineField({
      name: "searchPath",
      title: "Search Path",
      description: "Please provide path to the User Page",
      type: "string",
      group: "iconTab",
    }),
    defineField({
      name: "navigationPath",
      title: "Navigation Path",
      description: "Experience Fragment Navigation Path ",
      type: "string",
      group: "navigation",
    }),
    defineField({
      name: "customisedText",
      type: "array",
      group: "welcomeMessage",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "hamburgerDetails",
      title: "HamburgerDetails",
      type: "array",
      of: [
        {
          type: "object",
          title: "HamburgerDetails",
          fields: [
            defineField({
              name: "title",
              title: "Hamburger link title",
              description: "Enter Hamburger link title",
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
              name: "link",
              title: "Hamburger link",
              description: "Enter Hamburger link",
              type: "string",
            }),
          ],
        },
      ],
    }),
  ],
});
