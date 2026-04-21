"use client";

import { Store, Fuel, PartyPopper, Martini, Tent } from "lucide-react";
import type { ComponentType } from "react";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionSubtitle } from "@/components/ui/SectionSubtitle";
import { ServeCard } from "@/components/ui/ServeCard";
import { useLanguage } from "@/lib/language-context";
import type { TranslationKey } from "@/types/language";

type ServeItem = {
  icon: ComponentType<{ className?: string }>;
  titleKey: TranslationKey;
  textKey: TranslationKey;
};

// Literalna deklaracja — TS pilnuje, żeby titleKey i textKey były
// prawdziwymi kluczami ze słownika (TranslationKey jest unią stringów).
const items: ServeItem[] = [
  { icon: Store, titleKey: "serve.shop.title", textKey: "serve.shop.text" },
  { icon: Fuel, titleKey: "serve.gas.title", textKey: "serve.gas.text" },
  { icon: PartyPopper, titleKey: "serve.party.title", textKey: "serve.party.text" },
  { icon: Martini, titleKey: "serve.bar.title", textKey: "serve.bar.text" },
  { icon: Tent, titleKey: "serve.event.title", textKey: "serve.event.text" },
];

export function WhoWeServe() {
  const { t } = useLanguage();

  return (
    <SectionContainer id="serve" background="white">
      <SectionHeading
        title1={t("serve.title1")}
        title2={t("serve.title2")}
        accentColor="blue"
        baseColor="navy"
      />
      <SectionSubtitle>{t("serve.sub")}</SectionSubtitle>

      {/* Grid: 1 kol mobile, 2 tablet, 3 desktop. 5 kart: 3+2 w rzędach. */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <ServeCard
            key={item.titleKey}
            icon={item.icon}
            title={t(item.titleKey)}
            description={t(item.textKey)}
          />
        ))}
      </div>
    </SectionContainer>
  );
}
