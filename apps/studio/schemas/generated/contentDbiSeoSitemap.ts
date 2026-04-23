import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/dbi/components/content/dbi-seo-sitemap
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const contentDbiSeoSitemap = defineType({
  name: "contentDbiSeoSitemap",
  title: "SEO Sitemap",
  type: "object",
  groups: [
    { name: "selectTheSitemapLinks", title: "Select the Sitemap Links" },
  ],
  preview: {
    prepare() {
      return { title: "SEO Sitemap" };
    },
  },
  fields: [
    defineField({
      name: "multiLinks",
      title: "Select Links",
      type: "array",
      group: "selectTheSitemapLinks",
      of: [
        {
          type: "object",
          title: "Select Links",
          fields: [
            defineField({
              name: "ctaLabel",
              title: "Cta Label",
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
              title: "Cta Link ",
              type: "string",
            }),
          ],
        },
      ],
    }),
  ],
});
