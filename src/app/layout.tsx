import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { StickyHeader } from "@/components/navigation/StickyHeader";
import { Footer } from "@/components/footer/Footer";
import { FloatingCallButton } from "@/components/forms/FloatingCallButton";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: {
    default: "Jardins Moulron | Paysagiste Bruxelles — Abattage, Terrasses Prestige, Entretien",
    template: "%s | Jardins Moulron",
  },
  description:
    "L'excellence paysagère à Bruxelles. Abattage sécurisé, élagage, terrasses prestige et entretien passionné. 12+ ans d'expertise à Etterbeek & Rhode-Saint-Genèse. Devis gratuit sous 48h.",
  metadataBase: new URL("https://jardinsmoulron.be"),
  openGraph: {
    type: "website",
    locale: "fr_BE",
    url: "https://jardinsmoulron.be",
    siteName: "Jardins Moulron",
    title: "Jardins Moulron | Paysagiste Bruxelles — L'Excellence Paysagère",
    description: "Sublimez vos espaces extérieurs. Abattage, terrasses prestige, entretien passionné. 500+ projets livrés. Devis gratuit.",
  },
  alternates: {
    canonical: "https://jardinsmoulron.be",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-BE" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">
        <LocalBusinessSchema />
        <StickyHeader />
        <main>{children}</main>
        <Footer />
        <FloatingCallButton />
      </body>
    </html>
  );
}
