import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/aem-integration/components/hero-video-banner
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const heroVideoBanner = defineType({
  name: "heroVideoBanner",
  title: "Hero video banner",
  type: "object",
  groups: [
    { name: "template", title: "Template" },
    { name: "video", title: "Video" },
    { name: "buttons", title: "Buttons" },
  ],
  preview: {
    select: {
      prMedia: "textAsImages.0.fileReference",
    },
    prepare({ prMedia }) {
      return {
        title: "Hero video banner",
        media: prMedia,
      };
    },
  },
  fields: [
    defineField({
      name: "contentPosition",
      title: "Content position",
      type: "string",
      group: "template",
      options: {
        list: [
          { title: "left", value: "left" },
          { title: "center", value: "center" },
          { title: "right", value: "right" },
        ],
      },
    }),
    defineField({
      name: "textType",
      title: "Text type",
      type: "string",
      group: "template",
      options: {
        list: [
          { title: "Live text", value: "type_text" },
          { title: "Image as text", value: "type_image" },
        ],
      },
    }),
    defineField({
      name: "textAsImages",
      title: "Image options",
      type: "array",
      group: "template",
      of: [
        {
          type: "object",
          title: "Image options",
          fields: [
            defineField({
              name: "fileReferenceAemPath",
              title: "Image (AEM DAM path)",
              description:
                "Original AEM path from migration (read-only). Use the Sanity asset field below for previews and delivery.",
              type: "string",
              readOnly: true,
            }),
            defineField({
              name: "fileReference",
              title: "Image",
              type: "image",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "visible",
              title: "Devices",
              type: "string",
              options: {
                list: [
                  { title: "desktop", value: "desktop" },
                  { title: "tablet", value: "tablet" },
                  { title: "mobile", value: "mobile" },
                ],
              },
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "tagLevel",
      title: "Headlines tag level",
      type: "string",
      group: "template",
      options: {
        list: [
          { title: "h1", value: "h1" },
          { title: "h2", value: "h2" },
          { title: "h3", value: "h3" },
          { title: "h4", value: "h4" },
          { title: "h5", value: "h5" },
          { title: "h6", value: "h6" },
        ],
      },
    }),
    defineField({
      name: "lineOneText",
      title: "Line 1",
      type: "string",
      group: "template",
    }),
    defineField({
      name: "lineOneTextFontFamily",
      title: "Font family (Line 1)",
      type: "string",
      group: "template",
    }),
    defineField({
      name: "lineOneTextColorHex",
      title: "Line 1 Text Color",
      type: "string",
      group: "template",
    }),
    defineField({
      name: "lineTwoText",
      title: "Line 2",
      type: "string",
      group: "template",
    }),
    defineField({
      name: "lineTwoTextFontFamily",
      title: "Font family (Line 2)",
      type: "string",
      group: "template",
    }),
    defineField({
      name: "lineTwoTextColorHex",
      title: "Line 2  Text Color",
      type: "string",
      group: "template",
    }),
    defineField({
      name: "lineThreeText",
      title: "Text",
      type: "text",
      group: "template",
      rows: 20,
    }),
    defineField({
      name: "lineThreeTextFontFamily",
      title: "Font family (Text)",
      type: "string",
      group: "template",
    }),
    defineField({
      name: "textAlign",
      title: "Text alignment",
      type: "string",
      group: "template",
    }),
    defineField({
      name: "textColor",
      title: "Text color",
      type: "string",
      group: "template",
    }),
    defineField({
      name: "textBackgroundColor",
      title: "Text Background color",
      type: "string",
      group: "template",
    }),
    defineField({
      name: "videos",
      title: "Videos",
      type: "array",
      group: "video",
      of: [
        {
          type: "object",
          title: "Videos",
          fields: [
            defineField({
              name: "fileReferenceAemPath",
              title: "Video (AEM DAM path)",
              description:
                "Original AEM path from migration (read-only). Use the Sanity asset field below for previews and delivery.",
              type: "string",
              readOnly: true,
            }),
            defineField({
              name: "fileReference",
              title: "Video",
              type: "file",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "visible",
              title: "Devices",
              type: "string",
              options: {
                list: [
                  { title: "desktop", value: "desktop" },
                  { title: "tablet", value: "tablet" },
                  { title: "mobile", value: "mobile" },
                ],
              },
            }),
            defineField({
              name: "videoFormat",
              title: "Video Format",
              type: "string",
              options: {
                list: [
                  { title: "square", value: "square" },
                  { title: "16:9", value: "widescreen" },
                  { title: "vertical ", value: "vertical" },
                ],
              },
            }),
            defineField({
              name: "thumbnail",
              title: "Video thumbnail",
              description:
                'Video thumbnail rendition. Select particular video thumbnail among auto-generated under "renditions" subfolder of the video asset, or separate image asset to be used as thumbnail.',
              type: "image",
            }),
            defineField({
              name: "transcript",
              title: "Video transcript file path",
              description: "Path to video transcript .vvt file.",
              type: "image",
            }),
            defineField({
              name: "imageLink",
              title: "Static Image Link",
              type: "string",
            }),
            defineField({
              name: "settingsPlay",
              title: "50/50 Settings play with (Desktop)",
              type: "string",
              options: {
                list: [
                  { title: "Black Bars", value: "blackBars" },
                  { title: "Filling Space", value: "fillingSpace" },
                ],
              },
            }),
            defineField({
              name: "fullScreenTextDisplay",
              title: "Full Screen Text Display Setting",
              type: "string",
              options: {
                list: [
                  {
                    title: "SuperImpose over video",
                    value: "superImposeOverVideo",
                  },
                  { title: "Thumbnail Only", value: "thumbnailOnly" },
                ],
              },
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "autoPlay",
      type: "boolean",
      group: "video",
      initialValue: true,
    }),
    defineField({
      name: "fullWidth",
      type: "boolean",
      group: "video",
      initialValue: true,
    }),
    defineField({
      name: "playWithSound",
      type: "boolean",
      group: "video",
      initialValue: true,
    }),
    defineField({
      name: "loopVideo",
      type: "boolean",
      group: "video",
      initialValue: true,
    }),
    defineField({
      name: "showSoundIcon",
      type: "boolean",
      group: "video",
      initialValue: true,
    }),
    defineField({
      name: "buttons",
      title: "Buttons",
      type: "array",
      group: "buttons",
      of: [
        {
          type: "object",
          title: "Buttons",
          fields: [
            defineField({
              name: "text",
              title: "Button text",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "link",
              title: "Button link",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "type",
              title: "Button type",
              type: "string",
              options: {
                list: [
                  { title: "Ghost", value: "ghost" },
                  { title: "Filled", value: "filled" },
                  { title: "link", value: "link" },
                ],
              },
            }),
            defineField({
              name: "buttonPosition",
              title: "Button position",
              type: "string",
              options: {
                list: [
                  { title: "left", value: "left" },
                  { title: "right", value: "right" },
                  { title: "center", value: "center" },
                ],
              },
            }),
            defineField({
              name: "buttonHexColor",
              title: "Button color",
              type: "string",
            }),
            defineField({
              name: "ctaTextHexColor",
              title: "CTA Text Color",
              type: "string",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "buttonHeightMobile",
      title: "Button Blocks Height Mobile",
      type: "number",
      group: "buttons",
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: "buttonHeightDesktop",
      title: "Button Blocks Height Desktop",
      type: "number",
      group: "buttons",
      validation: (Rule) => Rule.min(0),
    }),
  ],
});
