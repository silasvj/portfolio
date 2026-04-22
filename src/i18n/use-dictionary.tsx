"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
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