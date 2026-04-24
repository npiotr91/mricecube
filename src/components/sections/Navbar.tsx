import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { NavLinks } from "@/components/sections/NavLinks";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-blue/30 bg-bg-light">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        {/* Logo — klikalne, wraca do topu strony */}
        <a
          href="#top"
          className="font-display text-xl font-black uppercase tracking-wide text-navy transition hover:text-blue md:text-2xl"
          aria-label="Mr IceCube — back to top"
        >
          MR <span>ICECUBE</span>
        </a>

        {/* Tekstowe linki — desktop only */}
        <NavLinks />

        {/* Prawa strona — LanguageToggle (pozycjonowany przez fixed w komponencie). */}
        <div className="flex items-center gap-2 md:pl-6">
          <LanguageToggle />
        </div>
      </nav>
    </header>
  );
}
