"use client";

import { useEffect, useState } from "react";

export interface Review {
  author: string;
  rating: number;
  text: string;
  date: string;
  source?: string;
}

interface ReviewCarouselProps {
  reviews: Review[];
  autoPlay?: boolean;
}

const fallbackReviews: Review[] = [
  {
    author: "Marc V. — Etterbeek",
    rating: 5,
    text: "Travail soigné et équipe ponctuelle. L'abattage d'un tilleul de 15 mètres dans un jardin exigu s'est déroulé sans le moindre dommage. Maîtrise impressionnante.",
    date: "2024-11-12",
    source: "google",
  },
  {
    author: "Catherine D. — Rhode-Saint-Genèse",
    rating: 5,
    text: "Notre terrasse en ipé est absolument sublime. Du premier rendez-vous à la livraison, tout était professionnel. Passion et rigueur à chaque étape.",
    date: "2024-09-28",
    source: "google",
  },
  {
    author: "Philippe L. — Uccle",
    rating: 5,
    text: "Contrat d'entretien annuel depuis 3 ans. Mon jardin n'a jamais été aussi beau. Ponctualité exemplaire, je recommande sans hésiter.",
    date: "2024-10-15",
    source: "google",
  },
  {
    author: "Isabelle R. — Etterbeek",
    rating: 5,
    text: "Intervention d'urgence suite à une tempête. En moins de 24h, l'arbre dangereux était sécurisé et évacué. Sérieux et réactivité au rendez-vous.",
    date: "2025-01-20",
    source: "google",
  },
];

export function ReviewCarousel({ reviews, autoPlay = true }: ReviewCarouselProps) {
  const items = reviews.length > 0 ? reviews : fallbackReviews;
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!autoPlay || items.length <= 1) return;
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % items.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoPlay, items.length]);

  return (
    <div className="relative w-full overflow-hidden" aria-label="Avis clients">
      <div
        className="flex w-full transition-transform duration-slow ease-out"
        style={{
          width: `${items.length * 100}%`,
          transform: `translateX(-${(current / items.length) * 100}%)`,
          transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      >
        {items.map((review, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-2 sm:px-6"
            style={{ width: `${100 / items.length}%`, minWidth: 0 }}
          >
            <blockquote className="card h-full min-h-[280px] p-6 sm:min-h-[300px] sm:p-8 md:p-10">
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={`text-xl sm:text-2xl ${i < review.rating ? "text-secondary-500" : "text-accent-slate-200"}`}>
                    ★
                  </span>
                ))}
              </div>
              <p className="text-base leading-relaxed text-foreground-muted italic sm:text-lg md:text-xl md:leading-loose whitespace-normal break-words">
                &ldquo;{review.text}&rdquo;
              </p>
              <footer className="mt-6 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-100 font-heading text-lg font-bold text-primary-700">
                  {review.author.charAt(0)}
                </div>
                <div className="min-w-0">
                  <cite className="block font-semibold not-italic text-charcoal-900">
                    {review.author}
                  </cite>
                  <p className="text-sm text-foreground-subtle">via Google</p>
                </div>
              </footer>
            </blockquote>
          </div>
        ))}
      </div>
      {items.length > 1 && (
        <div className="mt-6 flex justify-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              className={`h-2.5 rounded-full transition-all duration-normal ${
                i === current ? "w-8 bg-primary-600" : "w-2.5 bg-accent-slate-300"
              }`}
              aria-label={`Avis ${i + 1} sur ${items.length}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
