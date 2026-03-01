const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?sca_esv=643cd21dc826a565&sxsrf=ANbL-n5HBkkg8QM0MKfIllAi89dBo10KAA:1772295162269&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOVSuxA3biRwxrgokC6sGCCvfQXD93Z-j_43dRqDAZYaqIGDstybgWmW_0ti4idMVvIPU7yFqeXa5NMTvY3MskTFO9phyWwj8dRDmk-z4_yuCMRI0RQ%3D%3D&q=Jardins+Moulron+SPRL+S+Reviews&sa=X&ved=2ahUKEwjB8dX8yfySAxV1TqQEHadNGbwQ0bkNegQIJxAF&biw=1536&bih=695&dpr=1.25";

interface ContactInfoBlockProps {
  phone: string;
  email: string;
  address: string;
}

export function ContactInfoBlock({ phone, email, address }: ContactInfoBlockProps) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent-slate-300">Contact</h3>
      <ul className="space-y-3 text-sm">
        <li>
          <a href={`tel:${phone.replace(/s/g, "")}`} className="text-accent-slate-400 hover:text-white transition-colors duration-fast">
            {phone}
          </a>
        </li>
        <li>
          <a href={`mailto:${email}`} className="text-accent-slate-400 hover:text-white transition-colors duration-fast">
            {email}
          </a>
        </li>
        <li className="text-accent-slate-400">{address}</li>
        <li>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-accent-slate-400 hover:text-yellow-400 transition-colors duration-fast"
          >
            <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            Voir nos avis Google
          </a>
        </li>
      </ul>
    </div>
  );
}
