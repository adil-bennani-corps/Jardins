import { defineField, defineType } from "sanity";

export const serviceSchema = defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titre",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "priceRange",
      title: "Fourchette de prix",
      type: "object",
      fields: [
        { name: "min", title: "Minimum (€)", type: "number" },
        { name: "max", title: "Maximum (€)", type: "number" },
        { name: "unit", title: "Unité", type: "string", initialValue: "€" },
      ],
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "ctaText",
      title: "Texte CTA",
      type: "string",
      initialValue: "Demander un devis",
    }),
    defineField({
      name: "localities",
      title: "Localités",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Etterbeek", value: "etterbeek" },
          { title: "Rhode-Saint-Genèse", value: "rhode-saint-genese" },
          { title: "Bruxelles", value: "bruxelles" },
        ],
      },
    }),
    defineField({
      name: "faqs",
      title: "FAQs",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "question", title: "Question", type: "string" },
            { name: "answer", title: "Réponse", type: "text" },
          ],
        },
      ],
    }),
  ],
});
