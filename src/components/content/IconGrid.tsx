interface IconGridItem {
  icon: React.ReactNode;
  title: string;
  description?: string;
}

interface IconGridProps {
  items: IconGridItem[];
  columns?: 2 | 3 | 4;
}

export function IconGrid({ items, columns = 3 }: IconGridProps) {
  const gridCols = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={`grid gap-6 sm:gap-8 md:gap-10 ${gridCols[columns]}`}>
      {items.map((item, index) => (
        <div key={index} className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-700 sm:h-14 sm:w-14 sm:rounded-2xl">
            {item.icon}
          </div>
          <h3 className="mt-4 font-heading text-base font-semibold sm:mt-5 sm:text-lg">{item.title}</h3>
          {item.description && (
            <p className="mt-1 text-xs text-foreground-muted sm:mt-1.5 sm:text-sm">{item.description}</p>
          )}
        </div>
      ))}
    </div>
  );
}
