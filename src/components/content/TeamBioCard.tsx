import Image from "next/image";

interface TeamBioCardProps {
  name: string;
  role: string;
  image?: string;
  bio?: string;
}

export function TeamBioCard({ name, role, image, bio }: TeamBioCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
      <div className="mx-auto h-24 w-24 overflow-hidden rounded-full bg-primary-100">
        {image ? (
          <Image src={image} alt={name} width={96} height={96} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-2xl font-bold text-primary-600">
            {name.charAt(0)}
          </div>
        )}
      </div>
      <h3 className="mt-4 text-lg font-semibold text-slate-900">{name}</h3>
      <p className="text-sm font-medium text-primary-600">{role}</p>
      {bio && <p className="mt-2 text-sm text-slate-600">{bio}</p>}
    </div>
  );
}
