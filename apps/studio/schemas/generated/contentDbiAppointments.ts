import { defineField, defineType } from "sanity";

/**
 * Generated from AEM component: /apps/dbi/components/content/dbi-appointments
 * DO NOT EDIT BY HAND — regenerate via `pnpm migrate:schema`.
 */
export const contentDbiAppointments = defineType({
  name: "contentDbiAppointments",
  title: "DBI Appointments",
  type: "object",
  groups: [
    { name: "appointmentTypes", title: "Appointment Types" },
    { name: "appointmentLinks", title: "Appointment Links" },
    {
      name: "appointmentCalendarIConImageUrLs",
      title: "Appointment Calendar ICon Image URLs",
    },
  ],
  preview: {
    select: {
      prMedia: "googleIcon",
    },
    prepare({ prMedia }) {
      return {
        title: "DBI Appointments",
        media: prMedia,
      };
    },
  },
  fields: [
    defineField({
      name: "appointmentTypes",
      title: "Appointment Types",
      description: "Add Appointment Type",
      type: "array",
      group: "appointmentTypes",
      of: [
        {
          type: "object",
          title: "Appointment Types",
          fields: [
            defineField({
              name: "appointmentType",
              title: "Appointment Type",
              description: "Appointment Type",
              type: "string",
            }),
            defineField({
              name: "appointmentDuration",
              title: "Appointment Duration",
              description: "Appointment Duration (in minutes)",
              type: "string",
            }),
            defineField({
              name: "appointmentIcon",
              title: "Appointment Icon",
              description: "Path of the appointment icon",
              type: "image",
            }),
            defineField({
              name: "appointmentTitle",
              title: "Appointment Title",
              description: "Appointment Title",
              type: "string",
            }),
            defineField({
              name: "appointmentCta",
              title: "Appointment CTA",
              description: "Appointment Call To Action text",
              type: "string",
            }),
            defineField({
              name: "appointmentDetails",
              title: "Appointment Details",
              description: "Appointment details",
              type: "string",
            }),
            defineField({
              name: "storeLocatorUrl",
              title: "Store locator page",
              description: "Please provide path to the Store locator page",
              type: "string",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "timeTradeUrl",
      title: "Time Trade Details",
      description: "Please provide time trade url",
      type: "string",
      group: "appointmentLinks",
    }),
    defineField({
      name: "googleIcon",
      title: "Google Icon",
      description: "Path of the google icon",
      type: "image",
      group: "appointmentCalendarIConImageUrLs",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "yahooIcon",
      title: "Yahoo Icon",
      description: "Path of the yahoo icon",
      type: "image",
      group: "appointmentCalendarIConImageUrLs",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "outlookIcon",
      title: "Outlook Icon",
      description: "Path of the outlook icon",
      type: "image",
      group: "appointmentCalendarIConImageUrLs",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "calendarIcon",
      title: "Calendar Icon",
      description: "Path of the calendar icon",
      type: "image",
      group: "appointmentCalendarIConImageUrLs",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "officeIcon",
      title: "Office Icon",
      description: "Path of the office icon",
      type: "image",
      group: "appointmentCalendarIConImageUrLs",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
