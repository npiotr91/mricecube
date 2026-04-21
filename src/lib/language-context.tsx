"use client";

import {
  createContext,
  useCallback,
  useContext,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import type { Language, TranslationKey } from "@/types/language";
import { translations } from "@/lib/translations";

const STORAGE_KEY = "mricecube-lang";
const DEFAULT_LANGUAGE: Language = "en";

// Walidacja wartości z localStorage — ochrona przed ręcznym wpisaniem śmieci.
function isValidLanguage(value: unknown): value is Language {
  return value === "en" || value === "es";
}

// Własny pub/sub: event `storage` w przeglądarce firuje TYLKO do innych kart,
// a my chcemy też powiadomić komponenty w tej samej karcie po setLanguage().
// Set<() => void> trzyma wszystkie aktywne callbacki React-a.
const listeners = new Set<() => void>();

function emitChange() {
  listeners.forEach((listener) => listener());
}

// subscribe: React wywoła to raz przy montażu komponentu korzystającego
// z useSyncExternalStore, zwrotka to cleanup (wywoływane przy odmontowaniu).
function subscribe(onStoreChange: () => void): () => void {
  listeners.add(onStoreChange);

  // Słuchamy też eventu `storage` — powiadomienia ze zmian w INNYCH kartach.
  const handleStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) {
      onStoreChange();
    }
  };
  window.addEventListener("storage", handleStorage);

  return () => {
    listeners.delete(onStoreChange);
    window.removeEventListener("storage", handleStorage);
  };
}

// getSnapshot: React wywoła to przy każdym renderze, żeby sprawdzić,
// czy wartość się zmieniła. MUSI być synchroniczne i zwracać referencyjnie
// stabilną wartość (stringi "en" / "es" spełniają ten warunek z natury).
function getSnapshot(): Language {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return isValidLanguage(stored) ? stored : DEFAULT_LANGUAGE;
  } catch {
    // localStorage niedostępny (private mode, storage disabled) — fallback.
    return DEFAULT_LANGUAGE;
  }
}

// getServerSnapshot: używane podczas SSR, gdy window nie istnieje.
// Zwracamy język domyślny, żeby pierwszy render HTML był deterministyczny.
function getServerSnapshot(): Language {
  return DEFAULT_LANGUAGE;
}

type LanguageContextValue = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // useSyncExternalStore zapewnia:
  // - deterministyczny pierwszy render serwer/klient (brak hydration mismatch)
  // - automatyczne re-rendery gdy localStorage się zmieni (dzięki subscribe)
  // - brak setState w useEffect (nie łamie react-hooks/set-state-in-effect)
  const language = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const setLanguage = useCallback((lang: Language) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Zapis się nie udał — komponenty nadal dostaną nową wartość
      // przez emitChange, ale nie będzie persystowana między sesjami.
    }
    // Ręczne powiadomienie subscriberów w TEJ karcie (event `storage`
    // natywnie firuje tylko do innych kart).
    emitChange();
  }, []);

  const t = useCallback(
    (key: TranslationKey) => translations[language][key],
    [language],
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within <LanguageProvider>");
  }
  return ctx;
}
