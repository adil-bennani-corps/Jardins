"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";

interface ModalGalleryProps {
  images: { src: string; alt: string }[];
  initialIndex?: number;
  onClose: () => void;
}

export function ModalGallery({ images, initialIndex = 0, onClose }: ModalGalleryProps) {
  const [current, setCurrent] = useState(initialIndex);

  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), [images.length]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), [images.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, next, prev]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90" onClick={onClose} role="dialog" aria-modal="true" aria-label="Galerie photos">
      <div className="relative max-h-[90vh] max-w-[90vw]" onClick={(e) => e.stopPropagation()}>
        <Image
          src={images[current].src}
          alt={images[current].alt}
          width={1200}
          height={800}
          className="max-h-[85vh] rounded-lg object-contain"
        />
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-4 -right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-900 shadow-lg hover:bg-slate-100"
          aria-label="Fermer"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-slate-900 shadow hover:bg-white"
              aria-label="Image précédente"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={next}
              className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-slate-900 shadow hover:bg-white"
              aria-label="Image suivante"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <div className="mt-3 text-center text-sm text-white/70">
              {current + 1} / {images.length}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
