import Link from "next/link";
import { notFound } from "next/navigation";

// Mock data for the dynamic pages
const projectsData: Record<string, any> = {
  "temple": {
    title: "The Silent Spire",
    client: "Personal Project",
    category: "Environment Design",
    year: "2024",
    tris: "142K TRIS",
    textures: "5x 4K PBR",
    workflow: "UDIM / ACES",
    software: ["ZBrush", "Maya", "Substance"],
    description: "An exploration of silent lethality. The vision was to create a silhouette that feels both monolithic and agile, drawing inspiration from predatory anatomy and brutalist architecture.",
    phase1: "High-fidelity sculpting performed in ZBrush. Emphasis on anatomical accuracy beneath the hard-surface components to ensure realistic deformation during animation.",
    phase2: "Retopology focused on edge-flow for cinematic rigging. The mesh is optimized for sub-division surfaces while maintaining a manageable base-poly count.",
    phase3: "Material definition via Substance Painter. We utilized a layered shader approach: a base obsidian ceramic, topped with a metallic gold leaf, finished with a procedural dust and wear layer."
  },
  "demon": {
    title: "Neural Interface V4",
    client: "Framestore",
    category: "VFX / Shading",
    year: "2023",
    tris: "85K TRIS",
    textures: "3x 4K PBR",
    workflow: "Standard",
    software: ["Maya", "Houdini"],
    description: "A demon-inspired neural interface.",
    phase1: "Concept and base blockout.",
    phase2: "Refining the mechanical and organic integration.",
    phase3: "Final lookdev and compositing."
  },
  "witch": {
    title: "Obsidian Alley",
    client: "Wētā FX",
    category: "World Building",
    year: "2022",
    tris: "2M TRIS",
    textures: "10x 4K PBR",
    workflow: "UDIM",
    software: ["Unreal Engine", "Maya"],
    description: "Detailed set-dressing and lighting study focusing on reflective surfaces and atmospheric particle effects.",
    phase1: "Layout and blocking.",
    phase2: "Asset creation and placement.",
    phase3: "Lighting and atmospheric effects."
  },
  "legacy-of-adam": {
    title: "Amber Soul",
    client: "Personal Project",
    category: "Sculpting",
    year: "2024",
    tris: "120K TRIS",
    textures: "4x 4K PBR",
    workflow: "Standard",
    software: ["ZBrush", "Substance"],
    description: "Organic modeling challenge combining hard-surface wood textures with fluid gold accents.",
    phase1: "Primary forms and silhouette.",
    phase2: "Secondary details and surface texture.",
    phase3: "Material separation and final rendering."
  },
  "marionette": {
    title: "Fluidity Study",
    client: "Personal Project",
    category: "Abstract",
    year: "2023",
    tris: "50K TRIS",
    textures: "1x 4K PBR",
    workflow: "Procedural",
    software: ["Houdini", "Redshift"],
    description: "Exploring organic movement within rigid digital constraints.",
    phase1: "Procedural setup and simulation.",
    phase2: "Cache and mesh generation.",
    phase3: "Shading and rendering."
  },
  "potion-factory": {
    title: "Cortex Core",
    client: "The Mill",
    category: "Hard Surface",
    year: "2022",
    tris: "500K TRIS",
    textures: "8x 4K PBR",
    workflow: "UDIM",
    software: ["Maya", "Substance"],
    description: "Precision modeling project exploring Boolean workflows and non-destructive modeling techniques.",
    phase1: "Hard surface blockout.",
    phase2: "Boolean operations and bevels.",
    phase3: "Texture baking and lookdev."
  },
  "cat": {
    title: "Unit 7 Recon",
    client: "Industrial Light & Magic",
    category: "Modeling / Texturing",
    year: "2024",
    tris: "142K TRIS",
    textures: "5x 4K PBR",
    workflow: "UDIM / ACES",
    software: ["ZBrush", "Maya", "Substance"],
    description: "High-fidelity asset created for cinematic sequences using UDIM workflow and complex material layering.",
    phase1: "Concept to 3D blockout.",
    phase2: "High poly sculpting and detailing.",
    phase3: "Retopology, UVs, and final textures."
  },
  "dungeon-master": {
    title: "The Overseer",
    client: "Personal Project",
    category: "Character Design",
    year: "2023",
    tris: "95K TRIS",
    textures: "4x 4K PBR",
    workflow: "Standard",
    software: ["ZBrush", "Marvelous Designer"],
    description: "A dark fantasy character concept.",
    phase1: "Anatomy study.",
    phase2: "Cloth simulation.",
    phase3: "Final detailing."
  },
  "tokolosh": {
    title: "Mythic Creature",
    client: "Personal Project",
    category: "Creature Design",
    year: "2024",
    tris: "110K TRIS",
    textures: "6x 4K PBR",
    workflow: "UDIM",
    software: ["ZBrush", "Mari"],
    description: "A creature design based on folklore.",
    phase1: "Base mesh and proportions.",
    phase2: "Skin detailing and alphas.",
    phase3: "Texture painting."
  }
};

export default async function PortfolioDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projectsData[resolvedParams.slug];

  if (!project) {
    notFound();
  }

  // Placeholder images for now (to be replaced by AI generated ones)
  const heroImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuDvk3zQyzpsaZ6QvXGQ0izdOcdjeh988Rj32_DcFIMADVUZfkgrhx8IWM7rxBHvl_1S-9F2Rat_4Fnp4j8thE8M9Ry5UCq0Cx_K_w_ruczn9E1ZObdKyJPqVuF9XgXy5o893nAkxeBXIMkn0xqfIVR7I056YKuiuAwHByYLGh4eCVEy71QjeZ7vGNt-RIBrU-wDXv4LpiN-BJOEzbtSN3MN7PKVv18x0krZvUQbNkpi5JiQg3DNt8VLeCSm-4FyyDE7JINY7sX6q9E";
  const detailImage1 = "https://lh3.googleusercontent.com/aida-public/AB6AXuATh0S9Rx0gbJHcmYVELJm651Z3x36KI6UC3C8E4927_Xg7T90BB7XktRLIaFgWjUgzSMaAGaBK_A_-NK5lTbIt2FPcO9rI4b57I4HaRwXm87UJ2lKodWjaQdavJYs4-f7785L0qNbSX9exGys7uKvh_VmwWAPiTlCW1QeyuDlbD2T_fni5QbiV0r5uBv4YYBXBrjfwLjq6RJncggmqIVldZVsPZrWhlhM20GZ8Fimb1OGqLKebmEeofKAzYpNDjMh62udht7OseUs";
  const detailImage2 = "https://lh3.googleusercontent.com/aida-public/AB6AXuCihsYm-N-HMcwf4Dxx_Bu-rTDRLI0Q_2DtXHY2rc0jqSdaSNC7fuRCxwfnnZuM5-RBfY-k8CHnaKrJK1f4ehDkhPZfkE6xSvZKRWJtWpNe8Aatl9bGoRys69n0D0-Eg0FylCpvh3qBLZ9jWH9y9cYq8-oH4374hQj4LdY7Kv67COHxy4gQYdHlReuJwKKgkHH2nSQuDHKWsZlokkPvH7nOBCv8RThrkmNTR4qZZEDX4SD_yiKpQjf-shIuIFOW5c6uPfKpBpHBkHE";
  const detailImage3 = "https://lh3.googleusercontent.com/aida-public/AB6AXuBTgVkJ1-NvY-2p5X3wR6oKbfkxDtIUQOavpZT2tMDqOzYuD31aEzTG5C0oN67hWPFz3pU7riZ_XfxvgLIF4rLGvD8L70pPjLJ_5DMK-xFCDnglJ9BSrdGKi3ak9sT0h7xQd4C2LfjfmanE4AW-imt8K6lOfEf0SKptxT8p9aL-AYypId5KYBnsPZrl2o7WGUkyoUYHHu3ESTwzoBQmOFHWnp9W5-aEVebtTPrTv6HV7By35QTJbPKoCNnZspl72zasgddyv7L3Bgc";
  const breakdown1 = "https://lh3.googleusercontent.com/aida-public/AB6AXuDbvU6YBbyrpnIeFvq3QnTl9U3Jk_-XRNQO8DUE43EXw3bHmJS8xXlT3vzgMZZF5YJROjCHVnxd1_gMykCE-uNLvHUruLjAOgnn8GFn_27YZkdopH4tWjbo8-a_1PNo9fT4K5jtoB5BNxw1pvmZ2tjCd79IoL_5GmGbzWcq-9aequRdNVtxBnTHLaix2BBa98X-a85nOc9HsqkjE7U1CV1IqtJ19Is6GSbbkNpDz8BIPmKZeSXfcTn5YhBcADS8vgjZiU4tW0MvZL4";
  const breakdown2 = "https://lh3.googleusercontent.com/aida-public/AB6AXuDIjgt-GBXzovECSbX6LxyTZeXhvwYSJJt3iZOJveAIPAARuIwHkvLyb5j0rbZ7zVwgIrG-9wvAicfY4j6Es-Ts1nJ1Aos0cXNMfgusGB1UB-1zC5VEMDVpwfPQxsgKmCiRAV6EIaC35a0JmLFS1Dqfu8b5UBS4e4kyDaWSu5k9LNbTxjr-NlGCiygEgfHNNPdfXLYBYX3SX5f44g733H0TUPxvx9HGUU7sy8b_V9XKEbT-ROxQ5xAgyGy2l3HPoDJWqLQs7MwA858";
  const breakdown3 = "https://lh3.googleusercontent.com/aida-public/AB6AXuC_ysKqSSBSnpvZ4eNNCInCwMDyO-omGe7yG2m441OGYKMqczWbp6kG8O2wACQar4Ry7aIXDZkA8Bkj6xfEaiTGvj1F45NP79dMf1-8VtrCRPrZa4lRoEgpOhsmFCcqTsxgu4XJcQjA2Bk2v0efx1sbWSQlHWWVLic-Ioi5aA73vGiEBUT1awSBZ8OB5mi8-XxtZzNkPe7S7PS_bzMNKZmrgJp-7AIjq7KvNT_N5PrqvNW8DZPMr9PMRpx_7tdciCyN0ipDscpZSrc";
  const breakdown4 = "https://lh3.googleusercontent.com/aida-public/AB6AXuCYXQmphtsDUsgPwwqjdj79lG7vfHWOmKMZIxeGIG_GUzIodvHA-D6JHtMgQxuCNe4Zr1IH2bQm0g5BFoKqlQRUWCtKPAcqbZ3TEJ3cv89wZoL7SFfNw1ae52gCrfrwLwANuimVBEft9ZGj5HuCV8V5d2LJKxf_rE5I_E7L5pZBmHCQ5dldohAySF1BTI6OIPNAro2zRRWn0mpIt-0vO3IeWIj5AOgUZeayHYXEwpYZ1fCL2l5DbNCRMmbfzWhAP8XEP5n6AWUIXmI";

  return (
    <div className="overflow-x-hidden pt-20">
      {/* Hero Section */}
      <header className="relative h-screen w-full flex items-end overflow-hidden">
        <img alt={project.title} className="absolute inset-0 w-full h-full object-cover" src={heroImage} id="hero-img" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-transparent to-transparent opacity-80"></div>
        <div className="relative z-10 w-full px-12 pb-24 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <span className="font-label text-primary tracking-widest uppercase text-sm mb-4 block">{project.category} / {project.year}</span>
            <h1 className="font-headline text-7xl md:text-9xl font-bold tracking-tighter text-on-surface leading-none">{project.title.toUpperCase()}</h1>
          </div>
          <div className="md:col-span-4 pb-4">
            <p className="font-label text-on-surface-variant uppercase text-xs tracking-wide mb-2">Client</p>
            <p className="font-headline text-2xl text-primary">{project.client}</p>
          </div>
        </div>
      </header>

      {/* The Craft Section (Deep Dive) */}
      <section className="py-40 bg-surface">
        <div className="max-w-[1400px] mx-auto px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
            <div className="md:col-span-4 sticky top-40">
              <h2 className="font-headline text-5xl font-bold mb-8 leading-tight">The<br />Craft</h2>
              <div className="w-12 h-[1px] bg-primary mb-8"></div>
              <p className="font-body text-on-surface-variant leading-relaxed text-lg">
                {project.description}
              </p>
            </div>
            <div className="md:col-span-8 space-y-40">
              <div className="aspect-[16/9] bg-surface-container overflow-hidden">
                <img alt="Detail render" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src={detailImage1} id="detail-img-1" />
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="aspect-[4/5] bg-surface-container mt-12">
                  <img alt="Vertical render" className="w-full h-full object-cover" src={detailImage2} id="detail-img-2" />
                </div>
                <div className="aspect-[4/5] bg-surface-container">
                  <img alt="Vertical render" className="w-full h-full object-cover" src={detailImage3} id="detail-img-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specs Section */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-[1400px] mx-auto px-12">
          <div className="flex flex-col md:flex-row justify-between items-center border-y border-outline-variant/20 py-16 gap-12">
            <div className="text-center md:text-left">
              <p className="font-label text-on-surface-variant text-[10px] tracking-widest uppercase mb-2">Complexity</p>
              <p className="font-headline text-3xl text-primary">{project.tris}</p>
            </div>
            <div className="text-center md:text-left">
              <p className="font-label text-on-surface-variant text-[10px] tracking-widest uppercase mb-2">Texture Sets</p>
              <p className="font-headline text-3xl text-primary">{project.textures}</p>
            </div>
            <div className="text-center md:text-left">
              <p className="font-label text-on-surface-variant text-[10px] tracking-widest uppercase mb-2">Workflow</p>
              <p className="font-headline text-3xl text-primary">{project.workflow}</p>
            </div>
            <div className="text-center md:text-left">
              <p className="font-label text-on-surface-variant text-[10px] tracking-widest uppercase mb-2">Software</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2">
                {project.software.map((sw: string) => (
                  <span key={sw} className="px-3 py-1 bg-surface-container-highest text-[10px] font-label uppercase tracking-wide text-on-surface">{sw}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Breakdown */}
      <section className="py-40 bg-surface">
        <div className="max-w-[1400px] mx-auto px-12">
          <h2 className="font-headline text-5xl font-bold mb-24 text-center">Technical Breakdown</h2>
          <div className="space-y-40">
            {/* Sculpting */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
              <div>
                <span className="font-label text-primary-container text-xs tracking-widest uppercase mb-4 block">Phase 01</span>
                <h3 className="font-headline text-4xl mb-6">Digital Sculpting</h3>
                <p className="font-body text-on-surface-variant leading-relaxed">
                  {project.phase1}
                </p>
              </div>
              <div className="aspect-square bg-surface-container">
                <img alt="Clay render" className="w-full h-full object-cover" src={breakdown1} id="breakdown-img-1" />
              </div>
            </div>
            {/* Topology & UVs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
              <div className="order-2 md:order-1 aspect-square bg-surface-container">
                <img alt="Wireframe" className="w-full h-full object-cover opacity-50" src={breakdown2} id="breakdown-img-2" />
              </div>
              <div className="order-1 md:order-2">
                <span className="font-label text-primary-container text-xs tracking-widest uppercase mb-4 block">Phase 02</span>
                <h3 className="font-headline text-4xl mb-6">Topology & UVs</h3>
                <p className="font-body text-on-surface-variant leading-relaxed">
                  {project.phase2}
                </p>
              </div>
            </div>
            {/* Texturing */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
              <div>
                <span className="font-label text-primary-container text-xs tracking-widest uppercase mb-4 block">Phase 03</span>
                <h3 className="font-headline text-4xl mb-6">PBR Texturing</h3>
                <p className="font-body text-on-surface-variant leading-relaxed">
                  {project.phase3}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 aspect-square">
                <div className="bg-surface-container-high flex items-center justify-center p-8">
                  <div className="w-full aspect-square rounded-full shadow-2xl overflow-hidden">
                    <img alt="Material Sphere" className="w-full h-full object-cover" src={breakdown3} id="breakdown-img-3" />
                  </div>
                </div>
                <div className="col-span-2 bg-surface-container-high overflow-hidden">
                  <img alt="Macro texture" className="w-full h-full object-cover" src={breakdown4} id="breakdown-img-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project Navigation */}
      <section className="border-t border-outline-variant/10">
        <Link className="group relative block w-full py-48 overflow-hidden bg-surface-container-lowest text-center" href="/portfolio">
          <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
            <img alt="Next project preview" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrBjcLzpCz87KOs6Oh_PH-9doS_g1L7FaAkcBUSqpD1vf4ec9Tg-FblfWL2QIudclKHK7eBfBNO18j5sE0ln-hlQs62Q4a-NyxycBGXEZUABVv3oEIUqzNW7r8sKXDuSNvpZRsELh8kvxFJScD28ZbVH3kLi_o9pfPvwP4nMFcP5cj3gceLM2fJt2_yK8keGfvrJGZEUCk87G5u7ozVa8UIuFHdtTw9bfwZgeKfyMsVCnhpSbtDYeJ9fV3PWalqW-m7mOMi0DU7nU" />
          </div>
          <div className="relative z-10">
            <span className="font-label text-on-surface-variant text-xs tracking-widest uppercase mb-4 block">Return</span>
            <h4 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter text-on-surface group-hover:text-primary transition-colors duration-500">BACK TO ARCHIVE</h4>
          </div>
        </Link>
      </section>
    </div>
  );
}
