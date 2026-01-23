import { createClient } from "@/lib/supabase/server"

/**
 * Fetches page content from the database
 * @param pageSlug - The page slug (e.g., "fifa-world-cup-2026-tickets", "teams/usa-world-cup-2026-tickets")
 * @param language - Language code (default: "en")
 * @returns Page content or null if not found
 */
export async function getPageContent(pageSlug: string, language: string = "en") {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from("page_content")
    .select("*")
    .eq("entity_type", "page")
    .eq("page_slug", pageSlug)
    .eq("language", language)
    .eq("is_complete", true) // Only fetch complete content
    .single()

  if (error) {
    console.error(`Error fetching page content for ${pageSlug}:`, error)
    return null
  }

  return data
}

/**
 * Client-side version for fetching page content
 */
export async function getPageContentClient(pageSlug: string, language: string = "en") {
  const { createClient } = await import("@/lib/supabase/client")
  const supabase = createClient()

  const { data, error } = await supabase
    .from("page_content")
    .select("*")
    .eq("entity_type", "page")
    .eq("page_slug", pageSlug)
    .eq("language", language)
    .eq("is_complete", true)
    .single()

  if (error) {
    console.error(`Error fetching page content for ${pageSlug}:`, error)
    return null
  }

  return data
}

/**
 * Type definition for page content
 */
export interface PageContent {
  id: string
  entity_type: string
  page_slug: string
  language: string
  content_html: string
  sections?: any
  meta_title?: string
  meta_description?: string
  faqs?: any
  is_complete: boolean
  created_at: string
  updated_at: string
}
