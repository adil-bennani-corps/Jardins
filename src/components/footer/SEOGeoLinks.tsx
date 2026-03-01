import Link from "next/link";

interface GeoLink {
  href: string;
  label: string;
}

interface SEOGeoLinksProps {
  links: GeoLink[];
}

export function SEOGeoLinks({ links }: SEOGeoLinksProps) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent-slate-300">
        Zones d&apos;intervention
      </h3>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-accent-slate-400 hover:text-white transition-colors duration-fast"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
