import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/aem-integration/components/col
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const col = defineType({
  name: "col",
  title: "Column",
  type: "object",
  groups: [{ name: "general", title: "General" }],
  preview: {
    prepare() {
      return { title: "Column" };
    },
  },
  fields: [
    defineField({
      name: "col",
      title: "Col",
      type: "number",
      group: "general",
      initialValue: 12,
    }),
    defineField({
      name: "offset",
      title: "Offset",
      type: "number",
      group: "general",
    }),
    defineField({
      name: "auto",
      type: "boolean",
      group: "general",
      initialValue: true,
    }),
    defineField({
      name: "alignSelf",
      title: "Column align self type",
      type: "string",
      group: "general",
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      group: "general",
    }),
    defineField({
      name: "noGutter",
      type: "boolean",
      group: "general",
      initialValue: true,
    }),
    defineField({ name: "xs", title: "xs", type: "number", group: "general" }),
    defineField({ name: "sm", title: "sm", type: "number", group: "general" }),
    defineField({ name: "md", title: "md", type: "number", group: "general" }),
    defineField({ name: "lg", title: "lg", type: "number", group: "general" }),
    defineField({ name: "xl", title: "xl", type: "number", group: "general" }),
  ],
});
