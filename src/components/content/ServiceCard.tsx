import Link from "next/link";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  priceRange?: string;
  image?: string;
  href: string;
  ctaText?: string;
}

export function ServiceCard({
  title,
  description,
  priceRange,
  image,
  href,
  ctaText = "En savoir plus",
}: ServiceCardProps) {
  return (
    <article className="card group">
      <Link href={href} className="block">
        <div className="relative h-44 overflow-hidden bg-primary-50 sm:h-48 md:h-52">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-slow group-hover:scale-105"
              style={{ transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-primary-400">
              <svg className="h-16 w-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
          )}
        </div>
        <div className="p-4 sm:p-5 md:p-6">
          <h3 className="heading-card text-charcoal">{title}</h3>
          <p className="mt-2 text-foreground-muted line-clamp-3">{description}</p>
          {priceRange && (
            <span className="badge-secondary mt-3">{priceRange}</span>
          )}
          <span className="mt-4 inline-flex items-center text-sm font-semibold text-primary-600 group-hover:underline">
            {ctaText}
            <svg className="ml-1.5 h-4 w-4 transition-transform duration-fast group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </Link>
    </article>
  );
}
