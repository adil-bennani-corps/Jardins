import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { TrustedByLogos } from "@/components/social/TrustedByLogos";
import { ReviewsSection } from "@/components/social/ReviewsSection";

export const metadata: Metadata = {
  title: "Avis Clients | Jardins Moulron — Ce Que Disent Nos Clients",
  description:
    "4.5/5 sur Google Reviews, 94% de recommandation. Découvrez les témoignages de propriétaires satisfaits à Etterbeek, Rhode-Saint-Genèse et Bruxelles.",
  openGraph: {
    title: "Avis Clients | Jardins Moulron",
    description: "94% de recommandation. Ponctualité, travail soigné, passion.",
  },
};

const stats = [
  { value: "4.5/5", label: "Note Google Reviews" },
  { value: "94%", label: "Taux de recommandation" },
  { value: "500+", label: "Projets livrés" },
  { value: "12+", label: "Années d'expertise" },
];

export default function AvisClientsPage() {
  return (
    <div className="container-luxury section-padding">
      <Breadcrumbs items={[{ label: "Accueil", href: "/" }, { label: "Avis Clients" }]} />

      {/* H1 */}
      <section className="mt-4 text-center max-w-3xl mx-auto">
        <span className="badge-secondary mb-4">94% de recommandation</span>
        <h1 className="heading-display">La confiance se mérite, projet après projet</h1>
        <p className="mt-4 text-lg text-foreground-muted leading-relaxed">
          Ponctualité, travail soigné, passion du métier — ce ne sont pas nos mots,
          mais ceux de nos clients. Découvrez leurs témoignages authentiques.
        </p>
      </section>

      {/* Authority Stats */}
      <section className="mt-8 sm:mt-12 md:mt-14">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="card p-4 text-center sm:p-6">
              <p className="font-heading text-2xl font-bold text-primary-700 sm:text-3xl">{s.value}</p>
              <p className="mt-2 text-sm text-foreground-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="mt-8 sm:mt-12 md:mt-14">
        <ReviewsSection />
      </section>

      {/* Trust Logos */}
      <section className="mt-12">
        <TrustedByLogos />
      </section>

      {/* Google Review CTA */}
      <section className="mt-8 text-center sm:mt-12 md:mt-14">
        <p className="text-foreground-muted mb-4">
          Client satisfait ? Votre avis compte énormément pour nous.
        </p>
        <a
          href="https://www.google.com/maps"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary text-base"
        >
          Laisser un avis sur Google
        </a>
      </section>

      {/* Conversion CTA */}
      <section className="mt-12 rounded-2xl bg-primary-700 p-6 text-center text-white sm:mt-16 sm:rounded-3xl sm:p-8 md:mt-20 md:p-10">
        <h2 className="font-heading text-2xl font-bold md:text-3xl">
          Prêt à rejoindre nos clients satisfaits ?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-primary-100">
          Décrivez votre projet et recevez un devis détaillé sous 48h.
          Gratuit, sans engagement — comme pour chacun de nos 500+ clients.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
          <Link
            href="/devis-gratuit"
            className="btn w-full justify-center bg-white px-6 py-3 font-semibold text-primary-700 hover:bg-primary-50 transition-colors sm:w-auto sm:px-8"
          >
            Demander mon Devis Gratuit
          </Link>
          <a
            href="https://wa.me/32470000000?text=Bonjour,%20je%20souhaite%20un%20devis."
            target="_blank"
            rel="noopener noreferrer"
            className="btn w-full justify-center border-2 border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors sm:w-auto sm:px-8"
          >
            Consultation WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
