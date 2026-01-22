"use client"

import { useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { ChevronDown } from "lucide-react"
import { languages, addLanguageToPath, removeLanguageFromPath, type LanguageCode } from "@/lib/i18n"
import { useLanguage } from "@/hooks/useLanguage"

interface LanguageSwitcherProps {
  variant?: "header" | "footer"
  className?: string
}

export function LanguageSwitcher({ variant = "header", className = "" }: LanguageSwitcherProps) {
  const router = useRouter()
  const pathname = usePathname()
  const { currentLang, langData } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const handleLanguageChange = (newLang: LanguageCode) => {
    // Get the current path without language prefix
    const cleanPath = removeLanguageFromPath(pathname)

    // Add new language prefix
    const newPath = addLanguageToPath(cleanPath, newLang)

    // Navigate to the new path
    router.push(newPath)
    setIsOpen(false)
  }

  if (variant === "footer") {
    return (
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center gap-2 rounded px-3 py-2 text-sm hover:bg-slate-800 ${className}`}
        >
          <span className="text-lg">{langData.flag}</span>
          <span>{langData.name}</span>
          <ChevronDown className="h-4 w-4" />
        </button>
        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            <div className="absolute bottom-full left-0 mb-2 w-48 rounded-lg border bg-slate-800 py-1 shadow-lg z-50">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`flex w-full items-center gap-2 px-4 py-2 text-sm hover:bg-slate-700 ${
                    lang.code === currentLang ? "bg-slate-700 text-white" : "text-slate-300"
                  }`}
                >
                  <span className="text-lg">{lang.flag}</span>
                  <span>{lang.name}</span>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    )
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1 rounded px-2 py-1 text-sm hover:bg-slate-800 ${className}`}
      >
        <span>{langData.flag}</span>
        <span className="hidden sm:inline">{langData.code.toUpperCase()}</span>
        <ChevronDown className="h-3 w-3" />
      </button>
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-full mt-1 w-40 rounded-lg border bg-white py-1 shadow-lg z-50">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-slate-50 ${
                  lang.code === currentLang ? "bg-slate-100 text-slate-900 font-medium" : "text-slate-700"
                }`}
              >
                <span>{lang.flag}</span>
                <span>{lang.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
