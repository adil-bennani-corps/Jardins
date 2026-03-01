import { Metadata } from "next";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { RealisationsClient } from "./RealisationsClient";

export const metadata: Metadata = {
  title: "Nos Réalisations | Jardins Moulron — Portfolio Paysagiste Bruxelles",
  description:
    "500+ projets livrés avec exigence. Terrasses prestige, abattage sécurisé, élagage et entretien à Etterbeek, Rhode-Saint-Genèse et Bruxelles. Avant/après en images.",
  openGraph: {
    title: "Nos Réalisations | Jardins Moulron",
    description: "La transformation en images. Avant/après de nos projets à Bruxelles.",
  },
};

export default function RealisationsPage() {
  return (
    <div className="container-luxury section-padding">
      <Breadcrumbs items={[{ label: "Accueil", href: "/" }, { label: "Réalisations" }]} />

      {/* H1 */}
      <div className="mt-4 max-w-3xl">
        <span className="badge-primary mb-4">500+ projets livrés</span>
        <h1 className="heading-display">Chaque projet est une promesse tenue</h1>
        <p className="mt-4 text-lg text-foreground-muted leading-relaxed">
          Terrasses de prestige, abattages techniques, jardins sublimés — découvrez le savoir-faire
          Jardins Moulron à travers nos réalisations à Etterbeek, Rhode-Saint-Genèse et Bruxelles.
          Filtrez par catégorie pour trouver l&apos;inspiration.
        </p>
      </div>

      <RealisationsClient />
    </div>
  );
}
