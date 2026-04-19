"use client";

import Link from "next/link";
import { useState } from "react";

export default function PortfolioDashboard() {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      slug: "marionette",
      title: "Marionette",
      client: "Personal Project",
      category: "Characters",
      description: "Exploring organic movement within rigid digital constraints.",
      image: "/Portfolio/Marionette/Marionette-hero.jpg",
      alt: "Marionette",
      delay: ""
    },
    {
      slug: "witch",
      title: "Witch",
      client: "Personal Project",
      category: "Characters",
      description: "Detailed character study focusing on expressive lighting and materials.",
      image: "/Portfolio/Witch/01-witch-close.jpg",
      alt: "Witch",
      delay: "pt-6"
    },
    {
      slug: "dungeon-master",
      title: "Dungeon Master",
      client: "Personal Project",
      category: "Characters",
      description: "A dark fantasy character concept.",
      image: "/Portfolio/Dungeon Master/01-Dungeon-master-hero.jpg",
      alt: "Dungeon Master",
      delay: "md:-mt-12"
    },
    {
      slug: "demon",
      title: "Demoness",
      client: "Personal Project",
      category: "Characters",
      description: "An exploration of sub-surface scattering and procedurally generated anatomy for digital humans.",
      image: "/Portfolio/Demon/Demon_hero.jpg",
      alt: "Demon Hero",
      delay: ""
    },
    {
      slug: "tokolosh",
      title: "Tokolosh",
      client: "Personal Project",
      category: "Characters",
      description: "A creature design based on folklore.",
      image: "/Portfolio/Tokolosh/01-tokolosh-close.jpg",
      alt: "Tokolosh",
      delay: "pt-12"
    },
    {
      slug: "cat",
      title: "Cat Boss",
      client: "Personal Project",
      category: "Characters",
      description: "High-fidelity asset created for cinematic sequences using UDIM workflow and complex material layering.",
      image: "/Portfolio/Cat/01-cat-monster.jpg",
      alt: "Cat Monster",
      delay: "md:-mt-12"
    },
    {
      slug: "legacy-of-adam",
      title: "Legacy of Adam",
      client: "Personal Project",
      category: "Characters",
      description: "Character collection for a narrative project.",
      image: "/Portfolio/Legacy-of-Adam/legacy-of-adam-eliab.jpg",
      alt: "Legacy of Adam",
      delay: ""
    },
    {
      slug: "temple",
      title: "Temple",
      client: "Personal Project",
      category: "Environments",
      description: "A study in brutalist architecture and scale, utilizing procedural displacement and custom photogrammetry.",
      image: "/Portfolio/Temple/01-temple.jpg",
      alt: "Temple",
      delay: "pt-6"
    },
    {
      slug: "warrior",
      title: "Warrior",
      client: "Personal Project",
      category: "Characters",
      description: "A detailed character study of a fallen warrior, focusing on anatomical realism and dramatic lighting.",
      image: "/Portfolio/Warrior/01-warrior-close.jpg",
      alt: "Warrior",
      delay: "md:-mt-12"
    }
  ];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="pt-40 pb-32">
      {/* Header Section */}
      <section className="px-8 md:px-16 mb-24">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="space-y-4">
            <span className="font-label text-on-surface-variant uppercase tracking-[0.3em] text-xs">Heather Courage</span>
            <h1 className="font-headline text-6xl md:text-8xl text-on-surface leading-none">All Works</h1>
          </div>
          {/* Filter System */}
          <div className="flex flex-wrap gap-x-8 gap-y-4 border-b border-outline-variant/20 pb-4">
            <button 
              onClick={() => setFilter("All")}
              className={`font-label text-xs uppercase tracking-widest pb-2 transition-colors ${filter === "All" ? "text-primary border-b border-primary" : "text-on-surface-variant hover:text-primary"}`}
            >
              All Projects
            </button>
            <button 
              onClick={() => setFilter("Characters")}
              className={`font-label text-xs uppercase tracking-widest pb-2 transition-colors ${filter === "Characters" ? "text-primary border-b border-primary" : "text-on-surface-variant hover:text-primary"}`}
            >
              Characters
            </button>
            <button 
              onClick={() => setFilter("Environments")}
              className={`font-label text-xs uppercase tracking-widest pb-2 transition-colors ${filter === "Environments" ? "text-primary border-b border-primary" : "text-on-surface-variant hover:text-primary"}`}
            >
              Environments
            </button>
          </div>
        </div>
      </section>

      {/* Archive Grid */}
      <section className="px-8 md:px-16">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-12">
          {filteredProjects.map((project, idx) => (
            <Link key={idx} href={`/portfolio/${project.slug}`} className={`group relative cursor-pointer block ${project.delay}`}>
              <div className="overflow-hidden aspect-[4/5] bg-surface-container mb-6 relative">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  src={project.image}
                  alt={project.alt}
                />
                <div className="absolute inset-0 bg-surface-container-lowest/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="font-label text-[10px] tracking-[0.2em] text-primary uppercase mb-2">{project.category}</span>
                  <p className="text-sm text-on-surface leading-relaxed max-w-xs">{project.description}</p>
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="font-headline text-2xl text-on-surface group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                <p className="font-label text-xs text-on-surface-variant uppercase tracking-widest">{project.client}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Pagination/Load More */}
      <section className="mt-32 flex justify-center">
        <button className="group flex items-center gap-4 px-12 py-6 bg-surface-container-high hover:bg-primary transition-all duration-300">
          <span className="font-label text-xs uppercase tracking-widest text-on-surface group-hover:text-on-primary">Load more archives</span>
          <span className="material-symbols-outlined text-primary group-hover:text-on-primary">keyboard_arrow_down</span>
        </button>
      </section>
    </div>
  );
}
