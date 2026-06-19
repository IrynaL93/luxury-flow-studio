import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import type { Lang } from "@/i18n/translations";

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const Ctx = createContext<LangCtx>({ lang: "ua", setLang: () => {} });

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "ua";
    const saved = localStorage.getItem("lbn-lang");
    return saved === "en" || saved === "ua" ? saved : "ua";
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("lbn-lang", l);
    document.documentElement.lang = l === "ua" ? "uk" : "en";
  };

  useEffect(() => {
    document.documentElement.lang = lang === "ua" ? "uk" : "en";
  }, [lang]);

  return <Ctx.Provider value={{ lang, setLang }}>{children}</Ctx.Provider>;
};

export const useLang = () => useContext(Ctx);