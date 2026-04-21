import type { ComponentType } from "react";

type ProductCardProps = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
};

// Karta dla sekcji Products — renderowana na navy tle.
// Różni się od ServeCard: border 2px wokół całości (nie pasek u góry),
// większa ikona, jasne kolory tekstu (białe/sky) zamiast ciemnych.
export function ProductCard({ icon: Icon, title, description }: ProductCardProps) {
  return (
    <div className="rounded-md border-2 border-light-blue/30 bg-white/5 p-8 text-center transition hover:border-light-blue hover:bg-white/10">
      <Icon className="mx-auto mb-4 h-12 w-12 text-light-blue" aria-hidden />
      <h3 className="font-display text-2xl font-black uppercase tracking-wide text-white">
        {title}
      </h3>
      <p className="mt-2 text-sm text-sky leading-relaxed">{description}</p>
    </div>
  );
}
