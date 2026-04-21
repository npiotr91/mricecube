import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import { LanguageProvider } from "@/lib/language-context";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-barlow",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mr IceCube Miami — Regular Ice / Mixology Ice & More",
  description:
    "Miami-Dade's ice specialists. Fast delivery, best price, anytime, anywhere. Regular ice and crystal-clear mixology ice for shops, bars, events, and parties.",
  keywords: [
    "ice delivery Miami",
    "mixology ice",
    "bagged ice Miami-Dade",
    "ice supplier",
    "Miami ice company",
  ],
  openGraph: {
    title: "Mr IceCube Miami — Regular Ice / Mixology Ice & More",
    description:
      "We keep Miami cool — one bag at a time. Fast delivery. Best price. No excuses.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1a2a6c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
