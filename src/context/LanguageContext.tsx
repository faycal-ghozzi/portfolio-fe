"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { useParams } from "next/navigation";
import en from "@/locales/en.json";
import fr from "@/locales/fr.json";

type LocaleType = "en" | "fr";

interface LanguageContextType {
  locale: LocaleType;
  setLocale: (locale: LocaleType) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const params = useParams();
  const detectedLocale = (params.lang as LocaleType) || "en"; // Detect lang from URL
  const [locale, setLocale] = useState<LocaleType>(detectedLocale);

  useEffect(() => {
    setLocale(detectedLocale);
  }, [detectedLocale]); // Update locale when URL changes

  const translations = locale === "fr" ? fr : en;
  const t = (key: string) => translations[key] || key;

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
};
