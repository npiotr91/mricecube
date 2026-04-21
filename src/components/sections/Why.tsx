"use client";

import { Zap, DollarSign, Trophy, Palmtree, Handshake, ThumbsUp } from "lucide-react";
import type { ComponentType } from "react";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionSubtitle } from "@/components/ui/SectionSubtitle";
import { WhyCard } from "@/components/ui/WhyCard";
import { useLanguage } from "@/lib/language-context";
import type { TranslationKey } from "@/types/language";

type WhyItem = {
  icon: ComponentType<{ className?: string }>;
  titleKey: TranslationKey;
  textKey: TranslationKey;
};

const items: WhyItem[] = [
  { icon: Zap, titleKey: "why.fast.title", textKey: "why.fast.text" },
  { icon: DollarSign, titleKey: "why.price.title", textKey: "why.price.text" },
  { icon: Trophy, titleKey: "why.quality.title", textKey: "why.quality.text" },
  { icon: Palmtree, titleKey: "why.local.title", textKey: "why.local.text" },
  { icon: Handshake, titleKey: "why.flex.title", textKey: "why.flex.text" },
  { icon: ThumbsUp, titleKey: "why.love.title", textKey: "why.love.text" },
];

export function Why() {
  const { t } = useLanguage();

  return (
    <SectionContainer id="why" background="gray-ice">
      <SectionHeading
        title1={t("why.title1")}
        title2={t("why.title2")}
        accentColor="blue"
        baseColor="navy"
      />
      <SectionSubtitle>{t("why.sub")}</SectionSubtitle>

      {/* Grid: 1 kolumna mobile, 2 desktop. 6 kart = 2×3 na desktopie. */}
      <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
        {items.map((item) => (
          <WhyCard
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
