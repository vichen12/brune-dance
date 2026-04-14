"use client";

import { useState, useEffect } from "react";
import { I18nContext, translations, type Lang } from "@/lib/i18n";

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");

  useEffect(() => {
    const stored = localStorage.getItem("brunelaLang") as Lang | null;
    if (stored && ["es", "en", "fr"].includes(stored)) {
      setLangState(stored);
    }
  }, []);

  function setLang(l: Lang) {
    setLangState(l);
    localStorage.setItem("brunelaLang", l);
    document.documentElement.lang = l;
  }

  function t(key: keyof typeof translations.es): string | string[] {
    const val = translations[lang]?.[key];
    if (val === undefined) return key;
    if (Array.isArray(val)) return val as string[];
    if (typeof val === "string") return val;
    // readonly tuple — cast to mutable string[]
    return Array.from(val as readonly string[]);
  }

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}
