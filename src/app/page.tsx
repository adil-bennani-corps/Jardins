import { SplitLayoutHero } from "@/components/hero/SplitLayoutHero";
import { USPRibbon } from "@/components/hero/USPRibbon";
import { ServiceCard } from "@/components/content/ServiceCard";
import { ReviewCarousel } from "@/components/social/ReviewCarousel";
import { TrustedByLogos } from "@/components/social/TrustedByLogos";
import { BeforeAfterSlider } from "@/components/content/BeforeAfterSlider";
import { IconGrid } from "@/components/content/IconGrid";
import { AccordionFAQ } from "@/components/ui/AccordionFAQ";
import Link from "next/link";

/* ── H2: Service Cards "Nos expertises" ── */
const services = [
  {
    title: "Expertise Technique & Sécurité",
    description:
      "Abattage et élagage maîtrisés, même dans les environnements les plus complexes et exigus. Chaque intervention est couverte par notre assurance RC professionnelle.",
    priceRange: "Devis gratuit",
    href: "/services/abattage-elagage",
    ctaText: "Sécuriser mon arbre",
    image: "/images/Taille_de_40_c_nes_de_h_tres-apres_ottenbourg.jpg",
  },
  {
    title: "Créations Clés en Main",
    description:
      "Transformez votre extérieur avec des terrasses, chalets et clôtures conçus pour durer et valoriser votre bien. Du bois exotique au composite haut de gamme.",
    priceRange: "Projet sur mesure",
    href: "/services/clotures-terrasses",
    ctaText: "Imaginer mon projet",
    image: "/images/Cr_ation_d_un_petit_jardin_de_ville-etterbeek_apres.jpg",
  },
  {
    title: "Entretien Passionné",
    description:
      "Un jardin impeccable toute l'année grâce à une équipe ponctuelle qui traite chaque détail avec rigueur. Contrats saisonniers ou annuels.",
    priceRange: "À partir de 45€",
    href: "/services/creation-entretien",
    ctaText: "Planifier l'entretien",
    image: "/images/jardin-apres.jpg",
  },
];

const featuredProjects = [
  {
    title: "Aménagement talus — Uccle",
    before: "/images/amenagement-talus-avant.jpg",
    after: "/images/amenagement-talus-apres.jpg",
  },
  {
    title: "Rénovation jardin palissade gazon — Uccle",
    before: "/images/R_novation_petit_jardin_palissade_gazon_en_rouleaux_robot_tondeuse-uccle-avant.jpg",
    after: "/images/R_novation_petit_jardin_palissade_gazon_en_rouleaux_robot_tondeuse-uccle-apres.jpg",
  },
  {
    title: "Création petit jardin de ville — Etterbeek",
    before: "/images/Cr_ation_d_un_petit_jardin_de_ville_avant.jpg",
    after: "/images/Cr_ation_d_un_petit_jardin_de_ville-etterbeek_apres.jpg",
  },
  {
    title: "Suppression lierre platane",
    before: "/images/Suppression_lierre_platane-avant.jpg",
    after: "/images/Suppression_lierre_platane-apres.jpg",
  },
];

const whyChooseUs = [
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "500+ projets réalisés",
    description: "Chaque chantier livré avec la même exigence de prestige.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Intervention en 48h",
    description: "Urgences abattage traitées sous 24h. Sérénité garantie.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    title: "4.5/5 sur Google",
    description: "94% de recommandation. Ponctualité, passion, travail soigné.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Bruxelles & périphérie",
    description: "Etterbeek, Rhode-Saint-Genèse, Uccle, Watermael-Boitsfort.",
  },
];

const homeFaqs = [
  {
    question: "Proposez-vous des devis gratuits ?",
    answer: "Absolument. Chaque projet débute par une visite gratuite et sans engagement. Nous analysons vos besoins sur place et vous envoyons un devis détaillé sous 48h. Transparence totale sur les coûts, sans surprise.",
  },
  {
    question: "Êtes-vous assurés pour l'abattage d'arbres dangereux ?",
    answer: "Oui. Jardins Moulron SPRL S dispose d'une assurance responsabilité civile professionnelle complète couvrant l'intégralité de nos interventions, y compris l'abattage en zones à risque et les espaces exigus. Votre sérénité est notre priorité.",
  },
  {
    question: "Dans quelles zones intervenez-vous autour de Bruxelles ?",
    answer: "Nous couvrons Bruxelles et sa périphérie : Etterbeek, Rhode-Saint-Genèse, Uccle, Watermael-Boitsfort, Woluwe, Ixelles, Tervuren et le Brabant flamand. Pour les communes plus éloignées, contactez-nous — nous évaluons chaque demande.",
  },
  {
    question: "Évacuez-vous les déchets verts après le chantier ?",
    answer: "Systématiquement. Chaque chantier est livré propre et net. L'évacuation des déchets verts, souches et gravats est incluse dans nos devis. Vous n'avez rien à gérer.",
  },
  {
    question: "Quel est le délai moyen pour une création de terrasse ?",
    answer: "Comptez 2 à 4 semaines après validation du devis, selon la complexité du projet et les matériaux choisis. Les terrasses sur mesure en bois exotique (ipé, bangkirai) nécessitent un délai d'approvisionnement que nous planifions avec vous.",
  },
  {
    question: "Faites-vous l'entretien saisonnier (taille, tonte) ?",
    answer: "C'est notre spécialité récurrente. Nous proposons des contrats annuels ou saisonniers adaptés : tonte, taille de haies, désherbage, soins des massifs. Votre jardin reste impeccable sans que vous n'ayez à y penser.",
  },
  {
    question: "Comment se déroule une demande de rognage de souche ?",
    answer: "Après votre demande, nous effectuons une visite technique gratuite pour évaluer le diamètre, l'accessibilité et les réseaux souterrains. Le rognage est réalisé avec une rogneuse professionnelle, et les copeaux sont évacués ou laissés comme paillis selon votre préférence.",
  },
  {
    question: "Pourquoi choisir Jardins Moulron plutôt qu'un indépendant ?",
    answer: "Structure SPRL S établie, assurance RC complète, 12 ans d'expertise documentée, et plus de 500 projets livrés. Contrairement à un indépendant, nous garantissons une continuité de service, du matériel professionnel entretenu, et une équipe formée aux normes de sécurité les plus strictes.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* H1: Hero — 6 words max */}
      <SplitLayoutHero
        title="L'Excellence Paysagère à Votre Service"
        subtitle="De l'abattage délicat à la création de terrasses prestigieuses, Jardins Moulron sublime vos espaces extérieurs à Bruxelles depuis plus de 12 ans."
        ctaText="Demander mon Devis Gratuit"
        ctaHref="/devis-gratuit"
      />
      <USPRibbon />

      {/* Social Proof — Authority + Trust */}
      <section className="section-padding" style={{ backgroundColor: "var(--surface)" }}>
        <div className="container-luxury">
          <div className="mx-auto max-w-2xl text-center">
            <span className="badge-secondary mb-4">94% de recommandation</span>
            <h2 className="heading-section">La confiance de nos clients bruxellois</h2>
            <p className="mt-4 text-base text-foreground-muted sm:text-lg">
              Ponctualité, travail soigné, passion du métier — les mots qui reviennent dans chaque avis.
            </p>
          </div>
          <div className="mx-auto mt-8 w-full max-w-4xl sm:mt-12">
            <ReviewCarousel reviews={[]} />
          </div>
          <TrustedByLogos />
        </div>
      </section>

      {/* Core Services — 3 Benefit Blocks */}
      <section className="section-padding" style={{ backgroundColor: "var(--surface-raised)" }}>
        <div className="container-luxury">
          <div className="mx-auto max-w-2xl text-center">
            <span className="badge-primary mb-4">Nos expertises</span>
            <h2 className="heading-section">Sublimer, sécuriser, entretenir</h2>
            <p className="mt-4 text-base text-foreground-muted sm:text-lg">
              Trois domaines de maîtrise pour répondre à chaque besoin de votre propriété, avec la rigueur qui fait notre réputation.
            </p>
          </div>
          <div className="mt-8 grid gap-6 sm:mt-10 sm:gap-8 md:grid-cols-2 lg:mt-14 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.href} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Authority — Quantifiable Results */}
      <section className="section-padding" style={{ backgroundColor: "var(--surface)" }}>
        <div className="container-luxury">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="heading-section">Pourquoi les propriétaires bruxellois nous font confiance</h2>
            <p className="mt-4 text-foreground-muted">
              Des résultats mesurables, une réputation construite projet après projet.
            </p>
          </div>
          <div className="mt-8 sm:mt-14">
            <IconGrid items={whyChooseUs} columns={4} />
          </div>
        </div>
      </section>

      {/* Featured Projects — Before/After */}
      <section className="section-padding" style={{ backgroundColor: "var(--surface-raised)" }}>
        <div className="container-luxury">
          <div className="mx-auto max-w-2xl text-center">
            <span className="badge-primary mb-4">Avant / Après</span>
            <h2 className="heading-section">La transformation, en images</h2>
            <p className="mt-4 text-base text-foreground-muted sm:text-lg">
              Chaque projet est une promesse tenue. Faites glisser pour voir la différence.
            </p>
          </div>
          <div className="mt-8 grid gap-6 sm:mt-10 sm:gap-8 sm:grid-cols-2">
            {featuredProjects.map((project) => (
              <BeforeAfterSlider
                key={project.title}
                beforeImage={project.before}
                afterImage={project.after}
                title={project.title}
              />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/realisations" className="inline-flex items-center font-semibold text-primary-600 hover:text-primary-700 transition-colors duration-fast">
              Découvrir tous nos projets
              <svg className="ml-1.5 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ — 8 High-Intent Questions */}
      <section className="section-padding" style={{ backgroundColor: "var(--surface)" }}>
        <div className="container-luxury">
          <div className="mx-auto max-w-3xl">
            <h2 className="heading-section text-center">Questions fréquentes</h2>
            <p className="mt-4 text-center text-foreground-muted">
              Tout ce que vous devez savoir avant de nous confier votre projet.
            </p>
            <div className="mt-8 sm:mt-10">
              <AccordionFAQ items={homeFaqs} />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA — Conversion Push */}
      <section className="section-padding bg-primary-800 text-white">
        <div className="container-luxury text-center">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl md:text-4xl">
            Prêt à sublimer votre extérieur ?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-primary-200 sm:text-lg">
            Obtenez votre devis gratuit et sans engagement. Réponse personnalisée sous 48h.
            Les créneaux de taille saisonnière se remplissent vite — réservez le vôtre.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
            <Link
              href="/devis-gratuit"
              className="btn w-full justify-center bg-white px-6 py-3.5 text-base font-semibold text-primary-800 shadow-soft-lg hover:bg-primary-50 transition-colors sm:w-auto sm:px-8 sm:py-4"
            >
              Demander mon Devis Gratuit
            </Link>
            <a
              href="https://wa.me/32470000000?text=Bonjour,%20je%20souhaite%20un%20devis%20pour%20mon%20projet."
              target="_blank"
              rel="noopener noreferrer"
              className="btn w-full justify-center border-2 border-white/30 px-6 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-colors sm:w-auto sm:px-8 sm:py-4"
            >
              Consultation WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
