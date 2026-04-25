import Link from "next/link";

const credentials = [
  { label: "Maxon Official", value: "ZBrush Live Streamer" },
  { label: "Industry Credit", value: "The Legacy of Adam" },
  { label: "Community", value: "Women in Games Ambassador" },
  { label: "The Rookies", value: "A-Rank Recognition" },
];

const experience = [
  {
    role: "Masterclass Instructor",
    org: "Solent University",
    when: "2026 — Present",
    blurb:
      "Delivering specialist ZBrush masterclasses covering anatomy, character sculpting, and production-ready modelling workflows for undergraduate students.",
  },
  {
    role: "Founder & Lead Character Artist",
    org: "Firestorm Studio",
    when: "2025 — Present",
    blurb:
      "Boutique production support delivering full character pipeline assets — high-poly sculpt through retopology, UV mapping, texturing and engine export — to indie developers on structured milestone schedules.",
  },
  {
    role: "Lead Character Artist & Creative Consultant",
    org: "Skaverna — Cinematic Fantasy IP",
    when: "2024 — Present",
    blurb:
      "Leading character modelling and world-building asset production for a cinematic fantasy property; consulting on art direction, pipeline structure, and scalable workflows for both real-time and cinematic rendering.",
  },
  {
    role: "Lead Character Artist",
    org: "Project Titan — One Mind Media",
    when: "2025",
    blurb:
      "Art direction and end-to-end character production on a cinematic animation piece developed as investor funding material for a full-length independent film. Established visual consistency across the production and led look development for the character roster.",
  },
  {
    role: "Sculptor & Look Development Artist",
    org: "The Legacy of Adam — Cinematic Production",
    when: "2022 — 2024",
    blurb:
      "Two-year contribution to a semi-stylised cinematic production. Produced high-resolution character sculpts from photographic and concept reference, and contributed to look development across the character roster.",
  },
  {
    role: "Character Artist",
    org: "Traversed Realms — Indie Game Production",
    when: "2023 — 2024",
    blurb:
      "Stylised character sculpts and models through a complete high-to-low poly pipeline — retopology, UV mapping, and PBR texture authoring in Substance Painter — optimised for real-time performance.",
  },
  {
    role: "Technical Assistant & Tutor",
    org: "CG Spectrum — Advanced 3D Programme",
    when: "2023",
    blurb:
      "Invited to provide structured feedback on character modelling, sculpting, and topology to advanced students, supporting portfolio development aligned with industry production standards.",
  },
];

const recognition = [
  {
    icon: "workspace_premium",
    title: "Official Maxon ZBrush Live Streamer",
    detail: "Selected by Maxon (2025) to demonstrate professional ZBrush sculpting workflows to an international audience.",
  },
  {
    icon: "campaign",
    title: "London Games Festival — Speaker",
    detail: "Invited to speak to new and upcoming talent on the journey of an independent character artist and how to navigate the industry.",
  },
  {
    icon: "diversity_3",
    title: "Women in Games Ambassador",
    detail: "Active advocate for inclusion and diversity across the games and visual effects industries.",
  },
  {
    icon: "stars",
    title: "The Rookies — Excellence / A-Rank",
    detail: "Peer- and industry-recognised achievement in 3D character art at a globally competitive level.",
  },
];

const coreSkills = [
  "High-Resolution Character Sculpting",
  "Creature Modelling",
  "Subdivision-Ready Topology",
  "Retopology",
  "UV Mapping & Optimisation",
  "Look Development",
  "PBR Texturing & Material Authoring",
  "Reference-Based Modelling",
  "Cinematic & VFX Pipeline Delivery",
  "Cross-Department Collaboration",
  "Iterative Development from Art Direction",
  "Asset Pipeline Planning & Workflow Consultancy",
];

const toolkit = {
  primary: [
    { name: "ZBrush", note: "Approved Live Streamer" },
    { name: "Maya", note: "Modelling & UV" },
    { name: "Substance Painter", note: "Texturing & Look Dev" },
    { name: "Marmoset Toolbag", note: "Real-time Rendering" },
    { name: "FiberShop", note: "Hair & Fur" },
    { name: "RizomUV", note: "UV Layout" },
  ],
  engines: ["Unreal Engine 5", "Unity"],
  production: ["Confluence", "GitHub", "Slack", "Jira"],
  awareness: ["3D Coat", "Marvelous Designer", "Photoshop"],
};

const education = [
  {
    title: "Advanced ZBrush",
    org: "Maxon ZBrush",
    when: "2025 — 2026",
    detail: "Specialist mentoring and training on advanced ZBrush usage and functionality, delivered by the ZBrush team as part of the approved Live Streamer programme.",
  },
  {
    title: "Personal Mentorship",
    org: "Anna Begowska",
    when: "2024 — 2025",
    detail: "One-to-one creative mentorship focused on stylised character development and personal portfolio direction.",
  },
  {
    title: "Advanced 3D Character Art",
    org: "CG Spectrum",
    when: "2023 — 2024",
    detail: "Specialist programme covering high-poly sculpting, retopology, UV layout, and production pipeline. Completed with distinction, leading to invitation as Technical Assistant.",
  },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen pt-32 pb-20 bg-surface">
        <div className="max-w-[1920px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-center min-h-[calc(100vh-0px)]">
          <div className="md:col-span-5 order-2 md:order-1">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary mb-4 block">
              Character &amp; Creature Modeller
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight font-headline">
              Heather <br /> Courage
            </h1>
            <p className="text-xs uppercase tracking-[0.3em] text-on-surface-variant mb-10">
              London, UK · Film · Cinematic · Game Optimisation
            </p>
            <div className="space-y-5 text-on-surface-variant max-w-lg leading-relaxed font-body">
              <p>
                Production-focused Character and Creature Modeller specialising in high-resolution sculpting, clean
                subdivision-ready geometry, and accurate model production from photographic reference, illustration,
                and concept design. Comfortable across the full character pipeline — initial sculpt through
                retopology, UV layout, look development, and pipeline delivery.
              </p>
              <p>
                Credited as Sculptor and Look Development Artist on{" "}
                <span className="text-primary">The Legacy of Adam</span> (2022–2024). Recognised as an{" "}
                <span className="text-primary">Official Maxon ZBrush Live Streamer</span> since 2025, demonstrating
                professional sculpting workflows and anatomy-driven stylised character development to an international
                audience.
              </p>
            </div>
          </div>
          <div className="md:col-span-7 order-1 md:order-2 h-full min-h-[500px]">
            <div className="relative w-full h-full bg-surface-container-low overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="/Artist/Heather-1.png"
                alt="Heather Courage"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Strip */}
      <section className="py-16 md:py-20 bg-surface-container-lowest border-y border-outline-variant/10">
        <div className="max-w-[1920px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {credentials.map((c) => (
              <div key={c.value} className="border-l border-primary/40 pl-5">
                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-on-surface-variant mb-2">
                  {c.label}
                </p>
                <p className="font-headline text-lg md:text-xl text-on-surface leading-tight">{c.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Recognition */}
      <section className="py-32 bg-surface">
        <div className="max-w-[1920px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-20">
          <div className="md:col-span-7">
            <h2 className="text-xs font-medium uppercase tracking-[0.3em] text-primary mb-12">
              Selected Experience
            </h2>
            <div className="space-y-12">
              {experience.map((e) => (
                <div key={e.role + e.org} className="group border-b border-outline-variant/10 pb-10 last:border-0">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2 gap-2">
                    <h3 className="text-xl md:text-2xl font-headline text-on-surface group-hover:text-primary transition-colors duration-300">
                      {e.role}
                    </h3>
                    <span className="text-[10px] font-medium font-body uppercase tracking-[0.2em] text-on-surface-variant whitespace-nowrap">
                      {e.when}
                    </span>
                  </div>
                  <p className="text-sm uppercase tracking-[0.15em] text-primary mb-4 font-label">{e.org}</p>
                  <p className="text-on-surface-variant leading-relaxed">{e.blurb}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-5">
            <h2 className="text-xs font-medium uppercase tracking-[0.3em] text-primary mb-12">
              Recognition &amp; Community
            </h2>
            <ul className="space-y-10">
              {recognition.map((r) => (
                <li key={r.title} className="flex gap-5 items-start">
                  <span className="text-primary material-symbols-outlined text-2xl mt-1">{r.icon}</span>
                  <div>
                    <h4 className="font-headline text-on-surface text-lg mb-2">{r.title}</h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed">{r.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Core Skills */}
      <section className="py-32 bg-surface-container-lowest">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-xs font-medium uppercase tracking-[0.3em] text-primary mb-10 text-center">
            Core Skills
          </h2>
          <p className="font-headline text-2xl md:text-4xl leading-snug text-on-surface text-center max-w-5xl mx-auto">
            {coreSkills.map((s, i) => (
              <span key={s}>
                {s}
                {i < coreSkills.length - 1 && <span className="text-primary"> · </span>}
              </span>
            ))}
          </p>
        </div>
      </section>

      {/* Toolkit */}
      <section className="py-32 bg-surface">
        <div className="max-w-[1920px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-xs font-medium uppercase tracking-[0.3em] text-primary mb-4">The Toolkit</h2>
              <h3 className="text-3xl md:text-4xl font-headline max-w-md leading-tight">
                The instruments of digital craftsmanship.
              </h3>
            </div>
            <div className="h-px bg-outline-variant w-full md:w-1/2 opacity-20" />
          </div>

          <div className="mb-12">
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-on-surface-variant mb-6">
              Primary Tools
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {toolkit.primary.map((t) => (
                <div
                  key={t.name}
                  className="p-6 border border-outline-variant/10 hover:border-primary/50 transition-colors duration-300 text-center"
                >
                  <div className="text-primary mb-3 font-bold tracking-tight font-headline text-lg">{t.name}</div>
                  <span className="text-[10px] uppercase tracking-[0.15em] text-on-surface-variant">{t.note}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-on-surface-variant mb-4">
                Engine Experience
              </p>
              <p className="font-headline text-lg text-on-surface">{toolkit.engines.join(" · ")}</p>
            </div>
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-on-surface-variant mb-4">
                Production Tools
              </p>
              <p className="font-headline text-lg text-on-surface">{toolkit.production.join(" · ")}</p>
            </div>
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-on-surface-variant mb-4">
                Working Awareness
              </p>
              <p className="font-headline text-lg text-on-surface">{toolkit.awareness.join(" · ")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Training */}
      <section className="py-32 bg-surface-container-lowest">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-xs font-medium uppercase tracking-[0.3em] text-primary mb-12">Education &amp; Training</h2>
          <div className="space-y-12">
            {education.map((e) => (
              <div key={e.title} className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 border-b border-outline-variant/10 pb-10 last:border-0">
                <div className="md:col-span-3">
                  <span className="text-[10px] font-medium font-body uppercase tracking-[0.2em] text-on-surface-variant">
                    {e.when}
                  </span>
                </div>
                <div className="md:col-span-9">
                  <h3 className="text-2xl font-headline text-on-surface mb-2">{e.title}</h3>
                  <p className="text-sm uppercase tracking-[0.15em] text-primary mb-4 font-label">{e.org}</p>
                  <p className="text-on-surface-variant leading-relaxed max-w-3xl">{e.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 bg-surface text-center">
        <div className="max-w-[1920px] mx-auto px-6 md:px-12">
          <h2 className="text-4xl md:text-6xl font-headline mb-10">
            Let&apos;s build something <br />
            <span className="text-primary italic">extraordinary.</span>
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-primary text-on-primary px-12 py-5 font-bold uppercase tracking-[0.2em] text-sm hover:bg-primary-container transition-colors duration-300"
          >
            Initiate Collaboration
          </Link>
        </div>
      </section>
    </>
  );
}
