"use client";

import { IceCubeIcon } from "@/components/ui/IceCubeIcon";
import { useLanguage } from "@/lib/language-context";

export function IceBar() {
  const { t } = useLanguage();

  return (
    <div className="bg-navy py-4 text-center">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-3 px-6 font-display text-sm font-bold uppercase tracking-widest text-white md:text-lg md:tracking-[0.3em]">
        <IceCubeIcon className="h-4 w-4 text-light-blue md:h-5 md:w-5" />
        <span>{t("iceBar.text")}</span>
        <IceCubeIcon className="h-4 w-4 text-light-blue md:h-5 md:w-5" />
      </div>
    </div>
  );
}
