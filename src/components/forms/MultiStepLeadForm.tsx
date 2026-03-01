"use client";

import { useState } from "react";

const projectTypes = [
  { value: "abattage", label: "Abattage d'arbre" },
  { value: "elagage", label: "Élagage" },
  { value: "terrasse", label: "Terrasse / Clôture" },
  { value: "entretien", label: "Entretien jardin" },
  { value: "autre", label: "Autre" },
];

const stepTitles = ["Type de projet", "Détails", "Vos coordonnées"];

export function MultiStepLeadForm() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    type: "",
    surface: "",
    description: "",
    name: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const isLastStep = step === 2;

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (step === 0 && !formData.type) {
      newErrors.type = "Veuillez sélectionner un type de projet.";
    }
    if (step === 2) {
      if (!formData.name.trim()) newErrors.name = "Le nom est requis.";
      if (!formData.email.trim()) newErrors.email = "L'email est requis.";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Email invalide.";
      if (!formData.phone.trim()) newErrors.phone = "Le téléphone est requis.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    if (!isLastStep) {
      setStep((s) => s + 1);
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) setStatus("success");
      else throw new Error();
    } catch {
      setStatus("error");
    }
  };

  const updateField = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-primary-200 bg-primary-50 p-8 text-center animate-scale-in">
        <svg className="mx-auto h-12 w-12 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="mt-4 font-heading text-xl font-bold text-primary-800">Merci !</h3>
        <p className="mt-2 text-primary-700">Votre demande a bien été envoyée. Nous vous recontacterons sous 48h.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Progress */}
      <div className="flex items-center gap-2">
        {stepTitles.map((title, i) => (
          <div key={i} className="flex flex-1 items-center gap-2">
            <div
              className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-semibold transition-all duration-normal ${
                i <= step ? "bg-primary-600 text-white" : "bg-accent-slate-200 text-accent-slate-500"
              }`}
            >
              {i < step ? (
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                i + 1
              )}
            </div>
            <span className="hidden text-sm font-medium text-foreground-muted sm:inline">{title}</span>
            {i < stepTitles.length - 1 && (
              <div className={`h-0.5 flex-1 transition-colors duration-normal ${i < step ? "bg-primary-400" : "bg-accent-slate-200"}`} />
            )}
          </div>
        ))}
      </div>

      <h3 className="font-heading text-lg font-semibold">{stepTitles[step]}</h3>

      {step === 0 && (
        <div className="space-y-2">
          {projectTypes.map((pt) => (
            <label
              key={pt.value}
              className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition-all duration-fast hover:bg-primary-50 ${
                formData.type === pt.value ? "border-primary-500 bg-primary-50" : ""
              }`}
              style={{ borderColor: formData.type === pt.value ? undefined : "var(--border)" }}
            >
              <input
                type="radio"
                name="type"
                value={pt.value}
                checked={formData.type === pt.value}
                onChange={(e) => updateField("type", e.target.value)}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500"
              />
              <span className="font-medium">{pt.label}</span>
            </label>
          ))}
          {errors.type && <p className="text-sm text-red-600">{errors.type}</p>}
        </div>
      )}

      {step === 1 && (
        <div className="space-y-4">
          <div>
            <label htmlFor="lead-surface" className="mb-1.5 block text-sm font-medium text-foreground-muted">Surface approximative (m²)</label>
            <input id="lead-surface" type="number" min={1} value={formData.surface} onChange={(e) => updateField("surface", e.target.value)} className="input" placeholder="ex: 50" />
          </div>
          <div>
            <label htmlFor="lead-description" className="mb-1.5 block text-sm font-medium text-foreground-muted">Description du projet</label>
            <textarea id="lead-description" rows={4} value={formData.description} onChange={(e) => updateField("description", e.target.value)} className="input" placeholder="Décrivez votre projet..." />
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          {[
            { id: "lead-name", name: "name" as const, label: "Nom complet", type: "text" },
            { id: "lead-email", name: "email" as const, label: "Email", type: "email" },
            { id: "lead-phone", name: "phone" as const, label: "Téléphone", type: "tel" },
          ].map((field) => (
            <div key={field.id}>
              <label htmlFor={field.id} className="mb-1.5 block text-sm font-medium text-foreground-muted">{field.label} *</label>
              <input
                id={field.id}
                type={field.type}
                required
                value={formData[field.name]}
                onChange={(e) => updateField(field.name, e.target.value)}
                className={errors[field.name] ? "input-error" : "input"}
              />
              {errors[field.name] && <p className="mt-1 text-sm text-red-600">{errors[field.name]}</p>}
            </div>
          ))}
        </div>
      )}

      {status === "error" && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-center text-sm text-red-700">
          Une erreur est survenue. Veuillez réessayer ou nous contacter par téléphone.
        </div>
      )}

      <div className="flex justify-between pt-2">
        <button
          type="button"
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={step === 0}
          className="btn-ghost disabled:invisible"
        >
          Précédent
        </button>
        <button type="submit" disabled={status === "submitting"} className="btn-primary">
          {status === "submitting" ? "Envoi..." : isLastStep ? "Envoyer la demande" : "Suivant"}
        </button>
      </div>
    </form>
  );
}
