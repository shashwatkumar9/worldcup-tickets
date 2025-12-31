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
      meta_title: string
      meta_description: string
    }
  }
}

export default function TeamEditPage({ params }: PageProps) {
  const { id } = use(params)
  const isNew = id === "new"
  const router = useRouter()

  const [loading, setLoading] = useState(!isNew)
  const [saving, setSaving] = useState(false)
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
      en: { name: "", description: "", meta_title: "", meta_description: "" },
    },
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
        translations(*)
      `)
      .eq("id", id)
      .single()

    if (error || !team) {
      console.error("Error fetching team:", error)
      router.push("/admin/teams")
      return
    }

    const translations: TeamFormData["translations"] = {}
    team.translations?.forEach((t: any) => {
      translations[t.language] = {
        name: t.name || "",
        description: t.description || "",
        meta_title: t.meta_title || "",
        meta_description: t.meta_description || "",
      }
    })

    // Ensure English translation exists
    if (!translations.en) {
      translations.en = { name: "", description: "", meta_title: "", meta_description: "" }
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

    // Auto-generate slug from English name
    if (lang === "en" && isNew) {
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
            {/* Translations */}
            <Card>
              <CardHeader>
                <CardTitle>Content</CardTitle>
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
                        <Label>Name *</Label>
                        <Input
                          value={formData.translations[lang]?.name || ""}
                          onChange={(e) =>
                            handleNameChange(lang, e.target.value)
                          }
                          placeholder="e.g., Argentina National Team"
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
                          placeholder="Team description..."
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
                    placeholder="team-name-tickets"
                  />
                  <p className="text-xs text-slate-500">
                    URL-friendly identifier (must end with -tickets)
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

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Hot</Label>
                    <p className="text-sm text-slate-500">
                      Mark as popular
                    </p>
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
