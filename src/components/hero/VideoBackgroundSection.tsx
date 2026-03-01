"use client";

import Link from "next/link";

interface VideoBackgroundSectionProps {
  videoSrc?: string;
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
}

export function VideoBackgroundSection({
  videoSrc,
  title,
  subtitle,
  ctaText = "Devis gratuit",
  ctaHref = "/devis-gratuit",
}: VideoBackgroundSectionProps) {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-slate-900">
      {videoSrc && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-50"
          preload="metadata"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}
      {!videoSrc && <div className="absolute inset-0 bg-gradient-to-br from-primary-800 to-primary-950" />}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 text-center text-white sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">{title}</h1>
        {subtitle && <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">{subtitle}</p>}
        <Link
          href={ctaHref}
          className="mt-8 inline-block rounded-lg bg-primary-600 px-8 py-4 text-lg font-semibold shadow-lg transition-colors hover:bg-primary-700"
        >
          {ctaText}
        </Link>
      </div>
    </section>
  );
}
