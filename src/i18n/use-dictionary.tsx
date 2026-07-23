"use client";

import { usePathname } from "next/navigation";
import { useMemo, useEffect } from "react";
import pt from "./pt.json";
import en from "./en.json";

const dictionaries = {
  pt,
  en,
};

export function useDictionary() {
  const pathname = usePathname();

  const lang = useMemo(() => {
    return pathname.startsWith("/en") ? "en" : "pt";
  }, [pathname]);

  return dictionaries[lang as keyof typeof dictionaries] as typeof pt;
}

/**
 * Hook para definir document.title em Client Components.
 * Server Components devem usar a API `metadata` export.
 */
const pageTitles: Record<string, Record<string, string>> = {
  pt: {
    "/": "Silas Vasques — AI Design Engineer & Product Designer",
    "/projects": "Projetos | Silas Vasques",
    "/about": "Sobre | Silas Vasques",
    "/experience": "Experiência | Silas Vasques",
    "/skills": "Skills | Silas Vasques",
  },
  en: {
    "/en": "Silas Vasques — AI Design Engineer & Product Designer",
    "/en/projects": "Projects | Silas Vasques",
    "/en/about": "About | Silas Vasques",
    "/en/experience": "Experience | Silas Vasques",
    "/en/skills": "Skills | Silas Vasques",
  },
};

export function usePageTitle(customTitle?: string) {
  const pathname = usePathname();
  const lang = pathname.startsWith("/en") ? "en" : "pt";

  useEffect(() => {
    if (customTitle) {
      document.title = `${customTitle} | Silas Vasques`;
      return;
    }
    const titles = pageTitles[lang];
    // Try exact match first, then prefix match
    const title = titles[pathname] || titles[Object.keys(titles).find(k => pathname.startsWith(k)) || ""];
    if (title) {
      document.title = title;
    }
  }, [pathname, lang, customTitle]);
}