"use client";

import { useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, type: "contact" }),
      });
      if (res.ok) setStatus("success");
      else throw new Error();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <h3 className="text-xl font-semibold text-green-800">Message envoyé</h3>
        <p className="mt-2 text-green-700">Nous vous répondrons sous 48h.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-1 block text-sm font-medium text-slate-700">Nom</label>
          <input
            id="contact-name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
            className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-1 block text-sm font-medium text-slate-700">Email</label>
          <input
            id="contact-email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
            className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
          />
        </div>
      </div>
      <div>
        <label htmlFor="contact-phone" className="mb-1 block text-sm font-medium text-slate-700">Téléphone</label>
        <input
          id="contact-phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
          className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="mb-1 block text-sm font-medium text-slate-700">Message</label>
        <textarea
          id="contact-message"
          rows={4}
          required
          value={formData.message}
          onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
          className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-lg bg-primary-600 py-3 font-semibold text-white hover:bg-primary-700 disabled:opacity-50"
      >
        {status === "loading" ? "Envoi..." : "Envoyer"}
      </button>
      {status === "error" && (
        <p className="text-center text-sm text-red-600">Erreur lors de l&apos;envoi. Veuillez réessayer.</p>
      )}
    </form>
  );
}
