import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen pt-32 pb-20 px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5 order-2 md:order-1">
          <span className="text-xs font-medium uppercase tracking-[0.2rem] text-primary mb-4 block">Senior Character & Environment Artist</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight font-headline">Heather <br /> Courage</h1>
          <div className="space-y-6 text-on-surface-variant max-w-lg leading-relaxed font-body">
            <p>Heather Courage is an industry-leading artist specializing in the intersection of organic sculpting and architectural environment design. With a career forged in the fires of AAA production, she bridges the gap between technical precision and emotional storytelling.</p>
            <p>Beyond her studio work, she is a <span className="text-primary font-bold">ZBrush Approved Streamer</span> and a dedicated <span className="text-primary font-bold">Woman in Games Ambassador</span>, mentoring the next generation of digital sculptors through community outreach and live educational content.</p>
          </div>
        </div>
        <div className="md:col-span-7 order-1 md:order-2 h-full min-h-[500px]">
          <div className="relative w-full h-full bg-surface-container-low overflow-hidden">
            <img
              className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHRSyqBIOEm26PlD4bBWa4pC16_B_utUzPcJbnCjjC9sYrZqqzwI-YIZJtgrjxBbbY3TjYT6aMH_qrCu46zhNeMoQbtDugWSVfco7Kt9t5nde7v2Q54MT3su8kkc5Ll1xCpuHUkkqfMrVQeJp6ko25-J3pIsw2CzEF1rZWYv2Vh8PrAZ8uHQxCGoryLbckUySJA2Iupk9we9OyXn77ODvYdbRrDVy91K2V0FDlo4EXbW2oQeYMZ_f4ZcbFYFms-6kTlJg6eMnbEFw"
              alt="Heather Courage"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Personal Philosophy Block */}
      <section className="py-32 px-6 md:px-12 bg-surface-container-lowest flex justify-center text-center">
        <div className="max-w-4xl">
          <span className="material-symbols-outlined text-primary text-4xl mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
          <h2 className="text-3xl md:text-5xl italic font-headline text-on-surface leading-snug">
            "Digital art is not about recreating reality; it is about distilling the essence of form and light until the artificial becomes undeniable."
          </h2>
          <div className="mt-12 h-px w-24 bg-primary mx-auto"></div>
        </div>
      </section>

      {/* Experience & Recognition */}
      <section className="py-32 px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <h2 className="text-xs font-medium uppercase tracking-[0.2rem] text-primary mb-12">Professional Milestones</h2>
          <div className="space-y-16">
            <div className="group">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-2xl font-headline group-hover:text-primary transition-colors duration-300">Naughty Dog</h3>
                <span className="text-xs font-medium font-body text-on-surface-variant">2019 — PRESENT</span>
              </div>
              <p className="text-sm uppercase tracking-wider text-on-surface-variant mb-4">Senior Environment Artist</p>
              <p className="text-on-surface-variant leading-relaxed">Leading world-building efforts for unannounced flagship titles. Focused on modular architecture systems and high-fidelity material authoring.</p>
            </div>
            <div className="group">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-2xl font-headline group-hover:text-primary transition-colors duration-300">Industrial Light & Magic</h3>
                <span className="text-xs font-medium font-body text-on-surface-variant">2016 — 2019</span>
              </div>
              <p className="text-sm uppercase tracking-wider text-on-surface-variant mb-4">Character & Creature Artist</p>
              <p className="text-on-surface-variant leading-relaxed">Developed hero-level digital doubles for the Star Wars cinematic universe. Pioneered new organic sculpting workflows in ZBrush.</p>
            </div>
            <div className="group">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-2xl font-headline group-hover:text-primary transition-colors duration-300">Ubisoft Montreal</h3>
                <span className="text-xs font-medium font-body text-on-surface-variant">2013 — 2016</span>
              </div>
              <p className="text-sm uppercase tracking-wider text-on-surface-variant mb-4">Environment Artist</p>
              <p className="text-on-surface-variant leading-relaxed">Assisted in the architectural layout and biome creation for large-scale open world environments.</p>
            </div>
          </div>
        </div>
        <div className="bg-surface-container-low p-12 flex flex-col justify-center">
          <h2 className="text-xs font-medium uppercase tracking-[0.2rem] text-primary mb-12">Awards & Recognition</h2>
          <ul className="space-y-8">
            <li className="flex gap-6 items-start">
              <span className="text-primary material-symbols-outlined">workspace_premium</span>
              <div>
                <h4 className="font-bold text-on-surface font-headline">ArtStation Grand Prize</h4>
                <p className="text-sm text-on-surface-variant">Game Environment Design (2022)</p>
              </div>
            </li>
            <li className="flex gap-6 items-start">
              <span className="text-primary material-symbols-outlined">stars</span>
              <div>
                <h4 className="font-bold text-on-surface font-headline">ZBrush Summit Finalist</h4>
                <p className="text-sm text-on-surface-variant">Sculpt-Off Championship (2020)</p>
              </div>
            </li>
            <li className="flex gap-6 items-start">
              <span className="text-primary material-symbols-outlined">campaign</span>
              <div>
                <h4 className="font-bold text-on-surface font-headline">WIA Recognition</h4>
                <p className="text-sm text-on-surface-variant">Technical Excellence Award (2021)</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Technical Expertise (Bento Grid Style) */}
      <section className="py-32 px-6 md:px-12 bg-surface-container-lowest">
        <h2 className="text-xs font-medium uppercase tracking-[0.2rem] text-primary mb-16 text-center">Technical Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-surface-container-high p-10 h-80 flex flex-col justify-end transition-transform hover:-translate-y-2 duration-300">
            <h3 className="text-2xl font-headline mb-4">High-poly Sculpting</h3>
            <p className="text-on-surface-variant text-sm">Advanced anatomical and hard-surface sculpting with focus on micro-detail fidelity.</p>
          </div>
          <div className="bg-primary p-10 h-80 flex flex-col justify-end transition-transform hover:-translate-y-2 duration-300">
            <h3 className="text-2xl font-headline mb-4 text-on-primary">PBR Texturing</h3>
            <p className="text-on-primary-container text-sm">Physically-based rendering workflows for photorealistic material response in any engine.</p>
          </div>
          <div className="bg-surface-container-high p-10 h-80 flex flex-col justify-end transition-transform hover:-translate-y-2 duration-300">
            <h3 className="text-2xl font-headline mb-4">Environment Architecture</h3>
            <p className="text-on-surface-variant text-sm">Structural modularity and assembly for complex, narrative-driven virtual spaces.</p>
          </div>
          <div className="md:col-span-2 bg-surface-container p-10 h-64 flex flex-col justify-center transition-transform hover:-translate-y-2 duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-headline mb-2">Procedural Workflows</h3>
                <p className="text-on-surface-variant text-sm">Utilizing Houdini and Substance Designer for scalable asset generation.</p>
              </div>
              <div>
                <h3 className="text-xl font-headline mb-2">Retopology & UV</h3>
                <p className="text-on-surface-variant text-sm">Efficient mesh optimization for real-time performance without visual compromise.</p>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-highest p-10 h-64 flex flex-col justify-center items-center text-center transition-transform hover:-translate-y-2 duration-300">
            <span className="material-symbols-outlined text-primary text-5xl mb-4">memory</span>
            <h3 className="text-xl font-headline">UE5 Integration</h3>
          </div>
        </div>
      </section>

      {/* The Toolkit */}
      <section className="py-32 px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-xs font-medium uppercase tracking-[0.2rem] text-primary mb-4">The Toolkit</h2>
            <h3 className="text-4xl font-headline max-w-md">The instruments of digital craftsmanship.</h3>
          </div>
          <div className="h-px bg-outline-variant w-full md:w-1/2 opacity-20"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 text-center">
          <div className="p-8 border border-outline-variant/10 hover:border-primary/50 transition-colors duration-300">
            <div className="text-primary mb-4 font-bold tracking-tighter">ZBRUSH</div>
            <span className="text-xs uppercase text-on-surface-variant">Approved Streamer</span>
          </div>
          <div className="p-8 border border-outline-variant/10 hover:border-primary/50 transition-colors duration-300">
            <div className="text-foreground mb-4 font-bold tracking-tighter">MAYA</div>
            <span className="text-xs uppercase text-on-surface-variant">Complex Rigging</span>
          </div>
          <div className="p-8 border border-outline-variant/10 hover:border-primary/50 transition-colors duration-300">
            <div className="text-foreground mb-4 font-bold tracking-tighter">HOUDINI</div>
            <span className="text-xs uppercase text-on-surface-variant">Procedural Art</span>
          </div>
          <div className="p-8 border border-outline-variant/10 hover:border-primary/50 transition-colors duration-300">
            <div className="text-foreground mb-4 font-bold tracking-tighter">SUBSTANCE</div>
            <span className="text-xs uppercase text-on-surface-variant">PBR Mastery</span>
          </div>
          <div className="p-8 border border-outline-variant/10 hover:border-primary/50 transition-colors duration-300">
            <div className="text-foreground mb-4 font-bold tracking-tighter">UE5</div>
            <span className="text-xs uppercase text-on-surface-variant">Engine Tech</span>
          </div>
          <div className="p-8 border border-outline-variant/10 hover:border-primary/50 transition-colors duration-300">
            <div className="text-foreground mb-4 font-bold tracking-tighter">MARVELOUS</div>
            <span className="text-xs uppercase text-on-surface-variant">Cloth Sim</span>
          </div>
        </div>
      </section>

      {/* Final CTA section */}
      <section className="py-40 px-6 md:px-12 bg-surface-container-lowest text-center">
        <h2 className="text-4xl md:text-6xl font-headline mb-10">Let's build something <br /><span className="text-primary italic">extraordinary.</span></h2>
        <Link href="/contact" className="inline-block bg-primary text-on-primary px-12 py-5 font-bold uppercase tracking-widest text-sm hover:bg-primary-container transition-colors duration-300">
          INITIATE COLLABORATION
        </Link>
      </section>
    </>
  );
}
