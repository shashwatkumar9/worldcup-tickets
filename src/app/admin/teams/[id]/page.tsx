"use client"

import { useEffect, useState } from "react"
import { useRouter, useParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { TipTapEditor } from "@/components/admin/tiptap-editor"
import { ArrowLeft, Save, Eye, FileText, AlertCircle, LinkIcon, Plus, Edit, Trash2, ExternalLink } from "lucide-react"

interface Team {
  id: string
  name: string
  short_name: string
  country_code: string
  confederation: string
  fifa_ranking: number
  world_cup_titles: number
  slug: string
  is_featured: boolean
}

interface PageContent {
  id: string
  content_html: string
  meta_title: string
  meta_description: string
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
  is_active: number
}

interface SEOMeta {
  id: string
  page_url: string
  entity_type: string
  entity_id: string
  meta_title: string
  meta_description: string
  meta_keywords: string
  og_title: string
  og_description: string
  og_image: string
  canonical_url: string
  robots: string
}

const PROVIDERS = [
  { id: "hellotickets", name: "HelloTickets", color: "blue" },
  { id: "ticketfootballnet", name: "TicketFootball.net", color: "green" },
  { id: "viagogo", name: "Viagogo", color: "purple" },
  { id: "stubhub", name: "StubHub", color: "orange" },
  { id: "ticombo", name: "Ticombo", color: "pink" },
]

export default function TeamDetailPage() {
  const router = useRouter()
  const params = useParams()
  const teamId = params.id as string

  const [team, setTeam] = useState<Team | null>(null)
  const [loading, setLoading] = useState(true)
  const [articleContent, setArticleContent] = useState("")
  const [metaTitle, setMetaTitle] = useState("")
  const [metaDescription, setMetaDescription] = useState("")
  const [saving, setSaving] = useState(false)
  const [existingContent, setExistingContent] = useState<PageContent | null>(null)
  const [affiliateLinks, setAffiliateLinks] = useState<AffiliateLink[]>([])
  const [showAddAffiliateModal, setShowAddAffiliateModal] = useState(false)
  const [editingAffiliate, setEditingAffiliate] = useState<AffiliateLink | null>(null)
  const [seoMeta, setSeoMeta] = useState<SEOMeta | null>(null)
  const [seoMetaTitle, setSeoMetaTitle] = useState("")
  const [seoMetaDescription, setSeoMetaDescription] = useState("")
  const [seoMetaKeywords, setSeoMetaKeywords] = useState("")
  const [seoOgTitle, setSeoOgTitle] = useState("")
  const [seoOgDescription, setSeoOgDescription] = useState("")
  const [seoOgImage, setSeoOgImage] = useState("")
  const [seoCanonicalUrl, setSeoCanonicalUrl] = useState("")
  const [seoRobots, setSeoRobots] = useState("index, follow")
  const [savingSeo, setSavingSeo] = useState(false)

  useEffect(() => {
    fetchTeam()
    fetchExistingContent()
    fetchAffiliateLinks()
    fetchSeoMeta()
  }, [teamId])

  const fetchTeam = async () => {
    try {
      const response = await fetch("/api/db", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          table: "teams",
          action: "select",
          filters: { id: teamId },
        }),
      })
      const data = await response.json()
      if (data.data && data.data.length > 0) {
        const teamData = data.data[0]
        setTeam(teamData)
        setMetaTitle(`${teamData.name} World Cup 2026 Tickets | Official Guide`)
        setMetaDescription(
          `Get ${teamData.name} World Cup 2026 tickets. Official ticketing information, match schedule, and travel guides for ${teamData.name} fans.`
        )
      }
    } catch (error) {
      console.error("Error fetching team:", error)
    } finally {
      setLoading(false)
    }
  }

  const fetchExistingContent = async () => {
    try {
      const response = await fetch("/api/db", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          table: "page_content",
          action: "select",
          filters: { entity_id: teamId, entity_type: "team" },
        }),
      })
      const data = await response.json()
      if (data.data && data.data.length > 0) {
        const content = data.data[0]
        setExistingContent(content)
        setArticleContent(content.content_html || "")
        setMetaTitle(content.meta_title || "")
        setMetaDescription(content.meta_description || "")
      }
    } catch (error) {
      console.error("Error fetching content:", error)
    }
  }

  const fetchAffiliateLinks = async () => {
    try {
      const response = await fetch("/api/db", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          table: "affiliate_links",
          action: "select",
          filters: { entity_id: teamId, entity_type: "team" },
        }),
      })
      const data = await response.json()
      if (data.data) {
        setAffiliateLinks(data.data.sort((a: AffiliateLink, b: AffiliateLink) => a.display_order - b.display_order))
      }
    } catch (error) {
      console.error("Error fetching affiliate links:", error)
    }
  }

  const handleDeleteAffiliateLink = async (id: string) => {
    if (!confirm("Are you sure you want to delete this affiliate link?")) return

    try {
      await fetch("/api/db", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          table: "affiliate_links",
          action: "delete",
          where: { id },
        }),
      })
      fetchAffiliateLinks()
    } catch (error) {
      console.error("Error deleting affiliate link:", error)
      alert("Failed to delete affiliate link")
    }
  }

  const fetchSeoMeta = async () => {
    if (!team) return

    try {
      const response = await fetch("/api/db", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          table: "seo_meta",
          action: "select",
          filters: { entity_id: teamId, entity_type: "team" },
        }),
      })
      const data = await response.json()
      if (data.data && data.data.length > 0) {
        const meta = data.data[0]
        setSeoMeta(meta)
        setSeoMetaTitle(meta.meta_title || "")
        setSeoMetaDescription(meta.meta_description || "")
        setSeoMetaKeywords(meta.meta_keywords || "")
        setSeoOgTitle(meta.og_title || "")
        setSeoOgDescription(meta.og_description || "")
        setSeoOgImage(meta.og_image || "")
        setSeoCanonicalUrl(meta.canonical_url || "")
        setSeoRobots(meta.robots || "index, follow")
      }
    } catch (error) {
      console.error("Error fetching SEO meta:", error)
    }
  }

  const handleSaveSeo = async () => {
    if (!team) return

    setSavingSeo(true)
    try {
      const seoData = {
        meta_title: seoMetaTitle,
        meta_description: seoMetaDescription,
        meta_keywords: seoMetaKeywords,
        og_title: seoOgTitle,
        og_description: seoOgDescription,
        og_image: seoOgImage,
        canonical_url: seoCanonicalUrl,
        robots: seoRobots,
      }

      if (seoMeta) {
        // Update existing
        await fetch("/api/db", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            table: "seo_meta",
            action: "update",
            where: { id: seoMeta.id },
            values: seoData,
          }),
        })
        alert("SEO metadata updated successfully!")
      } else {
        // Insert new
        await fetch("/api/db", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            table: "seo_meta",
            action: "insert",
            values: {
              id: `seo-${Date.now()}`,
              page_url: `/teams/${team.slug}`,
              entity_type: "team",
              entity_id: team.id,
              ...seoData,
            },
          }),
        })
        alert("SEO metadata created successfully!")
        fetchSeoMeta()
      }
    } catch (error) {
      console.error("Error saving SEO metadata:", error)
      alert("Failed to save SEO metadata")
    } finally {
      setSavingSeo(false)
    }
  }

  const handleSave = async () => {
    if (!team) return

    setSaving(true)
    try {
      if (existingContent) {
        // Update existing content
        const response = await fetch("/api/db", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            table: "page_content",
            action: "update",
            where: { id: existingContent.id },
            values: {
              content_html: articleContent,
              meta_title: metaTitle,
              meta_description: metaDescription,
              is_complete: 1,
            },
          }),
        })
        const data = await response.json()
        if (data.data) {
          alert("Article updated successfully!")
        }
      } else {
        // Insert new content
        const response = await fetch("/api/db", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            table: "page_content",
            action: "insert",
            values: {
              id: `team-${team.id}-${Date.now()}`,
              entity_type: "team",
              entity_id: team.id,
              page_slug: team.slug,
              language: "en",
              content_html: articleContent,
              meta_title: metaTitle,
              meta_description: metaDescription,
              is_complete: 1,
            },
          }),
        })

        const data = await response.json()
        if (data.data) {
          alert("Article saved successfully!")
          fetchExistingContent() // Refresh to get the new content ID
        }
      }
    } catch (error) {
      console.error("Error saving article:", error)
      alert("Failed to save article")
    } finally {
      setSaving(false)
    }
  }

  const handlePreview = () => {
    window.open(`/teams/${team?.slug}`, "_blank")
  }

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <div className="text-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
          <p className="mt-2 text-sm text-slate-500">Loading team...</p>
        </div>
      </div>
    )
  }

  if (!team) {
    return (
      <div className="text-center">
        <p className="text-slate-500">Team not found</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => router.push("/admin/teams")}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 hover:bg-slate-50"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div>
            <h1 className="text-3xl font-bold text-slate-900">{team.name}</h1>
            <p className="mt-1 text-sm text-slate-500">
              {team.short_name} • {team.confederation} • FIFA Rank #{team.fifa_ranking}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={handlePreview}>
            <Eye className="mr-2 h-4 w-4" />
            View Live Page
          </Button>
          <Button onClick={handleSave} disabled={saving}>
            <Save className="mr-2 h-4 w-4" />
            {saving ? "Saving..." : existingContent ? "Update Article" : "Save Article"}
          </Button>
        </div>
      </div>

      {/* Status Banner */}
      {existingContent && (
        <Card className="border-green-200 bg-green-50">
          <CardContent className="flex items-center gap-3 p-4">
            <FileText className="h-5 w-5 text-green-600" />
            <div>
              <p className="font-medium text-green-900">Article exists for this team</p>
              <p className="text-sm text-green-700">
                Last updated: {new Date(existingContent.id).toLocaleDateString()}
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {!existingContent && (
        <Card className="border-orange-200 bg-orange-50">
          <CardContent className="flex items-center gap-3 p-4">
            <AlertCircle className="h-5 w-5 text-orange-600" />
            <div>
              <p className="font-medium text-orange-900">No article exists yet</p>
              <p className="text-sm text-orange-700">
                Create content for the {team.name} team page
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Team Info */}
      <Card>
        <CardHeader>
          <CardTitle>Team Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <label className="text-xs font-medium text-slate-500">Team Name</label>
              <p className="mt-1 text-sm font-medium text-slate-900">{team.name}</p>
            </div>
            <div>
              <label className="text-xs font-medium text-slate-500">Short Name</label>
              <p className="mt-1 text-sm font-medium text-slate-900">{team.short_name}</p>
            </div>
            <div>
              <label className="text-xs font-medium text-slate-500">Confederation</label>
              <p className="mt-1 text-sm font-medium text-slate-900">{team.confederation}</p>
            </div>
            <div>
              <label className="text-xs font-medium text-slate-500">World Cup Titles</label>
              <p className="mt-1 text-sm font-medium text-slate-900">{team.world_cup_titles}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Page Content SEO */}
      <Card>
        <CardHeader>
          <CardTitle>Page Content SEO</CardTitle>
          <p className="text-sm text-slate-500">Meta data for the article content</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium text-slate-700">Meta Title</label>
            <Input
              value={metaTitle}
              onChange={(e) => setMetaTitle(e.target.value)}
              placeholder="Page title for SEO"
              className="mt-1"
            />
            <p className="mt-1 text-xs text-slate-500">{metaTitle.length} characters (recommended: 50-60)</p>
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700">Meta Description</label>
            <textarea
              value={metaDescription}
              onChange={(e) => setMetaDescription(e.target.value)}
              placeholder="Page description for SEO (150-160 characters)"
              rows={3}
              className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <p className="mt-1 text-xs text-slate-500">
              {metaDescription.length} characters (recommended: 150-160)
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Advanced SEO & Open Graph */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Advanced SEO & Open Graph</CardTitle>
              <p className="text-sm text-slate-500">Complete SEO configuration for this page</p>
            </div>
            <Button onClick={handleSaveSeo} disabled={savingSeo} size="sm">
              <Save className="mr-2 h-4 w-4" />
              {savingSeo ? "Saving..." : seoMeta ? "Update SEO" : "Save SEO"}
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-slate-700">Meta Title</label>
              <Input
                value={seoMetaTitle}
                onChange={(e) => setSeoMetaTitle(e.target.value)}
                placeholder="SEO optimized title"
              />
              <p className="mt-1 text-xs text-slate-500">{seoMetaTitle.length} chars</p>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Meta Keywords</label>
              <Input
                value={seoMetaKeywords}
                onChange={(e) => setSeoMetaKeywords(e.target.value)}
                placeholder="keyword1, keyword2, keyword3"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">Meta Description</label>
            <textarea
              value={seoMetaDescription}
              onChange={(e) => setSeoMetaDescription(e.target.value)}
              placeholder="SEO optimized description"
              rows={2}
              className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <p className="mt-1 text-xs text-slate-500">{seoMetaDescription.length} chars (recommended: 150-160)</p>
          </div>

          <div className="border-t border-slate-200 pt-4">
            <h4 className="text-sm font-semibold text-slate-900 mb-3">Open Graph (Social Media)</h4>
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-slate-700">OG Title</label>
                <Input
                  value={seoOgTitle}
                  onChange={(e) => setSeoOgTitle(e.target.value)}
                  placeholder="Title for social media shares"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">OG Description</label>
                <textarea
                  value={seoOgDescription}
                  onChange={(e) => setSeoOgDescription(e.target.value)}
                  placeholder="Description for social media shares"
                  rows={2}
                  className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">OG Image URL</label>
                <Input
                  value={seoOgImage}
                  onChange={(e) => setSeoOgImage(e.target.value)}
                  placeholder="https://example.com/image.jpg"
                />
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-4">
            <h4 className="text-sm font-semibold text-slate-900 mb-3">Advanced Settings</h4>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-slate-700">Canonical URL</label>
                <Input
                  value={seoCanonicalUrl}
                  onChange={(e) => setSeoCanonicalUrl(e.target.value)}
                  placeholder="/teams/team-slug"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Robots</label>
                <select
                  value={seoRobots}
                  onChange={(e) => setSeoRobots(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
                >
                  <option value="index, follow">Index, Follow (Default)</option>
                  <option value="noindex, follow">No Index, Follow</option>
                  <option value="index, nofollow">Index, No Follow</option>
                  <option value="noindex, nofollow">No Index, No Follow</option>
                </select>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Affiliate Links Section */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <LinkIcon className="h-5 w-5" />
                Affiliate Links
              </CardTitle>
              <p className="text-sm text-slate-500">
                Manage ticket provider affiliate links for this team page
              </p>
            </div>
            <Button onClick={() => setShowAddAffiliateModal(true)} size="sm">
              <Plus className="mr-2 h-4 w-4" />
              Add Link
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {affiliateLinks.length === 0 ? (
            <div className="rounded-lg border border-dashed border-slate-300 p-8 text-center">
              <LinkIcon className="mx-auto h-12 w-12 text-slate-400" />
              <p className="mt-2 text-sm font-medium text-slate-900">No affiliate links yet</p>
              <p className="mt-1 text-sm text-slate-500">Add ticket provider links to help users purchase tickets</p>
              <Button onClick={() => setShowAddAffiliateModal(true)} className="mt-4" size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Add First Link
              </Button>
            </div>
          ) : (
            <div className="space-y-3">
              {affiliateLinks.map((link) => {
                const provider = PROVIDERS.find((p) => p.id === link.provider)
                return (
                  <div key={link.id} className="flex items-center justify-between rounded-lg border border-slate-200 p-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className={`inline-flex rounded-full bg-${provider?.color || 'gray'}-100 px-2 py-1 text-xs font-medium text-${provider?.color || 'gray'}-700`}>
                          {provider?.name || link.provider}
                        </span>
                        <span className="text-sm font-medium text-slate-900">{link.button_text}</span>
                        {link.is_active === 1 && (
                          <span className="inline-flex rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                            Active
                          </span>
                        )}
                      </div>
                      <div className="mt-1 flex items-center gap-2 text-xs text-slate-500">
                        <ExternalLink className="h-3 w-3" />
                        <a href={link.affiliate_url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 truncate max-w-md">
                          {link.affiliate_url}
                        </a>
                        <span>• Order: {link.display_order}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setEditingAffiliate(link)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDeleteAffiliateLink(link.id)}
                      >
                        <Trash2 className="h-4 w-4 text-red-600" />
                      </Button>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Article Content Editor */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Article Content
          </CardTitle>
          <p className="text-sm text-slate-500">
            Write rich content with headings, lists, links, and images. Use the preview button to see how it will look.
          </p>
        </CardHeader>
        <CardContent>
          <TipTapEditor
            content={articleContent}
            onChange={setArticleContent}
            placeholder="Start writing your article about the team, their World Cup history, key players, and ticketing information..."
          />
        </CardContent>
      </Card>

      {/* Modals */}
      {showAddAffiliateModal && (
        <AddAffiliateLinkModal
          team={team}
          onClose={() => setShowAddAffiliateModal(false)}
          onSuccess={fetchAffiliateLinks}
        />
      )}

      {editingAffiliate && (
        <EditAffiliateLinkModal
          link={editingAffiliate}
          onClose={() => setEditingAffiliate(null)}
          onSuccess={fetchAffiliateLinks}
        />
      )}
    </div>
  )
}

function AddAffiliateLinkModal({ team, onClose, onSuccess }: { team: Team; onClose: () => void; onSuccess: () => void }) {
  const [formData, setFormData] = useState({
    provider: "hellotickets",
    affiliate_url: "",
    button_text: "Buy Now",
    display_order: 0,
    is_active: 1,
  })
  const [saving, setSaving] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    try {
      const newLink = {
        id: `aff-${Date.now()}`,
        entity_type: "team",
        entity_id: team.id,
        page_slug: team.slug,
        ...formData,
      }

      const response = await fetch("/api/db", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          table: "affiliate_links",
          action: "insert",
          values: newLink,
        }),
      })

      const data = await response.json()
      if (data.data) {
        onSuccess()
        onClose()
      }
    } catch (error) {
      console.error("Error creating affiliate link:", error)
      alert("Failed to create affiliate link")
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <CardTitle>Add Affiliate Link for {team.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-slate-700">Provider</label>
              <select
                value={formData.provider}
                onChange={(e) => setFormData({ ...formData, provider: e.target.value })}
                className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
              >
                {PROVIDERS.map((provider) => (
                  <option key={provider.id} value={provider.id}>
                    {provider.name}
                  </option>
                ))}
                <option value="custom">Custom Provider</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">Affiliate URL</label>
              <Input
                required
                type="url"
                value={formData.affiliate_url}
                onChange={(e) => setFormData({ ...formData, affiliate_url: e.target.value })}
                placeholder="https://..."
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-slate-700">Button Text</label>
                <Input
                  required
                  value={formData.button_text}
                  onChange={(e) => setFormData({ ...formData, button_text: e.target.value })}
                  placeholder="Buy Now"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Display Order</label>
                <Input
                  type="number"
                  value={formData.display_order}
                  onChange={(e) => setFormData({ ...formData, display_order: parseInt(e.target.value) })}
                />
              </div>
            </div>

            <div>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.is_active === 1}
                  onChange={(e) => setFormData({ ...formData, is_active: e.target.checked ? 1 : 0 })}
                  className="rounded border-slate-300"
                />
                <span className="text-sm font-medium text-slate-700">Active</span>
              </label>
            </div>

            <div className="flex items-center gap-3 pt-4">
              <Button type="submit" disabled={saving}>
                {saving ? "Creating..." : "Add Affiliate Link"}
              </Button>
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

function EditAffiliateLinkModal({ link, onClose, onSuccess }: { link: AffiliateLink; onClose: () => void; onSuccess: () => void }) {
  const [formData, setFormData] = useState({
    provider: link.provider,
    affiliate_url: link.affiliate_url,
    button_text: link.button_text,
    display_order: link.display_order,
    is_active: link.is_active,
  })
  const [saving, setSaving] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    try {
      const response = await fetch("/api/db", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          table: "affiliate_links",
          action: "update",
          where: { id: link.id },
          values: formData,
        }),
      })

      const data = await response.json()
      if (data.data) {
        onSuccess()
        onClose()
      }
    } catch (error) {
      console.error("Error updating affiliate link:", error)
      alert("Failed to update affiliate link")
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <CardTitle>Edit Affiliate Link</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-slate-700">Provider</label>
              <select
                value={formData.provider}
                onChange={(e) => setFormData({ ...formData, provider: e.target.value })}
                className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
              >
                {PROVIDERS.map((provider) => (
                  <option key={provider.id} value={provider.id}>
                    {provider.name}
                  </option>
                ))}
                <option value="custom">Custom Provider</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">Affiliate URL</label>
              <Input
                required
                type="url"
                value={formData.affiliate_url}
                onChange={(e) => setFormData({ ...formData, affiliate_url: e.target.value })}
                placeholder="https://..."
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-slate-700">Button Text</label>
                <Input
                  required
                  value={formData.button_text}
                  onChange={(e) => setFormData({ ...formData, button_text: e.target.value })}
                  placeholder="Buy Now"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Display Order</label>
                <Input
                  type="number"
                  value={formData.display_order}
                  onChange={(e) => setFormData({ ...formData, display_order: parseInt(e.target.value) })}
                />
              </div>
            </div>

            <div>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.is_active === 1}
                  onChange={(e) => setFormData({ ...formData, is_active: e.target.checked ? 1 : 0 })}
                  className="rounded border-slate-300"
                />
                <span className="text-sm font-medium text-slate-700">Active</span>
              </label>
            </div>

            <div className="flex items-center gap-3 pt-4">
              <Button type="submit" disabled={saving}>
                {saving ? "Saving..." : "Save Changes"}
              </Button>
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
