const usps = [
  { icon: "✓", text: "Entreprise SPRL S établie" },
  { icon: "★", text: "12+ ans d'expertise" },
  { icon: "◎", text: "Devis gratuit sous 48h" },
  { icon: "⚡", text: "Urgences en 24h" },
  { icon: "🛡", text: "Assurance RC complète" },
];

export function USPRibbon() {
  return (
    <div className="border-y bg-white py-4 sm:py-5" style={{ borderColor: "var(--border)" }}>
      <div className="container-luxury flex flex-wrap items-center justify-center gap-x-4 gap-y-3 sm:gap-x-6 sm:gap-y-4 md:gap-x-10">
        {usps.map((usp) => (
          <div key={usp.text} className="flex items-center gap-2 sm:gap-2.5">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-100 text-[10px] text-primary-700 sm:h-6 sm:w-6 sm:text-xs">
              {usp.icon}
            </span>
            <span className="text-xs font-medium text-foreground-muted sm:text-sm">{usp.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
