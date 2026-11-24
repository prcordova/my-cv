import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { detectInitialLocale, syncDocumentLang } from "@/lib/locale";
import { en } from "./locales/en";
import { pt } from "./locales/pt";

const initialLocale = detectInitialLocale();

void i18n.use(initReactI18next).init({
  resources: {
    en,
    pt,
  },
  lng: initialLocale,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

syncDocumentLang(initialLocale);

i18n.on("languageChanged", (language) => {
  syncDocumentLang(language.startsWith("pt") ? "pt" : "en");
});

export default i18n;
