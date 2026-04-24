"use client";

import Image from "next/image";
import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/lib/language-context";

const WHATSAPP_URL = "https://wa.me/13058127096";
const PHONE_NUMBER = "3058127096";
const PHONE_DISPLAY = "(305) 812-7096";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative flex min-h-[88vh] items-center justify-center overflow-hidden px-6 py-16 text-center bg-[linear-gradient(135deg,white_0%,theme(colors.sky)_55%,theme(colors.bg-light)_100%)]"
    >
      {/* Radial highlight efekt — subtelna poświata */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(26,42,108,0.08)_0%,transparent_70%)]"
      />

      <div className="relative z-10 max-w-3xl">
        {/* Badge */}
        <span
          className="mb-5 inline-block animate-fade-slide-up rounded-full bg-navy px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white"
          style={{ animationDelay: "0ms" }}
        >
          {t("hero.badge")}
        </span>

        {/* Główny nagłówek — dwuczęściowy */}
        {/* Visually-hidden H1 dla SEO i screen readerów */}
        <h1 className="sr-only">Mr IceCube — Regular Ice / Mixology Ice & More</h1>

        {/* Logo brandowe jako obrazek */}
        <div
          className="animate-fade-slide-up mx-auto flex justify-center"
          style={{ animationDelay: "120ms" }}
        >
          <Image
            src="/images/logo.png"
            alt="Mr IceCube — Miami ice delivery"
            width={2528}
            height={1684}
            priority
            sizes="(max-width: 768px) 80vw, (max-width: 1024px) 60vw, 576px"
            className="h-auto w-80 md:w-[28rem] lg:w-[36rem]"
          />
        </div>

        {/* Podtytuł */}
        <p
          className="mt-4 animate-fade-slide-up font-display text-lg font-bold uppercase tracking-widest text-blue md:text-2xl"
          style={{ animationDelay: "240ms" }}
        >
          {t("hero.sub")}
        </p>

        {/* Tagline */}
        <p
          className="mx-auto mt-6 max-w-xl animate-fade-slide-up text-base text-navy/70 md:text-lg"
          style={{ animationDelay: "360ms" }}
        >
          {t("hero.tagline")}
        </p>

        {/* CTA buttons */}
        <div
          className="mt-9 flex animate-fade-slide-up flex-col items-center justify-center gap-3 sm:flex-row"
          style={{ animationDelay: "480ms" }}
        >
          <Button href={WHATSAPP_URL} variant="cta" icon={MessageCircle} external>
            {t("hero.ctaWhatsApp")}
          </Button>
          <Button href={`tel:${PHONE_NUMBER}`} variant="outline-dark" icon={Phone}>
            {t("hero.ctaCall")}
          </Button>
        </div>

        {/* Phone */}
        <p
          className="mt-8 animate-fade-slide-up text-navy/70"
          style={{ animationDelay: "600ms" }}
        >
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="font-bold text-navy transition hover:text-blue"
          >
            {PHONE_DISPLAY}
          </a>
        </p>
      </div>
    </section>
  );
}
