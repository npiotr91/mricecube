"use client";

import { MessageCircle, Phone } from "lucide-react";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionSubtitle } from "@/components/ui/SectionSubtitle";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/lib/language-context";

const PHONE_NUMBER = "3058127096";
const WHATSAPP_URL = "https://wa.me/13058127096";

export function Contact() {
  const { t } = useLanguage();

  return (
    <SectionContainer id="contact" background="bg-light">
      <div className="text-center">
        <SectionHeading
          title1={t("contact.title1")}
          title2={t("contact.title2")}
          accentColor="blue"
          baseColor="navy"
          align="center"
        />
      </div>
      <SectionSubtitle align="center" maxWidth="2xl">
        {t("contact.sub")}
      </SectionSubtitle>

      {/* Dwa duże CTA pod kartą — WhatsApp + Call us, oba wariant cta (navy).
          Flex-col na mobile (stackują), flex-row na desktop. */}
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button
          href={WHATSAPP_URL}
          variant="cta"
          icon={MessageCircle}
          external
          className="text-lg"
        >
          {t("contact.ctaWhatsApp")}
        </Button>
        <Button
          href={`tel:${PHONE_NUMBER}`}
          variant="cta"
          icon={Phone}
          className="text-lg"
        >
          {t("contact.ctaCall")}
        </Button>
      </div>
    </SectionContainer>
  );
}
