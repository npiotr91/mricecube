const WHATSAPP_URL = "https://wa.me/13058127096";
const WHATSAPP_GREEN = "#25D366";

// FAB (Floating Action Button) — zielone kółko w prawym dolnym rogu viewportu,
// zawsze widoczne niezależnie od scroll. Server Component — brak stanu, brak
// interakcji poza natywnym klikiem w link.
//
// Logo WhatsApp jako inline SVG skopiowane z mockupu referencyjnego.
// Lucide-react celowo nie zawiera brand logos (DEC-005). SVG renderujemy
// w oryginale zgodnie z WhatsApp Brand Guidelines (zielone tło, białe logo).
export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      // Pozycja: fixed prawy dolny róg. Rozmiar: 54×54 mobile, 64×64 desktop.
      // Z-index 50 — nad całą treścią, pod modalami (gdyby kiedyś były).
      // Shadow + scale hover dla wizualnego potwierdzenia interaktywności.
      className="fixed right-4 bottom-4 z-50 flex h-[54px] w-[54px] items-center justify-center rounded-full shadow-lg transition hover:scale-110 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:right-6 md:bottom-6 md:h-16 md:w-16"
      style={{ backgroundColor: WHATSAPP_GREEN }}
    >
      <svg
        width="30"
        height="30"
        viewBox="0 0 32 32"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
        className="md:h-[34px] md:w-[34px]"
      >
        <path d="M16 2C8.28 2 2 8.28 2 16c0 2.46.66 4.76 1.8 6.76L2 30l7.44-1.76A13.9 13.9 0 0016 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm0 25.4a11.7 11.7 0 01-6-1.64l-.42-.26-4.42 1.04 1.08-4.3-.28-.44A11.68 11.68 0 014.6 16C4.6 9.7 9.7 4.6 16 4.6S27.4 9.7 27.4 16 22.3 27.4 16 27.4zm6.42-8.74c-.34-.18-2.04-1-2.36-1.12-.32-.1-.56-.18-.8.18-.24.34-.9 1.12-1.1 1.36-.2.22-.42.26-.76.08-.34-.18-1.44-.52-2.74-1.66-1.02-.9-1.7-2-1.9-2.34-.2-.34-.02-.52.14-.7.16-.16.34-.4.52-.6.18-.2.24-.34.34-.56.12-.22.06-.42-.02-.6-.08-.18-.8-1.92-1.1-2.62-.28-.7-.58-.6-.8-.6h-.68c-.24 0-.62.08-.94.42-.32.34-1.22 1.2-1.22 2.9 0 1.72 1.26 3.38 1.44 3.6.18.24 2.46 3.76 5.96 5.28.84.36 1.48.58 2 .74.84.26 1.6.22 2.2.14.68-.1 2.04-.82 2.34-1.62.28-.8.28-1.48.2-1.62-.1-.16-.32-.24-.66-.42z" />
      </svg>
    </a>
  );
}
