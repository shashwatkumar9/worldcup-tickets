"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import { useParams, useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Save,
  Eye,
  ExternalLink,
  Plus,
  Trash2,
  ArrowLeft,
  Globe,
  FileText,
  Link as LinkIcon,
  Trophy,
  Sparkles,
  MapPin
} from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

const RichTextEditor = dynamic(
  () => import("@/components/admin/RichTextEditor").then(mod => ({ default: mod.RichTextEditor })),
  { ssr: false, loading: () => <div className="p-4 border rounded-md bg-slate-50">Loading editor...</div> }
)

interface CompetitionContent {
  id: number
  competition_id: number
  section_type: string
  section_key: string
  section_title: string
  content_text: string
  content_json: any
  display_order: number
  is_active: boolean
}

interface AffiliateLink {
  id: string
  entity_type: string
  entity_id: string
  page_slug: string
  provider: string
  affiliate_url: string
  button_text: string
  display_order: number
  is_active: boolean
  competition_id: number
}

interface Competition {
  id: number
  name: string
  slug: string
  description: string
  start_date: string
  end_date: string
  is_active: boolean
}

export default function CompetitionEditPage() {
  const params = useParams()
  const router = useRouter()
  const { toast } = useToast()
  const competitionSlug = params.slug as string

  const [competition, setCompetition] = useState<Competition | null>(null)
  const [contentSections, setContentSections] = useState<CompetitionContent[]>([])
  const [affiliateLinks, setAffiliateLinks] = useState<AffiliateLink[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  // SEO Meta fields
  const [metaTitle, setMetaTitle] = useState("")
  const [metaDescription, setMetaDescription] = useState("")
  const [metaKeywords, setMetaKeywords] = useState("")

  // Hero Section state
  const [heroData, setHeroData] = useState<any>(null)

  // Stats Section state
  const [statsData, setStatsData] = useState<any>(null)

  // SEO Content state
  const [seoContent, setSeoContent] = useState("")
  const [seoTitle, setSeoTitle] = useState("")

  // Quick Links state
  const [quickLinksData, setQuickLinksData] = useState<any>(null)

  // Tournament Info state
  const [tournamentInfoData, setTournamentInfoData] = useState<any>(null)

  // Venues state
  const [venuesData, setVenuesData] = useState<any>(null)

  // City Guides state
  const [cityGuidesData, setCityGuidesData] = useState<any>(null)

  // Groups state
  const [groupsData, setGroupsData] = useState<any>(null)

  useEffect(() => {
    fetchCompetitionData()
  }, [competitionSlug])

  const fetchCompetitionData = async () => {
    try {
      setLoading(true)

      // Fetch competition details
      const compRes = await fetch("/api/db", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: "SELECT * FROM competitions WHERE slug = ?",
          params: [competitionSlug],
        }),
      })
      const compData = await compRes.json()

      if (compData.results?.[0]) {
        setCompetition(compData.results[0])
        setMetaTitle(compData.results[0].meta_title || "")
        setMetaDescription(compData.results[0].meta_description || "")
        setMetaKeywords(compData.results[0].meta_keywords || "")
      }

      // Fetch content sections (only if competition was found)
      if (compData.results?.[0]?.id) {
        const sectionsRes = await fetch("/api/db", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: "SELECT * FROM competition_content WHERE competition_id = ? ORDER BY display_order",
            params: [compData.results[0].id],
          }),
        })
        const sectionsData = await sectionsRes.json()
        const sections = sectionsData.results || []
        setContentSections(sections)

        // Parse hero section
        const hero = sections.find((s: any) => s.section_key === 'hero_section')
        if (hero?.content_json) {
          setHeroData(JSON.parse(hero.content_json))
        }

        // Parse stats section
        const stats = sections.find((s: any) => s.section_key === 'tournament_stats')
        if (stats?.content_json) {
          setStatsData(JSON.parse(stats.content_json))
        }

        // Parse SEO content
        const seo = sections.find((s: any) => s.section_key === 'seo_article')
        if (seo) {
          setSeoContent(seo.content_text || '')
          setSeoTitle(seo.section_title || '')
        }

        // Parse Quick Links
        const quickLinks = sections.find((s: any) => s.section_key === 'sidebar_quick_links')
        if (quickLinks?.content_json) {
          setQuickLinksData(JSON.parse(quickLinks.content_json))
        }

        // Parse Tournament Info
        const tournamentInfo = sections.find((s: any) => s.section_key === 'sidebar_tournament_info')
        if (tournamentInfo?.content_json) {
          setTournamentInfoData(JSON.parse(tournamentInfo.content_json))
        }

        // Parse Venues
        const venues = sections.find((s: any) => s.section_key === 'host_venues')
        if (venues?.content_json) {
          setVenuesData(JSON.parse(venues.content_json))
        }

        // Parse City Guides
        const cityGuides = sections.find((s: any) => s.section_key === 'travel_guides')
        if (cityGuides?.content_json) {
          setCityGuidesData(JSON.parse(cityGuides.content_json))
        }

        // Parse Groups
        const groups = sections.find((s: any) => s.section_key === 'tournament_groups')
        if (groups?.content_json) {
          setGroupsData(JSON.parse(groups.content_json))
        }

        // Fetch affiliate links
        const linksRes = await fetch("/api/db", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: "SELECT * FROM affiliate_links WHERE competition_id = ? ORDER BY display_order",
            params: [compData.results[0].id],
          }),
        })
        const linksData = await linksRes.json()
        setAffiliateLinks(linksData.results || [])
      }
    } catch (error) {
      console.error("Error fetching competition data:", error)
      toast({
        title: "Error",
        description: "Failed to load competition data",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const saveCompetition = async () => {
    if (!competition?.id) return

    try {
      setSaving(true)

      // Update competition meta info
      await fetch("/api/db", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: `UPDATE competitions SET
            meta_title = ?,
            meta_description = ?,
            meta_keywords = ?,
            updated_at = CURRENT_TIMESTAMP
            WHERE id = ?`,
          params: [metaTitle, metaDescription, metaKeywords, competition.id],
        }),
      })

      toast({
        title: "Success",
        description: "Competition updated successfully",
      })
    } catch (error) {
      console.error("Error saving competition:", error)
      toast({
        title: "Error",
        description: "Failed to save competition",
        variant: "destructive",
      })
    } finally {
      setSaving(false)
    }
  }

  const addContentSection = async () => {
    if (!competition?.id) return

    const newSection: Partial<CompetitionContent> = {
      competition_id: Number(competition.id),
      section_type: "text",
      section_key: `section_${Date.now()}`,
      section_title: "New Section",
      content_text: "",
      content_json: null,
      display_order: contentSections.length,
      is_active: true,
    }

    try {
      const res = await fetch("/api/db", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: `INSERT INTO competition_content
            (competition_id, section_type, section_key, section_title, content_text, content_json, display_order, is_active)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
          params: [
            newSection.competition_id,
            newSection.section_type,
            newSection.section_key,
            newSection.section_title,
            newSection.content_text,
            JSON.stringify(newSection.content_json),
            newSection.display_order,
            newSection.is_active ? 1 : 0,
          ],
        }),
      })

      fetchCompetitionData()
      toast({
        title: "Success",
        description: "Content section added",
      })
    } catch (error) {
      console.error("Error adding content section:", error)
      toast({
        title: "Error",
        description: "Failed to add content section",
        variant: "destructive",
      })
    }
  }

  const updateContentSection = async (section: CompetitionContent) => {
    try {
      await fetch("/api/db", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: `UPDATE competition_content SET
            section_title = ?,
            content_text = ?,
            content_json = ?,
            is_active = ?,
            updated_at = CURRENT_TIMESTAMP
            WHERE id = ?`,
          params: [
            section.section_title,
            section.content_text,
            JSON.stringify(section.content_json),
            section.is_active ? 1 : 0,
            section.id,
          ],
        }),
      })

      toast({
        title: "Success",
        description: "Section updated",
      })
    } catch (error) {
      console.error("Error updating section:", error)
      toast({
        title: "Error",
        description: "Failed to update section",
        variant: "destructive",
      })
    }
  }

  const deleteContentSection = async (id: number) => {
    if (!confirm("Are you sure you want to delete this section?")) return

    try {
      await fetch("/api/db", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: "DELETE FROM competition_content WHERE id = ?",
          params: [id],
        }),
      })

      fetchCompetitionData()
      toast({
        title: "Success",
        description: "Section deleted",
      })
    } catch (error) {
      console.error("Error deleting section:", error)
      toast({
        title: "Error",
        description: "Failed to delete section",
        variant: "destructive",
      })
    }
  }

  const saveHeroSection = async () => {
    const heroSection = contentSections.find(s => s.section_key === 'hero_section')
    if (!heroSection || !heroData) return

    try {
      await fetch("/api/db", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: `UPDATE competition_content SET
            content_json = ?,
            updated_at = CURRENT_TIMESTAMP
            WHERE id = ?`,
          params: [JSON.stringify(heroData), heroSection.id],
        }),
      })

      toast({
        title: "Success",
        description: "Hero section updated",
      })
    } catch (error) {
      console.error("Error saving hero section:", error)
      toast({
        title: "Error",
        description: "Failed to save hero section",
        variant: "destructive",
      })
    }
  }

  const saveStatsSection = async () => {
    const statsSection = contentSections.find(s => s.section_key === 'tournament_stats')
    if (!statsSection || !statsData) return

    try {
      await fetch("/api/db", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: `UPDATE competition_content SET
            content_json = ?,
            updated_at = CURRENT_TIMESTAMP
            WHERE id = ?`,
          params: [JSON.stringify(statsData), statsSection.id],
        }),
      })

      toast({
        title: "Success",
        description: "Statistics section updated",
      })
    } catch (error) {
      console.error("Error saving stats section:", error)
      toast({
        title: "Error",
        description: "Failed to save statistics section",
        variant: "destructive",
      })
    }
  }

  const saveSeoContent = async () => {
    const seoSection = contentSections.find(s => s.section_key === 'seo_article')
    if (!seoSection) return

    try {
      await fetch("/api/db", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: `UPDATE competition_content SET
            section_title = ?,
            content_text = ?,
            updated_at = CURRENT_TIMESTAMP
            WHERE id = ?`,
          params: [seoTitle, seoContent, seoSection.id],
        }),
      })

      toast({
        title: "Success",
        description: "SEO content updated",
      })
    } catch (error) {
      console.error("Error saving SEO content:", error)
      toast({
        title: "Error",
        description: "Failed to save SEO content",
        variant: "destructive",
      })
    }
  }

  const saveQuickLinks = async () => {
    const quickLinksSection = contentSections.find(s => s.section_key === 'sidebar_quick_links')
    if (!quickLinksSection || !quickLinksData) return

    try {
      await fetch("/api/db", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: `UPDATE competition_content SET
            content_json = ?,
            updated_at = CURRENT_TIMESTAMP
            WHERE id = ?`,
          params: [JSON.stringify(quickLinksData), quickLinksSection.id],
        }),
      })

      toast({
        title: "Success",
        description: "Quick Links updated",
      })
    } catch (error) {
      console.error("Error saving Quick Links:", error)
      toast({
        title: "Error",
        description: "Failed to save Quick Links",
        variant: "destructive",
      })
    }
  }

  const saveTournamentInfo = async () => {
    const tournamentInfoSection = contentSections.find(s => s.section_key === 'sidebar_tournament_info')
    if (!tournamentInfoSection || !tournamentInfoData) return

    try {
      await fetch("/api/db", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: `UPDATE competition_content SET
            content_json = ?,
            updated_at = CURRENT_TIMESTAMP
            WHERE id = ?`,
          params: [JSON.stringify(tournamentInfoData), tournamentInfoSection.id],
        }),
      })

      toast({
        title: "Success",
        description: "Tournament Info updated",
      })
    } catch (error) {
      console.error("Error saving Tournament Info:", error)
      toast({
        title: "Error",
        description: "Failed to save Tournament Info",
        variant: "destructive",
      })
    }
  }

  const saveVenues = async () => {
    const venuesSection = contentSections.find(s => s.section_key === 'host_venues')
    if (!venuesSection || !venuesData) return

    try {
      await fetch("/api/db", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: `UPDATE competition_content SET
            content_json = ?,
            updated_at = CURRENT_TIMESTAMP
            WHERE id = ?`,
          params: [JSON.stringify(venuesData), venuesSection.id],
        }),
      })

      toast({
        title: "Success",
        description: "Venues updated",
      })
    } catch (error) {
      console.error("Error saving venues:", error)
      toast({
        title: "Error",
        description: "Failed to save venues",
        variant: "destructive",
      })
    }
  }

  const saveCityGuides = async () => {
    const cityGuidesSection = contentSections.find(s => s.section_key === 'travel_guides')
    if (!cityGuidesSection || !cityGuidesData) return

    try {
      await fetch("/api/db", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: `UPDATE competition_content SET
            content_json = ?,
            updated_at = CURRENT_TIMESTAMP
            WHERE id = ?`,
          params: [JSON.stringify(cityGuidesData), cityGuidesSection.id],
        }),
      })

      toast({
        title: "Success",
        description: "City Guides updated",
      })
    } catch (error) {
      console.error("Error saving city guides:", error)
      toast({
        title: "Error",
        description: "Failed to save city guides",
        variant: "destructive",
      })
    }
  }

  const saveGroups = async () => {
    const groupsSection = contentSections.find(s => s.section_key === 'tournament_groups')
    if (!groupsSection || !groupsData) return

    try {
      await fetch("/api/db", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: `UPDATE competition_content SET
            content_json = ?,
            updated_at = CURRENT_TIMESTAMP
            WHERE id = ?`,
          params: [JSON.stringify(groupsData), groupsSection.id],
        }),
      })

      toast({
        title: "Success",
        description: "Groups updated",
      })
    } catch (error) {
      console.error("Error saving groups:", error)
      toast({
        title: "Error",
        description: "Failed to save groups",
        variant: "destructive",
      })
    }
  }

  const addAffiliateLink = async () => {
    if (!competition) return

    try {
      await fetch("/api/db", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: `INSERT INTO affiliate_links
            (entity_type, entity_id, page_slug, provider, affiliate_url, button_text, display_order, is_active, competition_id)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          params: [
            "competition",
            competition.id.toString(),
            competition.slug,
            "New Provider",
            "https://",
            "Buy Tickets",
            affiliateLinks.length,
            1,
            competition.id,
          ],
        }),
      })

      fetchCompetitionData()
      toast({
        title: "Success",
        description: "Affiliate link added",
      })
    } catch (error) {
      console.error("Error adding affiliate link:", error)
      toast({
        title: "Error",
        description: "Failed to add affiliate link",
        variant: "destructive",
      })
    }
  }

  const updateAffiliateLink = async (link: AffiliateLink) => {
    try {
      await fetch("/api/db", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: `UPDATE affiliate_links SET
            provider = ?,
            affiliate_url = ?,
            button_text = ?,
            is_active = ?,
            updated_at = CURRENT_TIMESTAMP
            WHERE id = ?`,
          params: [
            link.provider,
            link.affiliate_url,
            link.button_text,
            link.is_active ? 1 : 0,
            link.id,
          ],
        }),
      })

      toast({
        title: "Success",
        description: "Affiliate link updated",
      })
    } catch (error) {
      console.error("Error updating affiliate link:", error)
      toast({
        title: "Error",
        description: "Failed to update affiliate link",
        variant: "destructive",
      })
    }
  }

  const deleteAffiliateLink = async (id: number) => {
    if (!confirm("Are you sure you want to delete this affiliate link?")) return

    try {
      await fetch("/api/db", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: "DELETE FROM affiliate_links WHERE id = ?",
          params: [id],
        }),
      })

      fetchCompetitionData()
      toast({
        title: "Success",
        description: "Affiliate link deleted",
      })
    } catch (error) {
      console.error("Error deleting affiliate link:", error)
      toast({
        title: "Error",
        description: "Failed to delete affiliate link",
        variant: "destructive",
      })
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <Trophy className="h-12 w-12 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-slate-600">Loading competition...</p>
        </div>
      </div>
    )
  }

  if (!competition) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Card className="max-w-md">
          <CardContent className="p-6 text-center">
            <p className="text-slate-600 mb-4">Competition not found</p>
            <Button onClick={() => router.push("/admin/competitions")}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Competitions
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => router.push("/admin/competitions")}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <h1 className="text-3xl font-bold text-slate-900">{competition.name}</h1>
            <Badge variant={competition.is_active ? "default" : "secondary"}>
              {competition.is_active ? "Active" : "Inactive"}
            </Badge>
          </div>
          <p className="mt-1 text-sm text-slate-500">
            Edit all content sections for this competition
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            onClick={() => window.open(`/${competition.slug}`, "_blank")}
          >
            <Eye className="h-4 w-4 mr-2" />
            Preview
          </Button>
          <Button onClick={saveCompetition} disabled={saving}>
            <Save className="h-4 w-4 mr-2" />
            {saving ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </div>

      {/* SEO Meta Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-blue-600" />
            SEO & Meta Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="metaTitle">Meta Title</Label>
            <Input
              id="metaTitle"
              value={metaTitle}
              onChange={(e) => setMetaTitle(e.target.value)}
              placeholder="FIFA World Cup 2026 Tickets | Full Schedule - All 104 Matches"
              maxLength={60}
            />
            <p className="text-xs text-slate-500 mt-1">{metaTitle.length}/60 characters</p>
          </div>

          <div>
            <Label htmlFor="metaDescription">Meta Description</Label>
            <Textarea
              id="metaDescription"
              value={metaDescription}
              onChange={(e) => setMetaDescription(e.target.value)}
              placeholder="Buy FIFA World Cup 2026 tickets. Complete schedule of all 104 matches..."
              maxLength={160}
              rows={3}
            />
            <p className="text-xs text-slate-500 mt-1">
              {metaDescription.length}/160 characters
            </p>
          </div>

          <div>
            <Label htmlFor="metaKeywords">Meta Keywords (comma-separated)</Label>
            <Textarea
              id="metaKeywords"
              value={metaKeywords}
              onChange={(e) => setMetaKeywords(e.target.value)}
              placeholder="FIFA World Cup 2026 tickets, World Cup 2026 schedule, USA World Cup tickets"
              rows={2}
            />
          </div>
        </CardContent>
      </Card>

      {/* Hero Section Editor */}
      {heroData && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-blue-600" />
                Hero Section
              </CardTitle>
              <Button onClick={saveHeroSection} size="sm">
                <Save className="h-4 w-4 mr-2" />
                Save Hero
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="heroTitle">Title</Label>
              <Input
                id="heroTitle"
                value={heroData.title || ''}
                onChange={(e) => setHeroData({...heroData, title: e.target.value})}
                placeholder="FIFA World Cup 2026™ Tickets"
              />
            </div>

            <div>
              <Label htmlFor="heroSubtitle">Subtitle (Host Countries)</Label>
              <Input
                id="heroSubtitle"
                value={heroData.subtitle || ''}
                onChange={(e) => setHeroData({...heroData, subtitle: e.target.value})}
                placeholder="🇺🇸 United States • 🇲🇽 Mexico • 🇨🇦 Canada"
              />
            </div>

            <div>
              <Label htmlFor="heroDescription">Description</Label>
              <Textarea
                id="heroDescription"
                value={heroData.description || ''}
                onChange={(e) => setHeroData({...heroData, description: e.target.value})}
                placeholder="The first World Cup with 48 teams. 104 matches across 16 cities..."
                rows={3}
              />
            </div>

            <div>
              <Label>Badges</Label>
              {heroData.badges?.map((badge: any, index: number) => (
                <div key={index} className="grid grid-cols-2 gap-3 mb-2">
                  <div>
                    <Input
                      value={badge.text || ''}
                      onChange={(e) => {
                        const updated = {...heroData}
                        updated.badges[index].text = e.target.value
                        setHeroData(updated)
                      }}
                      placeholder="Badge text"
                    />
                  </div>
                  <div>
                    <select
                      value={badge.color || 'yellow'}
                      onChange={(e) => {
                        const updated = {...heroData}
                        updated.badges[index].color = e.target.value
                        setHeroData(updated)
                      }}
                      className="w-full h-10 px-3 border rounded-md text-sm"
                    >
                      <option value="yellow">Yellow</option>
                      <option value="red">Red</option>
                      <option value="blue">Blue</option>
                      <option value="green">Green</option>
                      <option value="slate">Gray</option>
                    </select>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="primaryButtonText">Primary Button Text</Label>
                <Input
                  id="primaryButtonText"
                  value={heroData.primaryButton?.text || ''}
                  onChange={(e) => setHeroData({
                    ...heroData,
                    primaryButton: {...heroData.primaryButton, text: e.target.value}
                  })}
                  placeholder="Buy Tickets from $95"
                />
              </div>
              <div>
                <Label htmlFor="primaryButtonUrl">Primary Button URL</Label>
                <Input
                  id="primaryButtonUrl"
                  value={heroData.primaryButton?.url || ''}
                  onChange={(e) => setHeroData({
                    ...heroData,
                    primaryButton: {...heroData.primaryButton, url: e.target.value}
                  })}
                  placeholder="#tickets"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="secondaryButtonText">Secondary Button Text</Label>
                <Input
                  id="secondaryButtonText"
                  value={heroData.secondaryButton?.text || ''}
                  onChange={(e) => setHeroData({
                    ...heroData,
                    secondaryButton: {...heroData.secondaryButton, text: e.target.value}
                  })}
                  placeholder="View Full Schedule"
                />
              </div>
              <div>
                <Label htmlFor="secondaryButtonUrl">Secondary Button URL</Label>
                <Input
                  id="secondaryButtonUrl"
                  value={heroData.secondaryButton?.url || ''}
                  onChange={(e) => setHeroData({
                    ...heroData,
                    secondaryButton: {...heroData.secondaryButton, url: e.target.value}
                  })}
                  placeholder="#full-schedule"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Stats Section Editor */}
      {statsData && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-blue-600" />
                Tournament Statistics
              </CardTitle>
              <Button onClick={saveStatsSection} size="sm">
                <Save className="h-4 w-4 mr-2" />
                Save Statistics
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {statsData.stats?.map((stat: any, index: number) => (
              <div key={index} className="grid grid-cols-3 gap-3 p-3 border rounded-lg">
                <div>
                  <Label className="text-xs">Label</Label>
                  <Input
                    value={stat.label || ''}
                    onChange={(e) => {
                      const updated = {...statsData}
                      updated.stats[index].label = e.target.value
                      setStatsData(updated)
                    }}
                    placeholder="Teams"
                  />
                </div>
                <div>
                  <Label className="text-xs">Value</Label>
                  <Input
                    value={stat.value || ''}
                    onChange={(e) => {
                      const updated = {...statsData}
                      updated.stats[index].value = e.target.value
                      setStatsData(updated)
                    }}
                    placeholder="48"
                  />
                </div>
                <div>
                  <Label className="text-xs">Icon</Label>
                  <select
                    value={stat.icon || ''}
                    onChange={(e) => {
                      const updated = {...statsData}
                      updated.stats[index].icon = e.target.value
                      setStatsData(updated)
                    }}
                    className="w-full h-10 px-3 border rounded-md text-sm"
                  >
                    <option value="Users">Users</option>
                    <option value="Trophy">Trophy</option>
                    <option value="MapPin">MapPin</option>
                    <option value="Globe">Globe</option>
                    <option value="Calendar">Calendar</option>
                    <option value="Flag">Flag</option>
                  </select>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* SEO Content Editor */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-blue-600" />
              SEO Article Content
            </CardTitle>
            <Button onClick={saveSeoContent} size="sm">
              <Save className="h-4 w-4 mr-2" />
              Save SEO Content
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="seoTitle">Article Title</Label>
            <Input
              id="seoTitle"
              value={seoTitle}
              onChange={(e) => setSeoTitle(e.target.value)}
              placeholder="Complete Guide to FIFA World Cup 2026 Tickets"
            />
          </div>

          <div>
            <Label htmlFor="seoContent">Article Content</Label>
            <RichTextEditor
              content={seoContent}
              onChange={(html) => setSeoContent(html)}
            />
            <p className="text-xs text-slate-500 mt-2">
              Use the toolbar to format your content. Supports bold, italic, underline, headings, lists, links, quotes, and tables.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Quick Links Editor */}
      {quickLinksData && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <LinkIcon className="h-5 w-5 text-blue-600" />
                Quick Links (Sidebar)
              </CardTitle>
              <Button onClick={saveQuickLinks} size="sm">
                <Save className="h-4 w-4 mr-2" />
                Save Quick Links
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {quickLinksData.links?.map((link: any, index: number) => (
              <div key={index} className="grid grid-cols-2 gap-3 p-3 border rounded-lg">
                <div>
                  <Label className="text-xs">Link Label</Label>
                  <Input
                    value={link.label || ''}
                    onChange={(e) => {
                      const updated = {...quickLinksData}
                      updated.links[index].label = e.target.value
                      setQuickLinksData(updated)
                    }}
                    placeholder="Group A Tickets"
                  />
                </div>
                <div>
                  <Label className="text-xs">Link URL</Label>
                  <Input
                    value={link.href || ''}
                    onChange={(e) => {
                      const updated = {...quickLinksData}
                      updated.links[index].href = e.target.value
                      setQuickLinksData(updated)
                    }}
                    placeholder="/fixtures/group-a-world-cup-2026-tickets"
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Tournament Info Editor */}
      {tournamentInfoData && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-blue-600" />
                Tournament Info (Sidebar)
              </CardTitle>
              <Button onClick={saveTournamentInfo} size="sm">
                <Save className="h-4 w-4 mr-2" />
                Save Tournament Info
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {tournamentInfoData.info?.map((item: any, index: number) => (
              <div key={index} className="grid grid-cols-3 gap-3 p-3 border rounded-lg">
                <div>
                  <Label className="text-xs">Icon</Label>
                  <select
                    value={item.icon || ''}
                    onChange={(e) => {
                      const updated = {...tournamentInfoData}
                      updated.info[index].icon = e.target.value
                      setTournamentInfoData(updated)
                    }}
                    className="w-full h-10 px-3 border rounded-md text-sm"
                  >
                    <option value="Calendar">Calendar</option>
                    <option value="MapPin">MapPin</option>
                    <option value="Trophy">Trophy</option>
                    <option value="Users">Users</option>
                    <option value="Globe">Globe</option>
                  </select>
                </div>
                <div>
                  <Label className="text-xs">Label</Label>
                  <Input
                    value={item.label || ''}
                    onChange={(e) => {
                      const updated = {...tournamentInfoData}
                      updated.info[index].label = e.target.value
                      setTournamentInfoData(updated)
                    }}
                    placeholder="Dates"
                  />
                </div>
                <div>
                  <Label className="text-xs">Value</Label>
                  <Input
                    value={item.value || ''}
                    onChange={(e) => {
                      const updated = {...tournamentInfoData}
                      updated.info[index].value = e.target.value
                      setTournamentInfoData(updated)
                    }}
                    placeholder="June 11 - July 19, 2026"
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Groups Editor */}
      {groupsData && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-blue-600" />
                Group Stage Draw (12 Groups)
              </CardTitle>
              <Button onClick={saveGroups} size="sm">
                <Save className="h-4 w-4 mr-2" />
                Save Groups
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-slate-500 mb-4">Edit the 12 tournament groups. Separate teams with commas.</p>
            {groupsData.groups?.map((group: any, index: number) => (
              <div key={index} className="p-3 border rounded-lg">
                <Label className="text-sm font-semibold">{group.name}</Label>
                <Textarea
                  value={group.teams?.join(', ') || ''}
                  onChange={(e) => {
                    const updated = {...groupsData}
                    updated.groups[index].teams = e.target.value.split(',').map((t: string) => t.trim())
                    setGroupsData(updated)
                  }}
                  placeholder="Mexico, South Africa, Korea Republic, TBD"
                  rows={2}
                  className="mt-2"
                />
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Venues Editor */}
      {venuesData && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-blue-600" />
                All 16 Host Venues
              </CardTitle>
              <Button onClick={saveVenues} size="sm">
                <Save className="h-4 w-4 mr-2" />
                Save Venues
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-slate-500 mb-4">Edit venue information for all 16 stadiums.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {venuesData.venues?.map((venue: any, index: number) => (
                <div key={index} className="p-3 border rounded-lg space-y-2">
                  <Input
                    value={venue.name || ''}
                    onChange={(e) => {
                      const updated = {...venuesData}
                      updated.venues[index].name = e.target.value
                      setVenuesData(updated)
                    }}
                    placeholder="Stadium Name"
                    className="font-semibold"
                  />
                  <Input
                    value={venue.city || ''}
                    onChange={(e) => {
                      const updated = {...venuesData}
                      updated.venues[index].city = e.target.value
                      setVenuesData(updated)
                    }}
                    placeholder="City"
                    className="text-sm"
                  />
                  <Input
                    value={venue.highlight || ''}
                    onChange={(e) => {
                      const updated = {...venuesData}
                      updated.venues[index].highlight = e.target.value
                      setVenuesData(updated)
                    }}
                    placeholder="Highlight (e.g., FINAL, SF, QF)"
                    className="text-sm"
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* City Guides Editor */}
      {cityGuidesData && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-blue-600" />
                Host Cities Travel Guide
              </CardTitle>
              <Button onClick={saveCityGuides} size="sm">
                <Save className="h-4 w-4 mr-2" />
                Save City Guides
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-slate-500 mb-4">Edit travel information for host cities.</p>
            {cityGuidesData.cities?.map((city: any, index: number) => (
              <div key={index} className="p-4 border rounded-lg space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label className="text-xs">City Name</Label>
                    <Input
                      value={city.name || ''}
                      onChange={(e) => {
                        const updated = {...cityGuidesData}
                        updated.cities[index].name = e.target.value
                        setCityGuidesData(updated)
                      }}
                      placeholder="New York/New Jersey"
                    />
                  </div>
                  <div>
                    <Label className="text-xs">Emoji</Label>
                    <Input
                      value={city.emoji || ''}
                      onChange={(e) => {
                        const updated = {...cityGuidesData}
                        updated.cities[index].emoji = e.target.value
                        setCityGuidesData(updated)
                      }}
                      placeholder="🗽"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label className="text-xs">Venue</Label>
                    <Input
                      value={city.venue || ''}
                      onChange={(e) => {
                        const updated = {...cityGuidesData}
                        updated.cities[index].venue = e.target.value
                        setCityGuidesData(updated)
                      }}
                      placeholder="MetLife Stadium"
                    />
                  </div>
                  <div>
                    <Label className="text-xs">Highlight</Label>
                    <Input
                      value={city.highlight || ''}
                      onChange={(e) => {
                        const updated = {...cityGuidesData}
                        updated.cities[index].highlight = e.target.value
                        setCityGuidesData(updated)
                      }}
                      placeholder="FIFA World Cup 2026 Final"
                    />
                  </div>
                </div>
                <div>
                  <Label className="text-xs">Matches Info</Label>
                  <Input
                    value={city.matches || ''}
                    onChange={(e) => {
                      const updated = {...cityGuidesData}
                      updated.cities[index].matches = e.target.value
                      setCityGuidesData(updated)
                    }}
                    placeholder="7+ matches including Round of 16"
                  />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <Label className="text-xs">Hotels</Label>
                    <Input
                      value={city.hotels || ''}
                      onChange={(e) => {
                        const updated = {...cityGuidesData}
                        updated.cities[index].hotels = e.target.value
                        setCityGuidesData(updated)
                      }}
                      placeholder="Times Square, Jersey City"
                    />
                  </div>
                  <div>
                    <Label className="text-xs">Transport</Label>
                    <Input
                      value={city.transport || ''}
                      onChange={(e) => {
                        const updated = {...cityGuidesData}
                        updated.cities[index].transport = e.target.value
                        setCityGuidesData(updated)
                      }}
                      placeholder="NJ Transit, subway"
                    />
                  </div>
                  <div>
                    <Label className="text-xs">Must-See</Label>
                    <Input
                      value={city.mustSee || ''}
                      onChange={(e) => {
                        const updated = {...cityGuidesData}
                        updated.cities[index].mustSee = e.target.value
                        setCityGuidesData(updated)
                      }}
                      placeholder="Statue of Liberty, Central Park"
                    />
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Affiliate Links */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <LinkIcon className="h-5 w-5 text-blue-600" />
              Affiliate Links
            </CardTitle>
            <Button onClick={addAffiliateLink} size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Add Link
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {affiliateLinks.length === 0 ? (
            <div className="text-center py-8 text-slate-500">
              <LinkIcon className="h-12 w-12 mx-auto mb-3 opacity-50" />
              <p>No affiliate links yet. Click "Add Link" to create one.</p>
            </div>
          ) : (
            affiliateLinks.map((link, index) => (
              <Card key={link.id || `affiliate-${index}`} className="border-l-4 border-l-green-500">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 space-y-3">
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <Label className="text-xs">Provider Name</Label>
                          <Input
                            value={link.provider}
                            onChange={(e) => {
                              const updated = [...affiliateLinks]
                              updated[index].provider = e.target.value
                              setAffiliateLinks(updated)
                            }}
                            onBlur={() => updateAffiliateLink(link)}
                            placeholder="FIFA Official"
                          />
                        </div>
                        <div>
                          <Label className="text-xs">Button Text</Label>
                          <Input
                            value={link.button_text}
                            onChange={(e) => {
                              const updated = [...affiliateLinks]
                              updated[index].button_text = e.target.value
                              setAffiliateLinks(updated)
                            }}
                            onBlur={() => updateAffiliateLink(link)}
                            placeholder="Buy Tickets"
                          />
                        </div>
                      </div>
                      <div>
                        <Label className="text-xs">Affiliate URL</Label>
                        <Input
                          value={link.affiliate_url}
                          onChange={(e) => {
                            const updated = [...affiliateLinks]
                            updated[index].affiliate_url = e.target.value
                            setAffiliateLinks(updated)
                          }}
                          onBlur={() => updateAffiliateLink(link)}
                          placeholder="https://example.com"
                          type="url"
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">Order: {link.display_order}</Badge>
                        <label className="flex items-center gap-2 text-sm">
                          <input
                            type="checkbox"
                            checked={link.is_active}
                            onChange={(e) => {
                              const updated = [...affiliateLinks]
                              updated[index].is_active = e.target.checked
                              setAffiliateLinks(updated)
                              updateAffiliateLink(updated[index])
                            }}
                            className="rounded"
                          />
                          Active
                        </label>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => deleteAffiliateLink(link.id)}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </CardContent>
      </Card>

      {/* Public URL Info */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <ExternalLink className="h-5 w-5 text-blue-600" />
            <div>
              <p className="text-sm font-medium text-slate-900">Public URL</p>
              <a
                href={`/${competition.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:underline"
              >
                {typeof window !== 'undefined' && window.location.origin}/{competition.slug}
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
