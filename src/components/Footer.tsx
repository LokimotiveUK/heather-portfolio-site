import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full mt-auto pt-40 pb-20 bg-surface-container-lowest flex flex-col items-center gap-12 px-8">
      <div className="text-lg font-headline text-foreground">HEATHER COURAGE</div>
      <div className="flex gap-16 font-sans text-[10px] tracking-[0.3em] uppercase font-medium">
        <Link className="text-muted-foreground hover:text-foreground transition-colors duration-300" href="/portfolio">
          WORK
        </Link>
        <Link className="text-primary" href="/">
          HOME
        </Link>
        <Link className="text-muted-foreground hover:text-foreground transition-colors duration-300" href="/about">
          ABOUT
        </Link>
      </div>
      <div className="flex gap-8 items-center mt-4">
        {/* LinkedIn */}
        <Link
          className="text-muted-foreground hover:text-primary transition-all duration-300"
          href="https://www.linkedin.com/in/heather-courage/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" style={{ display: "block" }}>
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </Link>
        {/* Email */}
        <Link
          className="text-muted-foreground hover:text-primary transition-all duration-300"
          href="/contact"
          aria-label="Contact"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" style={{ display: "block" }}>
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
        </Link>
        {/* ArtStation */}
        <Link
          className="text-muted-foreground hover:text-primary transition-all duration-300"
          href="https://www.artstation.com/csicada"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="ArtStation"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" style={{ display: "block" }}>
            <path d="M0 17.723l2.027 3.505h.001a2.424 2.424 0 0 0 2.164 1.333h13.457l-2.792-4.838H0zm24 .025c0-.484-.143-.935-.388-1.314L15.728 2.728a2.424 2.424 0 0 0-2.164-1.333H9.419L21.598 22.54l1.92-3.325c.378-.637.482-.919.482-1.467zm-11.129-3.462L7.428 4.858l-5.444 9.428h10.887z" />
          </svg>
        </Link>
      </div>
      <div className="mt-12 text-muted-foreground font-sans text-[10px] tracking-[0.3em] uppercase font-medium">
        © 2026 HEATHER COURAGE. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}
