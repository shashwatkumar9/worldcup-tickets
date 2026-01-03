"use client"

import { useState } from "react"
import Link from "next/link"
import dynamic from "next/dynamic"
import { useParams } from "next/navigation"
import { AdminHeader } from "@/components/admin/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  ArrowLeft,
  Save,
  Eye,
  Upload,
  Globe,
  Link as LinkIcon,
  Check,
  X,
  Plus,
  Trash2,
  ExternalLink,
} from "lucide-react"

const RichTextEditor = dynamic(
  () => import("@/components/ui/rich-text-editor"),
  { ssr: false, loading: () => <div className="h-[400px] bg-slate-100 rounded-lg animate-pulse" /> }
)

const sportTypes = [
  { value: "football", label: "Football" },
  { value: "cricket", label: "Cricket" },
  { value: "basketball", label: "Basketball" },
  { value: "american_football", label: "American Football" },
  { value: "baseball", label: "Baseball" },
  { value: "ice_hockey", label: "Ice Hockey" },
  { value: "rugby", label: "Rugby" },
  { value: "tennis", label: "Tennis" },
  { value: "multi_sport", label: "Multi-Sport" },
  { value: "other", label: "Other" },
]

const competitionTypes = [
  { value: "world_cup", label: "World Cup" },
  { value: "olympics", label: "Olympics" },
  { value: "continental", label: "Continental" },
  { value: "league", label: "League" },
  { value: "tournament", label: "Tournament" },
  { value: "qualifier", label: "Qualifier" },
  { value: "friendly", label: "Friendly" },
]

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "de", name: "German", flag: "🇩🇪" },
  { code: "fr", name: "French", flag: "🇫🇷" },
  { code: "es", name: "Spanish", flag: "🇪🇸" },
  { code: "it", name: "Italian", flag: "🇮🇹" },
  { code: "ar", name: "Arabic", flag: "🇸🇦" },
]

const affiliatePartners = [
  { id: "ticketmaster", name: "Ticketmaster", logo: "🎫" },
  { id: "ticombo", name: "Ticombo", logo: "🎟️" },
  { id: "stubhub", name: "StubHub", logo: "🎫" },
  { id: "viagogo", name: "Viagogo", logo: "🎟️" },
  { id: "seatgeek", name: "SeatGeek", logo: "🎫" },
  { id: "vividseats", name: "Vivid Seats", logo: "🎟️" },
]

interface AffiliateLink {
  id: string
  partner: string
  url: string
  cta_text: string
  is_active: boolean
  priority: number
}

export default function CompetitionEditPage() {
  const params = useParams()
  const isNew = params.id === "new"

  const [formData, setFormData] = useState({
    name: isNew ? "" : "FIFA World Cup 2026",
    slug: isNew ? "" : "fifa-world-cup-2026-tickets",
    sport_type: isNew ? "" : "football",
    competition_type: isNew ? "" : "world_cup",
    start_date: isNew ? "" : "2026-06-11",
    end_date: isNew ? "" : "2026-07-19",
    status: isNew ? "draft" : "published",
    is_featured: !isNew,
    is_hot: !isNew,
    description: isNew
      ? ""
      : "The FIFA World Cup 2026 will be held across USA, Canada, and Mexico, featuring 48 teams in the expanded format.",
    host_countries: isNew ? [] : ["US", "CA", "MX"],
    content_html: isNew ? "" : "",
  })

  const [affiliateLinks, setAffiliateLinks] = useState<AffiliateLink[]>(isNew ? [] : [
    { id: "1", partner: "Ticketmaster", url: "https://www.ticketmaster.com/fifa-world-cup-2026", cta_text: "Buy on Ticketmaster", is_active: true, priority: 1 },
    { id: "2", partner: "StubHub", url: "https://www.stubhub.com/fifa-world-cup-2026", cta_text: "Buy on StubHub", is_active: true, priority: 2 },
    { id: "3", partner: "Viagogo", url: "https://www.viagogo.com/fifa-world-cup-2026", cta_text: "Buy on Viagogo", is_active: true, priority: 3 },
  ])

  const addAffiliateLink = () => {
    const newLink: AffiliateLink = {
      id: Date.now().toString(),
      partner: "",
      url: "",
      cta_text: "Buy Tickets",
      is_active: true,
      priority: affiliateLinks.length + 1,
    }
    setAffiliateLinks([...affiliateLinks, newLink])
  }

  const updateAffiliateLink = (id: string, field: keyof AffiliateLink, value: string | boolean | number) => {
    setAffiliateLinks(affiliateLinks.map(link =>
      link.id === id ? { ...link, [field]: value } : link
    ))
  }

  const removeAffiliateLink = (id: string) => {
    setAffiliateLinks(affiliateLinks.filter(link => link.id !== id))
  }

  const [translations, setTranslations] = useState({
    en: { name: "FIFA World Cup 2026", description: "", meta_title: "", meta_description: "", status: "complete" },
    de: { name: "FIFA Fußball-Weltmeisterschaft 2026", description: "", meta_title: "", meta_description: "", status: "complete" },
    fr: { name: "Coupe du Monde FIFA 2026", description: "", meta_title: "", meta_description: "", status: "complete" },
    es: { name: "Copa Mundial FIFA 2026", description: "", meta_title: "", meta_description: "", status: "partial" },
    it: { name: "Coppa del Mondo FIFA 2026", description: "", meta_title: "", meta_description: "", status: "missing" },
    ar: { name: "كأس العالم فيفا 2026", description: "", meta_title: "", meta_description: "", status: "missing" },
  })

  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim() + "-tickets"
  }

  return (
    <div>
      <AdminHeader title={isNew ? "New Competition" : "Edit Competition"} />

      <div className="p-6">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/admin/competitions">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">
                {isNew ? "New Competition" : formData.name}
              </h1>
              {!isNew && (
                <p className="text-sm text-slate-500">/{formData.slug}</p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-3">
            {!isNew && (
              <Link href={`/${formData.slug}`} target="_blank">
                <Button variant="outline">
                  <Eye className="mr-2 h-4 w-4" />
                  Preview
                </Button>
              </Link>
            )}
            <Button>
              <Save className="mr-2 h-4 w-4" />
              {isNew ? "Create" : "Save Changes"}
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="basic" className="space-y-6">
          <TabsList className="bg-white border flex-wrap">
            <TabsTrigger value="basic">Basic Info</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="translations">Translations</TabsTrigger>
            <TabsTrigger value="teams">Teams</TabsTrigger>
            <TabsTrigger value="fixtures">Fixtures</TabsTrigger>
            <TabsTrigger value="venues">Venues</TabsTrigger>
            <TabsTrigger value="links">Affiliate Links</TabsTrigger>
            <TabsTrigger value="seo">SEO</TabsTrigger>
          </TabsList>

          {/* Basic Info Tab */}
          <TabsContent value="basic">
            <div className="grid gap-6 lg:grid-cols-3">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Basic Information</CardTitle>
                    <CardDescription>
                      Core details about the competition
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => {
                            setFormData({
                              ...formData,
                              name: e.target.value,
                              slug: generateSlug(e.target.value),
                            })
                          }}
                          placeholder="FIFA World Cup 2026"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="slug">Slug * (must end with -tickets)</Label>
                        <Input
                          id="slug"
                          value={formData.slug}
                          onChange={(e) =>
                            setFormData({ ...formData, slug: e.target.value })
                          }
                          placeholder="fifa-world-cup-2026-tickets"
                        />
                        <p className="text-xs text-slate-500">
                          Preview: worldcup-tickets.net/{formData.slug}
                        </p>
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="sport_type">Sport Type *</Label>
                        <Select
                          value={formData.sport_type}
                          onValueChange={(value) =>
                            setFormData({ ...formData, sport_type: value })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select sport" />
                          </SelectTrigger>
                          <SelectContent>
                            {sportTypes.map((type) => (
                              <SelectItem key={type.value} value={type.value}>
                                {type.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="competition_type">Competition Type *</Label>
                        <Select
                          value={formData.competition_type}
                          onValueChange={(value) =>
                            setFormData({ ...formData, competition_type: value })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            {competitionTypes.map((type) => (
                              <SelectItem key={type.value} value={type.value}>
                                {type.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="start_date">Start Date *</Label>
                        <Input
                          id="start_date"
                          type="date"
                          value={formData.start_date}
                          onChange={(e) =>
                            setFormData({ ...formData, start_date: e.target.value })
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="end_date">End Date *</Label>
                        <Input
                          id="end_date"
                          type="date"
                          value={formData.end_date}
                          onChange={(e) =>
                            setFormData({ ...formData, end_date: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Short Description</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) =>
                          setFormData({ ...formData, description: e.target.value })
                        }
                        placeholder="Brief description of the competition..."
                        rows={3}
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Media</CardTitle>
                    <CardDescription>
                      Upload images for the competition
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-3">
                      <div className="space-y-2">
                        <Label>Logo</Label>
                        <div className="flex h-32 cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-slate-200 hover:border-slate-300">
                          <div className="text-center">
                            <Upload className="mx-auto h-8 w-8 text-slate-400" />
                            <p className="mt-2 text-sm text-slate-500">Upload</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Banner</Label>
                        <div className="flex h-32 cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-slate-200 hover:border-slate-300">
                          <div className="text-center">
                            <Upload className="mx-auto h-8 w-8 text-slate-400" />
                            <p className="mt-2 text-sm text-slate-500">Upload</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Thumbnail</Label>
                        <div className="flex h-32 cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-slate-200 hover:border-slate-300">
                          <div className="text-center">
                            <Upload className="mx-auto h-8 w-8 text-slate-400" />
                            <p className="mt-2 text-sm text-slate-500">Upload</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Status</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label>Publication Status</Label>
                      <Select
                        value={formData.status}
                        onValueChange={(value) =>
                          setFormData({ ...formData, status: value })
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

                <Card>
                  <CardHeader>
                    <CardTitle>Display Options</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="featured">Featured on Homepage</Label>
                      <Switch
                        id="featured"
                        checked={formData.is_featured}
                        onCheckedChange={(checked) =>
                          setFormData({ ...formData, is_featured: checked })
                        }
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="hot">Mark as &quot;Hot&quot;</Label>
                      <Switch
                        id="hot"
                        checked={formData.is_hot}
                        onCheckedChange={(checked) =>
                          setFormData({ ...formData, is_hot: checked })
                        }
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Host Countries</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Input placeholder="US, CA, MX" value={formData.host_countries.join(", ")} />
                    <p className="mt-2 text-xs text-slate-500">
                      Comma-separated country codes
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Content Tab */}
          <TabsContent value="content">
            <Card>
              <CardHeader>
                <CardTitle>Competition Article Content</CardTitle>
                <CardDescription>
                  Write comprehensive content for the competition page with rich formatting, tables, images, and internal links
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border bg-blue-50 p-4">
                    <h4 className="font-medium text-blue-900">Content Guidelines</h4>
                    <ul className="mt-2 text-sm text-blue-800 list-disc list-inside space-y-1">
                      <li>Write 1000+ words for optimal SEO performance</li>
                      <li>Include internal links to all 48 participating teams</li>
                      <li>Link to all 16 host venues across USA, Canada, and Mexico</li>
                      <li>Add tables for group stage draws and match schedules</li>
                      <li>Include ticket buying guide with affiliate CTAs</li>
                      <li>Add FAQs about tickets, travel, and accommodation</li>
                    </ul>
                  </div>
                  <RichTextEditor
                    content={formData.content_html}
                    onChange={(html) => setFormData({ ...formData, content_html: html })}
                    placeholder="Write your comprehensive World Cup 2026 article content here..."
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Translations Tab */}
          <TabsContent value="translations">
            <Card>
              <CardHeader>
                <CardTitle>Translations</CardTitle>
                <CardDescription>
                  Manage translations for all supported languages
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {languages.map((lang) => {
                    const translation = translations[lang.code as keyof typeof translations]
                    return (
                      <div
                        key={lang.code}
                        className="flex items-center justify-between rounded-lg border p-4"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{lang.flag}</span>
                          <div>
                            <p className="font-medium">{lang.name}</p>
                            <p className="text-sm text-slate-500">
                              {translation.name || "Not translated"}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          {translation.status === "complete" && (
                            <Badge variant="success">
                              <Check className="mr-1 h-3 w-3" />
                              Complete
                            </Badge>
                          )}
                          {translation.status === "partial" && (
                            <Badge variant="warning">Partial</Badge>
                          )}
                          {translation.status === "missing" && (
                            <Badge variant="secondary">
                              <X className="mr-1 h-3 w-3" />
                              Missing
                            </Badge>
                          )}
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Teams Tab */}
          <TabsContent value="teams">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Participating Teams</CardTitle>
                  <CardDescription>
                    Teams that are part of this competition
                  </CardDescription>
                </div>
                <Button>Add Teams</Button>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-500">
                  No teams added yet. Click &quot;Add Teams&quot; to add participating teams.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Fixtures Tab */}
          <TabsContent value="fixtures">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Fixtures</CardTitle>
                  <CardDescription>
                    Matches in this competition
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline">Import from API</Button>
                  <Button>Add Fixture</Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-500">
                  No fixtures added yet. Add fixtures manually or import from Ticketmaster API.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Venues Tab */}
          <TabsContent value="venues">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Host Venues</CardTitle>
                  <CardDescription>
                    Venues hosting this competition
                  </CardDescription>
                </div>
                <Button>Add Venues</Button>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-500">
                  No venues added yet. Click &quot;Add Venues&quot; to add host venues.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Affiliate Links Tab */}
          <TabsContent value="links">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Affiliate Links</CardTitle>
                  <CardDescription>
                    Manage affiliate links for ticket sales. Links are displayed in priority order.
                  </CardDescription>
                </div>
                <Button onClick={addAffiliateLink}>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Link
                </Button>
              </CardHeader>
              <CardContent>
                {affiliateLinks.length === 0 ? (
                  <div className="text-center py-8 text-slate-500">
                    <LinkIcon className="mx-auto h-12 w-12 text-slate-300 mb-3" />
                    <p>No affiliate links added yet.</p>
                    <p className="text-sm">Click &quot;Add Link&quot; to add your first affiliate link.</p>
                  </div>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[50px]">Priority</TableHead>
                        <TableHead className="w-[150px]">Partner</TableHead>
                        <TableHead>URL</TableHead>
                        <TableHead className="w-[180px]">CTA Text</TableHead>
                        <TableHead className="w-[80px]">Active</TableHead>
                        <TableHead className="w-[100px]">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {affiliateLinks.sort((a, b) => a.priority - b.priority).map((link) => (
                        <TableRow key={link.id}>
                          <TableCell>
                            <Input
                              type="number"
                              min="1"
                              value={link.priority}
                              onChange={(e) => updateAffiliateLink(link.id, "priority", parseInt(e.target.value) || 1)}
                              className="w-16 h-8"
                            />
                          </TableCell>
                          <TableCell>
                            <Select
                              value={link.partner}
                              onValueChange={(value) => updateAffiliateLink(link.id, "partner", value)}
                            >
                              <SelectTrigger className="h-8">
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                              <SelectContent>
                                {affiliatePartners.map((partner) => (
                                  <SelectItem key={partner.id} value={partner.name}>
                                    {partner.logo} {partner.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Input
                                value={link.url}
                                onChange={(e) => updateAffiliateLink(link.id, "url", e.target.value)}
                                placeholder="https://..."
                                className="h-8"
                              />
                              {link.url && (
                                <a href={link.url} target="_blank" rel="noopener noreferrer">
                                  <Button variant="ghost" size="icon" className="h-8 w-8">
                                    <ExternalLink className="h-4 w-4" />
                                  </Button>
                                </a>
                              )}
                            </div>
                          </TableCell>
                          <TableCell>
                            <Input
                              value={link.cta_text}
                              onChange={(e) => updateAffiliateLink(link.id, "cta_text", e.target.value)}
                              placeholder="Buy Tickets"
                              className="h-8"
                            />
                          </TableCell>
                          <TableCell>
                            <Switch
                              checked={link.is_active}
                              onCheckedChange={(checked) => updateAffiliateLink(link.id, "is_active", checked)}
                            />
                          </TableCell>
                          <TableCell>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 text-red-600 hover:text-red-700 hover:bg-red-50"
                              onClick={() => removeAffiliateLink(link.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
                <div className="mt-4 rounded-lg bg-amber-50 border border-amber-200 p-4">
                  <h4 className="font-medium text-amber-900">Available Affiliate Partners</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {affiliatePartners.map((partner) => (
                      <Badge key={partner.id} variant="outline" className="bg-white">
                        {partner.logo} {partner.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* SEO Tab */}
          <TabsContent value="seo">
            <Card>
              <CardHeader>
                <CardTitle>SEO Settings</CardTitle>
                <CardDescription>
                  Optimize for search engines
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="meta_title">Meta Title</Label>
                  <Input
                    id="meta_title"
                    placeholder="FIFA World Cup 2026 Tickets | WorldCup-Tickets.net"
                    maxLength={60}
                  />
                  <p className="text-xs text-slate-500">0/60 characters</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="meta_description">Meta Description</Label>
                  <Textarea
                    id="meta_description"
                    placeholder="Buy FIFA World Cup 2026 tickets. Compare prices from Ticketmaster, StubHub, Viagogo and more."
                    maxLength={160}
                    rows={3}
                  />
                  <p className="text-xs text-slate-500">0/160 characters</p>
                </div>
                <div className="rounded-lg bg-slate-50 p-4">
                  <p className="text-sm font-medium text-slate-700">Search Preview</p>
                  <div className="mt-2">
                    <p className="text-blue-600">FIFA World Cup 2026 Tickets | WorldCup-Tickets.net</p>
                    <p className="text-sm text-green-700">worldcup-tickets.net/{formData.slug}</p>
                    <p className="text-sm text-slate-600">
                      Buy FIFA World Cup 2026 tickets. Compare prices from Ticketmaster, StubHub, Viagogo and more.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
