import { MetadataRoute } from "next"
import { createClient } from "@/lib/supabase/server"

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://worldcup-tickets.net"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const supabase = await createClient()
  const entries: MetadataRoute.Sitemap = []

  // Static pages
  const staticPages = [
    { path: "/", priority: 1.0, changeFrequency: "daily" as const },
    { path: "/competitions", priority: 0.9, changeFrequency: "daily" as const },
    { path: "/teams", priority: 0.9, changeFrequency: "daily" as const },
    { path: "/fixtures", priority: 0.9, changeFrequency: "daily" as const },
    { path: "/venues", priority: 0.8, changeFrequency: "weekly" as const },
  ]

  staticPages.forEach((page) => {
    entries.push({
      url: `${BASE_URL}${page.path}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })
  })

  // Competitions
  const { data: competitions } = await supabase
    .from("competitions")
    .select("slug, updated_at")
    .eq("status", "published")

  if (competitions) {
    competitions.forEach((comp: any) => {
      entries.push({
        url: `${BASE_URL}/${comp.slug}`,
        lastModified: new Date(comp.updated_at),
        changeFrequency: "weekly",
        priority: 0.9,
      })
    })
  }

  // Teams
  const { data: teams } = await supabase
    .from("teams")
    .select("slug, updated_at")
    .eq("status", "published")

  if (teams) {
    teams.forEach((team: any) => {
      entries.push({
        url: `${BASE_URL}/${team.slug}`,
        lastModified: new Date(team.updated_at),
        changeFrequency: "weekly",
        priority: 0.8,
      })
    })
  }

  // Fixtures - get all and filter in JS since .in() is not available
  const { data: allFixtures } = await supabase
    .from("fixtures")
    .select("slug, updated_at, status")

  const fixtures = allFixtures?.filter((f: any) => f.status === "scheduled" || f.status === "live")

  if (fixtures) {
    fixtures.forEach((fixture: any) => {
      entries.push({
        url: `${BASE_URL}/${fixture.slug}`,
        lastModified: new Date(fixture.updated_at),
        changeFrequency: "daily",
        priority: 0.85,
      })
    })
  }

  // Venues
  const { data: venues } = await supabase
    .from("venues")
    .select("slug, updated_at")
    .eq("status", "published")

  if (venues) {
    venues.forEach((venue: any) => {
      entries.push({
        url: `${BASE_URL}/${venue.slug}`,
        lastModified: new Date(venue.updated_at),
        changeFrequency: "monthly",
        priority: 0.7,
      })
    })
  }

  return entries
}
