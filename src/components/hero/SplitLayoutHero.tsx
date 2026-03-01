import Link from "next/link";
import Image from "next/image";

interface SplitLayoutHeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  imageSrc?: string;
  imageAlt?: string;
}

export function SplitLayoutHero({
  title,
  subtitle,
  ctaText,
  ctaHref,
  imageSrc = "/images/hero.jpg",
  imageAlt = "Jardin paysager de prestige à Bruxelles — Jardins Moulron",
}: SplitLayoutHeroProps) {
  return (
    <section className="relative overflow-hidden bg-ivory-50">
      <div className="container-luxury grid min-h-0 grid-cols-1 items-center gap-6 py-8 sm:min-h-[70vh] sm:gap-8 sm:py-12 md:py-16 lg:min-h-[85vh] lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">
          <div className="mb-3 inline-flex items-center gap-2 sm:mb-4">
            <span className="h-px w-6 bg-secondary-500 sm:w-8" />
            <span className="text-xs font-medium tracking-wider text-secondary-600 uppercase sm:text-sm">
              Paysagiste Bruxelles — 12+ ans d&apos;expertise
            </span>
          </div>
          {/* H1 — max 6 mots */}
          <h1 className="heading-display text-charcoal-950">
            {title}
          </h1>
          {/* Subheadline — ~15 mots */}
          <p className="mt-4 text-base leading-relaxed text-foreground-muted sm:mt-6 sm:text-lg">{subtitle}</p>

          {/* Authority micro-copy */}
          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-foreground-subtle sm:mt-6 sm:gap-4 sm:text-sm">
            <span className="flex items-center gap-1.5">
              <span className="text-secondary-500">★</span> 4.5/5 Google
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-primary-600">✓</span> 500+ projets
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-primary-600">✓</span> Assuré RC
            </span>
          </div>

          {/* CTA — Primary + WhatsApp — Full width on mobile */}
          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link
              href={ctaHref}
              className="btn-primary w-full justify-center text-center text-base py-3.5 sm:w-auto sm:px-8 sm:py-4"
            >
              {ctaText}
            </Link>
            <a
              href="https://wa.me/32470000000?text=Bonjour,%20je%20souhaite%20un%20devis%20pour%20mon%20projet%20de%20jardin."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline w-full justify-center text-center text-base py-3.5 sm:w-auto sm:px-8 sm:py-4"
            >
              Consultation WhatsApp
            </a>
          </div>
        </div>
        <div className="relative order-1 aspect-[4/3] min-h-[240px] overflow-hidden rounded-2xl sm:min-h-[280px] sm:rounded-3xl lg:order-2 lg:aspect-square lg:min-h-0">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5 sm:rounded-3xl" />
        </div>
      </div>
    </section>
  );
}
