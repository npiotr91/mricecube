"use client";

import { Truck } from "lucide-react";
import type { ReactNode } from "react";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { useLanguage } from "@/lib/language-context";
import type { TranslationKey } from "@/types/language";

type StatItem = {
  value: ReactNode;
  labelKey: TranslationKey;
};

export function Stats() {
  const { t } = useLanguage();

  const stats: StatItem[] = [
    { value: "24/7", labelKey: "stats.onDemand" },
    { value: "#1", labelKey: "stats.service" },
    { value: "100%", labelKey: "stats.quality" },
    {
      value: <Truck className="mx-auto h-14 w-14" aria-hidden />,
      labelKey: "stats.fleet",
    },
  ];

  return (
    <SectionContainer background="blue" compact>
      <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.labelKey}>
            <div className="font-display text-5xl font-black leading-none text-white md:text-6xl">
              {stat.value}
            </div>
            <div className="mt-2 text-xs font-semibold uppercase tracking-widest text-sky">
              {t(stat.labelKey)}
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
