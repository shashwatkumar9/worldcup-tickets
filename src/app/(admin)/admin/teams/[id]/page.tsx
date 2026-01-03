"use client"

import { useEffect, useState, use } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import dynamic from "next/dynamic"
import { createClient } from "@/lib/supabase/client"
import { AdminHeader } from "@/components/admin/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ArrowLeft, Save, Loader2, Plus, Trash2, ExternalLink } from "lucide-react"

const RichTextEditor = dynamic(
  () => import("@/components/ui/rich-text-editor"),
  { ssr: false, loading: () => <div className="h-[300px] bg-slate-800 rounded-lg animate-pulse" /> }
)

interface PageProps {
  params: Promise<{ id: string }>
}

const LANGUAGES = [
  { code: "en", name: "English" },
  { code: "de", name: "German" },
  { code: "fr", name: "French" },
  { code: "es", name: "Spanish" },
  { code: "it", name: "Italian" },
  { code: "ar", name: "Arabic" },
  { code: "pt", name: "Portuguese" },
  { code: "ja", name: "Japanese" },
  { code: "zh", name: "Chinese" },
]

const SPORT_TYPES = [
  { value: "football", label: "Football" },
  { value: "basketball", label: "Basketball" },
  { value: "tennis", label: "Tennis" },
  { value: "rugby", label: "Rugby" },
  { value: "cricket", label: "Cricket" },
  { value: "athletics", label: "Athletics" },
  { value: "swimming", label: "Swimming" },
  { value: "other", label: "Other" },
]

const TEAM_TYPES = [
  { value: "national", label: "National Team" },
  { value: "club", label: "Club Team" },
]

const AFFILIATE_PARTNERS = [
  { value: "ticketmaster", label: "Ticketmaster" },
  { value: "stubhub", label: "StubHub" },
  { value: "viagogo", label: "Viagogo" },
  { value: "ticombo", label: "TiCombo" },
  { value: "vivid_seats", label: "VividSeats" },
  { value: "seat_geek", label: "SeatGeek" },
  { value: "hello_tickets", label: "HelloTickets" },
  { value: "manual", label: "Manual" },
]

interface AffiliateLink {
  id?: string
  partner: string
  url: string
  price_from: number | null
  is_active: boolean
  priority: number
}

interface TeamFormData {
  slug: string
  team_type: string
  sport_type: string
  country_code: string
  logo_url: string
  status: string
  is_featured: boolean
  is_hot: boolean
  translations: {
    [key: string]: {
      name: string
      description: string
      content_html: string
      meta_title: string
      meta_description: string
    }
  }
  affiliate_links: AffiliateLink[]
}

export default function TeamEditPage({ params }: PageProps) {
  const { id } = use(params)
  const isNew = id === "new"
  const router = useRouter()

  const [loading, setLoading] = useState(!isNew)
  const [saving, setSaving] = useState(false)
  const [activeTab, setActiveTab] = useState("en")
  const [formData, setFormData] = useState<TeamFormData>({
    slug: "",
    team_type: "national",
    sport_type: "football",
    country_code: "",
    logo_url: "",
    status: "draft",
    is_featured: false,
    is_hot: false,
    translations: {
      en: { name: "", description: "", content_html: "", meta_title: "", meta_description: "" },
    },
    affiliate_links: [],
  })

  useEffect(() => {
    if (!isNew) {
      fetchTeam()
    }
  }, [id, isNew])

  const fetchTeam = async () => {
    const supabase = createClient()

    const { data: team, error } = await supabase
      .from("teams")
      .select(`
        *,
        translations(*),
        page_content:page_content(*)
      `)
      .eq("id", id)
      .single()

    if (error || !team) {
      console.error("Error fetching team:", error)
      router.push("/admin/teams")
      return
    }

    // Fetch affiliate links
    const { data: affiliateLinks } = await supabase
      .from("affiliate_links")
      .select("*")
      .eq("entity_type", "team")
      .eq("entity_id", id)
      .order("priority", { ascending: false })

    const translations: TeamFormData["translations"] = {}
    team.translations?.forEach((t: any) => {
      const pageContent = team.page_content?.find((p: any) => p.language === t.language)
      translations[t.language] = {
        name: t.name || "",
        description: t.description || "",
        content_html: pageContent?.content_html || t.content_html || "",
        meta_title: t.meta_title || "",
        meta_description: t.meta_description || "",
      }
    })

    if (!translations.en) {
      translations.en = { name: "", description: "", content_html: "", meta_title: "", meta_description: "" }
    }

    setFormData({
      slug: team.slug,
      team_type: team.team_type,
      sport_type: team.sport_type,
      country_code: team.country_code || "",
      logo_url: team.logo_url || "",
      status: team.status,
      is_featured: team.is_featured,
      is_hot: team.is_hot,
      translations,
      affiliate_links: affiliateLinks?.map((link: any) => ({
        id: link.id,
        partner: link.partner,
        url: link.url,
        price_from: link.price_from,
        is_active: link.is_active,
        priority: link.priority,
      })) || [],
    })
    setLoading(false)
  }

  const generateSlug = (name: string) => {
    return (
      name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "") + "-tickets"
    )
  }

  const handleNameChange = (lang: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      translations: {
        ...prev.translations,
        [lang]: {
          ...prev.translations[lang],
          name: value,
        },
      },
    }))

    if (lang === "en" && isNew) {
      setFormData((prev) => ({
        ...prev,
        slug: generateSlug(value),
      }))
    }
  }

  const handleTranslationChange = (lang: string, field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      translations: {
        ...prev.translations,
        [lang]: {
          ...prev.translations[lang],
          [field]: value,
        },
      },
    }))
  }

  const addLanguage = (lang: string) => {
    if (!formData.translations[lang]) {
      setFormData((prev) => ({
        ...prev,
        translations: {
          ...prev.translations,
          [lang]: { name: "", description: "", content_html: "", meta_title: "", meta_description: "" },
        },
      }))
      setActiveTab(lang)
    }
  }

  const addAffiliateLink = () => {
    setFormData((prev) => ({
      ...prev,
      affiliate_links: [
        ...prev.affiliate_links,
        { partner: "ticketmaster", url: "", price_from: null, is_active: true, priority: prev.affiliate_links.length },
      ],
    }))
  }

  const updateAffiliateLink = (index: number, field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      affiliate_links: prev.affiliate_links.map((link, i) =>
        i === index ? { ...link, [field]: value } : link
      ),
    }))
  }

  const removeAffiliateLink = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      affiliate_links: prev.affiliate_links.filter((_, i) => i !== index),
    }))
  }

  const handleSave = async () => {
    setSaving(true)

    try {
      const supabase = createClient()

      const teamData = {
        slug: formData.slug,
        team_type: formData.team_type,
        sport_type: formData.sport_type,
        country_code: formData.country_code || null,
        logo_url: formData.logo_url || null,
        status: formData.status,
        is_featured: formData.is_featured,
        is_hot: formData.is_hot,
      }

      let teamId = id

      if (isNew) {
        const { data: newTeam, error: createError } = await supabase
          .from("teams")
          .insert(teamData)
          .select("id")
          .single()

        if (createError) throw createError
        teamId = newTeam.id
      } else {
        const { error: updateError } = await supabase
          .from("teams")
          .update(teamData)
          .eq("id", id)

        if (updateError) throw updateError

        // Delete existing translations
        await supabase
          .from("translations")
          .delete()
          .eq("entity_type", "team")
          .eq("entity_id", id)

        // Delete existing page content
        await supabase
          .from("page_content")
          .delete()
          .eq("entity_type", "team")
          .eq("entity_id", id)

        // Delete existing affiliate links
        await supabase
          .from("affiliate_links")
          .delete()
          .eq("entity_type", "team")
          .eq("entity_id", id)
      }

      // Insert translations
      const translationInserts = Object.entries(formData.translations)
        .filter(([_, t]) => t.name)
        .map(([lang, t]) => ({
          entity_type: "team",
          entity_id: teamId,
          language: lang,
          name: t.name,
          description: t.description || null,
          meta_title: t.meta_title || null,
          meta_description: t.meta_description || null,
        }))

      if (translationInserts.length > 0) {
        const { error: transError } = await supabase
          .from("translations")
          .insert(translationInserts)

        if (transError) throw transError
      }

      // Insert page content for rich text
      const pageContentInserts = Object.entries(formData.translations)
        .filter(([_, t]) => t.content_html)
        .map(([lang, t]) => ({
          entity_type: "team",
          entity_id: teamId,
          language: lang,
          content_html: t.content_html,
          meta_title: t.meta_title || null,
          meta_description: t.meta_description || null,
        }))

      if (pageContentInserts.length > 0) {
        const { error: contentError } = await supabase
          .from("page_content")
          .insert(pageContentInserts)

        if (contentError) throw contentError
      }

      // Insert affiliate links
      if (formData.affiliate_links.length > 0) {
        const affiliateInserts = formData.affiliate_links
          .filter((link) => link.url)
          .map((link, index) => ({
            entity_type: "team",
            entity_id: teamId,
            partner: link.partner,
            url: link.url,
            price_from: link.price_from,
            is_active: link.is_active,
            priority: index,
            source_type: "manual",
          }))

        if (affiliateInserts.length > 0) {
          const { error: affError } = await supabase
            .from("affiliate_links")
            .insert(affiliateInserts)

          if (affError) throw affError
        }
      }

      router.push("/admin/teams")
    } catch (error) {
      console.error("Error saving team:", error)
      alert("Failed to save team")
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="flex-1">
        <AdminHeader title={isNew ? "Add Team" : "Edit Team"} />
        <div className="flex items-center justify-center p-12">
          <Loader2 className="h-8 w-8 animate-spin text-slate-400" />
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1">
      <AdminHeader title={isNew ? "Add Team" : "Edit Team"} />

      <div className="p-6">
        {/* Back button and save */}
        <div className="mb-6 flex items-center justify-between">
          <Button variant="ghost" asChild>
            <Link href="/admin/teams">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Teams
            </Link>
          </Button>

          <Button onClick={handleSave} disabled={saving}>
            {saving ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <Save className="mr-2 h-4 w-4" />
                Save Team
              </>
            )}
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Info & Content */}
            <Card>
              <CardHeader>
                <CardTitle>Content</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <div className="flex items-center justify-between mb-4">
                    <TabsList>
                      {Object.keys(formData.translations).map((lang) => (
                        <TabsTrigger key={lang} value={lang}>
                          {LANGUAGES.find((l) => l.code === lang)?.name || lang}
                        </TabsTrigger>
                      ))}
                    </TabsList>

                    <Select onValueChange={addLanguage}>
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Add language" />
                      </SelectTrigger>
                      <SelectContent>
                        {LANGUAGES.filter(
                          (l) => !formData.translations[l.code]
                        ).map((lang) => (
                          <SelectItem key={lang.code} value={lang.code}>
                            {lang.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {Object.keys(formData.translations).map((lang) => (
                    <TabsContent key={lang} value={lang} className="space-y-4">
                      <div className="space-y-2">
                        <Label>Name *</Label>
                        <Input
                          value={formData.translations[lang]?.name || ""}
                          onChange={(e) => handleNameChange(lang, e.target.value)}
                          placeholder="e.g., Argentina National Team"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>Short Description</Label>
                        <Textarea
                          value={formData.translations[lang]?.description || ""}
                          onChange={(e) =>
                            handleTranslationChange(lang, "description", e.target.value)
                          }
                          rows={3}
                          placeholder="Brief description for listings..."
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>Article Content</Label>
                        <p className="text-sm text-slate-500 mb-2">
                          Write comprehensive content about this team for SEO
                        </p>
                        <RichTextEditor
                          content={formData.translations[lang]?.content_html || ""}
                          onChange={(html) =>
                            handleTranslationChange(lang, "content_html", html)
                          }
                          placeholder="Write detailed content about the team, their history, key players, achievements..."
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Meta Title (SEO)</Label>
                          <Input
                            value={formData.translations[lang]?.meta_title || ""}
                            onChange={(e) =>
                              handleTranslationChange(lang, "meta_title", e.target.value)
                            }
                            placeholder="SEO title"
                            maxLength={70}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label>Meta Description (SEO)</Label>
                          <Textarea
                            value={formData.translations[lang]?.meta_description || ""}
                            onChange={(e) =>
                              handleTranslationChange(lang, "meta_description", e.target.value)
                            }
                            rows={2}
                            placeholder="SEO description"
                            maxLength={170}
                          />
                        </div>
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>

            {/* Affiliate Links */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Affiliate Links</CardTitle>
                <Button size="sm" onClick={addAffiliateLink}>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Link
                </Button>
              </CardHeader>
              <CardContent>
                {formData.affiliate_links.length === 0 ? (
                  <div className="text-center py-6 text-slate-500">
                    <p>No affiliate links added yet</p>
                    <Button variant="outline" size="sm" className="mt-2" onClick={addAffiliateLink}>
                      <Plus className="mr-2 h-4 w-4" />
                      Add your first link
                    </Button>
                  </div>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Partner</TableHead>
                        <TableHead>URL</TableHead>
                        <TableHead>Price From</TableHead>
                        <TableHead>Active</TableHead>
                        <TableHead></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {formData.affiliate_links.map((link, index) => (
                        <TableRow key={index}>
                          <TableCell>
                            <Select
                              value={link.partner}
                              onValueChange={(value) =>
                                updateAffiliateLink(index, "partner", value)
                              }
                            >
                              <SelectTrigger className="w-32">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                {AFFILIATE_PARTNERS.map((p) => (
                                  <SelectItem key={p.value} value={p.value}>
                                    {p.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Input
                                value={link.url}
                                onChange={(e) =>
                                  updateAffiliateLink(index, "url", e.target.value)
                                }
                                placeholder="https://..."
                                className="min-w-[200px]"
                              />
                              {link.url && (
                                <a
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-500 hover:text-blue-600"
                                >
                                  <ExternalLink className="h-4 w-4" />
                                </a>
                              )}
                            </div>
                          </TableCell>
                          <TableCell>
                            <Input
                              type="number"
                              value={link.price_from || ""}
                              onChange={(e) =>
                                updateAffiliateLink(
                                  index,
                                  "price_from",
                                  e.target.value ? parseFloat(e.target.value) : null
                                )
                              }
                              placeholder="$"
                              className="w-24"
                            />
                          </TableCell>
                          <TableCell>
                            <Switch
                              checked={link.is_active}
                              onCheckedChange={(checked) =>
                                updateAffiliateLink(index, "is_active", checked)
                              }
                            />
                          </TableCell>
                          <TableCell>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => removeAffiliateLink(index)}
                            >
                              <Trash2 className="h-4 w-4 text-red-500" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Settings */}
            <Card>
              <CardHeader>
                <CardTitle>Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Slug *</Label>
                  <Input
                    value={formData.slug}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, slug: e.target.value }))
                    }
                    placeholder="team-name-tickets"
                  />
                  <p className="text-xs text-slate-500">
                    URL: /{formData.slug || "..."}
                  </p>
                </div>

                <div className="space-y-2">
                  <Label>Team Type *</Label>
                  <Select
                    value={formData.team_type}
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, team_type: value }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {TEAM_TYPES.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Sport Type *</Label>
                  <Select
                    value={formData.sport_type}
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, sport_type: value }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {SPORT_TYPES.map((sport) => (
                        <SelectItem key={sport.value} value={sport.value}>
                          {sport.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Country Code</Label>
                  <Input
                    value={formData.country_code}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        country_code: e.target.value.toUpperCase(),
                      }))
                    }
                    placeholder="AR, BR, US, etc."
                    maxLength={2}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Logo URL</Label>
                  <Input
                    value={formData.logo_url}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, logo_url: e.target.value }))
                    }
                    placeholder="https://..."
                  />
                  {formData.logo_url && (
                    <img
                      src={formData.logo_url}
                      alt="Logo preview"
                      className="w-16 h-16 object-contain rounded mt-2"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none"
                      }}
                    />
                  )}
                </div>

                <div className="space-y-2">
                  <Label>Status *</Label>
                  <Select
                    value={formData.status}
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, status: value }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="published">Published</SelectItem>
                      <SelectItem value="archived">Archived</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Visibility */}
            <Card>
              <CardHeader>
                <CardTitle>Visibility</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Featured</Label>
                    <p className="text-sm text-slate-500">Show on homepage</p>
                  </div>
                  <Switch
                    checked={formData.is_featured}
                    onCheckedChange={(checked) =>
                      setFormData((prev) => ({ ...prev, is_featured: checked }))
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Hot</Label>
                    <p className="text-sm text-slate-500">Mark as popular</p>
                  </div>
                  <Switch
                    checked={formData.is_hot}
                    onCheckedChange={(checked) =>
                      setFormData((prev) => ({ ...prev, is_hot: checked }))
                    }
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
