"use client";

import { Smile } from "lucide-react";
import type { ComponentType } from "react";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionSubtitle } from "@/components/ui/SectionSubtitle";
import { StepCard } from "@/components/ui/StepCard";
import { useLanguage } from "@/lib/language-context";
import type { TranslationKey } from "@/types/language";

type StepItem = {
  number: number;
  titleKey: TranslationKey;
  textKey: TranslationKey;
  trailingIcon?: ComponentType<{ className?: string }>;
};

// 4 kroki procesu. Tylko ostatni ("Stay Cool") ma trailing icon (Smile)
// jako wizualna nagroda zamykająca proces.
const steps: StepItem[] = [
  { number: 1, titleKey: "how.1.title", textKey: "how.1.text" },
  { number: 2, titleKey: "how.2.title", textKey: "how.2.text" },
  { number: 3, titleKey: "how.3.title", textKey: "how.3.text" },
  { number: 4, titleKey: "how.4.title", textKey: "how.4.text", trailingIcon: Smile },
];

export function HowItWorks() {
  const { t } = useLanguage();

  return (
    <SectionContainer background="navy">
      <SectionHeading
        title1={t("how.title1")}
        title2={t("how.title2")}
        accentColor="light-blue"
        baseColor="white"
      />
      <SectionSubtitle variant="on-dark">{t("how.sub")}</SectionSubtitle>

      {/* 4 kroki w jednym rzędzie na desktopie, stacked na mobile */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-6">
        {steps.map((step) => (
          <StepCard
            key={step.number}
            number={step.number}
            title={t(step.titleKey)}
            description={t(step.textKey)}
            trailingIcon={step.trailingIcon}
          />
        ))}
      </div>
    </SectionContainer>
  );
}
