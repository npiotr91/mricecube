# Konwencje projektu Mr IceCube Landing

Ten plik opisuje zasady, których Claude Code musi przestrzegać przy każdej zmianie w tym
projekcie. Zasady są nadrzędne wobec „domyślnych" wzorców — jeśli jakaś zasada tu kłóci
się z tym, co Claude zrobiłby domyślnie, wygrywa ten plik.

---

## 1. Stack — wersje i reguły

- **Next.js 16.x** — App Router (NIE Pages Router). Turbopack domyślnie.
- **React 19.x** — Server Components domyślnie. `"use client"` tylko gdy potrzebny (stan,
  efekty, handlery zdarzeń, hooki przeglądarki).
- **TypeScript 5.x, strict mode** — żadnych `any` bez komentarza uzasadniającego.
- **Tailwind CSS v4.2** — **CSS-first config** (`@import "tailwindcss"` + `@theme` w pliku CSS).
  NIE ma `tailwind.config.js`. NIE używamy dyrektyw `@tailwind base/components/utilities` (to v3).
- **Node.js 22 LTS** — lock w `.nvmrc`.

## 2. Struktura folderów (App Router)

```
src/
  app/
    layout.tsx          # root layout (fonty, metadata, viewport)
    page.tsx            # landing page
    globals.css         # import tailwind + @theme + globalne reset/typografia
  components/           # komponenty wielokrotnego użytku
    ui/                 # atomy (Button, Badge, Card)
    sections/           # sekcje landingu (Hero, Products, Testimonials)
  lib/                  # helpery, stałe, translations
  types/                # globalne typy TS
public/                 # statyczne assety (obrazy, favicon, og-image)
```

Żadnych komponentów w `app/` poza `layout.tsx`, `page.tsx`, `loading.tsx`, `error.tsx`,
`not-found.tsx` i podfolderami routingu.

## 3. Nazewnictwo

- Komponenty: `PascalCase.tsx` (np. `HeroSection.tsx`)
- Funkcje/zmienne: `camelCase`
- Stałe globalne: `SCREAMING_SNAKE_CASE`
- Typy/interfejsy: `PascalCase`, bez prefiksu `I` (interface) — `Testimonial`, nie `ITestimonial`
- Pliki niekomponentowe: `kebab-case.ts` (np. `lib/translations.ts`)

## 4. Styling — zasady Tailwind v4

- **Żadnego inline CSS** (`style={{...}}`) poza wartościami dynamicznymi (np. wysokość z JS).
- **Żadnych plików `*.module.css`** — wszystko przez Tailwind.
- Zmienne brandowe (`--navy`, `--blue`, `--light-blue`, `--sky`) zdefiniowane w `globals.css`
  w bloku `@theme` — używane jako `bg-navy`, `text-blue` itp.
- Responsive: mobile-first (`md:`, `lg:` DLA większych ekranów, nie odwrotnie).
- Kolejność klas Tailwind: layout → spacing → typografia → kolory → stany (`hover:`, `focus:`).
- Powtarzający się zestaw 5+ klas → wyodrębnij komponent, nie rób `@apply`.

## 5. TypeScript — twarde wymagania

- `strict: true` w `tsconfig.json` — zostaje.
- Każdy komponent ma jawnie typowane propsy (`type Props = { ... }` lub `interface`).
- Żadnych `React.FC` — używamy zwykłych funkcji: `export function Hero(props: HeroProps) {}`.
- Import typów osobno: `import type { ReactNode } from 'react'`.
- `any` i `@ts-ignore` są zabronione. Jeśli absolutnie potrzebne — komentarz `// why: ...`.

## 6. Server vs Client Components

- **Domyślnie Server** — czyli brak `"use client"`.
- `"use client"` dodajesz TYLKO gdy komponent używa:
  - `useState`, `useEffect`, `useRef` lub dowolnego hooka
  - handlerów zdarzeń (`onClick`, `onChange`) bezpośrednio w JSX
  - API przeglądarki (`window`, `document`, `localStorage`)
- Jeśli tylko mały fragment strony jest interaktywny — wyodrębnij go do osobnego
  client componentu, resztę zostaw serwerową.

## 7. Obrazy, fonty, media

- **Obrazy**: zawsze `next/image` (komponent `Image`), nigdy `<img>`.
- **Fonty**: zawsze `next/font/google` lub `next/font/local`, nigdy `<link>` do Google Fonts.
- **Favicon**: `app/icon.png` + `app/apple-icon.png` (Next.js automatycznie generuje metatagi).

## 8. Dostępność (a11y) — minima

- Każdy `<img>` / `<Image>` ma sensowny `alt` (lub `alt=""` jeśli czysto dekoracyjny).
- Każde interaktywne nie-button (`<div onClick>`) jest przepisane na `<button>` lub ma `role` + `tabIndex` + obsługę klawiatury.
- Kontrast tekstu min. 4.5:1 wobec tła.
- Każda ikona-link (WhatsApp FAB, social) ma `aria-label`.
- Przełącznik języka ma `aria-pressed` albo jest `<button>` z jasnym tekstem.

## 9. SEO i metadata

- `metadata` w `app/layout.tsx` (lub `page.tsx`) z polami: `title`, `description`, `openGraph`, `robots`.
- `lang` na `<html>` ustawiane w `layout.tsx` na podstawie języka (domyślnie `en`).
- Plik `app/robots.ts` + `app/sitemap.ts` — generowane dynamicznie.

## 10. Wydajność — zielone lampki

- Brak zewnętrznych fontów ładowanych przez `<link>` (patrz pkt 7).
- Brak ciężkich bibliotek JS na starcie (żadnego całego `lodash` — tylko `lodash/pick` itp.).
- LCP < 2.5s, CLS < 0.1 — sprawdzamy w DevTools przed każdym PR-em.

## 11. Git — commity i branching

- Format commitu: `type(scope): summary` — np. `feat(hero): add bilingual CTA`.
- Typy: `feat`, `fix`, `refactor`, `style`, `docs`, `chore`, `perf`.
- `main` jest zawsze deployowalny. Feature branche nazywamy `feat/nazwa-funkcji`.
- Push do `main` deployuje produkcję na Vercel. Sprawdź lokalnie przed pushem.

## 12. Ślad decyzyjny

- Każda zmiana ma wpis w `CHANGELOG.md` (sekcja `## [Unreleased]` u góry).
- Każda decyzja wpływająca na architekturę / UX / pozycjonowanie produktu / stack ma
  wpis w `DECISIONS.md` w formacie: **Kontekst / Decyzja / Alternatywy / Konsekwencje / Status**.
- Zmiana bez wpisu do CHANGELOG = niegotowa.

## 13. Sekrety i zmienne środowiskowe

- Żadnych sekretów w repo. `.env.local` jest w `.gitignore`.
- Zmienne publiczne (widoczne w przeglądarce): prefix `NEXT_PUBLIC_`.
- Template w `.env.example` z nazwami bez wartości.

## 14. Workflow pracy z Claude Code

- Jeden prompt = jeden logiczny zakres zmian. Nie scalamy różnych tematów.
- Każdy prompt kończy się sekcją **CHANGELOG ENTRY** (i **DECISION ENTRY** jeśli strategiczna).
- Po każdej zmianie: **weryfikacja na `localhost:3001`** zanim przechodzimy dalej.
- Jeśli Claude Code chce zainstalować pakiet spoza Next/React/Tailwind — zatrzymuje się
  i pyta o zgodę.
