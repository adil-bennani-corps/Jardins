"use client";

import { useRef, useCallback } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  title?: string;
  alt?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  title,
  alt = "Comparaison avant/après",
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const beforeRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    const before = beforeRef.current;
    const handle = handleRef.current;
    if (!container || !before || !handle) return;
    const rect = container.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    before.style.clipPath = `inset(0 ${100 - x}% 0 0)`;
    handle.style.left = `${x}%`;
  }, []);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      e.preventDefault();
      const target = e.currentTarget as HTMLElement;
      target.setPointerCapture(e.pointerId);

      const onMove = (ev: PointerEvent) => updatePosition(ev.clientX);
      const onUp = (ev: PointerEvent) => {
        target.releasePointerCapture(ev.pointerId);
        target.removeEventListener("pointermove", onMove);
        target.removeEventListener("pointerup", onUp);
      };
      target.addEventListener("pointermove", onMove);
      target.addEventListener("pointerup", onUp);
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  return (
    <div className="space-y-2">
      {title && <h4 className="font-semibold text-slate-900">{title}</h4>}
      <div
        ref={containerRef}
        className="relative aspect-video select-none overflow-hidden rounded-xl bg-slate-200"
        role="slider"
        aria-label="Glissez pour comparer avant et après"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={50}
        tabIndex={0}
      >
        <div className="absolute inset-0">
          <Image src={afterImage} alt={`${alt} - Après`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
        <div ref={beforeRef} className="absolute inset-0 overflow-hidden" style={{ clipPath: "inset(0 50% 0 0)" }}>
          <Image src={beforeImage} alt={`${alt} - Avant`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
        <div
          ref={handleRef}
          className="absolute top-0 bottom-0 z-10 w-1 -translate-x-1/2 cursor-ew-resize bg-white shadow-lg touch-none sm:min-w-[4px]"
          style={{ left: "50%" }}
          onPointerDown={handlePointerDown}
        >
          <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md sm:h-10 sm:w-10">
            <svg className="h-5 w-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
            </svg>
          </div>
        </div>
        <div className="pointer-events-none absolute bottom-2 left-2 rounded bg-black/60 px-2 py-1.5 text-[10px] text-white sm:text-xs">
          Avant
        </div>
        <div className="pointer-events-none absolute bottom-2 right-2 rounded bg-black/60 px-2 py-1.5 text-[10px] text-white sm:text-xs">
          Après
        </div>
      </div>
    </div>
  );
}
