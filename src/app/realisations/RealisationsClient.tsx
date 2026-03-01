"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CategoryFilter } from "@/components/content/CategoryFilter";
import { ProjectDetailOverlay } from "@/components/content/ProjectDetailOverlay";

const categories = [
  { id: "all", label: "Tous les projets" },
  { id: "abattage", label: "Abattage" },
  { id: "elagage", label: "Élagage" },
  { id: "terrasses", label: "Terrasses" },
  { id: "entretien", label: "Entretien" },
  { id: "clotures", label: "Clôtures" },
];

const projects = [
  {
    id: "1",
    title: "Aménagement talus",
    category: "terrasses",
    location: "Uccle",
    description: "Aménagement complet d'un talus avec mise en valeur du terrain.",
    imageBefore: "/images/amenagement-talus-avant.jpg",
    imageAfter: "/images/amenagement-talus-apres.jpg",
  },
  {
    id: "2",
    title: "Abattage 27 arbres",
    category: "abattage",
    location: "Watermael-Boitsfort",
    description: "Abattage et évacuation de 27 arbres sur un terrain résidentiel.",
    imageBefore: "/images/Watermael-Boitsfort-abbatage27arbre.jpg",
    imageAfter: "/images/Watermael-Boitsfort-abbatage27arbre.jpg",
  },
  {
    id: "3",
    title: "Taille de 40 cônes de hêtres",
    category: "elagage",
    location: "Ottenbourg",
    description: "Taille en cône de 40 hêtres pour un rendu uniforme et esthétique.",
    imageBefore: "/images/Taille_de_40_c_nes_de_h_tres-ottenbourg.jpg",
    imageAfter: "/images/Taille_de_40_c_nes_de_h_tres-apres_ottenbourg.jpg",
  },
  {
    id: "4",
    title: "Rénovation jardin palissade gazon",
    category: "entretien",
    location: "Uccle",
    description: "Rénovation complète : palissade, gazon en rouleaux, robot tondeuse.",
    imageBefore: "/images/R_novation_petit_jardin_palissade_gazon_en_rouleaux_robot_tondeuse-uccle-avant.jpg",
    imageAfter: "/images/R_novation_petit_jardin_palissade_gazon_en_rouleaux_robot_tondeuse-uccle-apres.jpg",
  },
  {
    id: "5",
    title: "Création petit jardin de ville",
    category: "terrasses",
    location: "Etterbeek",
    description: "Création d'un jardin de ville sur mesure, de l'avant à l'après.",
    imageBefore: "/images/Cr_ation_d_un_petit_jardin_de_ville_avant.jpg",
    imageAfter: "/images/Cr_ation_d_un_petit_jardin_de_ville-etterbeek_apres.jpg",
  },
  {
    id: "6",
    title: "Montage abri à bois",
    category: "clotures",
    location: "Uccle",
    description: "Montage d'un petit abri à bois pour rangement du bois de chauffage.",
    imageBefore: "/images/Montage_d_un_petit_abris_a_bois-uccle.jpg",
    imageAfter: "/images/Montage_d_un_petit_abris_a_bois4-uccle.jpg",
  },
  {
    id: "7",
    title: "Suppression lierre platane",
    category: "elagage",
    location: "Bruxelles",
    description: "Suppression complète du lierre envahissant sur un platane.",
    imageBefore: "/images/Suppression_lierre_platane-avant.jpg",
    imageAfter: "/images/Suppression_lierre_platane-apres.jpg",
  },
  {
    id: "8",
    title: "Gyrobroyage terrain vague",
    category: "entretien",
    location: "Bruxelles",
    description: "Gyrobroyage d'un terrain vague pour remise en état.",
    imageBefore: "/images/Gyrobroyage_d_un_terrain_vague-avant.jpg",
    imageAfter: "/images/Gyrobroyage_d_un_terrain_vague-apres.jpg",
  },
  {
    id: "9",
    title: "Abattage 30 chênes",
    category: "abattage",
    location: "Bourgogne",
    description: "Abattage et mise en bûche de 30 chênes.",
    imageBefore: "/images/Abattage_et_mise_en_b_che_de_30_ch_nes_en_Bourgogne.jpg",
    imageAfter: "/images/Abattage_et_mise_en_b_che_de_30_ch_nes_en_Bourgogne3.jpg",
  },
];

export function RealisationsClient() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);

  const filteredProjects =
    selectedCategory === "all" ? projects : projects.filter((p) => p.category === selectedCategory);

  return (
    <>
      <div className="mt-10">
        <CategoryFilter categories={categories} selected={selectedCategory} onSelect={setSelectedCategory} />
      </div>

      <div className="mt-8 columns-1 gap-4 sm:mt-12 sm:gap-6 sm:columns-2 lg:columns-3">
        {filteredProjects.map((project) => (
          <button
            key={project.id}
            type="button"
            onClick={() => setSelectedProject(project)}
            className="group mb-6 block w-full break-inside-avoid overflow-hidden rounded-xl text-left card"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={project.imageAfter}
                alt={`${project.title} — ${project.location}`}
                fill
                className="object-cover transition-transform duration-slow group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="font-heading font-semibold">{project.title}</h3>
                <p className="text-sm text-white/80">{project.location}</p>
              </div>
            </div>
            <div className="p-4">
              <p className="text-sm text-foreground-muted line-clamp-2">{project.description}</p>
            </div>
          </button>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 rounded-2xl bg-primary-50 p-6 text-center sm:mt-16 sm:rounded-3xl sm:p-8 md:p-10">
        <h2 className="font-heading text-2xl font-bold text-primary-800">
          Votre projet pourrait être le prochain
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-foreground-muted">
          Chaque réalisation commence par une conversation. Décrivez-nous votre vision
          et recevez un devis personnalisé sous 48h.
        </p>
        <Link
          href="/devis-gratuit"
          className="btn-primary mt-6 px-8 py-3 text-base"
        >
          Demander mon Devis Gratuit
        </Link>
      </div>

      {selectedProject && (
        <ProjectDetailOverlay project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </>
  );
}
