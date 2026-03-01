import { defineField, defineType } from "sanity";

export const faqSchema = defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    defineField({
      name: "question",
      title: "Question",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "answer",
      title: "Réponse",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "service",
      title: "Service associé",
      type: "string",
      options: {
        list: [
          { title: "Abattage & Élagage", value: "abattage-elagage" },
          { title: "Création & Entretien", value: "creation-entretien" },
          { title: "Clôtures & Terrasses", value: "clotures-terrasses" },
          { title: "Général", value: "general" },
        ],
      },
    }),
  ],
});
