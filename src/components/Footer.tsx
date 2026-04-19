import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full mt-auto pt-40 pb-20 bg-surface-container-lowest flex flex-col items-center gap-12 px-8">
      <div className="text-lg font-headline text-foreground">HEATHER COURAGE</div>
      <div className="flex gap-16 font-sans text-[10px] tracking-[0.3em] uppercase font-medium">
        <Link className="text-muted-foreground hover:text-foreground transition-colors duration-300" href="/portfolio">
          ARCHIVE
        </Link>
        <Link className="text-primary" href="/">
          CURATION
        </Link>
        <Link className="text-muted-foreground hover:text-foreground transition-colors duration-300" href="/about">
          JOURNAL
        </Link>
      </div>
      <div className="flex gap-8 mt-4">
        <Link className="text-muted-foreground hover:text-primary transition-all duration-300" href="#">
          <span className="material-symbols-outlined text-lg">public</span>
        </Link>
        <Link className="text-muted-foreground hover:text-primary transition-all duration-300" href="/contact">
          <span className="material-symbols-outlined text-lg">mail</span>
        </Link>
        <Link className="text-muted-foreground hover:text-primary transition-all duration-300" href="#">
          <span className="material-symbols-outlined text-lg">draw</span>
        </Link>
      </div>
      <div className="mt-12 text-muted-foreground font-sans text-[10px] tracking-[0.3em] uppercase font-medium">
        © 2024 HEATHER COURAGE. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}
