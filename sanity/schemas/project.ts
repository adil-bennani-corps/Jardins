import { defineField, defineType } from "sanity";

export const projectSchema = defineType({
  name: "project",
  title: "Projet",
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
      name: "category",
      title: "Catégorie",
      type: "string",
      options: {
        list: [
          { title: "Abattage", value: "abattage" },
          { title: "Élagage", value: "elagage" },
          { title: "Terrasses", value: "terrasses" },
          { title: "Entretien", value: "entretien" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Localisation",
      type: "string",
    }),
    defineField({
      name: "imageBefore",
      title: "Image Avant",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "imageAfter",
      title: "Image Après",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "testimonialId",
      title: "ID Témoignage",
      type: "string",
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "date",
    }),
  ],
});
