"use client"

import Link, { LinkProps } from "next/link"
import { useLanguage } from "@/hooks/useLanguage"
import { addLanguageToPath } from "@/lib/i18n"
import { forwardRef } from "react"

type LanguageLinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
  LinkProps & {
    children?: React.ReactNode
  }

export const LanguageLink = forwardRef<HTMLAnchorElement, LanguageLinkProps>(
  ({ href, ...props }, ref) => {
    const { currentLang } = useLanguage()

    // Handle string href
    if (typeof href === "string") {
      // Don't modify external links
      if (href.startsWith("http://") || href.startsWith("https://") || href.startsWith("//")) {
        return <Link ref={ref} href={href} {...props} />
      }

      // Don't modify anchor links
      if (href.startsWith("#")) {
        return <Link ref={ref} href={href} {...props} />
      }

      // Add language prefix to internal links
      const localizedHref = addLanguageToPath(href, currentLang)
      return <Link ref={ref} href={localizedHref} {...props} />
    }

    // If href is an object, just pass it through (complex Next.js routing)
    return <Link ref={ref} href={href} {...props} />
  }
)

LanguageLink.displayName = "LanguageLink"
