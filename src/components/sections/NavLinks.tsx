"use client";

import { useLanguage } from "@/lib/language-context";

// Tekstowe linki nawigacyjne. Ukryte na mobile (md:flex).
// Client Component bo konsumuje useLanguage (tłumaczenia).
export function NavLinks() {
  const { t } = useLanguage();

  const links: { href: string; key: "nav.serve" | "nav.products" | "nav.why" | "nav.contact" }[] = [
    { href: "#serve", key: "nav.serve" },
    { href: "#products", key: "nav.products" },
    { href: "#why", key: "nav.why" },
    { href: "#contact", key: "nav.contact" },
  ];

  return (
    <ul className="hidden items-center gap-7 md:flex">
      {links.map((link) => (
        <li key={link.key}>
          <a
            href={link.href}
            className="text-sm font-semibold tracking-wide text-navy transition hover:text-blue"
          >
            {t(link.key)}
          </a>
        </li>
      ))}
    </ul>
  );
}
