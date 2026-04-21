"use client";

import { useLanguage } from "@/lib/language-context";

export function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage();

  const handleClick = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  // aria-label używa jawnych angielskich tekstów (screen readery nie zmieniają
  // języka wraz z UI — muszą mieć stabilny opis akcji).
  const ariaLabel =
    language === "en" ? "Switch language to Spanish" : "Switch language to English";

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={ariaLabel}
      className="fixed top-4 right-4 z-50 min-w-[56px] rounded-full bg-blue px-4 py-2 text-center text-sm font-bold text-white shadow-lg transition hover:bg-light-blue hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      {t("nav.langToggle")}
    </button>
  );
}
