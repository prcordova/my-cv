export type AppLocale = "en" | "pt";

const STORAGE_KEY = "portfolio-lang";

export function isAppLocale(value: string | null | undefined): value is AppLocale {
  return value === "en" || value === "pt";
}

/** Prefer saved choice; otherwise browser language (pt* → pt, else en). */
export function detectInitialLocale(): AppLocale {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (isAppLocale(saved)) return saved;

  const candidates = [navigator.language, ...(navigator.languages ?? [])];

  const prefersPortuguese = candidates.some((lang) =>
    lang.toLowerCase().startsWith("pt"),
  );

  return prefersPortuguese ? "pt" : "en";
}

export function persistLocale(locale: AppLocale) {
  localStorage.setItem(STORAGE_KEY, locale);
}

export function syncDocumentLang(locale: AppLocale) {
  document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";
}
