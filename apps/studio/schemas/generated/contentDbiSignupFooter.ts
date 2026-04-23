import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/dbi/components/content/dbi-signup-footer
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const contentDbiSignupFooter = defineType({
  name: "contentDbiSignupFooter",
  title: "DBI-Signup-Footer",
  type: "object",
  preview: {
    prepare() {
      return { title: "DBI-Signup-Footer" };
    },
  },
  fields: [
    defineField({
      name: "signUpText",
      title: "Give a SignUp Text",
      description: "Give Sign Up for exclusive offers and discount text",
      type: "string",
    }),
    defineField({
      name: "signUpButton",
      title: "Button Text",
      description: "Give signUpButton Text",
      type: "string",
      initialValue: "Subscribe",
    }),
    defineField({
      name: "termsAndConditionsText",
      title: "Give Terms and Conditions Text",
      description: "Give Terms and Conditions Text",
      type: "string",
    }),
  ],
});
