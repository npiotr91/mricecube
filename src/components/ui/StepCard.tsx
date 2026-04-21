import type { ComponentType } from "react";

type StepCardProps = {
  number: number;
  title: string;
  description: string;
  // Opcjonalna ikona "nagrody" renderowana inline po tekście tytułu.
  // Używana w ostatnim kroku ("Stay Cool" + Smile).
  trailingIcon?: ComponentType<{ className?: string }>;
};

export function StepCard({
  number,
  title,
  description,
  trailingIcon: TrailingIcon,
}: StepCardProps) {
  return (
    <div className="text-center">
      {/* Duże kółko z numerem kroku */}
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-light-blue">
        <span className="font-display text-3xl font-black leading-none text-navy">
          {number}
        </span>
      </div>

      {/* Tytuł — opcjonalnie z ikoną po tekście.
          inline-flex + items-center dba o pionowe wyrównanie tekst↔ikona. */}
      <h4 className="inline-flex items-center justify-center gap-2 font-display text-lg font-bold uppercase tracking-wide text-white">
        <span>{title}</span>
        {TrailingIcon ? (
          <TrailingIcon className="h-5 w-5 text-light-blue" aria-hidden />
        ) : null}
      </h4>

      {/* Opis */}
      <p className="mt-2 text-sm leading-relaxed text-sky">{description}</p>
    </div>
  );
}
