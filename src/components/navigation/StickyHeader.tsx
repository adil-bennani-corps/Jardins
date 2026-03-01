"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { MobileDrawer } from "./MobileDrawer";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/avis-clients", label: "Avis Clients" },
  { href: "/devis-gratuit", label: "Devis Gratuit" },
];

export function StickyHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-normal ${
          isScrolled
            ? "bg-white/95 shadow-soft-md glass"
            : "bg-white"
        }`}
      >
        <div className="container-luxury flex h-14 items-center justify-between py-3 sm:h-18 sm:py-4">
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3">
            <div className="relative h-10 w-10 shrink-0 sm:h-12 sm:w-12">
              <Image
                src="/images/logo.jpg"
                alt="Jardins Moulron"
                fill
                className="rounded-xl object-contain"
                sizes="48px"
                priority
              />
            </div>
            <span className="font-heading text-lg font-bold tracking-tight text-primary-800 sm:text-xl">
              Jardins Moulron
            </span>
          </Link>

          <nav className="hidden md:flex md:items-center md:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground-muted hover:text-primary-600 transition-colors duration-fast"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/devis-gratuit" className="btn-primary text-sm">
              Devis Gratuit
            </Link>
          </nav>

          <button
            type="button"
            className="md:hidden rounded-xl p-2.5 text-foreground-muted hover:bg-primary-50 transition-colors duration-fast"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Ouvrir le menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>
      <MobileDrawer isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
