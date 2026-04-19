import Image from "next/image";
import Link from "next/link";
import { HeroSlideshow } from "@/components/HeroSlideshow";

export default function Home() {
  return (
    <>
      {/* Hero Section: The Immersive Monolith */}
      <section className="relative h-screen w-full overflow-hidden flex items-end pb-32 px-12 -mt-[104px]">
        <div className="absolute inset-0 z-0">
          <HeroSlideshow />
        </div>
        <div className="relative z-10 max-w-4xl pt-32">
          <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl tracking-tight leading-tight mb-4 text-on-surface">
            HEATHER COURAGE
          </h1>
          <p className="font-body text-lg md:text-xl tracking-[0.4em] uppercase text-on-surface-variant font-light">
            Senior Character & Environment Artist
          </p>
        </div>
      </section>

      {/* Selected Curation: Asymmetric Grid */}
      <section className="py-40 px-12 bg-surface">
        <div className="mb-24 flex justify-between items-baseline">
          <h2 className="font-headline text-4xl md:text-5xl text-on-surface">Selected Curation</h2>
          <span className="font-body text-xs tracking-[0.5em] uppercase text-primary">Portfolio 2024</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-32 md:gap-x-12">
          {/* Large Feature Item */}
          <Link href="/portfolio/marionette" className="md:col-span-8 group cursor-crosshair block">
            <div className="overflow-hidden bg-surface-container-low transition-colors duration-500 group-hover:bg-surface-container-high">
              <img
                alt="Marionette"
                className="w-full aspect-[16/9] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                src="/Portfolio/Marionette/Marionette-hero.jpg"
              />
            </div>
            <div className="mt-8 flex justify-between items-start">
              <div className="max-w-md">
                <h3 className="font-headline text-2xl mb-2 group-hover:text-primary transition-colors duration-300">MARIONETTE</h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  Exploring organic movement within rigid digital constraints.
                </p>
              </div>
              <span className="font-label text-[10px] tracking-widest uppercase py-1 px-3 border border-outline-variant/30 text-on-surface-variant">Character</span>
            </div>
          </Link>

          {/* Secondary Small Item (Asymmetric Offset) */}
          <Link href="/portfolio/dungeon-master" className="md:col-span-4 md:mt-40 group cursor-crosshair block">
            <div className="overflow-hidden bg-surface-container-low">
              <img
                alt="Dungeon Master"
                className="w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                src="/Portfolio/Dungeon Master/01-Dungeon-master-hero.jpg"
              />
            </div>
            <div className="mt-8">
              <h3 className="font-headline text-2xl mb-2 group-hover:text-primary transition-colors duration-300">DUNGEON MASTER</h3>
              <p className="font-body text-sm text-on-surface-variant mb-4">A dark fantasy character concept.</p>
              <span className="font-label text-[10px] tracking-widest uppercase py-1 px-3 border border-outline-variant/30 text-on-surface-variant">Character</span>
            </div>
          </Link>

          {/* Third Item (Full Width or Offset) */}
          <Link href="/portfolio/witch" className="md:col-start-2 md:col-span-6 group cursor-crosshair block">
            <div className="overflow-hidden bg-surface-container-low">
              <img
                alt="Witch"
                className="w-full aspect-[3/2] object-cover object-[center_15%] grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                src="/Portfolio/Witch/01-witch-close.jpg"
              />
            </div>
            <div className="mt-8">
              <h3 className="font-headline text-2xl mb-2 group-hover:text-primary transition-colors duration-300">WITCH</h3>
              <p className="font-body text-sm text-on-surface-variant">Detailed character study focusing on expressive lighting and materials.</p>
            </div>
          </Link>

          {/* Fourth Item */}
          <Link href="/portfolio/tokolosh" className="md:col-span-4 md:self-center group cursor-crosshair block">
            <div className="overflow-hidden bg-surface-container-low">
              <img
                alt="Tokolosh"
                className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                src="/Portfolio/Tokolosh/01-tokolosh-close.jpg"
              />
            </div>
            <div className="mt-8">
              <h3 className="font-headline text-2xl mb-2 group-hover:text-primary transition-colors duration-300">TOKOLOSH</h3>
              <p className="font-body text-sm text-on-surface-variant">A creature design based on folklore.</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Statement Section: Large Typography */}
      <section className="py-60 px-12 bg-surface-container-lowest text-center">
        <div className="max-w-4xl mx-auto">
          <p className="font-headline text-3xl md:text-5xl md:leading-snug text-on-surface italic font-light">
            "I believe digital craft should possess the same <span className="text-primary not-italic">gravitas</span> and <span className="text-primary not-italic">presence</span> as physical sculpture. My work is a meditation on volume, texture, and the silence between shadows."
          </p>
          <div className="mt-16 inline-block">
            <Link href="/portfolio" className="bg-primary text-on-primary font-label text-xs tracking-[0.3em] uppercase px-12 py-5 transition-all duration-300 hover:bg-primary-container">
              View Full Archive
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
