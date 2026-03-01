interface Category {
  id: string;
  label: string;
}

interface CategoryFilterProps {
  categories: Category[];
  selected: string;
  onSelect: (id: string) => void;
}

export function CategoryFilter({ categories, selected, onSelect }: CategoryFilterProps) {
  return (
    <div className="mt-6 overflow-x-auto pb-2 sm:mt-8 sm:overflow-visible sm:pb-0">
      <div className="flex min-w-0 flex-wrap gap-2 sm:flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => onSelect(cat.id)}
            className={`shrink-0 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors min-h-[44px] ${
            selected === cat.id
              ? "bg-primary-600 text-white"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
          }`}
        >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
}
