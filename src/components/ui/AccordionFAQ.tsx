"use client";

import { useState } from "react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface AccordionFAQProps {
  items: FAQItem[];
  schemaMarkup?: boolean;
}

export function AccordionFAQ({ items, schemaMarkup = true }: AccordionFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const schema = schemaMarkup
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }
    : null;

  return (
    <>
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      <div className="space-y-2">
        {items.map((item, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg border border-slate-200 bg-white"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="flex min-h-[48px] w-full items-center justify-between px-4 py-4 text-left text-sm font-medium text-slate-900 hover:bg-slate-50 sm:px-6 sm:text-base"
              aria-expanded={openIndex === index}
            >
              {item.question}
              <svg
                className={`h-5 w-5 flex-shrink-0 transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === index && (
              <div className="border-t border-slate-200 px-4 py-4 text-sm text-slate-600 sm:px-6 sm:text-base">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
