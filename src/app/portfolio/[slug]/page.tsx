import Link from "next/link";
import { notFound } from "next/navigation";
import { OptimizedVideo } from "@/components/OptimizedVideo";

// Mock data for the dynamic pages
const projectsData: Record<string, any> = {
  "temple": {
    title: "The Temple",
    client: "Personal Project",
    category: "Environments",
    year: "2024",
    tris: "Mixed",
    textures: "4 x 2k",
    workflow: "Environment / Game / PBR",
    software: ["ZBrush", "Maya", "Substance Painter", "Rizom UV", "Marmoset Toolbag", "Photoshop"],
    description: "Tranquility is a state of mind",
    phase1: "Key assets were sculpted in Zbrush before being retopologised in Maya for the final composition",
    phase2: "Topology focussed on reducing the poly count to optimise each asset for game implementation",
    phase3: "Material definition though Substance painter. PBR flow with hand painted details",
    renderText: "Utilisation of Marmoset's Lighting Material set ups to add depth to the image",
    heroImage: "/Portfolio/updates/Temple Beauty.jpg",
    detailImage1: "/Portfolio/updates/Temple Close1.jpg",
    detailImage2: "/Portfolio/updates/Temple close2.jpg",
    detailImage3: "/Portfolio/updates/Temple close3.jpg",
    breakdown1: "/Portfolio/updates/Temple Wire.jpg",
    breakdown2: "/Portfolio/updates/Temple Wirefame3.jpg",
    breakdown3: "/Portfolio/updates/Temple Albedo.jpg",
    breakdown4: "/Portfolio/updates/Temple Normals.jpg",
    renderImg: "/Portfolio/updates/Temple marmoset view.jpg",
    video: "Temple Vid"
  },
  "demon": {
    title: "Demoness",
    client: "Personal Project",
    category: "Characters",
    year: "2024",
    tris: "25k quads",
    textures: "6x2k",
    workflow: "PBR / Game",
    software: ["ZBrush", "Maya", "Substance Painter", "Rizom UV", "Marmoset Toolbag"],
    description: "Original Concept by Wu Shenyou",
    phase1: "Shape and silhouette",
    phase2: "Refining the mechanical and organic integration.",
    phase3: "Look dev through procedure",
    renderText: "Final lighting and composition",
    heroImage: "/Portfolio/updates/Demon Beauty 1.jpg",
    detailImage1: "/Portfolio/updates/Demon close1.jpg",
    detailImage2: "/Portfolio/updates/Demon close 2.jpg",
    detailImage3: "/Portfolio/updates/Demon close 2.jpg",
    breakdown1: "/Portfolio/updates/Demon Sculpt 1.jpg",
    breakdown2: "/Portfolio/updates/Demon WIre.jpg",
    breakdown3: "/Portfolio/updates/Demon Map 2.jpg",
    breakdown4: "/Portfolio/updates/Demon MAp1.jpg",
    renderImg: "/Portfolio/updates/Demon Render.jpg",
    video: "Demon Beauty"
  },
  "witch": {
    title: "Witch of the Moon",
    client: "Personal Project",
    category: "Characters",
    year: "2025",
    tris: "50k Poly",
    textures: "5 x 4k",
    workflow: "PBR / Game",
    software: ["ZBrush", "Maya", "Substance Painter", "Rizom UV", "Marmoset Toolbag"],
    description: "Detailed character study focusing on expressive lighting and materials.",
    phase1: "from block out to detail",
    phase2: "game model optimisation with focus on baked in details",
    phase3: "Material definition and PBR workflow.",
    renderText: "Rendering in Marmoset Toolbag",
    heroImage: "/Portfolio/updates/Witch Key Beauty.jpg",
    detailImage1: "/Portfolio/updates/Witch close1.jpg",
    detailImage2: "/Portfolio/Witch/03-witch-torso.jpg",
    detailImage3: "/Portfolio/Witch/04-witch-side.jpg",
    breakdown1: "/Portfolio/updates/Witch Sculpt.jpg",
    breakdown2: "/Portfolio/updates/Witch WireFrame.jpg",
    breakdown3: "/Portfolio/updates/Witch Maps2.jpg",
    breakdown4: "/Portfolio/updates/Witch Maps1.jpg",
    renderImg: "/Portfolio/updates/Marmoset Screen.jpg",
    video: "Witch Witch Turn"
  },
  "legacy-of-adam": {
    title: "Legacy of Adam",
    client: "Client Project - released",
    category: "Characters",
    year: "2024",
    tris: "Ranged",
    textures: "1 to 2",
    workflow: "Cinematic / UDIM",
    software: ["ZBrush", "Marvelous Designer", "Substance Painter", "Maya"],
    description: "Sculpting and Look Development Credit. This is a selection of the clothing items made for this semi-stylised series created for a rural African youth audience. Clothing was sculpted in Zbrush and Marvellous designer before being UV'd in Maya and Textured in Substance Painter.",
    heroImage: "/Portfolio/Legacy-of-Adam/legacy-of-adam-eliab.jpg",
    detailImage1: "/Portfolio/Legacy-of-Adam/legacy-of-adam-fatguy.jpg",
    detailImage2: "/Portfolio/Legacy-of-Adam/legacy-of-adam-jonothan.jpg",
    detailImage3: "/Portfolio/Legacy-of-Adam/legacy-of-adam-joseph.jpg",
  },
  "marionette": {
    title: "Marionette",
    client: "Personal Project",
    category: "Characters",
    year: "2023",
    tris: "41k Poly",
    textures: "4x2k",
    workflow: "Procedural",
    software: ["ZBrush", "Maya", "Substance Painter", "Rizom UV", "Marmoset Toolbag 5"],
    description: "Concept by Katherine Bartlett. Exploring organic movement within rigid digital constraints.",
    phase1: "digital sculpting",
    phase2: "game model optimisation suitable for animations",
    phase3: "with hand painted elements",
    renderText: "Rendered in Marmoset toolbag",
    heroImage: "/Portfolio/updates/MB Key Beauty Shot.jpg",
    detailImage1: "/Portfolio/updates/MB Close1.jpg",
    detailImage2: "/Portfolio/updates/MB Close2.jpg",
    detailImage3: "/Portfolio/updates/MB Close2.jpg",
    breakdown1: "/Portfolio/updates/MB sculpt Primary.jpg",
    breakdown2: "/Portfolio/updates/MB WF1.jpg",
    breakdown3: "/Portfolio/updates/MB Maps1.jpg",
    breakdown4: "/Portfolio/updates/MB Maps2.jpg",
    renderImg: "/Portfolio/updates/MB Viewport.jpg",
    video: "MB Video1",
    video2: "MB Video2"
  },
  "warrior": {
    title: "The Warrior",
    client: "Personal Project",
    category: "Characters",
    year: "2023",
    tris: "35k Quads",
    textures: "4x2k",
    workflow: "Game / PBR",
    software: ["ZBrush", "Maya", "Substance Painter", "Rizom UV", "Marmoset Toolbag"],
    description: "Character creation in the style of Overwatch",
    phase1: "Digital Sculpting",
    phase2: "Retopo/ UV",
    phase3: "PBR Texturing",
    renderText: "Rendering",
    heroImage: "/Portfolio/updates/War Beauty.jpg",
    detailImage1: "/Portfolio/updates/war close1.png",
    detailImage2: "/Portfolio/updates/War close 2.png",
    detailImage3: "/Portfolio/updates/War close 3.jpg",
    breakdown1: "/Portfolio/updates/war sculpt.png",
    breakdown2: "/Portfolio/updates/war wireframe.jpg",
    breakdown3: "/Portfolio/updates/war textures.jpg",
    breakdown4: "/Portfolio/updates/war textures.jpg",
    renderImg: "/Portfolio/updates/Warrior render .png",
    video: "war turn"
  },
  "cat": {
    title: "Wild Cat",
    client: "Personal Project",
    category: "Characters",
    year: "2024",
    tris: "50k poly",
    textures: "4x2k",
    workflow: "Printing / Cinematic",
    software: ["ZBrush", "Maya", "Substance Painter", "Rizom UV", "Marmoset Toolbag", "Fibreshop"],
    description: "Concept artist: Wu Shenyu. Creating monsters and magic",
    phase1: "concept to 3d",
    phase2: "Made for Printing",
    phase3: "adding flair",
    renderText: "lights, camera, action",
    heroImage: "/Portfolio/updates/CatBoss Beauty Shot.jpg",
    detailImage1: "/Portfolio/updates/Cat Close1.jpg",
    detailImage2: "/Portfolio/updates/Cat CLose 2.jpg",
    detailImage3: "/Portfolio/updates/Cat Close 3.jpg",
    breakdown1: "/Portfolio/updates/Cat Sculpt 1.jpg",
    breakdown2: "/Portfolio/updates/Cat Wire.jpg",
    breakdown3: "/Portfolio/updates/Cat PBR.jpg",
    breakdown4: "/Portfolio/updates/Cat PBR.jpg",
    renderImg: "/Portfolio/updates/Cat Render.jpg",
    video: "WildCat Turn"
  },
  "dungeon-master": {
    title: "Dungeon Master",
    client: "Personal Project",
    category: "Characters",
    year: "2025",
    tris: "40k Poly",
    textures: "4x 4K PBR",
    workflow: "PBR / Game",
    software: ["ZBrush", "Maya", "Substance Painter", "Rizom UV", "Marmoset Toolbag"],
    description: "A dark fantasy character concept.",
    phase1: "Capturing the characters form and silhouette",
    phase2: "Optimising for game, while keeping animation principles in mind",
    phase3: "with hand painted details",
    heroImage: "/Portfolio/updates/DM Beauty.jpg",
    detailImage1: "/Portfolio/updates/DM Close1.jpg",
    detailImage2: "/Portfolio/Dungeon Master/02-Dungeon-master-head.jpg",
    detailImage3: "/Portfolio/Dungeon Master/03-Dungeon-master-torso.jpg",
    breakdown1: "/Portfolio/updates/DM Sclpt1.jpg",
    breakdown2: "/Portfolio/updates/DM UVs.jpg",
    breakdown3: "/Portfolio/updates/DM Maps1.jpg",
    breakdown4: "/Portfolio/updates/DM Maps2.jpg",
    video: "DM Turn"
  },
  "tokolosh": {
    title: "Tokoloshe",
    client: "Personal Project",
    category: "Characters",
    year: "2024",
    tris: "35k Poly",
    textures: "4x2k",
    workflow: "PBR / Game optimised",
    software: ["ZBrush", "Maya", "Substance Painter", "Rizom UV", "Marmoset Toolbag", "Fibreshop"],
    description: "A creature design based on folklore.",
    phase1: "Building the proportions to creating the details",
    phase2: "Low poly, high baked details",
    phase3: "Bringin it to life through PBR pipelines",
    renderText: "Lighting the monster",
    heroImage: "/Portfolio/updates/Toko Beauty.jpg",
    detailImage1: "/Portfolio/updates/Toko Close 1.jpg",
    detailImage2: "/Portfolio/updates/Toko Close 2.jpg",
    detailImage3: "/Portfolio/updates/Toko Close 3.jpg",
    breakdown1: "/Portfolio/updates/Toko Wire.jpg",
    breakdown2: "/Portfolio/updates/Toko UV.jpg",
    breakdown3: "/Portfolio/updates/Toko Maps.jpg",
    breakdown4: "/Portfolio/updates/Toko Maps.jpg",
    renderImg: "/Portfolio/updates/Toko Render.jpg",
    video: "Toko Turn"
  }
};

export default async function PortfolioDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projectsData[resolvedParams.slug];

  if (!project) {
    notFound();
  }

  const { heroImage, detailImage1, detailImage2, detailImage3, breakdown1, breakdown2, breakdown3, breakdown4 } = project;
  const isLegacyOfAdam = resolvedParams.slug === "legacy-of-adam";

  return (
    <div className="overflow-x-hidden pt-20">
      {/* Hero Section */}
      <header className="relative h-screen w-full flex items-end overflow-hidden bg-[#131313]">
        <div className="absolute inset-0 flex justify-center">
          <div className="relative w-full max-w-[1920px] h-full">
            <img alt={project.title} className="absolute inset-0 w-full h-full object-cover" src={heroImage} id="hero-img" />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-transparent to-transparent opacity-80"></div>
        <div className="relative z-10 w-full pb-24">
          <div className="max-w-[1920px] mx-auto px-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <span className="font-label text-primary tracking-widest uppercase text-sm mb-4 block">{project.category} / {project.year}</span>
            <h1 className="font-headline text-7xl md:text-9xl font-bold tracking-tighter text-on-surface leading-none">{project.title.toUpperCase()}</h1>
          </div>
          <div className="md:col-span-4 pb-4">
            <p className="font-label text-on-surface-variant uppercase text-xs tracking-wide mb-2">Client</p>
            <p className="font-headline text-2xl text-primary">{project.client}</p>
          </div>
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
              <p className="font-body text-on-surface-variant leading-relaxed text-lg whitespace-pre-line">
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

      {!isLegacyOfAdam && (
        <>
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

                {/* Optional Rendering / Video Showcase */}
                {(project.renderImg || project.video) && (
                  <div className="pt-24 border-t border-outline-variant/10">
                    <div className="text-center mb-16">
                      <span className="font-label text-primary-container text-xs tracking-widest uppercase mb-4 block">Final Showcase</span>
                      <h3 className="font-headline text-4xl mb-6">{project.renderText || "Rendering & Turntable"}</h3>
                    </div>
                    <div className="space-y-12">
                      {project.renderImg && (
                        <div className="w-full aspect-[16/9] bg-surface-container">
                          <img alt="Final Render" className="w-full h-full object-cover" src={project.renderImg} />
                        </div>
                      )}
                      {project.video && (
                        <OptimizedVideo slug={project.video} title={project.title} />
                      )}
                      {project.video2 && (
                        <OptimizedVideo slug={project.video2} title={project.title} />
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Next Project Navigation */}
      <section className="border-t border-outline-variant/10">
        <Link className="group relative block w-full py-48 overflow-hidden bg-surface-container-lowest text-center" href="/portfolio">
          <div className="relative z-10">
            <span className="font-label text-on-surface-variant text-xs tracking-widest uppercase mb-4 block">Return</span>
            <h4 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter text-on-surface group-hover:text-primary transition-colors duration-500">BACK TO PORTFOLIO</h4>
          </div>
        </Link>
      </section>
    </div>
  );
}
