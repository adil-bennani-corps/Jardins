import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { ProcessSteps } from "@/components/content/ProcessSteps";
import { AccordionFAQ, FAQItem } from "@/components/ui/AccordionFAQ";
import { BeforeAfterSlider } from "@/components/content/BeforeAfterSlider";

interface ServicePage {
  title: string;
  h1: string;
  locality?: string;
  heroDescription: string;
  benefits: { title: string; text: string }[];
  process: string[];
  faqs: FAQItem[];
  ctaHeadline: string;
  ctaBody: string;
}

const servicePages: Record<string, ServicePage> = {
  "abattage-elagage": {
    title: "Abattage & Élagage",
    h1: "Abattage & Élagage — Maîtrise et Sécurité",
    heroDescription:
      "Abattage et élagage maîtrisés, même dans les environnements les plus complexes et exigus. Chaque arbre est évalué individuellement. Chaque coupe est calculée. Notre assurance RC professionnelle couvre l'intégralité de l'intervention — pour votre sérénité totale.",
    benefits: [
      {
        title: "Sécurité sans compromis",
        text: "Équipements professionnels certifiés, protocoles stricts. Abattage directionnel ou démontage par section dans les espaces les plus contraints.",
      },
      {
        title: "Intervention rapide",
        text: "Arbre dangereux ou dégâts de tempête ? Nos équipes se mobilisent sous 24h pour sécuriser votre propriété et celle de vos voisins.",
      },
      {
        title: "Chantier propre garanti",
        text: "Évacuation complète des déchets verts, sciure et souches. Vous retrouvez votre terrain impeccable dès notre départ.",
      },
    ],
    process: [
      "Diagnostic gratuit sur place — évaluation des risques et du périmètre",
      "Devis détaillé sous 48h — transparent, sans surprise",
      "Intervention par équipe certifiée — techniques d'abattage directionnel",
      "Évacuation et nettoyage complet du chantier",
    ],
    faqs: [
      {
        question: "Êtes-vous assurés pour l'abattage d'arbres dangereux ?",
        answer: "Oui. Jardins Moulron SPRL S dispose d'une assurance responsabilité civile professionnelle complète couvrant toutes nos interventions d'abattage, y compris en zones à risque, espaces exigus et proximité de bâtiments.",
      },
      {
        question: "Faut-il une autorisation communale pour abattre un arbre ?",
        answer: "Selon le règlement communal et le type d'arbre, un permis d'urbanisme peut être requis. Nous vous accompagnons dans toutes les démarches administratives et pouvons constituer le dossier à votre place.",
      },
      {
        question: "Comment se déroule un rognage de souche ?",
        answer: "Après votre demande, nous effectuons une visite technique gratuite pour évaluer le diamètre, l'accessibilité et les réseaux souterrains. Le rognage est réalisé avec une rogneuse professionnelle, et les copeaux sont évacués ou utilisés comme paillis selon votre préférence.",
      },
      {
        question: "Intervenez-vous en urgence ?",
        answer: "Oui. Pour les situations d'urgence (arbre tombé, branche menaçante, dégâts de tempête), nous priorisons votre demande avec une intervention sous 24h. Contactez-nous par téléphone ou WhatsApp.",
      },
    ],
    ctaHeadline: "Un arbre vous préoccupe ?",
    ctaBody: "Diagnostic gratuit sur place sous 48h. Nous évaluons la situation et vous proposons la solution la plus sûre — sans engagement.",
  },

  "creation-entretien": {
    title: "Création & Entretien de jardins",
    h1: "Entretien Passionné — Un Jardin Impeccable Toute l'Année",
    heroDescription:
      "Un jardin impeccable toute l'année grâce à une équipe ponctuelle qui traite chaque détail avec rigueur. De la tonte hebdomadaire à la taille artistique de vos haies, nous apportons la passion qui transforme l'entretien en art.",
    benefits: [
      {
        title: "Régularité sans faille",
        text: "Nos contrats saisonniers et annuels garantissent des passages programmés. Votre jardin est toujours au meilleur de sa forme, sans que vous n'ayez à y penser.",
      },
      {
        title: "Expertise horticole",
        text: "Chaque plante, chaque haie, chaque massif reçoit le soin adapté à son espèce et à la saison. Taille, fertilisation, traitement — rien n'est laissé au hasard.",
      },
      {
        title: "Valorisation de votre bien",
        text: "Un jardin entretenu avec prestige augmente la valeur perçue de votre propriété. Curb appeal garanti pour les propriétaires exigeants.",
      },
    ],
    process: [
      "Audit gratuit de votre jardin — état des lieux et recommandations",
      "Proposition de contrat sur mesure — fréquence et prestations adaptées",
      "Interventions planifiées — équipe dédiée, ponctualité assurée",
      "Suivi saisonnier et ajustements — votre jardin évolue, notre soin aussi",
    ],
    faqs: [
      {
        question: "Quelles formules d'entretien proposez-vous ?",
        answer: "Nous proposons des contrats hebdomadaires, bi-mensuels, mensuels ou saisonniers. Chaque formule est personnalisée selon la taille de votre jardin, vos plantes et vos attentes. Le devis est gratuit.",
      },
      {
        question: "L'entretien inclut-il le désherbage et les massifs ?",
        answer: "Oui. Nos formules complètes couvrent tonte, taille de haies, désherbage, entretien des massifs, ramassage de feuilles et soins saisonniers.",
      },
      {
        question: "Puis-je modifier la fréquence en cours de contrat ?",
        answer: "Tout à fait. Nos contrats sont flexibles. Vous pouvez ajuster la fréquence ou ajouter des prestations à tout moment, sans pénalité.",
      },
    ],
    ctaHeadline: "Offrez-vous la sérénité d'un jardin toujours parfait",
    ctaBody: "Les créneaux d'entretien saisonnier se remplissent vite. Réservez votre place et recevez un devis personnalisé sous 48h.",
  },

  "clotures-terrasses": {
    title: "Clôtures & Terrasses",
    h1: "Créations Clés en Main — Terrasses & Clôtures de Prestige",
    heroDescription:
      "Transformez votre extérieur avec des terrasses, chalets et clôtures conçus pour durer et valoriser votre bien. Du bois exotique au composite haut de gamme, chaque création est un projet sur mesure conçu avec vous.",
    benefits: [
      {
        title: "Conception sur mesure",
        text: "Chaque terrasse est dessinée selon votre espace, votre style et votre usage. Ipé, bangkirai, composite — nous vous guidons vers le matériau idéal.",
      },
      {
        title: "Durabilité premium",
        text: "Matériaux sélectionnés pour résister au climat belge. Structures dimensionnées par nos soins pour une longévité de 15 à 25 ans minimum.",
      },
      {
        title: "Livraison clé en main",
        text: "De la première visite à la pose finale, vous avez un interlocuteur unique. Pas de sous-traitance, pas de mauvaise surprise. Chantier livré propre.",
      },
    ],
    process: [
      "Visite et étude de faisabilité gratuite — prise de cotes et analyse du terrain",
      "Proposition personnalisée avec choix des matériaux et rendu visuel",
      "Réalisation par nos équipes internes — aucune sous-traitance",
      "Livraison clé en main — nettoyage et conseils d'entretien inclus",
    ],
    faqs: [
      {
        question: "Quels types de bois proposez-vous pour les terrasses ?",
        answer: "Bois exotiques (ipé, bangkirai, cumaru), bois européens traités (pin, mélèze) et composites haut de gamme. Nous vous conseillons en fonction de votre budget, de l'exposition et de l'usage souhaité.",
      },
      {
        question: "Quel est le délai de réalisation ?",
        answer: "Comptez 2 à 4 semaines après validation du devis, selon la complexité et les matériaux choisis. Les bois exotiques peuvent nécessiter un délai d'approvisionnement que nous planifions avec vous.",
      },
      {
        question: "Proposez-vous des clôtures sur mesure ?",
        answer: "Oui. Clôtures en bois, panneaux composites, gabions, claustra — nous réalisons tout type de délimitation, avec une attention particulière à l'esthétique et à l'intégration paysagère.",
      },
    ],
    ctaHeadline: "Imaginez votre terrasse idéale",
    ctaBody: "Chaque projet est unique. Décrivez-nous votre vision et recevez une proposition sur mesure — gratuite et sans engagement.",
  },

  "elagage-etterbeek": {
    title: "Élagage à Etterbeek",
    h1: "Élagage Professionnel à Etterbeek",
    locality: "Etterbeek",
    heroDescription:
      "L'élagage régulier de vos arbres assure leur santé, limite les risques de chute et améliore l'ensoleillement de votre jardin. À Etterbeek, nos équipes connaissent les contraintes des jardins urbains et interviennent avec la maîtrise nécessaire.",
    benefits: [
      {
        title: "Spécialiste des jardins urbains",
        text: "Espaces restreints, proximité des habitations, réseaux aériens — nous adaptons notre technique à chaque configuration d'Etterbeek.",
      },
      {
        title: "Connaissance locale",
        text: "Nous connaissons les réglementations communales d'Etterbeek et vous accompagnons dans les démarches si une autorisation est nécessaire.",
      },
      {
        title: "Propreté garantie",
        text: "Branches, feuilles, sciure — tout est évacué. Votre jardin est rendu propre le jour même de l'intervention.",
      },
    ],
    process: [
      "Diagnostic et devis gratuit sur place à Etterbeek",
      "Intervention par équipe certifiée — matériel professionnel",
      "Évacuation complète des déchets verts",
      "Nettoyage minutieux du chantier",
    ],
    faqs: [
      {
        question: "Quand faire élaguer un arbre à Etterbeek ?",
        answer: "La période idéale est l'automne ou l'hiver, hors gel. Pour les urgences (branches menaçantes, dégâts de tempête), nous intervenons toute l'année sous 24h.",
      },
      {
        question: "Faut-il un permis pour élaguer à Etterbeek ?",
        answer: "L'élagage ne nécessite généralement pas de permis, mais certains arbres remarquables sont protégés. Nous vérifions la situation pour vous.",
      },
    ],
    ctaHeadline: "Vos arbres à Etterbeek méritent un soin expert",
    ctaBody: "Diagnostic gratuit à domicile. Nos équipes sont à 10 minutes de votre jardin.",
  },

  "abattage-rhode-saint-genese": {
    title: "Abattage à Rhode-Saint-Genèse",
    h1: "Abattage Sécurisé à Rhode-Saint-Genèse",
    locality: "Rhode-Saint-Genèse",
    heroDescription:
      "Un arbre malade, dangereux ou encombrant sur votre propriété à Rhode-Saint-Genèse ? Notre équipe intervient en toute sécurité avec le matériel adapté aux grands jardins résidentiels de la commune.",
    benefits: [
      {
        title: "Expertise grands arbres",
        text: "Les propriétés de Rhode-Saint-Genèse abritent souvent des arbres imposants. Notre équipement et notre savoir-faire sont dimensionnés pour ces interventions.",
      },
      {
        title: "Respect de votre propriété",
        text: "Abattage directionnel ou démontage par section pour protéger vos pelouses, allées et structures environnantes.",
      },
      {
        title: "Accompagnement administratif",
        text: "Nous gérons les demandes de permis d'urbanisme auprès de la commune de Rhode-Saint-Genèse.",
      },
    ],
    process: [
      "Évaluation des risques et diagnostic sur votre propriété",
      "Constitution du dossier administratif si nécessaire",
      "Abattage dirigé ou démontage sécurisé par section",
      "Débardage, évacuation complète et nettoyage",
    ],
    faqs: [
      {
        question: "Intervention d'urgence à Rhode-Saint-Genèse ?",
        answer: "Oui, nous priorisons les situations d'urgence. Contactez-nous par téléphone ou WhatsApp pour une intervention sous 24h.",
      },
      {
        question: "Le permis est-il obligatoire à Rhode-Saint-Genèse ?",
        answer: "Oui, dans la plupart des cas. La commune de Rhode-Saint-Genèse exige un permis d'urbanisme pour l'abattage d'arbres de haute tige. Nous nous chargeons de la demande.",
      },
    ],
    ctaHeadline: "Besoin d'un abattage sécurisé à Rhode-Saint-Genèse ?",
    ctaBody: "Visite technique gratuite et sans engagement. Nous évaluons la situation et vous proposons la solution la plus adaptée.",
  },

  "terrasse-bois-bruxelles": {
    title: "Terrasses en bois à Bruxelles",
    h1: "Terrasses en Bois de Prestige à Bruxelles",
    locality: "Bruxelles",
    heroDescription:
      "Une terrasse en bois transforme votre extérieur en espace de vie premium. À Bruxelles, nous réalisons des projets sur mesure qui subliment votre propriété — du simple au luxe, avec des matériaux sélectionnés pour leur durabilité et leur élégance.",
    benefits: [
      {
        title: "Matériaux d'exception",
        text: "Ipé, bangkirai, cumaru pour l'exotique. Pin traité, mélèze pour l'européen. Composite haute densité pour le sans-entretien. À vous de choisir.",
      },
      {
        title: "Conception architecturale",
        text: "Chaque terrasse est dessinée sur mesure selon votre espace, votre orientation et vos usages. Intégration d'éclairage, jardinières et garde-corps possibles.",
      },
      {
        title: "Garantie longévité",
        text: "Structures dimensionnées pour 15 à 25 ans. Visserie inox, lambourdes traitées, ventilation optimisée — les détails invisibles qui font la différence.",
      },
    ],
    process: [
      "Visite et étude de faisabilité — prise de cotes et analyse du sol",
      "Proposition avec choix des matériaux et estimation chiffrée",
      "Réalisation complète par nos équipes internes",
      "Livraison, nettoyage et conseils d'entretien personnalisés",
    ],
    faqs: [
      {
        question: "Quelle essence de bois choisir pour Bruxelles ?",
        answer: "Le climat belge est humide. Nous recommandons l'ipé ou le bangkirai pour leur résistance naturelle, ou un composite haute densité pour un entretien minimal. Le mélèze offre un excellent rapport qualité-prix en bois européen.",
      },
      {
        question: "Faut-il un permis d'urbanisme pour une terrasse ?",
        answer: "En Région bruxelloise, une terrasse au sol ne nécessite généralement pas de permis si elle ne dépasse pas certaines dimensions. Nous vérifions la réglementation applicable à votre situation.",
      },
    ],
    ctaHeadline: "Votre terrasse de rêve commence ici",
    ctaBody: "Visite gratuite, proposition sur mesure, réalisation clé en main. Les places pour la belle saison se remplissent — réservez maintenant.",
  },

  "entretien-jardin-bruxelles": {
    title: "Entretien de jardin à Bruxelles",
    h1: "Entretien de Jardin Professionnel à Bruxelles",
    locality: "Bruxelles",
    heroDescription:
      "Un jardin bien entretenu toute l'année, sans effort de votre part. Tonte, taille, désherbage, soins des massifs — notre équipe bruxelloise traite chaque détail avec passion et ponctualité.",
    benefits: [
      {
        title: "Formules flexibles",
        text: "Hebdomadaire, bi-mensuel, mensuel ou saisonnier. Adaptez la fréquence à vos besoins et à votre budget, sans engagement longue durée.",
      },
      {
        title: "Équipe locale dédiée",
        text: "Nos jardiniers connaissent les particularités des jardins bruxellois : sols, expositions, espèces végétales adaptées.",
      },
      {
        title: "Rapport après chaque passage",
        text: "Nous vous informons de l'état de votre jardin, des interventions réalisées et des recommandations saisonnières.",
      },
    ],
    process: [
      "Audit gratuit de votre jardin — état des lieux complet",
      "Proposition de contrat sur mesure — fréquence et prestations adaptées",
      "Interventions programmées — même jour, même équipe",
      "Suivi saisonnier avec ajustements et recommandations",
    ],
    faqs: [
      {
        question: "Quelle fréquence d'entretien recommandez-vous ?",
        answer: "Selon vos besoins : hebdomadaire pour les jardins de représentation, bi-mensuel ou mensuel pour l'entretien courant. Nous personnalisons le contrat après la visite.",
      },
      {
        question: "L'évacuation des déchets est-elle incluse ?",
        answer: "Oui. Tous nos forfaits incluent l'évacuation des déchets verts. Votre jardin est toujours laissé propre.",
      },
    ],
    ctaHeadline: "Votre jardin bruxellois mérite le meilleur",
    ctaBody: "Les places pour la saison se remplissent vite. Demandez votre audit gratuit et réservez votre créneau.",
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return Object.keys(servicePages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicePages[slug];
  if (!service) return { title: "Service" };
  const locality = service.locality || "Bruxelles";
  return {
    title: `${service.title} | Jardins Moulron — Paysagiste ${locality}`,
    description: `${service.h1} — ${service.heroDescription.slice(0, 140)}... Devis gratuit sous 48h.`,
    openGraph: {
      title: `${service.title} | Jardins Moulron`,
      description: `${service.heroDescription.slice(0, 140)}... Intervention à ${locality}.`,
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicePages[slug];

  if (!service) notFound();

  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Services", href: "/services" },
    { label: service.title },
  ];

  return (
    <div className="container-luxury section-padding">
      <Breadcrumbs items={breadcrumbItems} />

      {/* H1: Hero */}
      <section className="mt-4 max-w-3xl">
        <span className="badge-primary mb-4">
          {service.locality ? `Intervention à ${service.locality}` : "Jardins Moulron"}
        </span>
        <h1 className="heading-display">{service.h1}</h1>
        <p className="mt-4 text-lg text-foreground-muted leading-relaxed">{service.heroDescription}</p>
        <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
          <Link href="/devis-gratuit" className="btn-primary w-full justify-center px-6 py-3 text-base sm:w-auto sm:px-8">
            Demander mon Devis Gratuit
          </Link>
          <a
            href="https://wa.me/32470000000?text=Bonjour,%20je%20souhaite%20un%20devis."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline w-full justify-center px-6 py-3 text-base sm:w-auto sm:px-8"
          >
            Consultation WhatsApp
          </a>
        </div>
      </section>

      {/* Benefits */}
      <section className="mt-12 sm:mt-16 md:mt-20">
        <h2 className="heading-section">Pourquoi nous confier ce projet</h2>
        <div className="mt-8 grid gap-6 sm:mt-10 sm:gap-8 md:grid-cols-3">
          {service.benefits.map((b) => (
            <div key={b.title} className="card p-6">
              <h3 className="heading-card">{b.title}</h3>
              <p className="mt-2 text-foreground-muted leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mt-12 sm:mt-16 md:mt-20">
        <h2 className="heading-section">Notre processus</h2>
        <ProcessSteps steps={service.process} />
      </section>

      {/* Before/After */}
      <section className="mt-12 sm:mt-16 md:mt-20">
        <h2 className="heading-section">La transformation, en images</h2>
        <div className="mt-6 grid gap-6 sm:gap-8 md:grid-cols-2">
          <BeforeAfterSlider
            beforeImage="/images/amenagement-talus-avant.jpg"
            afterImage="/images/amenagement-talus-apres.jpg"
            title="Aménagement talus — Uccle"
          />
          <BeforeAfterSlider
            beforeImage="/images/Suppression_lierre_platane-avant.jpg"
            afterImage="/images/Suppression_lierre_platane-apres.jpg"
            title="Suppression lierre platane"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-12 mx-auto max-w-3xl sm:mt-16 md:mt-20">
        <h2 className="heading-section text-center">Questions fréquentes</h2>
        <div className="mt-6">
          <AccordionFAQ items={service.faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="mt-12 rounded-2xl bg-primary-700 p-6 text-white text-center sm:mt-16 sm:rounded-3xl sm:p-8 md:mt-20 md:p-10">
        <h2 className="font-heading text-2xl font-bold md:text-3xl">{service.ctaHeadline}</h2>
        <p className="mx-auto mt-3 max-w-xl text-primary-100">
          {service.ctaBody}
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
          <Link
            href="/devis-gratuit"
            className="btn w-full justify-center bg-white px-6 py-3 font-semibold text-primary-700 hover:bg-primary-50 transition-colors sm:w-auto sm:px-8"
          >
            Demander mon Devis Gratuit
          </Link>
          <a
            href="tel:+32470000000"
            className="btn w-full justify-center border-2 border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors sm:w-auto sm:px-8"
          >
            Appeler maintenant
          </a>
        </div>
      </section>
    </div>
  );
}
