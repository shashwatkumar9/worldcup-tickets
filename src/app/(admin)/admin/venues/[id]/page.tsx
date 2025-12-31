"use client"

import { useEffect, useState, use } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
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
import { ArrowLeft, Save, Loader2 } from "lucide-react"

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
]

const VENUE_TYPES = [
  { value: "stadium", label: "Stadium" },
  { value: "arena", label: "Arena" },
  { value: "court", label: "Court" },
  { value: "track", label: "Track" },
  { value: "pool", label: "Pool" },
  { value: "other", label: "Other" },
]

interface VenueFormData {
  slug: string
  name: string
  city: string
  country: string
  address: string
  capacity: number | null
  venue_type: string
  image_url: string
  latitude: number | null
  longitude: number | null
  status: string
  is_featured: boolean
  translations: {
    [key: string]: {
      name: string
      description: string
      meta_title: string
      meta_description: string
    }
  }
}

export default function VenueEditPage({ params }: PageProps) {
  const { id } = use(params)
  const isNew = id === "new"
  const router = useRouter()

  const [loading, setLoading] = useState(!isNew)
  const [saving, setSaving] = useState(false)
  const [formData, setFormData] = useState<VenueFormData>({
    slug: "",
    name: "",
    city: "",
    country: "",
    address: "",
    capacity: null,
    venue_type: "stadium",
    image_url: "",
    latitude: null,
    longitude: null,
    status: "draft",
    is_featured: false,
    translations: {
      en: { name: "", description: "", meta_title: "", meta_description: "" },
    },
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
      .select(`
        *,
        translations(*)
      `)
      .eq("id", id)
      .single()

    if (error || !venue) {
      console.error("Error fetching venue:", error)
      router.push("/admin/venues")
      return
    }

    const translations: VenueFormData["translations"] = {}
    venue.translations?.forEach((t: any) => {
      translations[t.language] = {
        name: t.name || "",
        description: t.description || "",
        meta_title: t.meta_title || "",
        meta_description: t.meta_description || "",
      }
    })

    if (!translations.en) {
      translations.en = { name: "", description: "", meta_title: "", meta_description: "" }
    }

    setFormData({
      slug: venue.slug,
      name: venue.name,
      city: venue.city || "",
      country: venue.country || "",
      address: venue.address || "",
      capacity: venue.capacity,
      venue_type: venue.venue_type,
      image_url: venue.image_url || "",
      latitude: venue.latitude,
      longitude: venue.longitude,
      status: venue.status,
      is_featured: venue.is_featured,
      translations,
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

  const handleNameChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      name: value,
    }))

    if (isNew) {
      setFormData((prev) => ({
        ...prev,
        slug: generateSlug(value),
      }))
    }
  }

  const handleTranslationChange = (
    lang: string,
    field: string,
    value: string
  ) => {
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
          [lang]: { name: "", description: "", meta_title: "", meta_description: "" },
        },
      }))
    }
  }

  const handleSave = async () => {
    setSaving(true)

    try {
      const supabase = createClient()

      const venueData = {
        slug: formData.slug,
        name: formData.name,
        city: formData.city || null,
        country: formData.country || null,
        address: formData.address || null,
        capacity: formData.capacity,
        venue_type: formData.venue_type,
        image_url: formData.image_url || null,
        latitude: formData.latitude,
        longitude: formData.longitude,
        status: formData.status,
        is_featured: formData.is_featured,
      }

      let venueId = id

      if (isNew) {
        const { data: newVenue, error: createError } = await supabase
          .from("venues")
          .insert(venueData)
          .select("id")
          .single()

        if (createError) throw createError
        venueId = newVenue.id
      } else {
        const { error: updateError } = await supabase
          .from("venues")
          .update(venueData)
          .eq("id", id)

        if (updateError) throw updateError

        await supabase
          .from("translations")
          .delete()
          .eq("entity_type", "venue")
          .eq("entity_id", id)
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
        const { error: transError } = await supabase
          .from("translations")
          .insert(translationInserts)

        if (transError) throw transError
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
            <Link href="/admin/venues">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Venues
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
                Save Venue
              </>
            )}
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Info */}
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Venue Name *</Label>
                  <Input
                    value={formData.name}
                    onChange={(e) => handleNameChange(e.target.value)}
                    placeholder="e.g., MetLife Stadium"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>City</Label>
                    <Input
                      value={formData.city}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, city: e.target.value }))
                      }
                      placeholder="e.g., New Jersey"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Country</Label>
                    <Input
                      value={formData.country}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, country: e.target.value }))
                      }
                      placeholder="e.g., United States"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Address</Label>
                  <Input
                    value={formData.address}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, address: e.target.value }))
                    }
                    placeholder="Full address"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Latitude</Label>
                    <Input
                      type="number"
                      step="any"
                      value={formData.latitude || ""}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          latitude: e.target.value ? parseFloat(e.target.value) : null,
                        }))
                      }
                      placeholder="40.8128"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Longitude</Label>
                    <Input
                      type="number"
                      step="any"
                      value={formData.longitude || ""}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          longitude: e.target.value ? parseFloat(e.target.value) : null,
                        }))
                      }
                      placeholder="-74.0742"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Translations */}
            <Card>
              <CardHeader>
                <CardTitle>Translations</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="en">
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
                        <Label>Display Name</Label>
                        <Input
                          value={formData.translations[lang]?.name || ""}
                          onChange={(e) =>
                            handleTranslationChange(lang, "name", e.target.value)
                          }
                          placeholder="Localized venue name"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>Description</Label>
                        <Textarea
                          value={formData.translations[lang]?.description || ""}
                          onChange={(e) =>
                            handleTranslationChange(
                              lang,
                              "description",
                              e.target.value
                            )
                          }
                          rows={4}
                          placeholder="Venue description..."
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>Meta Title (SEO)</Label>
                        <Input
                          value={formData.translations[lang]?.meta_title || ""}
                          onChange={(e) =>
                            handleTranslationChange(
                              lang,
                              "meta_title",
                              e.target.value
                            )
                          }
                          placeholder="SEO title for search engines"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>Meta Description (SEO)</Label>
                        <Textarea
                          value={
                            formData.translations[lang]?.meta_description || ""
                          }
                          onChange={(e) =>
                            handleTranslationChange(
                              lang,
                              "meta_description",
                              e.target.value
                            )
                          }
                          rows={2}
                          placeholder="SEO description for search engines"
                        />
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
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
                    placeholder="venue-name-tickets"
                  />
                  <p className="text-xs text-slate-500">
                    URL-friendly identifier (must end with -tickets)
                  </p>
                </div>

                <div className="space-y-2">
                  <Label>Venue Type *</Label>
                  <Select
                    value={formData.venue_type}
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, venue_type: value }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {VENUE_TYPES.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Capacity</Label>
                  <Input
                    type="number"
                    value={formData.capacity || ""}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        capacity: e.target.value ? parseInt(e.target.value) : null,
                      }))
                    }
                    placeholder="82500"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Image URL</Label>
                  <Input
                    value={formData.image_url}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, image_url: e.target.value }))
                    }
                    placeholder="https://..."
                  />
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
                    <p className="text-sm text-slate-500">
                      Show on homepage
                    </p>
                  </div>
                  <Switch
                    checked={formData.is_featured}
                    onCheckedChange={(checked) =>
                      setFormData((prev) => ({ ...prev, is_featured: checked }))
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
