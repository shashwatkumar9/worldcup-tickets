import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

interface SearchResult {
  type: "competition" | "team" | "fixture" | "venue"
  id: string
  name: string
  slug: string
  description?: string
  meta?: Record<string, unknown>
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get("q")
    const type = searchParams.get("type") // Optional: filter by entity type
    const limit = parseInt(searchParams.get("limit") || "10")
    const lang = searchParams.get("lang") || "en"

    if (!query || query.length < 2) {
      return NextResponse.json({
        results: [],
        total: 0,
      })
    }

    const supabase = await createClient()
    const results: SearchResult[] = []
    const searchTerm = `%${query.toLowerCase()}%`

    // Search competitions
    if (!type || type === "competition") {
      const { data: competitions, error: compError } = await supabase
        .from("competitions")
        .select(`
          id,
          slug,
          sport_type,
          competition_type,
          start_date,
          end_date,
          translations!inner(name, description)
        `)
        .eq("status", "published")
        .eq("translations.language", lang)
        .ilike("translations.name", searchTerm)
        .limit(limit)

      if (!compError && competitions) {
        competitions.forEach((comp: any) => {
          const translation = Array.isArray(comp.translations)
            ? comp.translations[0]
            : comp.translations

          results.push({
            type: "competition",
            id: comp.id,
            name: translation?.name || comp.slug,
            slug: comp.slug,
            description: translation?.description,
            meta: {
              sport_type: comp.sport_type,
              competition_type: comp.competition_type,
              start_date: comp.start_date,
              end_date: comp.end_date,
            },
          })
        })
      }
    }

    // Search teams
    if (!type || type === "team") {
      const { data: teams, error: teamError } = await supabase
        .from("teams")
        .select(`
          id,
          slug,
          team_type,
          sport_type,
          country_code,
          translations!inner(name, description)
        `)
        .eq("status", "published")
        .eq("translations.language", lang)
        .ilike("translations.name", searchTerm)
        .limit(limit)

      if (!teamError && teams) {
        teams.forEach((team: any) => {
          const translation = Array.isArray(team.translations)
            ? team.translations[0]
            : team.translations

          results.push({
            type: "team",
            id: team.id,
            name: translation?.name || team.slug,
            slug: team.slug,
            description: translation?.description,
            meta: {
              team_type: team.team_type,
              sport_type: team.sport_type,
              country_code: team.country_code,
            },
          })
        })
      }
    }

    // Search fixtures
    if (!type || type === "fixture") {
      const { data: fixtures, error: fixtureError } = await supabase
        .from("fixtures")
        .select(`
          id,
          slug,
          fixture_type,
          sport_type,
          date,
          time,
          translations!inner(name, description)
        `)
        .eq("translations.language", lang)
        .ilike("translations.name", searchTerm)
        .limit(limit)

      if (!fixtureError && fixtures) {
        fixtures.forEach((fixture: any) => {
          const translation = Array.isArray(fixture.translations)
            ? fixture.translations[0]
            : fixture.translations

          results.push({
            type: "fixture",
            id: fixture.id,
            name: translation?.name || fixture.slug,
            slug: fixture.slug,
            description: translation?.description,
            meta: {
              fixture_type: fixture.fixture_type,
              sport_type: fixture.sport_type,
              date: fixture.date,
              time: fixture.time,
            },
          })
        })
      }
    }

    // Search venues
    if (!type || type === "venue") {
      const { data: venues, error: venueError } = await supabase
        .from("venues")
        .select(`
          id,
          slug,
          name,
          city,
          country,
          capacity,
          venue_type,
          translations(name, description)
        `)
        .eq("status", "published")
        .or(`name.ilike.${searchTerm},city.ilike.${searchTerm}`)
        .limit(limit)

      if (!venueError && venues) {
        venues.forEach((venue: any) => {
          const translation = Array.isArray(venue.translations)
            ? venue.translations.find((t: any) => t.language === lang) || venue.translations[0]
            : venue.translations

          results.push({
            type: "venue",
            id: venue.id,
            name: translation?.name || venue.name,
            slug: venue.slug,
            description: `${venue.city}, ${venue.country}`,
            meta: {
              venue_type: venue.venue_type,
              city: venue.city,
              country: venue.country,
              capacity: venue.capacity,
            },
          })
        })
      }
    }

    // Sort results by relevance (exact matches first)
    results.sort((a, b) => {
      const aExact = a.name.toLowerCase().includes(query.toLowerCase()) ? 0 : 1
      const bExact = b.name.toLowerCase().includes(query.toLowerCase()) ? 0 : 1
      return aExact - bExact
    })

    return NextResponse.json({
      results: results.slice(0, limit),
      total: results.length,
      query,
    })
  } catch (error) {
    console.error("Search error:", error)
    return NextResponse.json(
      { error: "Search failed", results: [], total: 0 },
      { status: 500 }
    )
  }
}
