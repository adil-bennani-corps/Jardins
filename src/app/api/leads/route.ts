import { NextRequest, NextResponse } from "next/server";

const FORMSPREE_ENDPOINT = process.env.FORMSPREE_ENDPOINT || "";

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60_000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT;
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Trop de requêtes. Veuillez réessayer dans une minute." },
        { status: 429 }
      );
    }

    const body = await request.json();

    if (!body.email && !body.phone && !body.name) {
      return NextResponse.json({ error: "Données manquantes." }, { status: 400 });
    }

    if (FORMSPREE_ENDPOINT) {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error("Formspree error");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Lead submission error:", error);
    return NextResponse.json({ error: "Erreur lors de l'envoi" }, { status: 500 });
  }
}
