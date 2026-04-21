type IceCubeIconProps = {
  className?: string;
  // aria-hidden domyślnie true — ikona dekoracyjna.
  // Jeśli ikona niesie informację semantyczną, przekaż ariaHidden={false}
  // i podaj aria-label na elemencie nadrzędnym.
  ariaHidden?: boolean;
};

// Kostka lodu — własna ikona SVG 3D izometryczna.
// Stylistyka dopasowana do lucide-react: stroke currentColor, linecap round,
// linejoin round, strokeWidth 2, fill none. Dzięki temu kolor dziedziczy
// przez text-* klasy Tailwinda, spójnie z innymi ikonami w projekcie.
//
// Struktura SVG (viewBox 24×24):
// - Przednia ścianka: zaokrąglony kwadrat (3,10 → 15,10 → 15,21 → 3,21)
// - Górna ścianka: równoległobok (3,10 → 9,3 → 21,3 → 15,10) — górna krawędź
// - Prawa ścianka: równoległobok (15,10 → 21,3 → 21,14 → 15,21) — prawa krawędź
// - Refleks: krótki ukośny pasek wewnątrz przedniej ścianki (6,13 → 9,13 i 6,16 → 7,16)
export function IceCubeIcon({ className, ariaHidden = true }: IceCubeIconProps) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={ariaHidden}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Przednia ścianka kostki — zaokrąglony prostokąt */}
      <path d="M3 10 L15 10 L15 21 L3 21 Z" />

      {/* Górna ścianka — perspektywa izometryczna */}
      <path d="M3 10 L9 3 L21 3 L15 10" />

      {/* Prawa ścianka — perspektywa izometryczna */}
      <path d="M15 10 L21 3 L21 14 L15 21" />

      {/* Refleks światła w przedniej ściance — dwa krótkie paski */}
      <path d="M6 13 L9 13" />
      <path d="M6 16 L7 16" />
    </svg>
  );
}
