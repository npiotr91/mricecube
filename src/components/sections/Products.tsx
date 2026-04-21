"use client";

import { Gem, Package } from "lucide-react";
import { IceCubeIcon } from "@/components/ui/IceCubeIcon";
import type { ComponentType } from "react";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionSubtitle } from "@/components/ui/SectionSubtitle";
import { ProductCard } from "@/components/ui/ProductCard";
import { useLanguage } from "@/lib/language-context";
import type { TranslationKey } from "@/types/language";

type ProductItem = {
  icon: ComponentType<{ className?: string }>;
  titleKey: TranslationKey;
  textKey: TranslationKey;
};

const items: ProductItem[] = [
  { icon: IceCubeIcon, titleKey: "product.regular.title", textKey: "product.regular.text" },
  { icon: Gem, titleKey: "product.mixology.title", textKey: "product.mixology.text" },
  { icon: Package, titleKey: "product.bulk.title", textKey: "product.bulk.text" },
];

export function Products() {
  const { t } = useLanguage();

  return (
    <SectionContainer id="products" background="navy">
      <SectionHeading
        title1={t("product.title1")}
        title2={t("product.title2")}
        accentColor="light-blue"
        baseColor="white"
      />
      <SectionSubtitle variant="on-dark">{t("product.sub")}</SectionSubtitle>

      {/* Grid: 1 kolumna mobile → 3 kolumny desktop (3 karty idealnie się mieszczą) */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {items.map((item) => (
          <ProductCard
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
