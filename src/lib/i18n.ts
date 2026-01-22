export const languages = [
  { code: "en", name: "English", flag: "🇬🇧", dir: "ltr" },
  { code: "de", name: "Deutsch", flag: "🇩🇪", dir: "ltr" },
  { code: "fr", name: "Français", flag: "🇫🇷", dir: "ltr" },
  { code: "es", name: "Español", flag: "🇪🇸", dir: "ltr" },
  { code: "it", name: "Italiano", flag: "🇮🇹", dir: "ltr" },
  { code: "ar", name: "العربية", flag: "🇸🇦", dir: "rtl" },
  { code: "pt", name: "Português", flag: "🇵🇹", dir: "ltr" },
  { code: "zh", name: "中文", flag: "🇨🇳", dir: "ltr" },
  { code: "ja", name: "日本語", flag: "🇯🇵", dir: "ltr" },
] as const

export type LanguageCode = typeof languages[number]["code"]

export const defaultLanguage: LanguageCode = "en"

export function getLanguageFromPath(pathname: string): LanguageCode {
  const segments = pathname.split("/").filter(Boolean)
  const firstSegment = segments[0]

  if (languages.some(lang => lang.code === firstSegment)) {
    return firstSegment as LanguageCode
  }

  return defaultLanguage
}

export function removeLanguageFromPath(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean)
  const firstSegment = segments[0]

  if (languages.some(lang => lang.code === firstSegment)) {
    return "/" + segments.slice(1).join("/")
  }

  return pathname
}

export function addLanguageToPath(pathname: string, lang: LanguageCode): string {
  // Remove any existing language prefix first
  const cleanPath = removeLanguageFromPath(pathname)

  // If default language, don't add prefix
  if (lang === defaultLanguage) {
    return cleanPath || "/"
  }

  // Add language prefix
  return `/${lang}${cleanPath}` || `/${lang}`
}

export function getLanguageData(code: LanguageCode) {
  return languages.find(lang => lang.code === code) || languages[0]
}
