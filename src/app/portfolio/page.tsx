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
      description: "Concept by Katherine Bartlett.",
      image: "/Portfolio/updates/MB Key Beauty Shot.jpg",
      alt: "Marionette",
      delay: ""
    },
    {
      slug: "witch",
      title: "Witch of the Moon",
      client: "Personal Project",
      category: "Characters",
      description: "Detailed character study focused on expressive lighting and layered materials.",
      image: "/Portfolio/updates/Witch Key Beauty.jpg",
      alt: "Witch of the Moon",
      delay: "pt-6"
    },
    {
      slug: "dungeon-master",
      title: "Dungeon Master",
      client: "Personal Project",
      category: "Characters",
      description: "A dark fantasy character concept.",
      image: "/Portfolio/updates/DM Beauty.jpg",
      alt: "Dungeon Master",
      delay: "md:-mt-12"
    },
    {
      slug: "demon",
      title: "Demoness",
      client: "Personal Project",
      category: "Characters",
      description: "Original concept by Wu Shenyou.",
      image: "/Portfolio/updates/Demon Beauty 1.jpg",
      alt: "Demoness",
      delay: ""
    },
    {
      slug: "tokolosh",
      title: "Tokoloshe",
      client: "Personal Project",
      category: "Characters",
      description: "A creature design based on Southern African folklore.",
      image: "/Portfolio/updates/Toko Beauty.jpg",
      alt: "Tokoloshe",
      delay: "pt-12"
    },
    {
      slug: "cat",
      title: "Wild Cat",
      client: "Personal Project",
      category: "Characters",
      description: "Concept by Wu Shenyou. Creating monsters and magic.",
      image: "/Portfolio/updates/CatBoss Beauty Shot.jpg",
      alt: "Wild Cat",
      delay: "md:-mt-12"
    },
    {
      slug: "legacy-of-adam",
      title: "Legacy of Adam",
      client: "Client Project — Released",
      category: "Characters",
      description: "Industry credit — Sculpting and Look Development for a semi-stylised cinematic series.",
      image: "/Portfolio/Legacy-of-Adam/legacy-of-adam-eliab.jpg",
      alt: "Legacy of Adam",
      delay: ""
    },
    {
      slug: "temple",
      title: "The Temple",
      client: "Personal Project",
      category: "Environments",
      description: "Tranquility is a state of mind.",
      image: "/Portfolio/updates/Temple Beauty.jpg",
      alt: "Temple",
      delay: "pt-6"
    },
    {
      slug: "warrior",
      title: "The Warrior",
      client: "Personal Project",
      category: "Characters",
      description: "Character creation in the style of Overwatch.",
      image: "/Portfolio/updates/War Beauty.jpg",
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

    </div>
  );
}
