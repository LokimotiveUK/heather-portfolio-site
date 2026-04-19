"use client";

import { useState, useEffect } from "react";

const images = [
  { src: "/Portfolio/Witch/01-witch-close.jpg", position: "object-[center_15%]" },
  { src: "/Portfolio/Marionette/Marionette-hero.jpg", position: "object-[center_40%]" },
  { src: "/Portfolio/Dungeon Master/01-Dungeon-master-hero.jpg", position: "object-[center_15%]" },
  { src: "/Portfolio/Demon/Demon_hero.jpg", position: "object-[center_15%]" },
  { src: "/Portfolio/Tokolosh/01-tokolosh-close.jpg", position: "object-[center_15%]" },
  { src: "/Portfolio/Cat/01-cat-monster.jpg", position: "object-[center_104px]" },
  { src: "/Portfolio/Legacy-of-Adam/legacy-of-adam-eliab.jpg", position: "object-[center_104px]" },
  { src: "/Portfolio/Temple/01-temple.jpg", position: "object-[center_15%]" },
  { src: "/Portfolio/Warrior/01-warrior-close.jpg", position: "object-[center_15%]" }
];

export function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {images.map((img, index) => (
        <img
          key={img.src}
          alt={`Hero ${index}`}
          className={`absolute inset-0 w-full h-full object-cover ${img.position} transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          src={img.src}
        />
      ))}
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-background via-transparent to-transparent opacity-50"></div>
    </>
  );
}
