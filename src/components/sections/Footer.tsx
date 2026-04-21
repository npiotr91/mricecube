"use client";

import { useLanguage } from "@/lib/language-context";

// Wykonuje się RAZ przy importowaniu modułu (build time dla statycznych
// stron, albo moment pierwszego renderowania dla dynamicznych).
// Wynik jest stały przez cały cykl życia aplikacji — zero hydration mismatch
// między SSR a klientem, nawet gdyby pierwsze ładowanie trwało przez północ 31/12.
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t-4 border-blue bg-navy px-6 py-8 text-center">
      <div className="mx-auto max-w-4xl">
        {/* Logo — klikalne, wraca do topu strony (konsystencja z Navbarem) */}
        <a
          href="#top"
          className="font-display text-2xl font-black uppercase tracking-wide text-white transition hover:text-light-blue md:text-3xl"
          aria-label="Mr IceCube — back to top"
        >
          MR <span className="text-light-blue">ICECUBE</span>
        </a>

        {/* Tagline marketingowy */}
        <p className="mt-2 text-sm text-sky md:text-base">
          {t("footer.sub")}
        </p>

        {/* Copyright z dynamicznym rokiem */}
        <p className="mt-4 text-xs text-sky/60">
          © {CURRENT_YEAR} {t("footer.copy")}
        </p>
      </div>
    </footer>
  );
}
