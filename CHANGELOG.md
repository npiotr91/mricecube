# Changelog

Wszystkie istotne zmiany w projekcie Mr IceCube Landing są dokumentowane w tym pliku.

Format oparty na [Keep a Changelog](https://keepachangelog.com/), wersjonowanie [SemVer](https://semver.org/).

## [Unreleased]

### Added

- DEPLOY-01 Faza A: README zaktualizowany (opis stacku, struktury, decyzji, deployment section). Przygotowanie do pierwszego deploy na Vercel.

## [0.1.0] — 2026-04-21

_Pierwsza wersja publiczna. Landing kompletny, deploy na Vercel._

### Added

#### Scaffolding i infrastruktura

- Scaffolding projektu: Next.js 16 + TypeScript + Tailwind v4 + App Router + src dir
- Struktura folderów: `src/components/{ui,sections}`, `src/lib`, `src/types`
- Zmienne brandowe Mr IceCube w `globals.css` (`navy`, `blue`, `light-blue`, `sky`, `bg-light`, `gray-ice`)
- Port dev ustawiony na 3001
- Pliki śladu decyzyjnego: `CONVENTIONS.md`, `CHANGELOG.md`, `DECISIONS.md`
- `.nvmrc` z wersją Node 22

#### Layout i i18n

- LAYOUT-02: fonty Barlow (400, 700) i Barlow Condensed (700, 900) przez `next/font/google`, hostowane lokalnie
- LAYOUT-02: metadata SEO w `layout.tsx` (title, description, keywords, Open Graph, robots), viewport z `themeColor` navy, `<html lang="en">` z klasami CSS variables fontów
- COMPONENT-01: System i18n — typy TS (`Language`, `TranslationKey`, `Translations`) w `src/types/language.ts`
- COMPONENT-01: Słownik EN+ES (80 kluczy × 2) w `src/lib/translations.ts` z tekstami z mockupu referencyjnego
- COMPONENT-01: `LanguageProvider` + hook `useLanguage` w `src/lib/language-context.tsx` z persystencją w `localStorage` pod kluczem `mricecube-lang`

#### Atomy UI i pierwsze sekcje

- COMPONENT-04: atomy UI w `src/components/ui/` — `SectionContainer`, `SectionHeading`, `SectionSubtitle` (Server Components), `LanguageToggle` (Client Component)
- COMPONENT-04: pierwsza interakcja użytkownika — floating `LanguageToggle` przełączający EN↔ES z persystencją przez `useSyncExternalStore` + `localStorage`
- COMPONENT-05: dependency `lucide-react` (biblioteka ikon SVG, named imports, tree-shakable)
- COMPONENT-05: `CLAUDE.md` — `lucide-react` w whiteliście akceptowanych pakietów (§3) i wyjątek od reguły "nie instaluj" (§8)

#### Sekcje landingu

- SECTION-05: Navbar (sticky, Server Component) z logo, tekstowymi linkami (desktop), WhatsApp CTA (mobile) i `LanguageToggle`
- SECTION-05: NavLinks (Client, konsumuje słownik przez `useLanguage`)
- SECTION-05: Hero (Client) z badge, dwuczęściowym nagłówkiem, podtytułem, tagline, dwoma CTA, telefonem i linkiem do strony; gradient tła navy→blue→light-blue
- SECTION-05: Button atom (Server) z wariantami `primary`/`outline`, opcjonalną ikoną lucide-react, trybem `compact` dla mobile nav
- SECTION-05: pierwsza użyta ikona lucide-react — `MessageCircle` (w CTA WhatsApp w Navbar i Hero)
- SECTION-05: `globals.css` — `scroll-behavior: smooth` na `html`, `scroll-margin-top: 5rem` na `section[id]`
- SECTION-06: IceBar (Client) — cienki pasek pod Hero z hasłem "FAST SERVICE · BEST PRICE · ANYTIME · ANYWHERE" na navy, z ikonami Snowflake po bokach
- SECTION-06: WhoWeServe (Client) — sekcja `#serve` z 5 kartami segmentów klientów (Local Shops, Gas Stations, Private Parties, Bars & Restaurants, Events & Venues)
- SECTION-06: ServeCard atom (Server) — karta z niebieskim paskiem u góry, ikoną, tytułem, opisem; hover `translate-y-1`
- SECTION-06: aktywowane atomy `SectionContainer`, `SectionHeading`, `SectionSubtitle` — pierwsze ich realne użycie
- SECTION-06: nowe ikony lucide-react — `Snowflake`, `Store`, `Fuel`, `PartyPopper`, `Martini`, `Tent`
- SECTION-07: Products (Client) — sekcja `#products` na navy tle, 3 karty (Regular Ice, Mixology Ice, Bulk Supply) w grid 3-kolumnowym
- SECTION-07: Stats (Client) — pasek 4 statystyk na blue tle (24/7, #1, 100%, ikona `Truck`) z labelami ze słownika
- SECTION-07: ProductCard atom (Server) — karta z border 2px, ikoną, tytułem, opisem; styl dostosowany do ciemnego tła
- SECTION-07: nowe ikony lucide-react — `Gem` (Mixology), `Package` (Bulk Supply), `Truck` (Stats fleet)
- SECTION-08: Why (Client) — sekcja `#why` na szarym tle, 6 kart z horizontalnym layoutem (ikona w kolorowym kwadraciku + tytuł + opis) w grid 2-kolumnowym
- SECTION-08: WhyCard atom (Server) — horizontal card z kwadratem ikony 48×48, białą ikoną 20×20, tytułem i opisem po prawej
- SECTION-08: nowe ikony lucide-react — `Zap`, `DollarSign`, `Trophy`, `Palmtree`, `Handshake`, `ThumbsUp`
- SECTION-10: HowItWorks (Client) — sekcja na navy tle, 4 numerowane kroki procesu (Call or Text, We Confirm, We Deliver, Stay Cool) w grid poziomym / pionowym (mobile)
- SECTION-10: StepCard atom (Server) — kółko z numerem (light-blue, 56×56), tytuł uppercase, opis; opcjonalny `trailingIcon` inline z tytułem
- SECTION-10: nowa ikona lucide-react — `Smile` (krok 4 "Stay Cool")
- SECTION-11: Contact (Client) — sekcja `#contact` na `bg-light` tle, wyśrodkowany nagłówek "Get In Touch", 3 karty (Phone, Website, Address) w grid 3-kolumnowym, duży CTA WhatsApp
- SECTION-11: ContactCard atom (Server) — 3-pole karta (label / klikalny value / note), opcjonalny `href` z `external=true` dla Google Maps i website
- SECTION-11: Button — dodany trzeci wariant `cta` (navy tło, biały tekst, hover blue) — dla dużego CTA w Contact
- SECTION-12: Footer (Client) — wyśrodkowana stopka strony na navy tle z klikalnym logo (scroll do `#top`), taglinem z `footer.sub`, linią kontaktową (adres · tel · website) i copyrightem z dynamicznym rokiem
- COMPONENT-06: WhatsAppFab (Server) — floating action button w prawym dolnym rogu viewportu, zielone kółko z inline SVG logo WhatsApp, `fixed` position `z-50`. Hover `scale-110`, focus ring na klawiaturze. Kliknięcie otwiera `https://wa.me/13058127096` w nowej karcie.
- COMPONENT-07: IceCubeIcon (Server) — własna ikona SVG kostki lodu 3D izometrycznej. Stylistyka dopasowana do lucide-react (stroke currentColor, round caps/joins, viewBox 24×24, strokeWidth 2). Branding: kostka zamiast śnieżynki, dosłowna reprezentacja produktu.

#### Refaktor modelu konwersji

- REFACTOR-01: nowe klucze słownika — `hero.ctaCall` ("Call us" / "Llámanos"), `contact.ctaCall` ("Call Us — (305) 812-7096" / "Llámanos — (305) 812-7096") w obu językach
- REFACTOR-01: ikona `Phone` z lucide-react (pierwsze użycie) w Hero i Contact

#### Decyzje architektoniczne

- DEC-005 w `DECISIONS.md` — uzasadnienie wyboru lucide-react nad heroicons/custom SVG/emoji
- DEC-006 w `DECISIONS.md` — dokumentacja decyzji o odłożeniu Testimonials, kontekst prawny (FTC Endorsement Guidelines), warunki odblokowania
- DEC-007 w `DECISIONS.md` — dokumentacja pominięcia karty Email w v1, kontekst (nieprofesjonalny `mezfashion69@yahoo.com` z mockupu), warunki odblokowania
- DEC-008 w `DECISIONS.md` — Model konwersji v2: tylko telefon + WhatsApp. Kontekst, alternatywy, warunki odblokowania elementów v1

### Changed

- FIX-01: `src/lib/language-context.tsx` przepisany z `useState + useEffect` na `useSyncExternalStore` — SSR-safe, zgodny z regułą `react-hooks/set-state-in-effect` (React 19 / Next 16). API publiczne hooka `useLanguage` bez zmian.
- DEC-003 (`DECISIONS.md`): dodana notka implementacyjna w sekcji "Konsekwencje", wskazująca wybór `useSyncExternalStore`.
- FIX-02: usunięcie emoji flag z toggle'a języka. `nav.langToggle`: `"🇪🇸 Español"` → `"ES"`, `"🇺🇸 English"` → `"EN"`. `LanguageToggle.tsx`: dodane `min-w-[56px]` i `text-center` dla stabilnej szerokości przycisku.
- COMPONENT-05: oczyszczenie słownika `translations.ts` z emoji — usunięte `💬` (hero.ctaWhatsApp, contact.ctaWhatsApp), `❄` (iceBar.text), `😎` (how.4.title) w obu językach EN+ES. Emoji zostały zastąpione ikonami lucide-react renderowanymi w komponentach sekcji.
- SECTION-09-SKIP: sekcja Testimonials odłożona do v2. Cytaty w mockupie (Carlos/Diana/Mike) są fikcyjnymi placeholderami — renderowanie byłoby naruszeniem FTC Endorsement Guidelines. Klucze `testi.*` pozostają w słowniku z komentarzem ostrzegawczym.
- `CLAUDE.md`: dodane ostrzeżenia w sekcji "Czego NIE rób" — nie włączać Testimonials (DEC-006), karty Email (DEC-007), przywracania Get a Quote / Website / Address / linii kontaktowej Footera (DEC-008).
- FIX-04: korekta liczbowa w DEC-006 — "14 stringów (7 kluczy × 2 języki)" → "22 stringi (11 kluczy × 2 języki)". Klucze `testi.*` pozostają niezmienione.
- SECTION-11: `translations.ts` — dodane komentarze ochronne nad kluczami `contact.email*` (w EN i ES) — klucze zachowane, blokada renderowania
- FIX-05: `SectionSubtitle` rozszerzony o propsy `align` (`"left"` | `"center"`, default `"left"`) i `maxWidth` (`"sm"` | `"md"` | `"lg"` | `"xl"` | `"2xl"` | `"none"`, default `"xl"`). `Contact.tsx` używa atomu zamiast custom `<div><p>` wrappera. Pozostałe sekcje bez zmian (defaulty zachowują dotychczasowe zachowanie).
- SECTION-12: `translations.ts` — klucz `footer.copy` w EN i ES — usunięty hardcoded "© 2024" (rok i symbol renderowane w komponencie dynamicznie)
- SECTION-12: `page.tsx` — `<Footer />` renderowany **poza** `<main>` (semantycznie HTML5 — footer to osobny region strony)
- FIX-06: Navbar — dodany `md:pl-6` na wrapperze prawej strony (WhatsApp mobile CTA + `LanguageToggle`), naprawia ściśnięcie linku "Contact/Contacto" przy przełączaniu języka na szerokościach desktop 1024–1150px.
- REFACTOR-01: Hero — przycisk "Get a Quote" zastąpiony przyciskiem "Call us" (outline, ikona `Phone`). Usunięty link website pod CTA — zostaje tylko numer telefonu.
- REFACTOR-01: Contact — karty Website i Address usunięte. Zostaje pojedyncza karta Phone (wyśrodkowana). Pod kartą dwa duże CTA: WhatsApp Us + Call Us (oba z numerem w tekście, wariant `cta`).
- REFACTOR-01: Footer — usunięta linia kontaktowa (adres · tel · website). Zostaje: logo + tagline + copyright.
- REFACTOR-01: `translations.ts` — komentarze ochronne nad kluczami nieużywanymi po refaktorze: `hero.ctaQuote`, `contact.webLabel`/`Note`, `contact.addressLabel`/`Value`/`Note` (EN i ES).
- REFACTOR-02: Contact — usunięta karta Phone. Numer jest już obecny w tekście obu CTA (WhatsApp Us + Call Us), karta była redundantna. Implementacja DEC-008.
- REFACTOR-02: `translations.ts` — komentarze ochronne nad `contact.phoneLabel`/`phoneNote` (EN i ES).
- REFACTOR-02: `Contact.tsx` — usunięte: import `ContactCard`, stała `PHONE_DISPLAY`.
- COMPONENT-07: IceBar — ikony `Snowflake` zastąpione `IceCubeIcon` (2 miejsca: po bokach tekstu)
- COMPONENT-07: Products — ikona `Snowflake` w karcie Regular Ice zastąpiona `IceCubeIcon`
- COMPONENT-07: `Snowflake` z lucide-react nie jest już używany w projekcie — usunięty z importów w IceBar i Products

### Removed

- `src/lib/.gitkeep` i `src/types/.gitkeep` — zbędne po umieszczeniu realnych plików w tych folderach
- SECTION-05: floating `LanguageToggle` w `page.tsx` — przeniesiony do Navbar
- SECTION-05: placeholder "MR ICECUBE" w `page.tsx` — zastąpiony komponentem Hero
