import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import kaa from "@/app/i18n/kaa";
import uz from "@/app/i18n/uz";
import ru from "@/app/i18n/ru";

const STORAGE_KEY = "grand-education-language";

const savedLanguage = localStorage.getItem(STORAGE_KEY) || "kaa";

i18n.use(initReactI18next).init({
  resources: {
    kaa,
    uz,
    ru
  },
  lng: savedLanguage,
  fallbackLng: "kaa",
  interpolation: {
    escapeValue: false
  }
});

export function setAppLanguage(language: string) {
  localStorage.setItem(STORAGE_KEY, language);
  i18n.changeLanguage(language);
}

export default i18n;