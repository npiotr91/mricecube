"use client";

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
      className="relative flex min-h-[88vh] items-center justify-center overflow-hidden px-6 py-16 text-center bg-[linear-gradient(135deg,theme(colors.navy)_0%,theme(colors.blue)_60%,theme(colors.light-blue)_100%)]"
    >
      {/* Radial highlight efekt — subtelna poświata */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(126,200,227,0.18)_0%,transparent_70%)]"
      />

      <div className="relative z-10 max-w-3xl">
        {/* Badge */}
        <span className="mb-5 inline-block rounded-full bg-light-blue px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-navy">
          {t("hero.badge")}
        </span>

        {/* Główny nagłówek — dwuczęściowy */}
        <h1 className="font-display font-black uppercase leading-none tracking-wide text-white text-6xl md:text-8xl lg:text-9xl">
          {t("hero.title1")} <br />
          <span className="text-light-blue">{t("hero.title2")}</span>
        </h1>

        {/* Podtytuł */}
        <p className="mt-4 font-display text-lg font-bold uppercase tracking-widest text-sky md:text-2xl">
          {t("hero.sub")}
        </p>

        {/* Tagline */}
        <p className="mx-auto mt-6 max-w-xl text-base text-white/85 md:text-lg">
          {t("hero.tagline")}
        </p>

        {/* CTA buttons */}
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href={WHATSAPP_URL} variant="primary" icon={MessageCircle} external>
            {t("hero.ctaWhatsApp")}
          </Button>
          <Button href={`tel:${PHONE_NUMBER}`} variant="outline" icon={Phone}>
            {t("hero.ctaCall")}
          </Button>
        </div>

        {/* Phone */}
        <p className="mt-8 text-sky">
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="font-bold text-white transition hover:text-light-blue"
          >
            {PHONE_DISPLAY}
          </a>
        </p>
      </div>
    </section>
  );
}
