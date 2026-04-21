# CLAUDE.md — Instrukcje dla Claude Code

Ten plik definiuje kontekst, zasady i workflow dla Claude Code pracującego w tym projekcie.
**Czytaj ten plik jako pierwszy przy każdej sesji.** Szczegółowe reguły kodowania w
`CONVENTIONS.md`. Historia zmian w `CHANGELOG.md`. Decyzje strategiczne w `DECISIONS.md`.

---

## 1. Kontekst projektu

**Nazwa:** Mr IceCube Landing
**Klient:** Mr IceCube Miami — firma dostarczająca lód (regular + mixology) w Miami-Dade, Floryda.
**Cel strony:** jednostronicowy landing marketingowy z sekcjami: Hero, Who We Serve, Products,
Why Us, Testimonials, How It Works, Contact. Przycisk WhatsApp i telefon jako główne CTA.
**Referencja wizualna:** `mr_icecube_landing.html` (mockup w czystym HTML/CSS/JS w katalogu projektu).
**Target audience:** drobni właściciele (bodegi, stacje benzynowe, bary, organizatorzy eventów)
w rejonie Miami-Dade. Język komunikacji strony: angielski + hiszpański.
**Tone of voice landingu:** direct, warm, energetic, lekko uliczny ("We keep Miami cool"),
NIE korporacyjny.

## 2. Stan i właściciel projektu

**Właściciel:** pojedynczy deweloper-hobbysta, **nie jest programistą**. Pracuje w VS Code,
komunikuje się z Tobą przez Claude Code. Język rozmowy: **polski**.
**Implikacje dla Ciebie:**

- Wyjaśniaj logikę ZANIM pokażesz kod. Prosty język, bez żargonu bez wyjaśnienia.
- Jeśli używasz terminu technicznego pierwszy raz — wyjaśnij w nawiasie co to znaczy.
- Nie zakładaj, że użytkownik wie czym jest „Server Component", „hydration", „CSR vs SSR" itd.
- Gdy coś może pójść źle — ostrzeż z wyprzedzeniem, zaproponuj weryfikację.

## 3. Stack — twarde wymagania

- **Next.js 16.2.x** — App Router (NIE Pages Router). Turbopack domyślnie dla dev i build.
- **React 19.x** — Server Components domyślnie; `"use client"` tylko gdy potrzebne.
- **TypeScript 5.x** — `strict: true`, żadnych `any` bez komentarza uzasadniającego.
- **Tailwind CSS v4.2** — **CSS-first config**. Zdefiniowane w `src/app/globals.css`:
  - Import: `@import "tailwindcss";` (NIE `@tailwind base/components/utilities` — to v3!)
  - Theme: blok `@theme { --color-navy: ...; --font-display: ...; }` — zmienne stają się
    automatycznie klasami Tailwinda (`bg-navy`, `text-navy`, `font-display`).
  - **NIE MA `tailwind.config.js`.** Jeśli instynkt każe Ci taki plik utworzyć — zatrzymaj się.
- **Node.js 22+** (użytkownik ma 24.14.0).
- **Deploy:** Vercel. Nie mamy jeszcze domeny.
- **lucide-react** — biblioteka ikon SVG. Named imports tylko (`import { Snowflake } from "lucide-react"`). NIE `import * as`. Patrz DEC-005.

## 4. Port i uruchamianie

- Dev serwer: **`localhost:3001`** (nie domyślny 3000). Skrypt w `package.json`: `next dev --turbopack -p 3001`.
- Build production: `npm run build`.
- Uruchomienie locale: `npm run dev`.

## 5. Struktura folderów (App Router, src dir)

```
icecube/
  src/
    app/
      layout.tsx            # root layout (fonty, metadata, <html lang>)
      page.tsx              # landing page — składa sekcje z components/sections
      globals.css           # @import tailwindcss + @theme + globalne style
    components/
      ui/                   # atomy: Button, Badge, Card, IconWrapper
      sections/             # sekcje landingu: HeroSection, ProductsSection, ...
    lib/
      translations.ts       # słownik EN/ES (jeden plik, typowany)
      language-context.tsx  # React Context dla toggla języka
    types/                  # globalne typy (np. Language, Testimonial)
  public/                   # favicon, og-image, statyczne assety
  CLAUDE.md                 # ten plik
  CONVENTIONS.md            # reguły kodowania
  CHANGELOG.md              # historia zmian
  DECISIONS.md              # decyzje architektoniczne
  README.md                 # szybki start
  .env.example              # template zmiennych środowiskowych
  .nvmrc                    # wersja Node
  package.json
  tsconfig.json
  next.config.ts
```

**Żadnych komponentów w `src/app/`** poza plikami konwencji App Routera (`layout`, `page`, `loading`, `error`, `not-found`) i podfolderami routingu. Komponenty wielokrotnego użytku idą do `src/components/`.

## 6. Kluczowe decyzje projektowe (streszczenie)

Pełne uzasadnienia w `DECISIONS.md`. Streszczenie:

- **DEC-001:** Stack = Next.js 16 + TS + Tailwind v4 + Vercel. Status: Active.
- **DEC-002:** Komponenty sekcji w osobnych plikach (nie jeden wielki `page.tsx`). Status: Active.
- **DEC-003:** i18n przez własny React Context + `translations.ts`, **bez `next-intl`**.
  Dwa języki: EN + ES. Bez routingu językowego (`/en`, `/es`). Status: Active.
- **DEC-004:** Brak formularza kontaktowego w v1. Kontakt = WhatsApp deep link + `tel:` link. Status: Active.

Jeśli pojawia się potrzeba złamania któregoś z tych założeń — **zatrzymaj się, zgłoś użytkownikowi, zaproponuj DECISION ENTRY**. Nie podejmuj decyzji strategicznych sam.

## 7. Workflow pracy

Użytkownik pracuje w trybie **krok-po-kroku, z weryfikacją na żywo**:

1. **Jeden prompt = jeden logiczny zakres.** Nie scalaj różnych tematów w jednej zmianie.
2. **Przed każdym promptem** użytkownik otrzymuje od zewnętrznego mentora (drugi Claude)
   wyjaśnienie logiki zmiany, pre-bug checking i punkty do weryfikacji. Ty wykonujesz prompt.
3. **Po wykonaniu promptu** zatrzymaj się. Użytkownik weryfikuje na `localhost:3001`
   i wraca z feedbackiem. Nie kumuluj zmian.
4. **CHANGELOG ENTRY** — każdy prompt kończy się propozycją wpisu do `CHANGELOG.md`.
5. **DECISION ENTRY** — jeśli zmiana dotyka architektury / UX / pozycjonowania / stacku —
   dodaj też propozycję wpisu do `DECISIONS.md` (format: Kontekst / Decyzja / Alternatywy / Konsekwencje / Status).
6. **Raport na koniec** — po każdym prompcie podaj zwięzły raport: co zrobione, jakie pliki
   zmienione/utworzone, co użytkownik ma sprawdzić.

## 8. Czego NIE rób bez pytania

- **Nie instaluj żadnych pakietów** spoza Next.js / React / Tailwind / TypeScript / ESLint.
  Jeśli pomysł zakłada nowy pakiet — zatrzymaj się i zapytaj (z uzasadnieniem, wagą paczki, alternatywami).
  (Wyjątki już zatwierdzone: lucide-react — patrz DEC-005.)
- **Nie zmieniaj stacku** (wersje major Next/React/Tailwind/TS) — to DECISION ENTRY.
- **Nie dodawaj `tailwind.config.js`** — Tailwind v4 nie używa tego pliku.
- **Nie używaj `<img>` zamiast `next/image`**, **nie ładuj fontów przez `<link>`** zamiast `next/font`.
- **Nie używaj `React.FC`** — zwykła funkcja z typowanymi propsami.
- **Nie zostawiaj `any`** bez komentarza `// why: ...`.
- **Nie commituj i nie pushuj** — użytkownik robi to sam po weryfikacji.
- **Nie modyfikuj mockupu `mr_icecube_landing.html`** — to referencja, traktuj read-only.
- **Nie dodawaj analytics, trackingu, cookie banneru** bez wyraźnej prośby — to decyzja produktowa.
- **Nie włączaj sekcji Testimonials** — klucze `testi.*` w `translations.ts` to fikcyjne placeholdery z mockupu. Renderowanie = naruszenie FTC Endorsement Guidelines. Odblokowanie wymaga procesu opisanego w DEC-006.
- **Nie renderuj karty Email w Contact** — klucze `contact.email*` to pozostałości mockupa. Email w mockupie (`mezfashion69@yahoo.com`) jest nieprofesjonalnym prywatnym adresem. Odblokowanie wymaga procesu opisanego w DEC-007 (skonfigurowany email domenowy).
- **Nie przywracaj przycisku "Get a Quote"** w Hero ani nigdzie indziej. Klucz `hero.ctaQuote` jest nieużywany (REFACTOR-01/DEC-008). Przywrócenie wymaga nowego DEC wycofującego DEC-008 lub DEC-004 (brak formularza).
- **Nie przywracaj kart Website ani Address w Contact** bez nowego DEC uchylającego DEC-008. Landing świadomie redukuje model konwersji do telefon + WhatsApp.
- **Nie dodawaj linii kontaktowej (adres/tel/website) do Footera** — usunięta w REFACTOR-01 zgodnie z DEC-008.

## 9. Przed kodem — pre-bug checking

Zanim wygenerujesz zmianę, wykonaj myślową symulację:

- Czy kod kłóci się z zasadami w `CONVENTIONS.md`?
- Czy komponent potrzebuje `"use client"`? Czy nie dodajesz niepotrzebnie?
- Czy są implikacje dla bundle size, LCP, dostępności?
- Czy typy TS są ścisłe, czy gdzieś ląduje niejawny `any`?
- Czy przełącznik języka nadal działa po zmianie (jeśli dotyka sekcji z tekstem)?

Jeśli widzisz ryzyko — **napisz to przed kodem**, zaproponuj rozwiązanie, poczekaj na decyzję.

## 10. Po kodzie — weryfikacja

W raporcie końcowym zawsze podaj użytkownikowi:

- Listę utworzonych i zmodyfikowanych plików (ścieżki względne od głównego katalogu).
- Komendę do uruchomienia jeśli potrzeba (zwykle `npm run dev`).
- 3-5 punktów **wizualnej/funkcjonalnej weryfikacji** na `localhost:3001` — konkretnie
  co użytkownik ma zobaczyć lub kliknąć.
- Jakiekolwiek ostrzeżenia z terminala (linter, TS errors, warnings Reacta) — nie zamiataj pod dywan.
- Propozycję CHANGELOG ENTRY (i DECISION ENTRY jeśli dotyczy).

## 11. Stan aktualny projektu

_(Ta sekcja jest aktualizowana po każdym prompcie — aktualny stan prac)_

- ✅ **SCAFFOLDING-01** — projekt utworzony, Next 16.2.4 + Tailwind v4.2, port 3001, struktura folderów, pliki śladu decyzyjnego, zmienne brandowe w `globals.css`.
- ⏳ **Następny krok:** TBD (mentor przygotuje prompt po feedbacku z SCAFFOLDING-01).

## 12. Plik mockup referencyjny

W katalogu projektu (lub dostarczony przez użytkownika) znajduje się `mr_icecube_landing.html` —
kompletny mockup landingu w czystym HTML/CSS/JS z zadaną paletą kolorów, copy EN+ES,
strukturą sekcji i animacjami hover. **Używaj go jako źródła prawdy dla:**

- dokładnej treści (copy) w obu językach,
- palety kolorów (zdefiniowanej już w `@theme` w `globals.css`),
- struktury sekcji i hierarchii wizualnej,
- mikro-interakcji i hoverów.

**NIE kopiuj ślepo stylów inline** — przepisuj na Tailwind v4 utilities i komponenty React.
Przełącznik języka w mockupie używa `document.getElementById` + `innerHTML` — **to jest do
przepisania**, nie do skopiowania. W React używamy stanu + Context (patrz DEC-003).

## 13. Priorytety jakościowe (w kolejności)

1. **Działa** — brak błędów w konsoli, wszystkie linki i przyciski funkcjonalne.
2. **Dostępność** — a11y baseline z `CONVENTIONS.md` punkt 8.
3. **Responsywność** — mobile-first, sprawdzamy w DevTools dla 360px, 768px, 1280px.
4. **Wydajność** — LCP < 2.5s, CLS < 0.1, bundle size rozsądny.
5. **SEO** — metadata, Open Graph, semantic HTML.
6. **Piksel-perfect vs mockup** — mile widziane, ale niższy priorytet niż 1-5.

## 14. Gdy coś się nie zgadza

Jeśli w trakcie pracy widzisz konflikt między:

- instrukcją w prompcie użytkownika,
- regułą w tym pliku,
- regułą w `CONVENTIONS.md`,
- istniejącym kodem,

→ **zatrzymaj się, opisz konflikt, zaproponuj rozwiązanie, poczekaj na decyzję.**
Nie próbuj „po cichu" wybrać jednej opcji.
