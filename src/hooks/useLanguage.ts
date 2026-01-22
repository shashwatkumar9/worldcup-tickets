"use client"

import { usePathname } from "next/navigation"
import { getLanguageFromPath, getLanguageData, type LanguageCode } from "@/lib/i18n"

export function useLanguage() {
  const pathname = usePathname()
  const currentLang = getLanguageFromPath(pathname)
  const langData = getLanguageData(currentLang)

  return {
    currentLang,
    langData,
    isRTL: langData.dir === "rtl",
  }
}
