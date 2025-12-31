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

const FIXTURE_TYPES = [
  { value: "group_stage", label: "Group Stage" },
  { value: "round_of_32", label: "Round of 32" },
  { value: "round_of_16", label: "Round of 16" },
  { value: "quarter_final", label: "Quarter Final" },
  { value: "semi_final", label: "Semi Final" },
  { value: "third_place", label: "Third Place Playoff" },
  { value: "final", label: "Final" },
  { value: "friendly", label: "Friendly" },
  { value: "qualifier", label: "Qualifier" },
]

const FIXTURE_STATUSES = [
  { value: "scheduled", label: "Scheduled" },
  { value: "live", label: "Live" },
  { value: "completed", label: "Completed" },
  { value: "postponed", label: "Postponed" },
  { value: "cancelled", label: "Cancelled" },
]

interface FixtureFormData {
  slug: string
  fixture_type: string
  sport_type: string
  competition_id: string
  venue_id: string
  home_team_id: string
  away_team_id: string
  date: string
  time: string
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

interface SelectOption {
  id: string
  name: string
}

export default function FixtureEditPage({ params }: PageProps) {
  const { id } = use(params)
  const isNew = id === "new"
  const router = useRouter()

  const [loading, setLoading] = useState(!isNew)
  const [saving, setSaving] = useState(false)
  const [competitions, setCompetitions] = useState<SelectOption[]>([])
  const [venues, setVenues] = useState<SelectOption[]>([])
  const [teams, setTeams] = useState<SelectOption[]>([])
  const [formData, setFormData] = useState<FixtureFormData>({
    slug: "",
    fixture_type: "group_stage",
    sport_type: "football",
    competition_id: "",
    venue_id: "",
    home_team_id: "",
    away_team_id: "",
    date: "",
    time: "",
    status: "scheduled",
    is_featured: false,
    is_hot: false,
    translations: {
      en: { name: "", description: "", meta_title: "", meta_description: "" },
    },
  })

  useEffect(() => {
    fetchRelatedData()
    if (!isNew) {
      fetchFixture()
    }
  }, [id, isNew])

  const fetchRelatedData = async () => {
    const supabase = createClient()

    // Fetch competitions
    const { data: comps } = await supabase
      .from("competitions")
      .select("id, translations(name, language)")
      .eq("status", "published")

    if (comps) {
      setCompetitions(
        comps.map((c: any) => ({
          id: c.id,
          name: c.translations?.find((t: any) => t.language === "en")?.name || c.id,
        }))
      )
    }

    // Fetch venues
    const { data: venueData } = await supabase
      .from("venues")
      .select("id, name")
      .eq("status", "published")

    if (venueData) {
      setVenues(venueData.map((v: any) => ({ id: v.id, name: v.name })))
    }

    // Fetch teams
    const { data: teamData } = await supabase
      .from("teams")
      .select("id, translations(name, language)")
      .eq("status", "published")

    if (teamData) {
      setTeams(
        teamData.map((t: any) => ({
          id: t.id,
          name: t.translations?.find((tr: any) => tr.language === "en")?.name || t.id,
        }))
      )
    }
  }

  const fetchFixture = async () => {
    const supabase = createClient()

    const { data: fixture, error } = await supabase
      .from("fixtures")
      .select(`
        *,
        translations(*)
      `)
      .eq("id", id)
      .single()

    if (error || !fixture) {
      console.error("Error fetching fixture:", error)
      router.push("/admin/fixtures")
      return
    }

    const translations: FixtureFormData["translations"] = {}
    fixture.translations?.forEach((t: any) => {
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
      slug: fixture.slug,
      fixture_type: fixture.fixture_type,
      sport_type: fixture.sport_type,
      competition_id: fixture.competition_id || "",
      venue_id: fixture.venue_id || "",
      home_team_id: fixture.home_team_id || "",
      away_team_id: fixture.away_team_id || "",
      date: fixture.date || "",
      time: fixture.time || "",
      status: fixture.status,
      is_featured: fixture.is_featured,
      is_hot: fixture.is_hot,
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

      const fixtureData = {
        slug: formData.slug,
        fixture_type: formData.fixture_type,
        sport_type: formData.sport_type,
        competition_id: formData.competition_id || null,
        venue_id: formData.venue_id || null,
        home_team_id: formData.home_team_id || null,
        away_team_id: formData.away_team_id || null,
        date: formData.date || null,
        time: formData.time || null,
        status: formData.status,
        is_featured: formData.is_featured,
        is_hot: formData.is_hot,
      }

      let fixtureId = id

      if (isNew) {
        const { data: newFixture, error: createError } = await supabase
          .from("fixtures")
          .insert(fixtureData)
          .select("id")
          .single()

        if (createError) throw createError
        fixtureId = newFixture.id
      } else {
        const { error: updateError } = await supabase
          .from("fixtures")
          .update(fixtureData)
          .eq("id", id)

        if (updateError) throw updateError

        await supabase
          .from("translations")
          .delete()
          .eq("entity_type", "fixture")
          .eq("entity_id", id)
      }

      const translationInserts = Object.entries(formData.translations)
        .filter(([_, t]) => t.name)
        .map(([lang, t]) => ({
          entity_type: "fixture",
          entity_id: fixtureId,
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

      router.push("/admin/fixtures")
    } catch (error) {
      console.error("Error saving fixture:", error)
      alert("Failed to save fixture")
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="flex-1">
        <AdminHeader title={isNew ? "Add Fixture" : "Edit Fixture"} />
        <div className="flex items-center justify-center p-12">
          <Loader2 className="h-8 w-8 animate-spin text-slate-400" />
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1">
      <AdminHeader title={isNew ? "Add Fixture" : "Edit Fixture"} />

      <div className="p-6">
        <div className="mb-6 flex items-center justify-between">
          <Button variant="ghost" asChild>
            <Link href="/admin/fixtures">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Fixtures
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
                Save Fixture
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
                          placeholder="e.g., USA vs Mexico - Group Stage"
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
                          placeholder="Fixture description..."
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

            {/* Teams */}
            <Card>
              <CardHeader>
                <CardTitle>Teams</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Home Team</Label>
                    <Select
                      value={formData.home_team_id}
                      onValueChange={(value) =>
                        setFormData((prev) => ({ ...prev, home_team_id: value }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select home team" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">None</SelectItem>
                        {teams.map((team) => (
                          <SelectItem key={team.id} value={team.id}>
                            {team.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Away Team</Label>
                    <Select
                      value={formData.away_team_id}
                      onValueChange={(value) =>
                        setFormData((prev) => ({ ...prev, away_team_id: value }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select away team" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">None</SelectItem>
                        {teams.map((team) => (
                          <SelectItem key={team.id} value={team.id}>
                            {team.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
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
                    placeholder="match-name-tickets"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Fixture Type *</Label>
                  <Select
                    value={formData.fixture_type}
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, fixture_type: value }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {FIXTURE_TYPES.map((type) => (
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
                  <Label>Competition</Label>
                  <Select
                    value={formData.competition_id}
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, competition_id: value }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select competition" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">None</SelectItem>
                      {competitions.map((comp) => (
                        <SelectItem key={comp.id} value={comp.id}>
                          {comp.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Venue</Label>
                  <Select
                    value={formData.venue_id}
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, venue_id: value }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select venue" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">None</SelectItem>
                      {venues.map((venue) => (
                        <SelectItem key={venue.id} value={venue.id}>
                          {venue.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Date</Label>
                    <Input
                      type="date"
                      value={formData.date}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, date: e.target.value }))
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Time</Label>
                    <Input
                      type="time"
                      value={formData.time}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, time: e.target.value }))
                      }
                    />
                  </div>
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
                      {FIXTURE_STATUSES.map((status) => (
                        <SelectItem key={status.value} value={status.value}>
                          {status.label}
                        </SelectItem>
                      ))}
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
                      Mark as trending
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
