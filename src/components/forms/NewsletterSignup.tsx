"use client";

import { useState } from "react";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, type: "newsletter" }),
      });
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="w-full max-w-xs">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Votre email"
          required
          disabled={status === "loading"}
          className="min-w-0 w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full shrink-0 rounded-lg bg-primary-600 px-6 py-2 text-sm font-semibold text-white hover:bg-primary-700 disabled:opacity-50"
        >
          {status === "loading" ? "Envoi..." : "S'inscrire"}
        </button>
      </form>
      {status === "success" && <p className="mt-2 text-sm text-green-500">Merci !</p>}
      {status === "error" && <p className="mt-2 text-sm text-red-500">Erreur, réessayez.</p>}
    </div>
  );
}
