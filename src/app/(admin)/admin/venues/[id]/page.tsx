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

const VENUE_TYPES = [
  { value: "stadium", label: "Stadium" },
  { value: "arena", label: "Arena" },
  { value: "multi_purpose", label: "Multi-Purpose" },
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

interface VenueFormData {
  slug: string
  name: string
  city: string
  state: string
  country: string
  country_code: string
  address: string
  capacity: number | null
  venue_type: string
  main_image_url: string
  latitude: number | null
  longitude: number | null
  timezone: string
  status: string
  is_featured: boolean
  is_world_cup_venue: boolean
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

export default function VenueEditPage({ params }: PageProps) {
  const { id } = use(params)
  const isNew = id === "new"
  const router = useRouter()

  const [loading, setLoading] = useState(!isNew)
  const [saving, setSaving] = useState(false)
  const [activeTab, setActiveTab] = useState("en")
  const [formData, setFormData] = useState<VenueFormData>({
    slug: "",
    name: "",
    city: "",
    state: "",
    country: "United States",
    country_code: "US",
    address: "",
    capacity: null,
    venue_type: "stadium",
    main_image_url: "",
    latitude: null,
    longitude: null,
    timezone: "America/New_York",
    status: "draft",
    is_featured: false,
    is_world_cup_venue: true,
    translations: {
      en: { name: "", description: "", content_html: "", meta_title: "", meta_description: "" },
    },
    affiliate_links: [],
  })

  useEffect(() => {
    if (!isNew) {
      fetchVenue()
    }
  }, [id, isNew])

  const fetchVenue = async () => {
    const supabase = createClient()

    const { data: venue, error } = await supabase
      .from("venues")
      .select(`*, translations(*), page_content:page_content(*)`)
      .eq("id", id)
      .single()

    if (error || !venue) {
      console.error("Error fetching venue:", error)
      router.push("/admin/venues")
      return
    }

    const { data: affiliateLinks } = await supabase
      .from("affiliate_links")
      .select("*")
      .eq("entity_type", "venue")
      .eq("entity_id", id)
      .order("priority", { ascending: false })

    const translations: VenueFormData["translations"] = {}
    venue.translations?.forEach((t: any) => {
      const pageContent = venue.page_content?.find((p: any) => p.language === t.language)
      translations[t.language] = {
        name: t.name || "",
        description: t.description || "",
        content_html: pageContent?.content_html || "",
        meta_title: t.meta_title || "",
        meta_description: t.meta_description || "",
      }
    })

    if (!translations.en) {
      translations.en = { name: "", description: "", content_html: "", meta_title: "", meta_description: "" }
    }

    setFormData({
      slug: venue.slug,
      name: venue.name,
      city: venue.city || "",
      state: venue.state || "",
      country: venue.country || "United States",
      country_code: venue.country_code || "US",
      address: venue.address || "",
      capacity: venue.capacity,
      venue_type: venue.venue_type || "stadium",
      main_image_url: venue.main_image_url || "",
      latitude: venue.latitude,
      longitude: venue.longitude,
      timezone: venue.timezone || "America/New_York",
      status: venue.status,
      is_featured: venue.is_featured,
      is_world_cup_venue: venue.is_world_cup_venue,
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
    return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") + "-tickets"
  }

  const handleNameChange = (value: string) => {
    setFormData((prev) => ({ ...prev, name: value }))
    if (isNew) {
      setFormData((prev) => ({ ...prev, slug: generateSlug(value) }))
    }
  }

  const handleTranslationChange = (lang: string, field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      translations: {
        ...prev.translations,
        [lang]: { ...prev.translations[lang], [field]: value },
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
      affiliate_links: prev.affiliate_links.map((link, i) => (i === index ? { ...link, [field]: value } : link)),
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

      const venueData = {
        slug: formData.slug,
        name: formData.name,
        city: formData.city || null,
        state: formData.state || null,
        country: formData.country || null,
        country_code: formData.country_code || null,
        address: formData.address || null,
        capacity: formData.capacity,
        venue_type: formData.venue_type,
        main_image_url: formData.main_image_url || null,
        latitude: formData.latitude,
        longitude: formData.longitude,
        timezone: formData.timezone || null,
        status: formData.status,
        is_featured: formData.is_featured,
        is_world_cup_venue: formData.is_world_cup_venue,
      }

      let venueId = id

      if (isNew) {
        const { data: newVenue, error: createError } = await supabase.from("venues").insert(venueData).select("id").single()
        if (createError) throw createError
        venueId = newVenue.id
      } else {
        const { error: updateError } = await supabase.from("venues").update(venueData).eq("id", id)
        if (updateError) throw updateError
        await supabase.from("translations").delete().eq("entity_type", "venue").eq("entity_id", id)
        await supabase.from("page_content").delete().eq("entity_type", "venue").eq("entity_id", id)
        await supabase.from("affiliate_links").delete().eq("entity_type", "venue").eq("entity_id", id)
      }

      const translationInserts = Object.entries(formData.translations)
        .filter(([_, t]) => t.name || t.description)
        .map(([lang, t]) => ({
          entity_type: "venue",
          entity_id: venueId,
          language: lang,
          name: t.name || null,
          description: t.description || null,
          meta_title: t.meta_title || null,
          meta_description: t.meta_description || null,
        }))

      if (translationInserts.length > 0) {
        await supabase.from("translations").insert(translationInserts)
      }

      const pageContentInserts = Object.entries(formData.translations)
        .filter(([_, t]) => t.content_html)
        .map(([lang, t]) => ({
          entity_type: "venue",
          entity_id: venueId,
          language: lang,
          content_html: t.content_html,
          meta_title: t.meta_title || null,
          meta_description: t.meta_description || null,
        }))

      if (pageContentInserts.length > 0) {
        await supabase.from("page_content").insert(pageContentInserts)
      }

      if (formData.affiliate_links.length > 0) {
        const affiliateInserts = formData.affiliate_links
          .filter((link) => link.url)
          .map((link, index) => ({
            entity_type: "venue",
            entity_id: venueId,
            partner: link.partner,
            url: link.url,
            price_from: link.price_from,
            is_active: link.is_active,
            priority: index,
            source_type: "manual",
          }))
        if (affiliateInserts.length > 0) {
          await supabase.from("affiliate_links").insert(affiliateInserts)
        }
      }

      router.push("/admin/venues")
    } catch (error) {
      console.error("Error saving venue:", error)
      alert("Failed to save venue")
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="flex-1">
        <AdminHeader title={isNew ? "Add Venue" : "Edit Venue"} />
        <div className="flex items-center justify-center p-12">
          <Loader2 className="h-8 w-8 animate-spin text-slate-400" />
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1">
      <AdminHeader title={isNew ? "Add Venue" : "Edit Venue"} />
      <div className="p-6">
        <div className="mb-6 flex items-center justify-between">
          <Button variant="ghost" asChild>
            <Link href="/admin/venues"><ArrowLeft className="mr-2 h-4 w-4" />Back to Venues</Link>
          </Button>
          <Button onClick={handleSave} disabled={saving}>
            {saving ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Saving...</> : <><Save className="mr-2 h-4 w-4" />Save Venue</>}
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader><CardTitle>Basic Information</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Venue Name *</Label>
                  <Input value={formData.name} onChange={(e) => handleNameChange(e.target.value)} placeholder="e.g., MetLife Stadium" />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>City</Label>
                    <Input value={formData.city} onChange={(e) => setFormData((prev) => ({ ...prev, city: e.target.value }))} placeholder="East Rutherford" />
                  </div>
                  <div className="space-y-2">
                    <Label>State</Label>
                    <Input value={formData.state} onChange={(e) => setFormData((prev) => ({ ...prev, state: e.target.value }))} placeholder="New Jersey" />
                  </div>
                  <div className="space-y-2">
                    <Label>Country</Label>
                    <Input value={formData.country} onChange={(e) => setFormData((prev) => ({ ...prev, country: e.target.value }))} placeholder="United States" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Capacity</Label>
                    <Input type="number" value={formData.capacity || ""} onChange={(e) => setFormData((prev) => ({ ...prev, capacity: e.target.value ? parseInt(e.target.value) : null }))} placeholder="82500" />
                  </div>
                  <div className="space-y-2">
                    <Label>Timezone</Label>
                    <Input value={formData.timezone} onChange={(e) => setFormData((prev) => ({ ...prev, timezone: e.target.value }))} placeholder="America/New_York" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Content</CardTitle></CardHeader>
              <CardContent>
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <div className="flex items-center justify-between mb-4">
                    <TabsList>
                      {Object.keys(formData.translations).map((lang) => (
                        <TabsTrigger key={lang} value={lang}>{LANGUAGES.find((l) => l.code === lang)?.name || lang}</TabsTrigger>
                      ))}
                    </TabsList>
                    <Select onValueChange={addLanguage}>
                      <SelectTrigger className="w-40"><SelectValue placeholder="Add language" /></SelectTrigger>
                      <SelectContent>
                        {LANGUAGES.filter((l) => !formData.translations[l.code]).map((lang) => (
                          <SelectItem key={lang.code} value={lang.code}>{lang.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  {Object.keys(formData.translations).map((lang) => (
                    <TabsContent key={lang} value={lang} className="space-y-4">
                      <div className="space-y-2">
                        <Label>Display Name</Label>
                        <Input value={formData.translations[lang]?.name || ""} onChange={(e) => handleTranslationChange(lang, "name", e.target.value)} placeholder="Localized venue name" />
                      </div>
                      <div className="space-y-2">
                        <Label>Short Description</Label>
                        <Textarea value={formData.translations[lang]?.description || ""} onChange={(e) => handleTranslationChange(lang, "description", e.target.value)} rows={3} placeholder="Brief description..." />
                      </div>
                      <div className="space-y-2">
                        <Label>Article Content</Label>
                        <p className="text-sm text-slate-500 mb-2">Write detailed venue guide with internal links to matches hosted here</p>
                        <RichTextEditor content={formData.translations[lang]?.content_html || ""} onChange={(html) => handleTranslationChange(lang, "content_html", html)} placeholder="Write comprehensive venue information, travel guide, seating info..." />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Meta Title (SEO)</Label>
                          <Input value={formData.translations[lang]?.meta_title || ""} onChange={(e) => handleTranslationChange(lang, "meta_title", e.target.value)} maxLength={70} />
                        </div>
                        <div className="space-y-2">
                          <Label>Meta Description (SEO)</Label>
                          <Textarea value={formData.translations[lang]?.meta_description || ""} onChange={(e) => handleTranslationChange(lang, "meta_description", e.target.value)} rows={2} maxLength={170} />
                        </div>
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Affiliate Links</CardTitle>
                <Button size="sm" onClick={addAffiliateLink}><Plus className="mr-2 h-4 w-4" />Add Link</Button>
              </CardHeader>
              <CardContent>
                {formData.affiliate_links.length === 0 ? (
                  <div className="text-center py-6 text-slate-500">
                    <p>No affiliate links added yet</p>
                    <Button variant="outline" size="sm" className="mt-2" onClick={addAffiliateLink}><Plus className="mr-2 h-4 w-4" />Add your first link</Button>
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
                            <Select value={link.partner} onValueChange={(value) => updateAffiliateLink(index, "partner", value)}>
                              <SelectTrigger className="w-32"><SelectValue /></SelectTrigger>
                              <SelectContent>{AFFILIATE_PARTNERS.map((p) => (<SelectItem key={p.value} value={p.value}>{p.label}</SelectItem>))}</SelectContent>
                            </Select>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Input value={link.url} onChange={(e) => updateAffiliateLink(index, "url", e.target.value)} placeholder="https://..." className="min-w-[200px]" />
                              {link.url && (<a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-500"><ExternalLink className="h-4 w-4" /></a>)}
                            </div>
                          </TableCell>
                          <TableCell><Input type="number" value={link.price_from || ""} onChange={(e) => updateAffiliateLink(index, "price_from", e.target.value ? parseFloat(e.target.value) : null)} placeholder="$" className="w-24" /></TableCell>
                          <TableCell><Switch checked={link.is_active} onCheckedChange={(checked) => updateAffiliateLink(index, "is_active", checked)} /></TableCell>
                          <TableCell><Button variant="ghost" size="icon" onClick={() => removeAffiliateLink(index)}><Trash2 className="h-4 w-4 text-red-500" /></Button></TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader><CardTitle>Settings</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Slug *</Label>
                  <Input value={formData.slug} onChange={(e) => setFormData((prev) => ({ ...prev, slug: e.target.value }))} placeholder="metlife-stadium-tickets" />
                  <p className="text-xs text-slate-500">/{formData.slug || "..."}</p>
                </div>
                <div className="space-y-2">
                  <Label>Venue Type *</Label>
                  <Select value={formData.venue_type} onValueChange={(value) => setFormData((prev) => ({ ...prev, venue_type: value }))}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>{VENUE_TYPES.map((type) => (<SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>))}</SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Image URL</Label>
                  <Input value={formData.main_image_url} onChange={(e) => setFormData((prev) => ({ ...prev, main_image_url: e.target.value }))} placeholder="https://..." />
                </div>
                <div className="space-y-2">
                  <Label>Status *</Label>
                  <Select value={formData.status} onValueChange={(value) => setFormData((prev) => ({ ...prev, status: value }))}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="published">Published</SelectItem>
                      <SelectItem value="archived">Archived</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Visibility</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div><Label>Featured</Label><p className="text-sm text-slate-500">Show on homepage</p></div>
                  <Switch checked={formData.is_featured} onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, is_featured: checked }))} />
                </div>
                <div className="flex items-center justify-between">
                  <div><Label>World Cup Venue</Label><p className="text-sm text-slate-500">Mark as WC 2026 host</p></div>
                  <Switch checked={formData.is_world_cup_venue} onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, is_world_cup_venue: checked }))} />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
