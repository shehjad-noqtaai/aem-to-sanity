import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/dbi/components/content/dbi-real-story
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const contentDbiRealStory = defineType({
  name: "contentDbiRealStory",
  title: "Featured Story",
  type: "object",
  groups: [
    { name: "image", title: "Image" },
    { name: "text", title: "Text" },
    { name: "linkActions", title: "Link & Actions" },
  ],
  preview: {
    select: {
      prMedia: "realStoryImage",
    },
    prepare({ prMedia }) {
      return {
        title: "Featured Story",
        media: prMedia,
      };
    },
  },
  fields: [
    defineField({
      name: "realStoryImage",
      title: "Desktop Image",
      description: "Give Desktop Image",
      type: "image",
      group: "image",
    }),
    defineField({
      name: "mobileImage",
      title: "Mobile Image",
      description: "Give Mobile Image",
      type: "image",
      group: "image",
    }),
    defineField({
      name: "altText",
      title: "Alt Text",
      type: "string",
      group: "image",
    }),
    defineField({
      name: "titleTag",
      title: "Title Tag",
      description: "Tag to display when hover over the link",
      type: "string",
      group: "image",
    }),
    defineField({
      name: "titleHeader",
      title: "Title Header",
      description:
        "A title to display as the headline for the RealStory Component",
      type: "string",
      group: "text",
      initialValue: "${cqDesign._jcr_description}",
    }),
    defineField({
      name: "titleText",
      title: "Title Text",
      description: "A title to display in Bold",
      type: "string",
      group: "text",
      initialValue: "${cqDesign._jcr_description}",
    }),
    defineField({
      name: "text",
      title: "Text",
      description:
        "A description to display as the subheadline for the realStory Component",
      type: "text",
      group: "text",
      initialValue: "${cqDesign._jcr_description}",
    }),
    defineField({
      name: "titleHandWrittenHeader",
      title: "Title HandWritten Header ",
      description:
        "A title to display as the hand written headline for the RealStory Component",
      type: "string",
      group: "text",
      initialValue: "${cqDesign._jcr_description}",
    }),
    defineField({
      name: "backdropSelection",
      title: "Backdrop",
      type: "string",
      group: "text",
      options: {
        list: [
          { title: "Full Backdrop", value: "component-backdrop--full" },
          { title: "Half Backdrop", value: "component-backdrop--half" },
          { title: "Offset Backdrop", value: "component-backdrop--offset" },
          { title: "Overlap Backdrop", value: "component-backdrop--overlap" },
        ],
      },
    }),
    defineField({
      name: "themeColor",
      title: "Theme Color",
      type: "string",
      group: "text",
    }),
    defineField({
      name: "textColor",
      title: "Text Color",
      type: "string",
      group: "text",
      initialValue: "#FFFFFF",
    }),
    defineField({
      name: "ctalabel1",
      title: "CTA Text 1",
      type: "string",
      group: "linkActions",
    }),
    defineField({
      name: "ctaCategoryPath",
      title: "PLP Path",
      description:
        'TODO: no Sanity mapping for AEM resource type "/libs/commerce/gui/components/common/cifcategoryfield". Falling back to string.',
      type: "string",
      group: "linkActions",
    }),
    defineField({
      name: "ctaProductPath",
      title: "Product Path",
      description:
        'TODO: no Sanity mapping for AEM resource type "/libs/commerce/gui/components/common/cifproductfield". Falling back to string.',
      type: "string",
      group: "linkActions",
    }),
    defineField({
      name: "ctalink1",
      title: "CTA Link 1",
      type: "string",
      group: "linkActions",
    }),
    defineField({
      name: "ctalabel2",
      title: "CTA Text 2",
      type: "string",
      group: "linkActions",
    }),
    defineField({
      name: "secondCtaCategoryPath",
      title: "PLP Path",
      description:
        'TODO: no Sanity mapping for AEM resource type "/libs/commerce/gui/components/common/cifcategoryfield". Falling back to string.',
      type: "string",
      group: "linkActions",
    }),
    defineField({
      name: "secondCtaProductPath",
      title: "Product Path",
      description:
        'TODO: no Sanity mapping for AEM resource type "/libs/commerce/gui/components/common/cifproductfield". Falling back to string.',
      type: "string",
      group: "linkActions",
    }),
    defineField({
      name: "ctalink2",
      title: "CTA Link 2",
      type: "string",
      group: "linkActions",
    }),
  ],
});
