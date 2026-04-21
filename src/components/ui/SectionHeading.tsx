type SectionHeadingProps = {
  // Dwuczęściowy nagłówek "Word1 [Word2 w kolorze akcentu]" — wzorzec z mockupu
  // używany w 6 sekcjach. Użycie dwóch propsów zamiast HTML w stringu eliminuje
  // potrzebę dangerouslySetInnerHTML.
  title1: string;
  title2: string;
  // Kolor drugiego słowa. "blue" dla sekcji na białym/jasnym tle,
  // "light-blue" dla sekcji na navy tle (kontrast).
  accentColor?: "blue" | "light-blue";
  // Kolor bazowy nagłówka. Domyślnie navy dla jasnych teł; "white" dla navy tła.
  baseColor?: "navy" | "white";
  // Wyrównanie tekstu (testimonials.title jest centrowany w mockupie).
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  title1,
  title2,
  accentColor = "blue",
  baseColor = "navy",
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const accent = accentColor === "blue" ? "text-blue" : "text-light-blue";
  const base = baseColor === "navy" ? "text-navy" : "text-white";
  const textAlign = align === "center" ? "text-center" : "text-left";

  return (
    <h2
      className={`font-display text-4xl font-black uppercase leading-none tracking-wide md:text-5xl lg:text-6xl ${base} ${textAlign} ${className}`}
    >
      {title1} <span className={accent}>{title2}</span>
    </h2>
  );
}
