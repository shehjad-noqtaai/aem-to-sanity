import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/dbi/components/content/breadcrumb-navigation
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const contentBreadcrumbNavigation = defineType({
  name: "contentBreadcrumbNavigation",
  title: "breadcrumb-navigation",
  type: "object",
  preview: {
    prepare() {
      return { title: "breadcrumb-navigation" };
    },
  },
  fields: [],
});
