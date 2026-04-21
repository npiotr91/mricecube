import type { ReactNode } from "react";

type Variant = "default" | "on-dark";
type Align = "left" | "center";
type MaxWidth = "sm" | "md" | "lg" | "xl" | "2xl" | "none";

type SectionSubtitleProps = {
  children: ReactNode;
  // Kolor — jaśniejszy dla sekcji na navy/blue tle, ciemnoszary dla białego.
  variant?: Variant;
  // Wyrównanie tekstu. Domyślnie left (zgodne z dotychczasowym zachowaniem).
  align?: Align;
  // Maksymalna szerokość podtytułu. Domyślnie xl.
  // "none" usuwa ograniczenie — przydatne gdy wrapper rodzica już je narzuca.
  maxWidth?: MaxWidth;
  className?: string;
};

const maxWidthMap: Record<MaxWidth, string> = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  none: "",
};

const alignMap: Record<Align, string> = {
  left: "text-left",
  center: "text-center mx-auto",
};

export function SectionSubtitle({
  children,
  variant = "default",
  align = "left",
  maxWidth = "xl",
  className = "",
}: SectionSubtitleProps) {
  const color = variant === "on-dark" ? "text-sky" : "text-gray-600";
  const alignCls = alignMap[align];
  const mwCls = maxWidthMap[maxWidth];

  return (
    <p className={`mt-2 mb-10 text-base md:text-lg ${color} ${alignCls} ${mwCls} ${className}`}>
      {children}
    </p>
  );
}
