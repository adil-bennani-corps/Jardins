import { Metadata } from "next";
import Link from "next/link";
import { ServiceCard } from "@/components/content/ServiceCard";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { AccordionFAQ } from "@/components/ui/AccordionFAQ";

export const metadata: Metadata = {
  title: "Services | Jardins Moulron — Paysagiste Bruxelles",
  description:
    "Abattage sécurisé, élagage, création de terrasses prestige et entretien passionné. 12+ ans d'expertise à Etterbeek, Rhode-Saint-Genèse et Bruxelles. Devis gratuit sous 48h.",
  openGraph: {
    title: "Nos Services | Jardins Moulron",
    description: "Sublimez votre extérieur. Abattage, terrasses, entretien — Bruxelles & périphérie.",
  },
};

const services = [
  {
    title: "Abattage & Élagage — Maîtrise Totale",
    description:
      "Abattage et élagage maîtrisés, même dans les environnements les plus complexes et exigus. Chaque intervention est planifiée avec rigueur, couverte par notre assurance RC professionnelle complète. Urgences sécurisées sous 24h.",
    priceRange: "Devis gratuit sur place",
    href: "/services/abattage-elagage",
    ctaText: "Sécuriser mon arbre",
    image: "/images/Taille_de_40_c_nes_de_h_tres-apres_ottenbourg.jpg",
  },
  {
    title: "Création & Entretien — Sérénité Toute l'Année",
    description:
      "Un jardin impeccable toute l'année grâce à une équipe ponctuelle qui traite chaque détail avec passion. Tonte, taille de haies, désherbage, soins des massifs. Contrats saisonniers ou annuels sur mesure.",
    priceRange: "À partir de 45€/passage",
    href: "/services/creation-entretien",
    ctaText: "Planifier mon entretien",
    image: "/images/jardin-apres.jpg",
  },
  {
    title: "Terrasses & Clôtures — Prestige Sur Mesure",
    description:
      "Transformez votre extérieur avec des terrasses, chalets et clôtures conçus pour durer et valoriser votre bien. Bois exotique (ipé, bangkirai), composite haut de gamme ou bois traité européen.",
    priceRange: "Projet personnalisé",
    href: "/services/clotures-terrasses",
    ctaText: "Imaginer mon projet",
    image: "/images/Cr_ation_d_un_petit_jardin_de_ville-etterbeek_apres.jpg",
  },
];

const localPages = [
  { href: "/services/elagage-etterbeek", label: "Élagage à Etterbeek", desc: "Taille et élagage professionnel dans les jardins résidentiels d'Etterbeek" },
  { href: "/services/abattage-rhode-saint-genese", label: "Abattage à Rhode-Saint-Genèse", desc: "Abattage sécurisé en zone résidentielle à Rhode-Saint-Genèse" },
  { href: "/services/terrasse-bois-bruxelles", label: "Terrasses en bois à Bruxelles", desc: "Création de terrasses prestige en bois exotique et composite" },
  { href: "/services/entretien-jardin-bruxelles", label: "Entretien de jardin à Bruxelles", desc: "Contrats d'entretien régulier pour jardins bruxellois" },
];

const servicesFaqs = [
  {
    question: "Quels sont vos délais d'intervention ?",
    answer: "Pour les urgences (arbre dangereux, dégâts de tempête), nous intervenons sous 24h. Pour les projets planifiés, comptez un rendez-vous de diagnostic sous 48h et un démarrage sous 2 à 3 semaines selon la saison.",
  },
  {
    question: "Travaillez-vous les week-ends ?",
    answer: "Sur demande et selon la disponibilité de nos équipes, nous pouvons planifier des interventions le samedi matin. Les urgences sont traitées 7j/7.",
  },
  {
    question: "Peut-on combiner plusieurs services en un seul chantier ?",
    answer: "Absolument. Beaucoup de nos clients combinent élagage, entretien et création de terrasse dans un projet global. Cela optimise les coûts de déplacement et garantit une cohérence esthétique.",
  },
];

export default function ServicesPage() {
  return (
    <div className="container-luxury section-padding">
      <Breadcrumbs items={[{ label: "Accueil", href: "/" }, { label: "Services" }]} />

      {/* H1 */}
      <div className="mt-4 max-w-3xl">
        <span className="badge-primary mb-4">12+ ans d&apos;expertise</span>
        <h1 className="heading-display">Sublimer, sécuriser, entretenir</h1>
        <p className="mt-4 text-lg text-foreground-muted leading-relaxed">
          Chaque propriété mérite un soin d&apos;exception. De l&apos;abattage technique au prestige
          d&apos;une terrasse sur mesure, notre équipe apporte la maîtrise et la passion
          qui font la différence à Etterbeek, Rhode-Saint-Genèse et dans tout Bruxelles.
        </p>
      </div>

      {/* Service Cards */}
      <div className="mt-8 grid gap-6 sm:mt-10 sm:gap-8 md:grid-cols-2 lg:mt-14 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.href} {...service} />
        ))}
      </div>

      {/* Authority Banner */}
      <div className="mt-12 rounded-2xl bg-primary-800 p-6 text-white sm:mt-16 sm:rounded-3xl sm:p-8 md:mt-20 md:p-12">
        <div className="grid gap-6 sm:gap-8 md:grid-cols-3 text-center">
          <div>
            <p className="font-heading text-4xl font-bold">500+</p>
            <p className="mt-2 text-primary-200">Projets livrés avec exigence</p>
          </div>
          <div>
            <p className="font-heading text-4xl font-bold">94%</p>
            <p className="mt-2 text-primary-200">Taux de recommandation</p>
          </div>
          <div>
            <p className="font-heading text-4xl font-bold">48h</p>
            <p className="mt-2 text-primary-200">Délai de réponse garanti</p>
          </div>
        </div>
      </div>

      {/* Local SEO Pages */}
      <div className="mt-12 rounded-2xl bg-primary-50 p-6 sm:mt-16 sm:rounded-3xl sm:p-8 md:mt-20 md:p-10">
        <h2 className="heading-card">Services par localité</h2>
        <p className="mt-2 text-foreground-muted">
          Des équipes dédiées pour chaque quartier de Bruxelles et sa périphérie.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {localPages.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group rounded-xl border border-primary-100 bg-white p-4 transition-all duration-fast hover:border-primary-300 hover:shadow-soft"
            >
              <p className="font-semibold text-primary-700 group-hover:text-primary-800">{link.label}</p>
              <p className="mt-1 text-sm text-foreground-muted">{link.desc}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-12 mx-auto max-w-3xl sm:mt-16 md:mt-20">
        <h2 className="heading-section text-center">Questions sur nos services</h2>
        <div className="mt-8">
          <AccordionFAQ items={servicesFaqs} />
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 rounded-2xl bg-primary-600 p-6 text-center text-white sm:mt-16 sm:rounded-3xl sm:p-8 md:mt-20 md:p-10">
        <h2 className="font-heading text-2xl font-bold md:text-3xl">
          Quel est votre prochain projet ?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-primary-100">
          Décrivez-nous votre besoin et recevez un devis détaillé sous 48h. Gratuit, sans engagement.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/devis-gratuit" className="btn bg-white px-8 py-3 font-semibold text-primary-700 hover:bg-primary-50 transition-colors">
            Demander mon Devis Gratuit
          </Link>
          <a
            href="https://wa.me/32470000000?text=Bonjour,%20je%20souhaite%20un%20devis%20pour%20mon%20projet."
            target="_blank"
            rel="noopener noreferrer"
            className="btn border-2 border-white/30 px-8 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
          >
            Consultation WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
