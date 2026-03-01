import { Metadata } from "next";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { MultiStepLeadForm } from "@/components/forms/MultiStepLeadForm";
import { StickyCTAMobile } from "@/components/ui/StickyCTAMobile";
import { IconGrid } from "@/components/content/IconGrid";

export const metadata: Metadata = {
  title: "Devis Gratuit | Jardins Moulron — Paysagiste Bruxelles",
  description:
    "Demandez votre devis gratuit pour abattage, élagage, terrasses prestige ou entretien de jardin. Réponse personnalisée sous 48h, sans engagement. Bruxelles & périphérie.",
  openGraph: {
    title: "Devis Gratuit | Jardins Moulron",
    description: "Obtenez votre devis paysagiste sous 48h. Gratuit, sans engagement.",
  },
};

const guarantees = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Réponse sous 48h",
    description: "Devis détaillé envoyé dans les 2 jours ouvrables.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Sans engagement",
    description: "Aucune obligation. Comparez et décidez sereinement.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Prix transparent",
    description: "Tout est détaillé ligne par ligne. Pas de surprise.",
  },
];

export default function DevisGratuitPage() {
  return (
    <div className="container-luxury section-padding">
      <Breadcrumbs items={[{ label: "Accueil", href: "/" }, { label: "Devis Gratuit" }]} />

      <div className="mx-auto max-w-2xl">
        {/* H1 */}
        <span className="badge-primary mb-4">Gratuit & sans engagement</span>
        <h1 className="heading-display">Demander mon Devis Gratuit</h1>
        <p className="mt-4 text-lg text-foreground-muted leading-relaxed">
          Décrivez votre projet en quelques étapes et recevez une proposition détaillée sous 48h.
          Abattage, élagage, terrasse, entretien — chaque devis est personnalisé par nos experts.
        </p>

        {/* Trust Indicators */}
        <div className="mt-8">
          <IconGrid items={guarantees} columns={3} />
        </div>

        {/* Form */}
        <div className="mt-8 card p-5 sm:mt-12 sm:p-6 md:p-8">
          <MultiStepLeadForm />
        </div>

        {/* Alternative Contact */}
        <div className="mt-8 rounded-2xl border border-primary-100 p-6" style={{ backgroundColor: "var(--surface-raised)" }}>
          <h3 className="font-heading text-lg font-semibold">Besoin d&apos;une réponse immédiate ?</h3>
          <p className="mt-2 text-foreground-muted">
            Pour une urgence (abattage, arbre dangereux après tempête) ou simplement pour discuter
            de votre projet, contactez-nous directement. Disponible 7j/7 pour les urgences.
          </p>
          <div className="mt-5 flex flex-wrap gap-4">
            <a href="tel:+32475522156" className="btn-primary">
              Appeler maintenant
            </a>
            <a
              href="https://wa.me/32475522156?text=Bonjour,%20je%20souhaite%20un%20devis%20pour%20mon%20projet%20de%20jardin."
              target="_blank"
              rel="noopener noreferrer"
              className="btn border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366]/5 transition-colors"
            >
              Consultation WhatsApp
            </a>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-8 rounded-2xl bg-primary-50 p-6 text-center">
          <p className="text-sm font-medium text-primary-700">
            Rejoignez les <strong>500+ propriétaires</strong> qui nous ont fait confiance.
            <br />
            <span className="text-foreground-muted">4.5/5 sur Google Reviews — 94% de recommandation.</span>
          </p>
        </div>
      </div>

      <StickyCTAMobile />
    </div>
  );
}
