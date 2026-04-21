# Mr IceCube Landing

Landing page dla Mr IceCube Miami — dostawca lodu (regular + mixology) w Miami-Dade, Floryda. Jednostronicowy landing marketingowy z sekcjami Hero, Who We Serve, Products, Why Us, How It Works, Contact. Dwa języki: EN + ES.

**Status:** Pre-production (v0.1.0) — pierwszy deploy na Vercel.

## Stack

- [Next.js 16.2](https://nextjs.org/) (App Router, Turbopack)
- [React 19](https://react.dev/) (Server Components domyślnie)
- [TypeScript 5](https://www.typescriptlang.org/) (strict mode)
- [Tailwind CSS v4.2](https://tailwindcss.com/) (CSS-first config)
- [lucide-react](https://lucide.dev/) (ikony)
- Deploy: [Vercel](https://vercel.com/)

## Lokalne uruchomienie

Wymagania: Node.js 22+ (sprawdź `.nvmrc`).

```bash
npm install
npm run dev
```

Otwórz [http://localhost:3001](http://localhost:3001) w przeglądarce.

## Skrypty

| Komenda | Opis |
|---|---|
| `npm run dev` | Dev server na porcie 3001 (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Production server (po buildzie) |
| `npm run lint` | ESLint |

Dodatkowo: `npx tsc --noEmit` dla type checkingu bez emitowania JS.

## Struktura projektu

```
src/
  app/
    layout.tsx          # Root layout, metadata, fonty, LanguageProvider
    page.tsx            # Landing page (komponuje sekcje)
    globals.css         # Tailwind + @theme (zmienne brandowe Mr IceCube)
  components/
    ui/                 # Atomy wielokrotnego użytku (Button, Cards, Icons)
    sections/           # Sekcje landingu (Navbar, Hero, Products, itd.)
  lib/
    translations.ts     # Słownik EN+ES (80 kluczy × 2 języki)
    language-context.tsx # React Context dla toggla języka (useSyncExternalStore)
  types/
    language.ts         # Typy TS dla i18n (Language, TranslationKey)
```

## Dokumentacja projektowa

- **[CLAUDE.md](./CLAUDE.md)** — instrukcje dla Claude Code (workflow, reguły, stan prac)
- **[CONVENTIONS.md](./CONVENTIONS.md)** — konwencje kodowania (TypeScript, Tailwind, a11y, SEO)
- **[DECISIONS.md](./DECISIONS.md)** — rejestr decyzji architektonicznych (DEC-001..DEC-008)
- **[CHANGELOG.md](./CHANGELOG.md)** — historia zmian w formacie Keep a Changelog

## Kluczowe decyzje (skrót)

- **DEC-001:** Stack Next.js 16 + TS + Tailwind v4 + Vercel
- **DEC-002:** Komponenty sekcji w osobnych plikach
- **DEC-003:** i18n = EN+ES, React Context + translations.ts, bez next-intl
- **DEC-004:** Brak formularza kontaktowego w v1
- **DEC-005:** lucide-react jako biblioteka ikon (named imports only)
- **DEC-006:** Testimonials odłożone do v2 (fikcyjne placeholdery z mockupu)
- **DEC-007:** Karta Email w Contact pominięta w v1 (nieprofesjonalny email z mockupu)
- **DEC-008:** Model konwersji v2 — tylko telefon + WhatsApp

Pełne uzasadnienia w `DECISIONS.md`.

## Deployment

Projekt deployowany automatycznie na Vercel po push do gałęzi `main`. Preview deployments dla pull requestów.

**Produkcja:** (URL zostanie dodany po pierwszym deploy)
**Domena:** (zostanie podpięta w DEPLOY-02, gdy klient przekaże dostęp do `mricecubemia.com`)

## Licencja

Projekt komercyjny. Wszelkie prawa zastrzeżone.
