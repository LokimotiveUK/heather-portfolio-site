export type ProjectImage = {
  src: string;
  width: number;
  height: number;
  alt?: string;
  caption?: string;
  expand?: boolean;
};

export type ProjectPhase = {
  number: string;
  title: string;
  caption: string;
  rows: ProjectImage[][];
  videos?: string[];
};

export type Project = {
  title: string;
  client: string;
  category: "Characters" | "Environments";
  year: string;
  tris?: string;
  textures?: string;
  workflow?: string;
  software: string[];
  description: string;
  hero: ProjectImage & { focal?: string };
  craftRows?: ProjectImage[][];
  craftVideos?: string[];
  phases?: ProjectPhase[];
  hideSpecs?: boolean;
};

const img = (src: string, width: number, height: number, extras: Partial<ProjectImage> = {}): ProjectImage => ({
  src, width, height, ...extras,
});

export const projects: Record<string, Project> = {
  marionette: {
    title: "Marionette",
    client: "Personal Project",
    category: "Characters",
    year: "2026",
    tris: "41k Poly",
    textures: "4 x 2k",
    workflow: "PBR / Game",
    software: ["ZBrush", "Maya", "Substance Painter", "Rizom UV", "Marmoset Toolbag 5"],
    description: "Concept by Katherine Bartlett.",
    hero: { src: "/Portfolio/updates/MB Key Beauty Shot.jpg", width: 2275, height: 3360, focal: "center 40%" },
    craftRows: [
      [
        img("/Portfolio/updates/MB Key Beauty Shot.jpg", 2275, 3360),
      ],
      [
        img("/Portfolio/updates/MB Close1.jpg", 2275, 3360),
        img("/Portfolio/updates/MB Close2.jpg", 3250, 4000),
      ],
    ],
    craftVideos: ["MB Video1", "MB Video2"],
    phases: [
      {
        number: "I",
        title: "Digital Sculpting",
        caption: "Building the form from block-out through to fine anatomical and surface detail.",
        rows: [
          [img("/Portfolio/updates/MB sculpt Primary.jpg", 2048, 1152)],
          [img("/Portfolio/updates/MB sculpt callouts.jpg", 2048, 1152)],
        ],
      },
      {
        number: "II",
        title: "Retopology & UVs",
        caption: "Game model optimisation suitable for animation.",
        rows: [
          [
            img("/Portfolio/updates/MB WF1.jpg", 2275, 3360),
            img("/Portfolio/updates/MB WF2.jpg", 2275, 3360),
          ],
        ],
      },
      {
        number: "III",
        title: "PBR Texturing",
        caption: "Full PBR pipeline with hand-painted elements.",
        rows: [
          [
            img("/Portfolio/updates/MB Maps1.jpg", 2048, 1152),
            img("/Portfolio/updates/MB Maps2.jpg", 2048, 1152),
          ],
        ],
      },
      {
        number: "IV",
        title: "Render View",
        caption: "Rendered in Marmoset Toolbag.",
        rows: [
          [img("/Portfolio/updates/MB Viewport.jpg", 1905, 1023)],
        ],
      },
    ],
  },

  witch: {
    title: "Witch of the Moon",
    client: "Personal Project",
    category: "Characters",
    year: "2025",
    tris: "50k Poly",
    textures: "5 x 4k",
    workflow: "PBR / Game",
    software: ["ZBrush", "Maya", "Substance Painter", "Rizom UV", "Marmoset Toolbag"],
    description: "A detailed character study focused on expressive lighting and layered materials.",
    hero: { src: "/Portfolio/updates/Witch Key Beauty.jpg", width: 3000, height: 3840, focal: "center 15%" },
    craftRows: [
      [
        img("/Portfolio/updates/Witch Key Beauty.jpg", 3000, 3840),
      ],
      [
        img("/Portfolio/updates/Witch close1.jpg", 5000, 3840),
        img("/Portfolio/Witch/03-witch-torso.jpg", 1600, 2000),
        img("/Portfolio/Witch/04-witch-side.jpg", 1600, 2000),
      ],
    ],
    craftVideos: ["Witch Witch Turn"],
    phases: [
      {
        number: "I",
        title: "Digital Sculpting",
        caption: "From block-out to detail.",
        rows: [
          [img("/Portfolio/updates/Witch Sculpt.jpg", 1920, 1080)],
        ],
      },
      {
        number: "II",
        title: "Retopology & UVs",
        caption: "Game model optimisation with focus on baked-in details.",
        rows: [
          [img("/Portfolio/updates/Witch WireFrame.jpg", 3000, 3840)],
          [img("/Portfolio/updates/Witch UV tiles.jpg", 1920, 1080)],
        ],
      },
      {
        number: "III",
        title: "PBR Texturing",
        caption: "Material definition through Substance Painter.",
        rows: [
          [
            img("/Portfolio/updates/Witch Maps2.jpg", 1920, 1080),
            img("/Portfolio/updates/Witch Maps1.jpg", 1920, 1080),
          ],
        ],
      },
      {
        number: "IV",
        title: "Render View",
        caption: "Rendered in Marmoset Toolbag.",
        rows: [
          [img("/Portfolio/updates/Marmoset Screen.jpg", 3435, 1370)],
        ],
      },
    ],
  },

  "dungeon-master": {
    title: "Dungeon Master",
    client: "Personal Project",
    category: "Characters",
    year: "2025",
    tris: "40k Poly",
    textures: "4 x 4k",
    workflow: "PBR / Game",
    software: ["ZBrush", "Maya", "Substance Painter", "Rizom UV", "Marmoset Toolbag"],
    description: "A dark fantasy character concept — silhouette, ritual, and silhouette-first design language.",
    hero: { src: "/Portfolio/updates/DM Beauty.jpg", width: 3876, height: 4320, focal: "center 25%" },
    craftRows: [
      [
        img("/Portfolio/updates/DM Beauty.jpg", 3876, 4320),
      ],
      [
        img("/Portfolio/updates/DM Close1.jpg", 4320, 4320),
        img("/Portfolio/Dungeon Master/02-Dungeon-master-head.jpg", 3840, 3840),
        img("/Portfolio/Dungeon Master/03-Dungeon-master-torso.jpg", 2160, 2160),
      ],
    ],
    craftVideos: ["DM Turn"],
    phases: [
      {
        number: "I",
        title: "Digital Sculpting",
        caption: "Capturing the character's form and silhouette.",
        rows: [
          [img("/Portfolio/updates/DM Sclpt1.jpg", 1920, 1080)],
          [img("/Portfolio/updates/DM Sculpt2.jpg", 1920, 1080)],
          [img("/Portfolio/updates/DM Sculpt3.jpg", 1920, 1080)],
        ],
      },
      {
        number: "II",
        title: "Topology & UVs",
        caption: "Optimising for game while keeping animation principles in mind.",
        rows: [
          [img("/Portfolio/Dungeon Master/14-Dungeon-master-wireframe.jpg", 2160, 2160)],
          [img("/Portfolio/updates/DM UVs.jpg", 1920, 1080)],
        ],
      },
      {
        number: "III",
        title: "PBR Texturing",
        caption: "Full PBR pipeline with hand-painted details.",
        rows: [
          [
            img("/Portfolio/updates/DM Maps1.jpg", 1920, 1080),
            img("/Portfolio/updates/DM Maps2.jpg", 1920, 1080),
          ],
        ],
      },
    ],
  },

  demon: {
    title: "Demoness",
    client: "Personal Project",
    category: "Characters",
    year: "2024",
    tris: "25k Quads",
    textures: "6 x 2k",
    workflow: "PBR / Game",
    software: ["ZBrush", "Maya", "Substance Painter", "Rizom UV", "Marmoset Toolbag"],
    description: "Original concept by Wu Shenyou.",
    hero: { src: "/Portfolio/updates/Demon Beauty 1.jpg", width: 4000, height: 4000, focal: "center 25%" },
    craftRows: [
      [
        img("/Portfolio/updates/Demon close1.jpg", 4000, 4000),
        img("/Portfolio/updates/Demon close 2.jpg", 4000, 4000),
      ],
    ],
    phases: [
      {
        number: "I",
        title: "Digital Sculpting",
        caption: "Shape and silhouette.",
        rows: [
          [
            img("/Portfolio/updates/Demon Sculpt 1.jpg", 1920, 1080),
            img("/Portfolio/updates/Demon Sculpt2.jpg", 1920, 1080),
          ],
        ],
      },
      {
        number: "II",
        title: "Topology & UVs",
        caption: "Clean topology refined for deformation and UV efficiency.",
        rows: [
          [img("/Portfolio/updates/Demon WIre.jpg", 686, 683)],
        ],
      },
      {
        number: "III",
        title: "PBR Texturing",
        caption: "Look development through procedural and hand-authored passes.",
        rows: [
          [
            img("/Portfolio/updates/Demon Map 2.jpg", 1920, 1080),
            img("/Portfolio/updates/Demon MAp1.jpg", 1920, 1080),
          ],
        ],
      },
      {
        number: "IV",
        title: "Final Render",
        caption: "Final lighting and composition.",
        rows: [
          [img("/Portfolio/updates/Demon Render.jpg", 1912, 1027)],
        ],
        videos: ["Demon Beauty"],
      },
    ],
  },

  tokolosh: {
    title: "Tokoloshe",
    client: "Personal Project",
    category: "Characters",
    year: "2024",
    tris: "35k Poly",
    textures: "4 x 2k",
    workflow: "PBR / Game optimised",
    software: ["ZBrush", "Maya", "Substance Painter", "Rizom UV", "Marmoset Toolbag", "FiberShop"],
    description: "A creature design based on Southern African folklore.",
    hero: { src: "/Portfolio/updates/Toko Beauty.jpg", width: 2160, height: 2160, focal: "center 20%" },
    craftRows: [
      [
        img("/Portfolio/updates/Toko Beauty.jpg", 2160, 2160),
      ],
      [
        img("/Portfolio/updates/Toko Close 1.jpg", 2160, 2160),
        img("/Portfolio/updates/Toko Close 2.jpg", 2160, 2160),
        img("/Portfolio/updates/Toko Close 3.jpg", 2160, 2160),
      ],
    ],
    craftVideos: ["Toko Turn"],
    phases: [
      {
        number: "I",
        title: "Digital Sculpting",
        caption: "Building the proportions through to the creature's surface detail.",
        rows: [
          [
            img("/Portfolio/Tokolosh/07-tokolosh-head-sculpt.jpg", 1600, 1600),
            img("/Portfolio/Tokolosh/08-tokolosh-face-sculpt.jpg", 1600, 1600),
            img("/Portfolio/Tokolosh/09-tokolosh-body-sculpt.jpg", 1600, 1600),
          ],
        ],
      },
      {
        number: "II",
        title: "Retopology & UVs",
        caption: "Low-poly cage with high-baked detail.",
        rows: [
          [{ ...img("/Portfolio/updates/Toko Wire.jpg", 900, 1080), expand: true }],
          [img("/Portfolio/updates/Toko UV.jpg", 1920, 1080)],
        ],
      },
      {
        number: "III",
        title: "PBR Texturing",
        caption: "Bringing the creature to life through PBR pipelines.",
        rows: [
          [img("/Portfolio/updates/Toko Maps.jpg", 2400, 600)],
        ],
      },
      {
        number: "IV",
        title: "Render View",
        caption: "Lighting the monster.",
        rows: [
          [img("/Portfolio/updates/Toko Render.jpg", 1915, 1030)],
        ],
      },
    ],
  },

  cat: {
    title: "Wild Cat",
    client: "Personal Project",
    category: "Characters",
    year: "2024",
    tris: "50k Poly",
    textures: "4 x 2k",
    workflow: "Printing / Cinematic",
    software: ["ZBrush", "Maya", "Substance Painter", "Rizom UV", "Marmoset Toolbag", "FiberShop"],
    description: "Concept by Wu Shenyou. Creating monsters and magic.",
    hero: { src: "/Portfolio/updates/CatBoss Beauty Shot.jpg", width: 2500, height: 1800, focal: "center" },
    craftRows: [
      [
        img("/Portfolio/updates/Cat Close1.jpg", 2000, 2400),
        img("/Portfolio/updates/Cat CLose 2.jpg", 2000, 2400),
        img("/Portfolio/updates/Cat Close 3.jpg", 2000, 2400),
      ],
    ],
    phases: [
      {
        number: "I",
        title: "Digital Sculpting",
        caption: "Concept to 3D.",
        rows: [
          [img("/Portfolio/updates/Cat Sculpt 1.jpg", 1123, 636)],
          [img("/Portfolio/updates/Cat Sculpt 2.jpg", 3840, 783)],
        ],
      },
      {
        number: "II",
        title: "Retopology & UVs",
        caption: "Made for printing.",
        rows: [
          [img("/Portfolio/updates/Cat Wire.jpg", 2246, 505)],
        ],
      },
      {
        number: "III",
        title: "PBR Texturing",
        caption: "Adding flair.",
        rows: [
          [img("/Portfolio/updates/Cat PBR.jpg", 3840, 655)],
        ],
      },
      {
        number: "IV",
        title: "Final Render",
        caption: "Lights, camera, action.",
        rows: [
          [img("/Portfolio/updates/Cat Render.jpg", 2000, 2400)],
        ],
        videos: ["WildCat Turn"],
      },
    ],
  },

  warrior: {
    title: "The Warrior",
    client: "Personal Project",
    category: "Characters",
    year: "2023",
    tris: "35k Quads",
    textures: "4 x 2k",
    workflow: "Game / PBR",
    software: ["ZBrush", "Maya", "Substance Painter", "Rizom UV", "Marmoset Toolbag"],
    description: "Character creation in the style of Overwatch.",
    hero: { src: "/Portfolio/updates/War Beauty.jpg", width: 3840, height: 4000, focal: "center 20%" },
    craftRows: [
      [
        img("/Portfolio/updates/War Beauty.jpg", 3840, 4000),
      ],
      [
        img("/Portfolio/updates/war close1.png", 1920, 2000),
        img("/Portfolio/updates/War close 2.png", 1920, 2000),
        img("/Portfolio/updates/War close 3.jpg", 3840, 4000),
      ],
    ],
    craftVideos: ["war turn"],
    phases: [
      {
        number: "I",
        title: "Digital Sculpting",
        caption: "High-res sculpt and surface design.",
        rows: [
          [img("/Portfolio/updates/war sculpt.png", 2048, 1152)],
        ],
      },
      {
        number: "II",
        title: "Retopology & UVs",
        caption: "Clean game-ready mesh for animation.",
        rows: [
          [img("/Portfolio/updates/war wireframe.jpg", 755, 896)],
        ],
      },
      {
        number: "III",
        title: "PBR Texturing",
        caption: "PBR material authoring in Substance Painter.",
        rows: [
          [img("/Portfolio/updates/war textures.jpg", 3840, 4000)],
        ],
      },
      {
        number: "IV",
        title: "Render View",
        caption: "Rendered in Marmoset Toolbag.",
        rows: [
          [img("/Portfolio/updates/Warrior render .png", 1908, 1025)],
        ],
      },
    ],
  },

  temple: {
    title: "The Temple",
    client: "Personal Project",
    category: "Environments",
    year: "2024",
    tris: "Mixed",
    textures: "4 x 2k",
    workflow: "Environment / Game / PBR",
    software: ["ZBrush", "Maya", "Substance Painter", "Rizom UV", "Marmoset Toolbag", "Photoshop"],
    description: "Tranquility is a state of mind.",
    hero: { src: "/Portfolio/updates/Temple Beauty.jpg", width: 1779, height: 1049, focal: "center" },
    craftRows: [
      [
        img("/Portfolio/updates/Temple Close1.jpg", 1779, 1049),
        img("/Portfolio/updates/Temple close2.jpg", 1779, 1049),
      ],
      [
        img("/Portfolio/updates/Temple close3.jpg", 1920, 1080),
      ],
    ],
    phases: [
      {
        number: "I",
        title: "Digital Sculpting",
        caption: "Key assets were sculpted in ZBrush before being retopologised in Maya for the final composition.",
        rows: [
          [img("/Portfolio/updates/Temple Wire.jpg", 1779, 1049)],
        ],
      },
      {
        number: "II",
        title: "Topology & UVs",
        caption: "Topology focused on reducing poly count to optimise each asset for game implementation.",
        rows: [
          [img("/Portfolio/updates/Temple Wirefame3.jpg", 1779, 1049)],
        ],
      },
      {
        number: "III",
        title: "PBR Texturing",
        caption: "Material definition through Substance Painter — PBR flow with hand-painted details.",
        rows: [
          [
            { ...img("/Portfolio/updates/Temple Albedo.jpg", 1232, 678), caption: "Albedo" },
            { ...img("/Portfolio/updates/Temple Normals.jpg", 1241, 683), caption: "Normals" },
            { ...img("/Portfolio/updates/Temple AOo.jpg", 1243, 678), caption: "Ambient Occlusion" },
          ],
        ],
      },
      {
        number: "IV",
        title: "Final Render",
        caption: "Using Marmoset's lighting and material set-ups to add depth to the image.",
        rows: [
          [img("/Portfolio/updates/Temple marmoset view.jpg", 1915, 1031)],
        ],
        videos: ["Temple Vid"],
      },
    ],
  },

  "legacy-of-adam": {
    title: "Legacy of Adam",
    client: "Client Project — Released",
    category: "Characters",
    year: "2022–2024",
    workflow: "Cinematic / UDIM",
    software: ["ZBrush", "Marvelous Designer", "Substance Painter", "Maya"],
    description:
      "Industry credit — Sculpting and Look Development. A selection of the clothing and character items produced for this semi-stylised cinematic series aimed at a rural African youth audience. Clothing was sculpted in ZBrush and Marvelous Designer before being UV'd in Maya and textured in Substance Painter.",
    hero: { src: "/Portfolio/Legacy-of-Adam/legacy-of-adam-eliab.jpg", width: 1600, height: 2000, focal: "center 20%" },
    craftRows: [
      [img("/Portfolio/Legacy-of-Adam/legacy-of-adam-fatguy.jpg", 1600, 2000)],
      [img("/Portfolio/Legacy-of-Adam/legacy-of-adam-jonothan.jpg", 1600, 2000)],
      [img("/Portfolio/Legacy-of-Adam/legacy-of-adam-joseph.jpg", 1600, 2000)],
      [img("/Portfolio/Legacy-of-Adam/legacy-of-adam-marymags.jpg", 1600, 2000)],
    ],
    hideSpecs: true,
  },
};
