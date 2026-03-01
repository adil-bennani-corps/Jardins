"use client";

import { useState } from "react";

const types = [
  { id: "tonte", label: "Tonte", basePrice: 45 },
  { id: "elagage", label: "Élagage", basePrice: 150 },
  { id: "terrasse", label: "Terrasse (m²)", basePrice: 80 },
];

export function PricingEstimator() {
  const [selectedType, setSelectedType] = useState(types[0]);
  const [surface, setSurface] = useState(50);

  const estimate =
    selectedType.id === "terrasse"
      ? selectedType.basePrice * surface
      : selectedType.basePrice;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="font-semibold text-slate-900">Estimation indicative</h3>
      <p className="mt-1 text-sm text-slate-500">Sans engagement, pour information uniquement.</p>

      <div className="mt-4 space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700">Type de prestation</label>
          <select
            value={selectedType.id}
            onChange={(e) => {
              const t = types.find((x) => x.id === e.target.value);
              if (t) setSelectedType(t);
            }}
            className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2"
          >
            {types.map((t) => (
              <option key={t.id} value={t.id}>
                {t.label}
              </option>
            ))}
          </select>
        </div>

        {selectedType.id === "terrasse" && (
          <div>
            <label className="block text-sm font-medium text-slate-700">Surface (m²)</label>
            <input
              type="number"
              min={10}
              max={200}
              value={surface}
              onChange={(e) => setSurface(Number(e.target.value) || 10)}
              className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2"
            />
          </div>
        )}
      </div>

      <div className="mt-6 rounded-lg bg-primary-50 p-4">
        <p className="text-sm text-slate-600">Estimation</p>
        <p className="text-2xl font-bold text-primary-700">
          {estimate.toLocaleString("fr-BE")} €
        </p>
        <p className="mt-1 text-xs text-slate-500">Devis personnalisé sur demande</p>
      </div>
    </div>
  );
}
