import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section: The Immersive Monolith */}
      <section className="relative h-screen w-full overflow-hidden flex items-end pb-32 px-12 -mt-[104px]">
        <div className="absolute inset-0 z-0">
          <img
            alt="Main Sculpture"
            className="w-full h-full object-cover filter brightness-75 contrast-110"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQ3VHCSFUzEzyLsuAO0gJSC48y6Vm2M_5lL-Q-zCH4pqd3vQbsMfo-cea278gGxhwtpgQzZ_KmYXFBGQo4V5QmztwbzFJD9fsVWfMu2UcNjjlhqKDL8Dt2CHVZhVB58ZDUAK2_yZQblL1fQijHm2QSUQReqs6K1xHoIMqC29dWbsaWGmK_4oN5iKZU5GTTxSQVp8nHEAZrpmCjjN1l08lAu6ik9HplKQi7GwcmMHOBn7LfHe6GcWYP4ab4kY_PNKE0ubEry2T_SGc"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
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
          <Link href="/portfolio/temple" className="md:col-span-8 group cursor-crosshair block">
            <div className="overflow-hidden bg-surface-container-low transition-colors duration-500 group-hover:bg-surface-container-high">
              <img
                alt="Environment Work"
                className="w-full aspect-[16/9] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXOfo1BzGyU3PKpE5iMmQKyHi6WsiEnhKebxnIbVFe-pxCmmOy333RHi2uyC_hqY6b9U4OQXypp5tLcVbeGAKdlEXpL8JoMTqJ_qGkXe2-Je7bvkS03j6sXBJ4-wV6HOjaVxUmBj2rh-X8vIu-E-95IicjRVFJmFwYPTNKQWHxJTdCavZI8k7eNwxlhZpzI0eYkJqGkHhQhUt0tnRpISHh2BT48hzIsTWlXKr0pMlBJgA-YrWeRrGIVifnvJO9Lm6ZB2HM0vm4eNU"
              />
            </div>
            <div className="mt-8 flex justify-between items-start">
              <div className="max-w-md">
                <h3 className="font-headline text-2xl mb-2 group-hover:text-primary transition-colors duration-300">The Obsidian Nave</h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  A study in atmospheric depth and architectural rhythm. Constructed for high-fidelity real-time rendering environments.
                </p>
              </div>
              <span className="font-label text-[10px] tracking-widest uppercase py-1 px-3 border border-outline-variant/30 text-on-surface-variant">Environment</span>
            </div>
          </Link>

          {/* Secondary Small Item (Asymmetric Offset) */}
          <Link href="/portfolio/witch" className="md:col-span-4 md:mt-40 group cursor-crosshair block">
            <div className="overflow-hidden bg-surface-container-low">
              <img
                alt="Character Work"
                className="w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpl_ADsxOT5pJnFqZ19-o5ElfqF2uNXSw_XhBOv7CX0TQma7BWxrBB_YOekrE1ueHxngC_CPWGRJw7pKTnxu_pJZE7OPo7NaOqGoOZqEZjeA6L12eZ3ixfbnl1DkXWeC9wkzwRCDbu_sHkMTIIFFnZbDbKC39eX0H50QBNhkQDIv7P_0vvphYiF6CtCcSzNpwWy0FyrdCCjXqc93xirTU1cwzyXJeo6Qsqj3KPBHa8B_b2CPVzOOBCDg4neUjKD7snNAo3g39iN2c"
              />
            </div>
            <div className="mt-8">
              <h3 className="font-headline text-2xl mb-2 group-hover:text-primary transition-colors duration-300">The Oracle</h3>
              <p className="font-body text-sm text-on-surface-variant mb-4">High-fidelity character anatomy and texture articulation.</p>
              <span className="font-label text-[10px] tracking-widest uppercase py-1 px-3 border border-outline-variant/30 text-on-surface-variant">Character</span>
            </div>
          </Link>

          {/* Third Item (Full Width or Offset) */}
          <Link href="/portfolio/demon" className="md:col-start-2 md:col-span-6 group cursor-crosshair block">
            <div className="overflow-hidden bg-surface-container-low">
              <img
                alt="Textural Detail"
                className="w-full aspect-[3/2] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOCyoJ6H4-rGSFfmaNwRK2qIpdJeb2FhPszCsfm65--E4kuuR9vqN1AlM865LqwpEs0LA_Ro4ZeuseWYf8OPfvROAkiHYILnQ2d3U2CpHFe09CulDkee3PEkyWlfnwvBBY5DgdU1NGFkjgcNhvx1bq5hxIdB_vFxSxQg1lZ1zN1bXCo5WMXxgO-9H5DzI3G4dU5Kudw2hOImHkS2P66EKBDZNDGdFc5Et2xxyGFGqq-6EplUdEeuHBnb5GbukECrHNWHvxDNADjqg"
              />
            </div>
            <div className="mt-8">
              <h3 className="font-headline text-2xl mb-2 group-hover:text-primary transition-colors duration-300">Fragmented Gilded No. 4</h3>
              <p className="font-body text-sm text-on-surface-variant">Surface materiality study exploring the intersection of light and rough metal.</p>
            </div>
          </Link>

          {/* Fourth Item */}
          <Link href="/portfolio/marionette" className="md:col-span-4 md:self-center group cursor-crosshair block">
            <div className="overflow-hidden bg-surface-container-low">
              <img
                alt="Abstract Form"
                className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCO4KY1MerC3s5YzEk-AUQSk_NIJ2x8eoJmdsODAAtXIjGvTVZE8qsONk3Y_dnWLa8Oe0_VhkJ9fr5ICOapu43tT6ZX1Qp-pBMliPlgSgorawmnjszTmYf8KClfLmFJyw8dI-iTnVFWYV7kyV70mHKAYvRLa8NPrlAibtYZpmXvkP9hsndWGnNVVQQccHjHB1Vu9uH_sp6KaSvM2FinATDdlGkNGcvZWNovr-4EAziHMg_sK3MrQJKJSawJg2jlATc3HCkpjCtw_eI"
              />
            </div>
            <div className="mt-8">
              <h3 className="font-headline text-2xl mb-2 group-hover:text-primary transition-colors duration-300">Fluidity Study</h3>
              <p className="font-body text-sm text-on-surface-variant">Exploring organic movement within rigid digital constraints.</p>
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
