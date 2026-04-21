import type { ReactNode } from "react";

type SectionContainerProps = {
  children: ReactNode;
  id?: string;
  // Tło sekcji — ogranicza duplikację Tailwind classes w komponentach sekcji.
  // Wartości domyślne pokrywają większość przypadków z mockupu.
  background?: "white" | "navy" | "blue" | "bg-light" | "gray-ice";
  // Mniejszy padding wertykalny dla sekcji typu stats-bar czy ice-bar.
  compact?: boolean;
  className?: string;
};

const backgroundMap: Record<NonNullable<SectionContainerProps["background"]>, string> = {
  white: "bg-white",
  navy: "bg-navy",
  blue: "bg-blue",
  "bg-light": "bg-bg-light",
  "gray-ice": "bg-gray-ice",
};

export function SectionContainer({
  children,
  id,
  background = "white",
  compact = false,
  className = "",
}: SectionContainerProps) {
  const bg = backgroundMap[background];
  const verticalPadding = compact ? "py-10" : "py-16 md:py-20";

  return (
    <section id={id} className={`${bg} ${verticalPadding} px-6 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
