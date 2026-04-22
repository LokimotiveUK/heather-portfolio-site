import Link from "next/link";
import { notFound } from "next/navigation";
import { OptimizedVideo } from "@/components/OptimizedVideo";
import { projects, type ProjectImage, type ProjectPhase } from "@/data/projects";

function ImageBlock({ image }: { image: ProjectImage }) {
  return (
    <figure className="w-full mx-auto" style={{ maxWidth: image.width ? `${image.width}px` : undefined }}>
      <div className="bg-surface-container overflow-hidden">
        <img
          src={image.src}
          alt={image.alt || image.caption || ""}
          loading="lazy"
          className="w-full h-auto block"
          style={{ aspectRatio: `${image.width} / ${image.height}` }}
        />
      </div>
      {image.caption && (
        <figcaption className="mt-3 text-[10px] uppercase tracking-[0.3em] text-on-surface-variant font-label">
          {image.caption}
        </figcaption>
      )}
    </figure>
  );
}

function ImageRow({ images }: { images: ProjectImage[] }) {
  if (images.length === 0) return null;
  const cols =
    images.length === 1 ? "" :
    images.length === 2 ? "md:grid-cols-2" :
    images.length === 3 ? "md:grid-cols-3" :
    "md:grid-cols-2";
  return (
    <div className={`grid grid-cols-1 ${cols} gap-6 md:gap-8 items-start`}>
      {images.map((image, i) => (
        <ImageBlock key={image.src + i} image={image} />
      ))}
    </div>
  );
}

function PhaseBlock({ phase, projectTitle }: { phase: ProjectPhase; projectTitle: string }) {
  const hasContent = phase.rows.length > 0 || (phase.videos && phase.videos.length > 0);
  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 border-b border-outline-variant/10 pb-10">
        <div className="md:col-span-3">
          <span className="font-label text-primary text-xs tracking-[0.4em] uppercase">Phase {phase.number}</span>
        </div>
        <div className="md:col-span-9">
          <h3 className="font-headline text-3xl md:text-4xl mb-4">{phase.title}</h3>
          <p className="font-body text-on-surface-variant leading-relaxed text-base md:text-lg max-w-3xl">
            {phase.caption}
          </p>
        </div>
      </div>
      {hasContent && (
        <div className="space-y-10 md:space-y-12">
          {phase.rows.map((row, i) => (
            <ImageRow key={i} images={row} />
          ))}
          {phase.videos?.map((slug) => (
            <OptimizedVideo key={slug} slug={slug} title={projectTitle} />
          ))}
        </div>
      )}
    </div>
  );
}

export default async function PortfolioDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    notFound();
  }

  const focal = project.hero.focal || "center";

  return (
    <div className="overflow-x-hidden pt-20">
      {/* Hero */}
      <header className="relative h-screen w-full flex items-end overflow-hidden bg-[#131313]">
        <div className="absolute inset-0 flex justify-center">
          <div className="relative w-full max-w-[1920px] h-full">
            <img
              alt={project.title}
              src={project.hero.src}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: focal }}
              fetchPriority="high"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-transparent to-transparent opacity-80" />
        <div className="relative z-10 w-full pb-16 md:pb-24">
          <div className="max-w-[1920px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-8">
              <span className="font-label text-primary tracking-[0.3em] uppercase text-xs md:text-sm mb-4 block">
                {project.category} / {project.year}
              </span>
              <h1 className="font-headline text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter text-on-surface leading-none">
                {project.title.toUpperCase()}
              </h1>
            </div>
            <div className="md:col-span-4 pb-2">
              <p className="font-label text-on-surface-variant uppercase text-[10px] tracking-[0.3em] mb-2">Client</p>
              <p className="font-headline text-xl md:text-2xl text-primary">{project.client}</p>
            </div>
          </div>
        </div>
      </header>

      {/* The Craft */}
      <section className="py-32 md:py-40 bg-surface">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
            <div className="md:col-span-4 md:sticky md:top-32">
              <h2 className="font-headline text-5xl font-bold mb-6 leading-tight">
                The<br />Craft
              </h2>
              <div className="w-12 h-[1px] bg-primary mb-6" />
              <p className="font-body text-on-surface-variant leading-relaxed text-base md:text-lg">
                {project.description}
              </p>
            </div>
            <div className="md:col-span-8 space-y-10 md:space-y-12">
              {project.craftRows?.map((row, i) => (
                <ImageRow key={i} images={row} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specs */}
      {!project.hideSpecs && (
        <section className="py-20 md:py-24 bg-surface-container-lowest">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-y border-outline-variant/20 py-12 md:py-16 gap-8 md:gap-12">
              {project.tris && (
                <div>
                  <p className="font-label text-on-surface-variant text-[10px] tracking-[0.3em] uppercase mb-2">Complexity</p>
                  <p className="font-headline text-2xl md:text-3xl text-primary">{project.tris}</p>
                </div>
              )}
              {project.textures && (
                <div>
                  <p className="font-label text-on-surface-variant text-[10px] tracking-[0.3em] uppercase mb-2">Texture Sets</p>
                  <p className="font-headline text-2xl md:text-3xl text-primary">{project.textures}</p>
                </div>
              )}
              {project.workflow && (
                <div>
                  <p className="font-label text-on-surface-variant text-[10px] tracking-[0.3em] uppercase mb-2">Workflow</p>
                  <p className="font-headline text-2xl md:text-3xl text-primary">{project.workflow}</p>
                </div>
              )}
              <div>
                <p className="font-label text-on-surface-variant text-[10px] tracking-[0.3em] uppercase mb-2">Software</p>
                <div className="flex flex-wrap gap-2 mt-2 max-w-md">
                  {project.software.map((sw) => (
                    <span
                      key={sw}
                      className="px-3 py-1 bg-surface-container-highest text-[10px] font-label uppercase tracking-wide text-on-surface"
                    >
                      {sw}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Phases */}
      {project.phases && project.phases.length > 0 && (
        <section className="py-32 md:py-40 bg-surface">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="text-center mb-20 md:mb-28">
              <span className="font-label text-primary text-[10px] tracking-[0.4em] uppercase mb-4 block">
                Process
              </span>
              <h2 className="font-headline text-4xl md:text-5xl font-bold">Pipeline Breakdown</h2>
            </div>
            <div className="space-y-32 md:space-y-40">
              {project.phases.map((phase) => (
                <PhaseBlock key={phase.number} phase={phase} projectTitle={project.title} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to portfolio */}
      <section className="border-t border-outline-variant/10">
        <Link
          className="group relative block w-full py-32 md:py-48 overflow-hidden bg-surface-container-lowest text-center"
          href="/portfolio"
        >
          <div className="relative z-10">
            <span className="font-label text-on-surface-variant text-xs tracking-[0.4em] uppercase mb-4 block">
              Return
            </span>
            <h4 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-on-surface group-hover:text-primary transition-colors duration-500">
              BACK TO PORTFOLIO
            </h4>
          </div>
        </Link>
      </section>
    </div>
  );
}
