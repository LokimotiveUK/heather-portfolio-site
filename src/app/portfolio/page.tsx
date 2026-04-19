import Link from "next/link";

export default function PortfolioDashboard() {
  const projects = [
    {
      slug: "temple",
      title: "The Silent Spire",
      client: "Personal Project",
      category: "Environment Design",
      description: "A study in brutalist architecture and scale, utilizing procedural displacement and custom photogrammetry.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvFMf6RPMYv-xK8RN1gb8f-YAyTygacwTgNxIVIiDRw58t5yzt5mK4zvxdDtbeg3htZJT9c4Foy4PeCGZEvaz5omrWBUkkheWy2yaPKIv6UoLVH5lnwXZWGC0LC-mTw-jRSq7Rss33ovuM8mmAzSHGDIL7RS6D5lkmZJsDNy1IVSB1MHNbjQ0fKkW92_rGSvPJ9eylo1gHoWJ8T4D0D2y0g8duU88SFwTshSX2LTwofjH14exKFVdoJq-3m5NudY-kCIRxYOjqXkE",
      alt: "architectural 3D environment of a brutalist monolith rising from a dark desert at night under cold blue starlight",
      delay: "pt-12"
    },
    {
      slug: "demon",
      title: "Neural Interface V4",
      client: "Framestore",
      category: "VFX / Shading",
      description: "An exploration of sub-surface scattering and procedurally generated anatomy for digital humans.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfbpefT36uBvcQmcsuotffeGB_jN_yVi6nZzL9KOMjH1PhQqngql7rkmf9h0X_aj293KjLSWjhBn-f2r4oDoj1aoxHIjlJ93oN6Uptsv9nuDUC04bA7wTj5socqcBgWf5hX4kuWQ_CRH8-ETd9NUScZmy78rgVpws9lb6KWExwfZMFpUoZa7b7Y0mq4A8C7tV-nusjweSRk99tXbZLKX4FxZKlNX5RirHTygPMZdmCe9wxO8NrKuj6oEkfFgt4jggUZAbgtMpyYSo",
      alt: "close-up of a hyper-realistic 3D human eye with complex iris patterns and micro-reflections of a digital interface",
      delay: ""
    },
    {
      slug: "witch",
      title: "Obsidian Alley",
      client: "Wētā FX",
      category: "World Building",
      description: "Detailed set-dressing and lighting study focusing on reflective surfaces and atmospheric particle effects.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuACdYzpFkcsfYmHn5G02tMgTwG2GlRu0SsGchh0CJO-pZg1YrIYwqYkrPvqRgs9GByy7Ald31oYP0UMJ7kfDw7i1-QZhD2f6clLHFS_GmI6Ta9bjWmLJMM7l0PTgDP57JrIloXI9xAm0v-TyQ8vBy5EDs2A8rxp7Gv0n7d8kSgxLPkL1IfycC_y8cgCGCVFkvIKx-yvno51jH79ncEvWWaJeJCxWvcV5EIOoLMMiP-E8jLyvX5di2l1wTS9xR_mHtq4y-ipsszS-z4",
      alt: "atmospheric 3D render of a cyberpunk street in heavy rain with gold neon reflections on black obsidian-like pavement",
      delay: "md:-mt-12"
    },
    {
      slug: "legacy-of-adam",
      title: "Amber Soul",
      client: "Personal Project",
      category: "Sculpting",
      description: "Organic modeling challenge combining hard-surface wood textures with fluid gold accents.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAI_qrO8g_TYVPgGVMkV9JrdSLL36bXAQeMFBZMA9kEu4ZsZKHhPYQOzbKa9qR-zP-R9fhgRaBoaIEedvWzLPGFgz8GoS2zJqeSJgxdUE3btXa8y6viQU4IWMx4PNCB6tK20aoGL1q8nDCRtf1jyIOW-y45xDD-oFjSeS_OVQ0175WBznUQuXRQ5Fnn7-lbXbobEwAqeqwJ0bub7uzpXBpshBu9XMW36cf8wUTgVvz5DHpg2qe8eESMR0qYXxuzC6anT1bn1QMOt3E",
      alt: "stylized 3D character sculpt of a forest deity made of dark wood and glowing gold sap in a cinematic soft-focus forest",
      delay: "pt-6"
    },
    {
      slug: "potion-factory",
      title: "Cortex Core",
      client: "The Mill",
      category: "Hard Surface",
      description: "Precision modeling project exploring Boolean workflows and non-destructive modeling techniques.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBeNjocf06oL8zeKpAZhwAkf7M1CLFivd2V6pwNM_JVgHnxQEqU25ssYCdMUY2HHE6LXYI5yLJHE_wKN1A49iuuZ3AVMMcZb8Vy_6Ovni9847Fm5S-3czIGCA9xoWya2yiwRTqZLlTvtrSIULB2RF-k_eB6FANQRL7boK8xp75K3HPZuouT_WibMrHxgm1CVz7Fsg-cdb2w7OnO2d8sSNjnDwXjKQ3vY6ArXZZW3mHEsQVlfwYzniQPJht3qMaJ_DWB60K26dnMqI8",
      alt: "3D mechanical component design with exploded view showing internal gold gears and black chrome housing",
      delay: ""
    },
    {
      slug: "cat",
      title: "Unit 7 Recon",
      client: "Industrial Light & Magic",
      category: "Modeling / Texturing",
      description: "High-fidelity asset created for cinematic sequences using UDIM workflow and complex material layering.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYSjpe4OqtrLVGW9tZgIf9dQhP4gZukEoM_Q-2p-qaKCwe_VQ7Rg9233uF7JW9B5UfMWJ8VxeRa4lKNz9sjMMirju4uXpswabMf3PXkCwU33EgPByT-0LPvvm00jdMt9VsMZMtWoZPOJu-YIOpRcz7fvGSG5CDaXPvr8eApR9gG_5vxx0G3GDJUUq48zQdAkPLdHUVhCTpINgHVwmOHFEKVKPXHCehOjCXjthCk0o43b-4FoVbOuIAQYitaYXCZxulDbpjHom1FH0",
      alt: "ultra-detailed 3D sculpt of a futuristic recon soldier with intricate armor plating and glowing amber visor in a dark moody studio",
      delay: ""
    }
  ];

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
            <button className="font-label text-xs uppercase tracking-widest text-primary border-b border-primary pb-2">All Projects</button>
            <button className="font-label text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors pb-2">Characters</button>
            <button className="font-label text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors pb-2">Environments</button>
            <button className="font-label text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors pb-2">VFX</button>
            <button className="font-label text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors pb-2">Personal</button>
          </div>
        </div>
      </section>

      {/* Archive Grid */}
      <section className="px-8 md:px-16">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-12">
          {projects.map((project, idx) => (
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
