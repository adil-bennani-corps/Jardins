const zones = [
  "Etterbeek",
  "Rhode-Saint-Genèse",
  "Bruxelles",
  "Brabant flamand",
];

export function TrustedByLogos() {
  return (
    <div className="mt-8 pt-6 sm:mt-12 sm:pt-8" style={{ borderTop: "1px solid var(--border)" }}>
      <p className="mb-4 text-center text-xs font-medium text-foreground-subtle uppercase tracking-wider sm:mb-5 sm:text-sm">
        Zones d&apos;intervention
      </p>
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
        {zones.map((zone) => (
          <span key={zone} className="badge-slate">{zone}</span>
        ))}
      </div>
    </div>
  );
}
