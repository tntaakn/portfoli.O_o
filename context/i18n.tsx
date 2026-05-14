"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import en from "@/locales/en.json";
import vi from "@/locales/vi.json";

type Language = "en" | "vi";

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string) => string;
}

const translations: Record<Language, any> = {
  en,
  vi,
};

// Default context value for SSR/SSG
const defaultContextValue: I18nContextType = {
  language: "en",
  setLanguage: () => {},
  t: (path: string): string => {
    const keys = path.split(".");
    let value: any = translations["en"];

    for (const key of keys) {
      value = value?.[key];
    }

    return value ?? path;
  },
};

const I18nContext = createContext<I18nContextType>(defaultContextValue);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem("language") as Language | null;
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "vi")) {
      setLanguageState(savedLanguage);
    } else {
      // Detect browser language
      const browserLang = navigator.language.startsWith("vi") ? "vi" : "en";
      setLanguageState(browserLang);
    }
    setIsReady(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("language", lang);
    }
  };

  const t = (path: string): string => {
    const keys = path.split(".");
    let value: any = translations[language];

    for (const key of keys) {
      value = value?.[key];
    }

    return value ?? path;
  };

  const value: I18nContextType = { language, setLanguage, t };

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  return context;
}
