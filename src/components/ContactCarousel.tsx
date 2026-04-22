"use client";

import { useEffect, useState } from "react";

const slides = [
  { src: "/Portfolio/updates/MB Key Beauty Shot.jpg", alt: "Marionette", focal: "center 20%" },
  { src: "/Portfolio/updates/Witch Key Beauty.jpg", alt: "Witch of the Moon", focal: "center 15%" },
  { src: "/Portfolio/updates/Demon Beauty 1.jpg", alt: "Demoness", focal: "center 25%" },
  { src: "/Portfolio/updates/Toko Beauty.jpg", alt: "Tokoloshe", focal: "center 20%" },
  { src: "/Portfolio/updates/CatBoss Beauty Shot.jpg", alt: "Wild Cat", focal: "center" },
  { src: "/Portfolio/updates/DM Beauty.jpg", alt: "Dungeon Master", focal: "center 25%" },
];

export function ContactCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden bg-surface-container-low">
      {slides.map((slide, i) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          className={`absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out ${
            i === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{ objectPosition: slide.focal }}
          loading={i === 0 ? "eager" : "lazy"}
        />
      ))}
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-surface-container-low/40 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}
