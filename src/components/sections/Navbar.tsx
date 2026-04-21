import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { NavLinks } from "@/components/sections/NavLinks";

const WHATSAPP_URL = "https://wa.me/13058127096";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b-4 border-blue bg-navy">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        {/* Logo — klikalne, wraca do topu strony */}
        <a
          href="#top"
          className="font-display text-xl font-black uppercase tracking-wide text-white transition hover:text-light-blue md:text-2xl"
          aria-label="Mr IceCube — back to top"
        >
          MR <span className="text-light-blue">ICECUBE</span>
        </a>

        {/* Tekstowe linki — desktop only */}
        <NavLinks />

        {/* Prawa strona: mobile = WhatsApp CTA + toggle; desktop = tylko toggle */}
        <div className="flex items-center gap-2 md:pl-6">
          {/* Mobile-only CTA — na desktopie ukryte (bo jest w Hero) */}
          <span className="md:hidden">
            <Button
              href={WHATSAPP_URL}
              variant="primary"
              icon={MessageCircle}
              external
              compact
            >
              WA
            </Button>
          </span>
          <LanguageToggle />
        </div>
      </nav>
    </header>
  );
}
