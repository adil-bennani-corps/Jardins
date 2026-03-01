import Link from "next/link";
import Image from "next/image";
import { SEOGeoLinks } from "./SEOGeoLinks";
import { ContactInfoBlock } from "./ContactInfoBlock";
import { MapEmbed } from "./MapEmbed";
import { NewsletterSignup } from "@/components/forms/NewsletterSignup";

const geoLinks = [
  { href: "/services/elagage-etterbeek", label: "Élagage Etterbeek" },
  { href: "/services/abattage-rhode-saint-genese", label: "Abattage Rhode-Saint-Genèse" },
  { href: "/services/terrasse-bois-bruxelles", label: "Terrasse bois Bruxelles" },
  { href: "/services/entretien-jardin-bruxelles", label: "Entretien jardin Bruxelles" },
];

const serviceLinks = [
  { href: "/services/abattage-elagage", label: "Abattage & Élagage" },
  { href: "/services/creation-entretien", label: "Création & Entretien" },
  { href: "/services/clotures-terrasses", label: "Clôtures & Terrasses" },
];

export function Footer() {
  return (
    <footer className="bg-charcoal-950 text-accent-slate-300">
      <div className="container-luxury py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand + Newsletter */}
          <div className="min-w-0 lg:col-span-1">
            <Link href="/" className="relative block h-12 w-28 sm:h-14 sm:w-36">
              <Image
                src="/images/logo.jpg"
                alt="Jardins Moulron"
                fill
                className="rounded-xl object-contain object-left"
                sizes="144px"
              />
            </Link>
            <p className="mt-3 text-xs leading-relaxed text-accent-slate-400 sm:text-sm">
              Paysagiste professionnel à Bruxelles depuis plus de 12 ans. Abattage sécurisé,
              élagage, terrasses prestige et entretien passionné.
            </p>
            <div className="mt-5">
              <p className="mb-3 text-sm font-medium text-accent-slate-300">Suivez nos transformations</p>
              <div className="flex gap-3 mb-4">
                <a
                  href="https://www.facebook.com/jardinsmoulron"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-slate-800 text-accent-slate-300 hover:bg-primary-600 hover:text-white transition-colors duration-fast"
                  aria-label="Facebook"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                </a>
                <a
                  href="https://wa.me/32470000000?text=Bonjour,%20je%20souhaite%20un%20devis."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-slate-800 text-accent-slate-300 hover:bg-[#25D366] hover:text-white transition-colors duration-fast"
                  aria-label="WhatsApp"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                </a>
              </div>
              <NewsletterSignup />
            </div>
          </div>

          {/* Services + Zones */}
          <div className="min-w-0">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent-slate-300">Services</h3>
            <nav className="flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-accent-slate-400 hover:text-white transition-colors duration-fast">
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-6">
              <SEOGeoLinks links={geoLinks} />
            </div>
          </div>

          {/* Contact */}
          <div className="min-w-0">
          <ContactInfoBlock
            phone="+32 470 00 00 00"
            email="contact@jardinsmoulron.be"
            address="Bruxelles, Belgique"
          />
          </div>

          {/* Navigation */}
          <div className="min-w-0">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent-slate-300">Navigation</h3>
            <nav className="flex flex-col gap-3">
              <Link href="/" className="text-sm text-accent-slate-400 hover:text-white transition-colors duration-fast">
                Accueil
              </Link>
              <Link href="/services" className="text-sm text-accent-slate-400 hover:text-white transition-colors duration-fast">
                Services
              </Link>
              <Link href="/realisations" className="text-sm text-accent-slate-400 hover:text-white transition-colors duration-fast">
                Réalisations
              </Link>
              <Link href="/avis-clients" className="text-sm text-accent-slate-400 hover:text-white transition-colors duration-fast">
                Avis Clients
              </Link>
              <Link href="/devis-gratuit" className="text-sm font-semibold text-primary-400 hover:text-primary-300 transition-colors duration-fast">
                Devis Gratuit
              </Link>
            </nav>
          </div>
        </div>

        {/* Map */}
        <div className="mt-10 border-t border-accent-slate-800 pt-6 sm:mt-14 sm:pt-8">
          <MapEmbed />
        </div>

        {/* Legal */}
        <div className="mt-6 border-t border-accent-slate-800 pt-6 text-center text-[10px] text-accent-slate-500 space-y-2 sm:mt-8 sm:text-xs">
          <p>
            © {new Date().getFullYear()} <strong>Jardins Moulron SPRL S</strong> — Tous droits réservés.
          </p>
          <p>
            N° TVA : BE 0XXX.XXX.XXX — Entreprise établie en Belgique.
          </p>
          <p>
            Ce site respecte le <strong>RGPD</strong> (Règlement Général sur la Protection des Données).
            Vos données personnelles ne sont utilisées que pour répondre à vos demandes de devis.
          </p>
        </div>
      </div>
    </footer>
  );
}
