import Link from "next/link";
import { notFound } from "next/navigation";

// Mock data for the dynamic pages
const projectsData: Record<string, any> = {
  "temple": {
    title: "The Silent Spire",
    client: "Personal Project",
    category: "Environments",
    year: "2024",
    tris: "142K TRIS",
    textures: "5x 4K PBR",
    workflow: "UDIM / ACES",
    software: ["ZBrush", "Maya", "Substance"],
    description: "An exploration of silent lethality. The vision was to create a silhouette that feels both monolithic and agile, drawing inspiration from predatory anatomy and brutalist architecture.",
    phase1: "High-fidelity sculpting performed in ZBrush. Emphasis on anatomical accuracy beneath the hard-surface components to ensure realistic deformation during animation.",
    phase2: "Retopology focused on edge-flow for cinematic rigging. The mesh is optimized for sub-division surfaces while maintaining a manageable base-poly count.",
    phase3: "Material definition via Substance Painter. We utilized a layered shader approach: a base obsidian ceramic, topped with a metallic gold leaf, finished with a procedural dust and wear layer.",
    heroImage: "/Portfolio/Temple/01-temple.jpg",
    detailImage1: "/Portfolio/Temple/02-temple.jpg",
    detailImage2: "/Portfolio/Temple/03-temple.jpg",
    detailImage3: "/Portfolio/Temple/04-temple.jpg",
    breakdown1: "/Portfolio/Temple/05-temple.jpg",
    breakdown2: "/Portfolio/Temple/06-temple.jpg",
    breakdown3: "/Portfolio/Temple/07-temple.jpg",
    breakdown4: "/Portfolio/Temple/01-temple.jpg"
  },
  "demon": {
    title: "Neural Interface V4",
    client: "Framestore",
    category: "Characters",
    year: "2023",
    tris: "85K TRIS",
    textures: "3x 4K PBR",
    workflow: "Standard",
    software: ["Maya", "Houdini"],
    description: "A demon-inspired neural interface.",
    phase1: "Concept and base blockout.",
    phase2: "Refining the mechanical and organic integration.",
    phase3: "Final lookdev and compositing.",
    heroImage: "/Portfolio/Demon/Demon_hero.jpg",
    detailImage1: "/Portfolio/Demon/Demon_face.jpg",
    detailImage2: "/Portfolio/Demon/Demon_side.jpg",
    detailImage3: "/Portfolio/Demon/Demon_book.jpg",
    breakdown1: "/Portfolio/Demon/Demon_sculpt1.jpg",
    breakdown2: "/Portfolio/Demon/Demon_retopo.jpg",
    breakdown3: "/Portfolio/Demon/Demon_substance1.jpg",
    breakdown4: "/Portfolio/Demon/Demon_uv.jpg"
  },
  "witch": {
    title: "Obsidian Alley",
    client: "Wētā FX",
    category: "Characters",
    year: "2022",
    tris: "2M TRIS",
    textures: "10x 4K PBR",
    workflow: "UDIM",
    software: ["Unreal Engine", "Maya"],
    description: "Detailed character study focusing on expressive lighting and materials.",
    phase1: "Layout and blocking.",
    phase2: "Asset creation and placement.",
    phase3: "Lighting and atmospheric effects.",
    heroImage: "/Portfolio/Witch/01-witch-close.jpg",
    detailImage1: "/Portfolio/Witch/02-witch-full-body.jpg",
    detailImage2: "/Portfolio/Witch/03-witch-torso.jpg",
    detailImage3: "/Portfolio/Witch/04-witch-side.jpg",
    breakdown1: "/Portfolio/Witch/10-witch-sculpt.jpg",
    breakdown2: "/Portfolio/Witch/07-witch-mesh.jpg",
    breakdown3: "/Portfolio/Witch/05-witch-maps1.jpg",
    breakdown4: "/Portfolio/Witch/08-witch-marmoset-screen.jpg"
  },
  "legacy-of-adam": {
    title: "Legacy of Adam",
    client: "Personal Project",
    category: "Characters",
    year: "2024",
    tris: "120K TRIS",
    textures: "4x 4K PBR",
    workflow: "Standard",
    software: ["ZBrush", "Substance"],
    description: "Character collection for a narrative project.",
    phase1: "Primary forms and silhouette.",
    phase2: "Secondary details and surface texture.",
    phase3: "Material separation and final rendering.",
    heroImage: "/Portfolio/Legacy-of-Adam/legacy-of-adam-eliab.jpg",
    detailImage1: "/Portfolio/Legacy-of-Adam/legacy-of-adam-fatguy.jpg",
    detailImage2: "/Portfolio/Legacy-of-Adam/legacy-of-adam-jonothan.jpg",
    detailImage3: "/Portfolio/Legacy-of-Adam/legacy-of-adam-joseph.jpg",
    breakdown1: "/Portfolio/Legacy-of-Adam/legacy-of-adam-judas.jpg",
    breakdown2: "/Portfolio/Legacy-of-Adam/legacy-of-adam-npc91.jpg",
    breakdown3: "/Portfolio/Legacy-of-Adam/legacy-of-adam-pharisee.jpg",
    breakdown4: "/Portfolio/Legacy-of-Adam/legacy-of-adam-priestofherod.jpg"
  },
  "marionette": {
    title: "Fluidity Study",
    client: "Personal Project",
    category: "Characters",
    year: "2023",
    tris: "50K TRIS",
    textures: "1x 4K PBR",
    workflow: "Procedural",
    software: ["Houdini", "Redshift"],
    description: "Exploring organic movement within rigid digital constraints.",
    phase1: "Procedural setup and simulation.",
    phase2: "Cache and mesh generation.",
    phase3: "Shading and rendering.",
    heroImage: "/Portfolio/Marionette/Marionette-hero.jpg",
    detailImage1: "/Portfolio/Marionette/Marionette1.jpg",
    detailImage2: "/Portfolio/Marionette/Marionette2.jpg",
    detailImage3: "/Portfolio/Marionette/Marionette3.jpg",
    breakdown1: "/Portfolio/Marionette/Marionette-sculpt.jpg",
    breakdown2: "/Portfolio/Marionette/Marionette-wireframe.jpg",
    breakdown3: "/Portfolio/Marionette/Marionette-mix.jpg",
    breakdown4: "/Portfolio/Marionette/Marionette-clay-render.jpg"
  },
  "potion-factory": {
    title: "Cortex Core",
    client: "The Mill",
    category: "Environments",
    year: "2022",
    tris: "500K TRIS",
    textures: "8x 4K PBR",
    workflow: "UDIM",
    software: ["Maya", "Substance"],
    description: "Precision modeling project exploring Boolean workflows and non-destructive modeling techniques.",
    phase1: "Hard surface blockout.",
    phase2: "Boolean operations and bevels.",
    phase3: "Texture baking and lookdev.",
    heroImage: "/Portfolio/Potion-Factory/CMatthee_PotionFactory_Beauty.jpg",
    detailImage1: "/Portfolio/Potion-Factory/CMatthee_PotionFactory_CloseUp.jpg",
    detailImage2: "/Portfolio/Potion-Factory/CMatthee_PotionFactory_Wireframe.jpg",
    detailImage3: "/Portfolio/Potion-Factory/CMatthee_PotionFactory_Beauty.jpg",
    breakdown1: "/Portfolio/Potion-Factory/CMatthee_PotionFactory_Wireframe.jpg",
    breakdown2: "/Portfolio/Potion-Factory/CMatthee_PotionFactory_CloseUp.jpg",
    breakdown3: "/Portfolio/Potion-Factory/CMatthee_PotionFactory_Beauty.jpg",
    breakdown4: "/Portfolio/Potion-Factory/CMatthee_PotionFactory_Wireframe.jpg"
  },
  "cat": {
    title: "Unit 7 Recon",
    client: "Industrial Light & Magic",
    category: "Characters",
    year: "2024",
    tris: "142K TRIS",
    textures: "5x 4K PBR",
    workflow: "UDIM / ACES",
    software: ["ZBrush", "Maya", "Substance"],
    description: "High-fidelity asset created for cinematic sequences using UDIM workflow and complex material layering.",
    phase1: "Concept to 3D blockout.",
    phase2: "High poly sculpting and detailing.",
    phase3: "Retopology, UVs, and final textures.",
    heroImage: "/Portfolio/Cat/01-cat-monster.jpg",
    detailImage1: "/Portfolio/Cat/02-cat-monster.jpg",
    detailImage2: "/Portfolio/Cat/03-cat-monster.jpg",
    detailImage3: "/Portfolio/Cat/04-cat-monster.jpg",
    breakdown1: "/Portfolio/Cat/05-cat-monster.jpg",
    breakdown2: "/Portfolio/Cat/06-cat-monster.jpg",
    breakdown3: "/Portfolio/Cat/07-cat-monster.jpg",
    breakdown4: "/Portfolio/Cat/01-cat-monster.jpg"
  },
  "dungeon-master": {
    title: "The Overseer",
    client: "Personal Project",
    category: "Characters",
    year: "2023",
    tris: "95K TRIS",
    textures: "4x 4K PBR",
    workflow: "Standard",
    software: ["ZBrush", "Marvelous Designer"],
    description: "A dark fantasy character concept.",
    phase1: "Anatomy study.",
    phase2: "Cloth simulation.",
    phase3: "Final detailing.",
    heroImage: "/Portfolio/Dungeon Master/01-Dungeon-master-hero.jpg",
    detailImage1: "/Portfolio/Dungeon Master/02-Dungeon-master-head.jpg",
    detailImage2: "/Portfolio/Dungeon Master/03-Dungeon-master-torso.jpg",
    detailImage3: "/Portfolio/Dungeon Master/05-Dungeon-master-skull-1.jpg",
    breakdown1: "/Portfolio/Dungeon Master/09-Dungeon-master-sculpt-1.jpg",
    breakdown2: "/Portfolio/Dungeon Master/14-Dungeon-master-wireframe.jpg",
    breakdown3: "/Portfolio/Dungeon Master/12-Dungeon-master-maps-1.jpg",
    breakdown4: "/Portfolio/Dungeon Master/20-Dungeon-master-marmoset.jpg"
  },
  "tokolosh": {
    title: "Mythic Creature",
    client: "Personal Project",
    category: "Characters",
    year: "2024",
    tris: "110K TRIS",
    textures: "6x 4K PBR",
    workflow: "UDIM",
    software: ["ZBrush", "Mari"],
    description: "A creature design based on folklore.",
    phase1: "Base mesh and proportions.",
    phase2: "Skin detailing and alphas.",
    phase3: "Texture painting.",
    heroImage: "/Portfolio/Tokolosh/01-tokolosh-close.jpg",
    detailImage1: "/Portfolio/Tokolosh/02-tokolosh-face.jpg",
    detailImage2: "/Portfolio/Tokolosh/03-tokolosh-body.jpg",
    detailImage3: "/Portfolio/Tokolosh/01-tokolosh-close.jpg",
    breakdown1: "/Portfolio/Tokolosh/07-tokolosh-head-sculpt.jpg",
    breakdown2: "/Portfolio/Tokolosh/11-tokolosh-paint-map.jpg",
    breakdown3: "/Portfolio/Tokolosh/12-tokolosh-workspace.jpg",
    breakdown4: "/Portfolio/Tokolosh/02-tokolosh-face.jpg"
  }
};

export default async function PortfolioDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projectsData[resolvedParams.slug];

  if (!project) {
    notFound();
  }

  const { heroImage, detailImage1, detailImage2, detailImage3, breakdown1, breakdown2, breakdown3, breakdown4 } = project;

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
