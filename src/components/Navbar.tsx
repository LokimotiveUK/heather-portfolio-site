"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/portfolio", label: "WORK" },
  { href: "/about", label: "ABOUT" },
  { href: "/contact", label: "CONTACT" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-background/70 backdrop-blur-md">
        {/* Inner container constrains nav content to 1920px so logo/links
            don't sit at the extreme edges of ultra-wide displays */}
        <div className="max-w-[1920px] mx-auto px-6 md:px-12 py-6 md:py-8 flex justify-between items-center">
          <Link
            href="/"
            className="text-xl md:text-2xl font-light tracking-tighter text-foreground font-headline"
          >
            HEATHER COURAGE
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex gap-12 font-headline tracking-[0.2em] text-sm uppercase">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={
                  pathname === href
                    ? "text-primary border-b border-primary/30 pb-1 transition-all duration-500 hover:text-primary/80"
                    : "text-muted-foreground hover:text-foreground transition-all duration-500"
                }
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger button */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 text-primary focus:outline-none"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span
              className="material-symbols-outlined transition-all duration-300"
              style={{ fontSize: "28px" }}
            >
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>

        {/* Mobile menu panel — slides down beneath the navbar */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
          style={{
            background:
              "linear-gradient(to bottom, rgba(19,19,19,0.97) 0%, rgba(19,19,19,0.95) 100%)",
            backdropFilter: "blur(16px)",
          }}
        >
          <div className="flex flex-col items-center gap-0 py-6">
            {navLinks.map(({ href, label }, i) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`w-full text-center py-5 font-headline tracking-[0.3em] text-sm uppercase transition-all duration-300 border-b border-border/30 last:border-b-0 ${
                  pathname === href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                }`}
                style={{
                  transitionDelay: menuOpen ? `${i * 60}ms` : "0ms",
                  transform: menuOpen ? "translateY(0)" : "translateY(-8px)",
                  opacity: menuOpen ? 1 : 0,
                }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Backdrop overlay — closes menu on tap outside */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
