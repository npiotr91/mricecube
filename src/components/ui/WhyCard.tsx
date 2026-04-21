import type { ComponentType } from "react";

type WhyCardProps = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
};

// Karta dla sekcji Why — horizontal layout (ikona po lewej, tekst po prawej).
// Różni się od ServeCard/ProductCard stylem poziomym, co dobrze prezentuje
// 6 benefitów w gęstszym układzie 2x3.
export function WhyCard({ icon: Icon, title, description }: WhyCardProps) {
  return (
    <div className="flex items-start gap-4">
      {/* Kolorowy kwadrat z ikoną — wizualny akcent brandingowy */}
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-blue">
        <Icon className="h-5 w-5 text-white" aria-hidden />
      </div>
      {/* Tekst po prawej */}
      <div>
        <h4 className="font-display text-lg font-bold uppercase tracking-wide text-navy">
          {title}
        </h4>
        <p className="mt-1 text-sm leading-relaxed text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
}
