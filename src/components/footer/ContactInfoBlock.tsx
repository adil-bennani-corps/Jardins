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
          <a href={`tel:${phone.replace(/\s/g, "")}`} className="text-accent-slate-400 hover:text-white transition-colors duration-fast">
            {phone}
          </a>
        </li>
        <li>
          <a href={`mailto:${email}`} className="text-accent-slate-400 hover:text-white transition-colors duration-fast">
            {email}
          </a>
        </li>
        <li className="text-accent-slate-400">{address}</li>
      </ul>
    </div>
  );
}
