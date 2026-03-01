interface SkeletonLoaderProps {
  className?: string;
  variant?: "text" | "image" | "card";
}

export function SkeletonLoader({ className = "", variant = "text" }: SkeletonLoaderProps) {
  const baseClass = "animate-pulse bg-slate-200 rounded";

  if (variant === "image") {
    return <div className={`aspect-video ${baseClass} ${className}`} />;
  }

  if (variant === "card") {
    return (
      <div className={`overflow-hidden rounded-2xl border ${className}`}>
        <div className={`aspect-[4/3] ${baseClass}`} />
        <div className="p-6 space-y-2">
          <div className={`h-6 w-3/4 ${baseClass}`} />
          <div className={`h-4 w-full ${baseClass}`} />
          <div className={`h-4 w-1/2 ${baseClass}`} />
        </div>
      </div>
    );
  }

  return <div className={`h-4 w-full ${baseClass} ${className}`} />;
}
