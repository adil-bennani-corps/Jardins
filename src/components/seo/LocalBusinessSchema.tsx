export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Jardins Moulron",
    description: "Jardinier professionnel à Bruxelles. Abattage, élagage, terrasses et entretien de jardins.",
    url: "https://jardinsmoulron.be",
    telephone: "+32470000000",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bruxelles",
      addressCountry: "BE",
    },
    areaServed: [
      { "@type": "City", name: "Etterbeek" },
      { "@type": "City", name: "Rhode-Saint-Genèse" },
      { "@type": "City", name: "Bruxelles" },
    ],
    priceRange: "€€",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
