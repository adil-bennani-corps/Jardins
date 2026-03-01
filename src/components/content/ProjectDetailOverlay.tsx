"use client";
import Image from "next/image";
import { BeforeAfterSlider } from "./BeforeAfterSlider";

interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  imageBefore: string;
  imageAfter: string;
}

interface ProjectDetailOverlayProps {
  project: Project;
  onClose: () => void;
}

export function ProjectDetailOverlay({ project, onClose }: ProjectDetailOverlayProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white p-6">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full bg-slate-100 p-2 hover:bg-slate-200"
          aria-label="Fermer"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-2xl font-bold text-slate-900">{project.title}</h2>
        <p className="mt-1 text-slate-600">{project.location}</p>

        <div className="mt-6">
          <BeforeAfterSlider
            beforeImage={project.imageBefore}
            afterImage={project.imageAfter}
            alt={project.title}
          />
        </div>

        <div className="mt-6 flex gap-4">
          <a
            href="/devis-gratuit"
            className="rounded-lg bg-primary-600 px-6 py-2 font-semibold text-white hover:bg-primary-700"
          >
            Demander un devis similaire
          </a>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-slate-300 px-6 py-2 font-semibold text-slate-700 hover:bg-slate-50"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}
