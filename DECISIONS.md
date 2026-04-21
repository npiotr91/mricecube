# Decisions Log

Rejestr decyzji architektonicznych, UX-owych, produktowych i stackowych dla projektu Mr IceCube Landing.

Format każdego wpisu:
- **Kontekst** — co się działo / jaki problem rozwiązywaliśmy
- **Decyzja** — co zdecydowaliśmy
- **Alternatywy** — co rozważyliśmy i odrzuciliśmy (z powodem)
- **Konsekwencje** — co to zmienia teraz i w przyszłości
- **Status** — [Active | Superseded by DEC-XXX | Deprecated]

---

## DEC-001 — Stack: Next.js 16 + TypeScript + Tailwind v4 + Vercel

**Kontekst:** Mamy mockup landing page'a w czystym HTML/CSS/JS. Klient (Mr IceCube Miami) potrzebuje publicznie dostępnej strony pod własną domeną, z możliwością łatwego rozszerzania w przyszłości (formularz, integracje, więcej języków). Użytkownik nie jest programistą, więc stack musi być dobrze udokumentowany i wspierany przez narzędzia AI.

**Decyzja:** Next.js 16 + TypeScript + Tailwind CSS v4.2 + deploy na Vercel.

**Alternatywy:**
- Czysty statyczny HTML na hostingu typu Netlify Drop — odrzucone, bo trudniej rozszerzać i brak komponentyzacji
- Astro — odrzucone, bo mniejsza rozpoznawalność i słabsze wsparcie narzędzi AI vs Next.js
- Vite + React — odrzucone, bo Next.js daje gotowe SEO, image optimization, fonty, routing bez dodatkowej pracy
- WordPress / gotowe buildery — odrzucone, bo użytkownik chce kontrolę nad kodem i workflow z Claude Code

**Konsekwencje:**
- Projekt będzie pracował na App Routerze i Server Components domyślnie
- Tailwind v4 to nowy CSS-first config (bez tailwind.config.js) — trzeba uważać na przestarzałe tutoriale
- Vercel daje darmowy deployment i automatyczne preview URL dla każdego commita
- Łatwo dodać w przyszłości: formularz (API route), i18n (wbudowane w App Router), analytics

**Status:** Active

---

## DEC-002 — Struktura komponentów

**Kontekst:** Mockup jest jednym plikiem HTML. Decydujemy, jak rozbić go w Next.js.

**Decyzja:** Komponenty sekcji w osobnych plikach w src/components/sections/ (HeroSection.tsx, ProductsSection.tsx, itd.). Atomy UI w src/components/ui/. Główny plik src/app/page.tsx tylko składa sekcje.

**Alternatywy:**
- Jeden plik page.tsx z całym landingem — odrzucone, bo trudniej czytać i zmieniać wybrane sekcje niezależnie
- Hybrydowo (page.tsx + tylko kilka wyodrębnionych komponentów) — odrzucone jako kompromis, który niesie wady obu podejść

**Konsekwencje:**
- Każdą sekcję można zmieniać, testować i w razie czego usuwać niezależnie
- State języka (EN/ES) musi być dzielony przez React Context (nie przez propsy do każdego komponentu)
- Więcej plików w repo — ale łatwiejsza praca z Claude Code (mniejszy scope per prompt)

**Status:** Active

---

## DEC-003 — Internacjonalizacja (i18n): EN + ES, Context API, bez next-intl

**Kontekst:** Mockup ma toggle EN ↔ ES realizowany przez document.getElementById i podmianę innerHTML. Klient jest z Miami, więc EN + ES wystarczy. Nie dodajemy PL ani innych języków.

**Decyzja:** Dwa języki (EN + ES). Teksty w jednym pliku src/lib/translations.ts jako typowany obiekt. Stan języka przez React Context. Bez biblioteki typu next-intl czy i18next.

**Alternatywy:**
- next-intl — odrzucone, bo overkill dla dwóch języków i jednej strony
- Routing językowy (/en, /es) — odrzucone, bo dla single-page landingu wystarczy stan klienta; SEO per-język dodamy jeśli kiedykolwiek zajdzie potrzeba
- Trzy języki (EN + ES + PL) — odrzucone, bo klient jest z Miami i PL nie ma tam rynku

**Konsekwencje:**
- Prosty toggle, mała waga paczki JS
- Jeden plik do tłumaczeń = łatwo edytować bez ruszania komponentów
- Jeśli w przyszłości dojdzie trzeci język lub SEO per-język — będzie refactor na next-intl (świadomy tech debt)
- Implementacja: `useSyncExternalStore` zamiast `useState + useEffect` dla SSR safety i zgodności z regułą `react-hooks/set-state-in-effect` w React 19 / Next 16 (patrz FIX-01 w CHANGELOG)

**Status:** Active

---

## DEC-004 — Brak formularza kontaktowego na start

**Kontekst:** Mockup ma tylko przycisk WhatsApp i numer telefonu. Decydujemy, czy dodać formularz leadowy od razu.

**Decyzja:** Brak formularza w v1. Kontakt wyłącznie przez WhatsApp (deep link) i tel (click-to-call).

**Alternatywy:**
- Formularz z wysyłką na email (Resend / EmailJS) — odrzucone, bo dodaje złożoność (walidacja, anty-spam, backend), a klient nie zgłaszał potrzeby
- Formularz typu "Request a quote" z integracją CRM — odrzucone jako przedwczesne

**Konsekwencje:**
- Szybszy time-to-live
- Brak ryzyka spamu i obsługi RODO na start
- Jeśli kiedykolwiek będzie potrzeba — dodamy Next.js API route + Resend

**Status:** Active

---

## DEC-005 — Biblioteka ikon: lucide-react

**Kontekst:** Mockup referencyjny używa emoji (💬, ❄, 😎, 🏪, ⛽, 🎉, 🍹, 🎪, 🧊, 💎, 📦, 🚚, ⚡, 💰, 🏆, 🌴, 🤝) jako ikon przy CTA, ice-bar, kartach Serve/Products/Why i stats. Emoji mają problemy: (1) renderują się inaczej na różnych platformach — Windows pokazuje literowe kody zamiast flag, emoji monochromatyczne vs kolorowe zależnie od systemu, (2) nie są skalowalne zgodnie z typografią (rozmiar i waga stroke'u niestety zależy od OS), (3) mają ograniczoną dostępność (screen readery czytają je niespójnie), (4) nie pozwalają na customizację koloru przez CSS. Potrzebujemy spójnego, profesjonalnego wizualnie systemu ikon, działającego identycznie na każdej platformie.

**Decyzja:** Używamy biblioteki `lucide-react`. Import per-ikona (named imports, np. `import { Snowflake, MessageCircle, Truck } from "lucide-react"`). Rozmiar i kolor kontrolowane klasami Tailwinda (`className="h-6 w-6 text-light-blue"`).

**Alternatywy:**
- **Heroicons** (od Tailwind Labs, ~300 ikon) — odrzucone, bo mniej pokryta biblioteka niż lucide (brakowałoby m.in. Snowflake, Fuel, PartyPopper).
- **Własne SVG inline** — odrzucone jako kosztowne (ok. 18+ ikon do narysowania lub znalezienia ręcznie), ryzyko niespójnego stylu.
- **React Icons** (agregator wielu bibliotek) — odrzucony jako overkill dla jednej rodziny ikon; mniejsze tree-shaking.
- **Zachowanie emoji** — odrzucone jako niespójne wizualnie (patrz Kontekst).

**Konsekwencje:**
- Dodany dependency `lucide-react` — pakiet popularny (100M+ pobrań tygodniowo na npm, MIT), peer React >=16.
- Bundle size: tree-shakable, każda ikona to osobny moduł; dla ~20 używanych ikon koszt to rząd 10-20 KB gzipped.
- Każda nowa ikona w projekcie = named import z "lucide-react". NIE wolno używać `import * as Icons from "lucide-react"` — łamie tree-shaking i rozdmuchuje bundle.
- Słownik `translations.ts` traktujemy jako czysty tekst — emoji usunięte z 4 kluczy (hero.ctaWhatsApp, iceBar.text, how.4.title, contact.ctaWhatsApp w obu językach); ikony renderujemy w komponentach sekcji obok tekstu.
- `CLAUDE.md` aktualizowany: lucide-react dodany do whitelisty akceptowanych pakietów.

**Status:** Active

---

## DEC-006 — Testimonials odłożone do v2

**Kontekst:** Mockup referencyjny zawiera sekcję Testimonials z trzema cytatami klientów (Carlos M. z Hialeah, Diana R. z Wynwood, Mike T. z Doral). Cytaty są FIKCYJNE — zostały wygenerowane jako placeholdery podczas tworzenia mockupu. Na etapie budowania produkcyjnego landingu użytkownik potwierdził, że klient (Mr IceCube Miami) nie dostarczył prawdziwych testimoniali ani pisemnych zgód od klientów na publikację.

**Decyzja:** Sekcja Testimonials NIE JEST renderowana w v1 landingu. Wariant A: klucze w słowniku (translations.ts) pozostają dla potencjalnego przyszłego użycia, ale nie tworzymy komponentu sekcji. Renderowanie testimoniali wymaga uprzedniego dostarczenia przez klienta prawdziwych cytatów + pisemnej zgody od cytowanych osób na publikację.

**Alternatywy:**
- **Renderować fikcyjne cytaty z mockupu** — ODRZUCONE. Fabrykowanie testimoniali na publicznej stronie firmy narusza FTC Endorsement Guidelines (16 CFR Part 255), kara do $50,000 za naruszenie. Ryzyko prawne dla klienta, ryzyko reputacyjne przy odkryciu. Nieetyczne wobec odwiedzających stronę.
- **Usunąć całkowicie klucze testi.\* ze słownika** (wariant B) — ODRZUCONE. Jeśli klient dostarczy cytaty w przyszłości, mielibyśmy do odtworzenia 22 stringi (11 kluczy × 2 języki) i refaktoru TranslationKey. Zostawiamy infrastrukturę, blokujemy tylko renderowanie.
- **Anonimizować cytaty** (bez nazwisk) — ODRZUCONE. FTC dotyczy również "reprezentatywnych" testimoniali bez nazwisk, jeśli sugerują że są od prawdziwych klientów.

**Konsekwencje:**
- Landing v1 nie ma social proof z cytatami — potencjalna strata konwersji, ale zgodność prawna i etyczna.
- Klucze `testi.*` w translations.ts oznaczone komentarzem ostrzegawczym (⚠️ FIKCYJNE placeholdery. NIE RENDEROWAĆ...).
- CLAUDE.md dostał ostrzeżenie w sekcji "Czego NIE rób" — zapobiega nieświadomemu włączeniu sekcji przez przyszłe iteracje.
- Warunki odblokowania (do wykonania przed renderowaniem):
  1. Klient dostarcza prawdziwe cytaty od zidentyfikowanych klientów Mr IceCube.
  2. Klient posiada pisemną zgodę tych osób na publikację cytatu wraz z imieniem/rolą na stronie mricecubemia.com.
  3. Klucze `testi.*` w translations.ts zaktualizowane na prawdziwe treści (oba języki).
  4. Nowy wpis DEC-XXX aktualizujący status DEC-006 na "Superseded" i dokumentujący źródło cytatów.
  5. Usunięcie komentarza ostrzegawczego w translations.ts.
  6. Utworzenie komponentu Testimonials + ewentualnie TestimonialCard, dodanie do page.tsx.

**Status:** Active (blokada renderowania do odwołania)

---

## DEC-007 — Karta Email w Contact pominięta w v1

**Kontekst:** Mockup referencyjny w sekcji Contact zawiera 4 karty: Phone, Email, Website, Address. Adres email w mockupie to `mezfashion69@yahoo.com` — prywatny adres właściciela na yahoo.com, sugerujący inne poprzednie przedsięwzięcie ("Mez Fashion"). Adres nieprofesjonalny dla B2B (klient to dostawca lodu dla sklepów/barów), liczba "69" niezamierzenie dwuznaczna, brak separacji komunikacji prywatnej/firmowej, ryzyko utonięcia e-maili klientów w prywatnym inboxie.

**Decyzja:** Karta Email NIE JEST renderowana w v1 landingu. Sekcja Contact zawiera tylko 3 karty (Phone, Website, Address) w grid 3-kolumnowym — wizualnie czyste, wszystkie 3 karty z realnymi klikalnymi linkami.

**Alternatywy:**
- **Renderować mezfashion69@yahoo.com** — ODRZUCONE. Ryzyko reputacyjne dla klienta (nieprofesjonalny adres na publicznej stronie firmy B2B), ryzyko że ważne e-maile od klientów toną w prywatnym inboxie lub są ignorowane jako spam.
- **Renderować info@mricecubemia.com jako placeholder** — ODRZUCONE. Bez faktycznie skonfigurowanej skrzynki email, kliknięcie `mailto:info@mricecubemia.com` → wysłanie maila → bounce-back → zła UX, utrata potencjalnego klienta.
- **Usunąć klucze contact.emailLabel/Note ze słownika** — ODRZUCONE. Analogicznie do DEC-006: jeśli klient dostarczy domenowy email w przyszłości, zostawienie kluczy pozwala szybko odblokować (1 karta + aktualizacja klucza contact.emailValue).

**Konsekwencje:**
- Contact Section ma 3 karty zamiast 4 — wizualnie czystsze (idealne wypełnienie grid 3-kolumnowego).
- Klucze `contact.emailLabel` i `contact.emailNote` pozostają w `translations.ts` z komentarzem ochronnym.
- CLAUDE.md otrzymuje ostrzeżenie w sekcji "Czego NIE rób" — nie włączać karty Email bez skonfigurowanego emaila domenowego.
- Klient (Mr IceCube Miami) powinien przed v2 skonfigurować email domenowy (info@mricecubemia.com lub contact@mricecubemia.com) u swojego dostawcy domeny/email.
- Warunki odblokowania:
  1. Klient dostarcza skonfigurowany email domenowy (z działającą skrzynką, nie aliasem).
  2. Utworzenie klucza `contact.emailValue` w słowniku (obecnie brak — tylko label + note).
  3. Dodanie karty Email do komponentu Contact.tsx (ContactCard z href=`mailto:...`).
  4. Usunięcie komentarza ochronnego z translations.ts.
  5. Aktualizacja DEC-007 na "Superseded" + nowy DEC dokumentujący odblokowanie.

**Status:** Active (blokada renderowania karty Email do odwołania)

---

## DEC-008 — Model konwersji v2: tylko telefon + WhatsApp

**Kontekst:** Pierwotna wersja landingu (v1) oferowała kilka ścieżek kontaktu: przycisk "Get a Quote" w Hero (link do sekcji Contact), karty Website, Address i Phone w Contact, link do Google Maps, linia kontaktowa w Footerze z adresem/telefonem/website. Użytkownik zgłosił, że dla firmy dostarczającej lód w Miami-Dade (sklepy, bary, eventy) model konwersji powinien być maksymalnie prosty: klient dzwoni albo pisze na WhatsApp. Dodatkowo adres fizyczny (228 NW 32 Ave) i link do Google Maps są zbędne, bo klient nie przyjeżdża po lód — to dostawca dowozi. Website w Contact to link do samej siebie, redundantny.

**Decyzja:** Uproszczony model konwersji — dwa kanały kontaktu: **telefon (tel:) i WhatsApp (wa.me)**. Zmiany w sekcjach:
- **Hero:** usunięcie przycisku "Get a Quote" → zastąpienie przyciskiem "Call us" z ikoną Phone (outline). Usunięcie linku do website pod CTA — zostaje tylko numer telefonu.
- **Contact:** usunięcie kart Website i Address → zostaje pojedyncza karta Phone wyśrodkowana, pod nią dwa duże CTA "WhatsApp Us" i "Call Us" (oba z numerem w tekście przycisku, wariant cta).
- **Footer:** usunięcie linii kontaktowej (adres · tel · website) → zostaje tylko logo, tagline, copyright.

**Alternatywy:**
- **Zachować wszystkie kanały (v1)** — ODRZUCONE. Rozproszony model konwersji obniża skuteczność — użytkownik zalewany opcjami ma paraliż decyzyjny. W B2B w Miami (właściciele sklepów mobilnych, barów) dominujący kanał to komunikatory i rozmowy telefoniczne.
- **Usunąć kartę Phone, zostawić tylko CTA** — ODRZUCONE. Numer w karcie daje użytkownikowi możliwość zapisania/przeczytania na głos — przyciski linkują tylko w dialer.
- **Usunąć telefon, zostać przy WhatsApp only** — ODRZUCONE. Starsze pokolenia właścicieli w Miami nie używają WhatsApp, tel: to nadal podstawowa ścieżka.

**Konsekwencje:**
- **Redukcja UX friction:** jasna hierarchia kanałów kontaktu (2 zamiast 5+).
- **Redundancja numeru telefonu:** widoczny 3 razy — Hero (pod CTA), Contact (karta Phone + tekst CTA Call us), WhatsAppFab (link wa.me z numerem). Świadomie — silne zakotwiczenie numeru to główny cel.
- **Klucze nieużywane pozostają w słowniku** z komentarzami ochronnymi (analogicznie do DEC-006/007):
  - hero.ctaQuote
  - contact.webLabel, contact.webNote
  - contact.addressLabel, contact.addressValue, contact.addressNote
- **Nowe klucze dodane do słownika i TranslationKey:** hero.ctaCall, contact.ctaCall (oba EN+ES).
- **Ikona Phone z lucide-react** dodana (pierwsze użycie).
- **Warunki odblokowania elementów v1:**
  1. Dla website/Address: nowy DEC-XXX aktualizujący DEC-008, z uzasadnieniem biznesowym (np. klient otworzy showroom, doda blog).
  2. Dla Get a Quote: decyzja o wprowadzeniu formularza leadowego, połączona z uchyleniem DEC-004.

**Status:** Active
