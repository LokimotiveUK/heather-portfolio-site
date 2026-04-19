import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/70 backdrop-blur-md flex justify-between items-center px-12 py-8">
      <Link href="/" className="text-2xl font-light tracking-tighter text-foreground font-headline">
        HEATHER COURAGE
      </Link>
      <div className="hidden md:flex gap-12 font-headline tracking-[0.2em] text-sm uppercase">
        <Link
          className="text-primary border-b border-primary/30 pb-1 transition-all duration-500 hover:text-primary/80"
          href="/portfolio"
        >
          WORK
        </Link>
        <Link
          className="text-muted-foreground hover:text-foreground transition-all duration-500"
          href="/about"
        >
          ABOUT
        </Link>
        <Link
          className="text-muted-foreground hover:text-foreground transition-all duration-500"
          href="/contact"
        >
          CONTACT
        </Link>
      </div>
      {/* Mobile Menu Placeholder */}
      <div className="md:hidden">
        <span className="material-symbols-outlined text-primary cursor-pointer">menu</span>
      </div>
    </nav>
  );
}
