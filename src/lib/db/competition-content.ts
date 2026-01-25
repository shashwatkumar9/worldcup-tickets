import { getDb } from './sqlite'

export interface Competition {
  id: number
  slug: string
  name: string
  sport_type: string
  competition_type: string
  start_date: string
  end_date: string
  host_countries: string
  season: string
  status: string
  is_featured: number
  meta_title?: string
  meta_description?: string
  meta_keywords?: string
}

export interface CompetitionContent {
  id: number
  competition_id: number
  section_type: string
  section_key: string
  section_title: string | null
  content_text: string | null
  content_json: string | null
  display_order: number
  is_active: boolean
}

export interface AffiliateLink {
  id: string
  entity_type: string
  entity_id: string
  page_slug: string | null
  provider: string
  affiliate_url: string | null
  button_text: string
  display_order: number
  is_active: number
  competition_id: number | null
}

export function getCompetitionBySlug(slug: string): Competition | null {
  const db = getDb()

  const competition = db.prepare(`
    SELECT * FROM competitions WHERE slug = ?
  `).get(slug) as Competition | undefined

  return competition || null
}

export function getCompetitionContent(competitionId: number): CompetitionContent[] {
  const db = getDb()

  const content = db.prepare(`
    SELECT * FROM competition_content
    WHERE competition_id = ? AND is_active = 1
    ORDER BY display_order ASC
  `).all(competitionId) as CompetitionContent[]

  return content
}

export function getCompetitionAffiliateLinks(competitionId: number): AffiliateLink[] {
  const db = getDb()

  const links = db.prepare(`
    SELECT * FROM affiliate_links
    WHERE competition_id = ? AND is_active = 1
    ORDER BY display_order ASC
  `).all(competitionId) as AffiliateLink[]

  return links
}

export interface CompetitionWithContent {
  competition: Competition
  content: CompetitionContent[]
  affiliateLinks: AffiliateLink[]
}

export function getCompetitionWithContentBySlug(slug: string): CompetitionWithContent | null {
  const competition = getCompetitionBySlug(slug)

  if (!competition) {
    return null
  }

  const content = getCompetitionContent(competition.id)
  const affiliateLinks = getCompetitionAffiliateLinks(competition.id)

  return {
    competition,
    content,
    affiliateLinks
  }
}
