"use client"

import { useEffect, useState, use } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import dynamic from "next/dynamic"
import { AdminHeader } from "@/components/admin/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ArrowLeft, Save, Loader2, Link as LinkIcon, Target, FileText } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

// Dynamically import the editor to avoid SSR issues
const RichTextEditor = dynamic(
  () => import("@/components/ui/rich-text-editor"),
  { ssr: false, loading: () => <div className="h-[500px] bg-slate-800 rounded-lg animate-pulse" /> }
)

interface PageProps {
  params: Promise<{ slug: string }>
}

interface ArticleFormData {
  title: string
  targetKeyword: string
  metaTitle: string
  metaDescription: string
  content: string
  status: string
  category: string
}

const CATEGORIES = [
  { value: "competition", label: "Competition" },
  { value: "team", label: "Team" },
  { value: "fixture", label: "Fixture" },
  { value: "group", label: "Group" },
  { value: "venue", label: "Venue" },
  { value: "travel", label: "Travel Guide" },
]

// Internal link data - organized by category
const INTERNAL_LINKS = {
  teams: [
    { label: "USA World Cup 2026 Tickets", href: "/teams/usa-world-cup-2026-tickets" },
    { label: "Mexico World Cup 2026 Tickets", href: "/teams/mexico-world-cup-2026-tickets" },
    { label: "Canada World Cup 2026 Tickets", href: "/teams/canada-world-cup-2026-tickets" },
    { label: "Brazil World Cup 2026 Tickets", href: "/teams/brazil-world-cup-2026-tickets" },
    { label: "Argentina World Cup 2026 Tickets", href: "/teams/argentina-world-cup-2026-tickets" },
    { label: "France World Cup 2026 Tickets", href: "/teams/france-world-cup-2026-tickets" },
    { label: "England World Cup 2026 Tickets", href: "/teams/england-world-cup-2026-tickets" },
    { label: "Germany World Cup 2026 Tickets", href: "/teams/germany-world-cup-2026-tickets" },
    { label: "Spain World Cup 2026 Tickets", href: "/teams/spain-world-cup-2026-tickets" },
    { label: "Portugal World Cup 2026 Tickets", href: "/teams/portugal-world-cup-2026-tickets" },
    { label: "Netherlands World Cup 2026 Tickets", href: "/teams/netherlands-world-cup-2026-tickets" },
    { label: "Italy World Cup 2026 Tickets", href: "/teams/italy-world-cup-2026-tickets" },
    { label: "Belgium World Cup 2026 Tickets", href: "/teams/belgium-world-cup-2026-tickets" },
    { label: "Croatia World Cup 2026 Tickets", href: "/teams/croatia-world-cup-2026-tickets" },
    { label: "Morocco World Cup 2026 Tickets", href: "/teams/morocco-world-cup-2026-tickets" },
  ],
  venues: [
    { label: "MetLife Stadium World Cup 2026 Tickets", href: "/venues/metlife-stadium-world-cup-2026-tickets" },
    { label: "SoFi Stadium World Cup 2026 Tickets", href: "/venues/sofi-stadium-world-cup-2026-tickets" },
    { label: "AT&T Stadium World Cup 2026 Tickets", href: "/venues/att-stadium-world-cup-2026-tickets" },
    { label: "Mercedes-Benz Stadium World Cup 2026 Tickets", href: "/venues/mercedes-benz-stadium-world-cup-2026-tickets" },
    { label: "Hard Rock Stadium World Cup 2026 Tickets", href: "/venues/hard-rock-stadium-world-cup-2026-tickets" },
    { label: "NRG Stadium World Cup 2026 Tickets", href: "/venues/nrg-stadium-world-cup-2026-tickets" },
    { label: "Lincoln Financial Field World Cup 2026 Tickets", href: "/venues/lincoln-financial-field-world-cup-2026-tickets" },
    { label: "Lumen Field World Cup 2026 Tickets", href: "/venues/lumen-field-world-cup-2026-tickets" },
    { label: "Levi's Stadium World Cup 2026 Tickets", href: "/venues/levis-stadium-world-cup-2026-tickets" },
    { label: "Gillette Stadium World Cup 2026 Tickets", href: "/venues/gillette-stadium-world-cup-2026-tickets" },
    { label: "Arrowhead Stadium World Cup 2026 Tickets", href: "/venues/arrowhead-stadium-world-cup-2026-tickets" },
    { label: "Estadio Azteca World Cup 2026 Tickets", href: "/venues/estadio-azteca-world-cup-2026-tickets" },
    { label: "Estadio Akron World Cup 2026 Tickets", href: "/venues/estadio-akron-world-cup-2026-tickets" },
    { label: "Estadio BBVA World Cup 2026 Tickets", href: "/venues/estadio-bbva-world-cup-2026-tickets" },
    { label: "BMO Field World Cup 2026 Tickets", href: "/venues/bmo-field-world-cup-2026-tickets" },
    { label: "BC Place World Cup 2026 Tickets", href: "/venues/bc-place-world-cup-2026-tickets" },
  ],
  fixtures: [
    { label: "World Cup 2026 Final Tickets", href: "/fixtures/final-world-cup-2026-tickets" },
    { label: "Semi-Finals World Cup 2026 Tickets", href: "/fixtures/semi-finals-world-cup-2026-tickets" },
    { label: "Quarter-Finals World Cup 2026 Tickets", href: "/fixtures/quarter-finals-world-cup-2026-tickets" },
    { label: "Round of 16 World Cup 2026 Tickets", href: "/fixtures/round-of-16-world-cup-2026-tickets" },
    { label: "Round of 32 World Cup 2026 Tickets", href: "/fixtures/round-of-32-world-cup-2026-tickets" },
    { label: "Third Place World Cup 2026 Tickets", href: "/fixtures/third-place-world-cup-2026-tickets" },
    { label: "USA vs Mexico World Cup 2026 Tickets", href: "/fixtures/usa-vs-mexico-world-cup-2026-tickets" },
    { label: "Brazil vs Argentina World Cup 2026 Tickets", href: "/fixtures/brazil-vs-argentina-world-cup-2026-tickets" },
    { label: "England vs Germany World Cup 2026 Tickets", href: "/fixtures/england-vs-germany-world-cup-2026-tickets" },
    { label: "Argentina vs France World Cup 2026 Tickets", href: "/fixtures/argentina-vs-france-world-cup-2026-tickets" },
    { label: "Brazil vs Morocco World Cup 2026 Tickets", href: "/fixtures/brazil-vs-morocco-world-cup-2026-tickets" },
  ],
  groups: [
    { label: "Group A World Cup 2026 Tickets", href: "/fixtures/group-a-world-cup-2026-tickets" },
    { label: "Group B World Cup 2026 Tickets", href: "/fixtures/group-b-world-cup-2026-tickets" },
    { label: "Group C World Cup 2026 Tickets", href: "/fixtures/group-c-world-cup-2026-tickets" },
    { label: "Group D World Cup 2026 Tickets", href: "/fixtures/group-d-world-cup-2026-tickets" },
    { label: "Group E World Cup 2026 Tickets", href: "/fixtures/group-e-world-cup-2026-tickets" },
    { label: "Group F World Cup 2026 Tickets", href: "/fixtures/group-f-world-cup-2026-tickets" },
    { label: "Group G World Cup 2026 Tickets", href: "/fixtures/group-g-world-cup-2026-tickets" },
    { label: "Group H World Cup 2026 Tickets", href: "/fixtures/group-h-world-cup-2026-tickets" },
    { label: "Group I World Cup 2026 Tickets", href: "/fixtures/group-i-world-cup-2026-tickets" },
    { label: "Group J World Cup 2026 Tickets", href: "/fixtures/group-j-world-cup-2026-tickets" },
    { label: "Group K World Cup 2026 Tickets", href: "/fixtures/group-k-world-cup-2026-tickets" },
    { label: "Group L World Cup 2026 Tickets", href: "/fixtures/group-l-world-cup-2026-tickets" },
  ],
  travel: [
    { label: "New York World Cup 2026 City Guide", href: "/travel/new-york-world-cup-2026-city-guide" },
    { label: "Los Angeles World Cup 2026 City Guide", href: "/travel/los-angeles-world-cup-2026-city-guide" },
    { label: "Dallas World Cup 2026 City Guide", href: "/travel/dallas-world-cup-2026-city-guide" },
    { label: "Atlanta World Cup 2026 City Guide", href: "/travel/atlanta-world-cup-2026-city-guide" },
    { label: "Miami World Cup 2026 City Guide", href: "/travel/miami-world-cup-2026-city-guide" },
    { label: "Mexico City World Cup 2026 City Guide", href: "/travel/mexico-city-world-cup-2026-city-guide" },
    { label: "Toronto World Cup 2026 City Guide", href: "/travel/toronto-world-cup-2026-city-guide" },
    { label: "Vancouver World Cup 2026 City Guide", href: "/travel/vancouver-world-cup-2026-city-guide" },
  ],
}

export default function ArticleEditPage({ params }: PageProps) {
  const { slug } = use(params)
  const isNew = slug === "new"
  const router = useRouter()

  const [loading, setLoading] = useState(!isNew)
  const [saving, setSaving] = useState(false)
  const [linkDialogOpen, setLinkDialogOpen] = useState(false)
  const [linkSearch, setLinkSearch] = useState("")
  const [activeCategory, setActiveCategory] = useState<keyof typeof INTERNAL_LINKS>("teams")
  const [wordCount, setWordCount] = useState(0)
  const [formData, setFormData] = useState<ArticleFormData>({
    title: "",
    targetKeyword: "",
    metaTitle: "",
    metaDescription: "",
    content: "",
    status: "draft",
    category: "team",
  })

  useEffect(() => {
    if (!isNew) {
      fetchArticle()
    }
  }, [slug, isNew])

  useEffect(() => {
    // Count words in content
    const text = formData.content.replace(/<[^>]*>/g, "")
    const words = text.trim().split(/\s+/).filter(w => w.length > 0)
    setWordCount(words.length)
  }, [formData.content])

  const fetchArticle = async () => {
    try {
      const response = await fetch(`/api/articles/${slug}`)
      if (!response.ok) throw new Error("Article not found")
      const data = await response.json()
      setFormData(data)
    } catch (error) {
      console.error("Error fetching article:", error)
      router.push("/admin/articles")
    } finally {
      setLoading(false)
    }
  }

  const handleSave = async () => {
    setSaving(true)
    try {
      const response = await fetch(`/api/articles/${isNew ? "new" : slug}`, {
        method: isNew ? "POST" : "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error("Failed to save article")

      const result = await response.json()
      router.push("/admin/articles")
    } catch (error) {
      console.error("Error saving article:", error)
      alert("Failed to save article")
    } finally {
      setSaving(false)
    }
  }

  const insertInternalLink = (label: string, href: string) => {
    const linkMarkdown = `[${label}](${href})`
    setFormData((prev) => ({
      ...prev,
      content: prev.content + ` ${linkMarkdown}`,
    }))
    setLinkDialogOpen(false)
  }

  const filteredLinks = INTERNAL_LINKS[activeCategory].filter(link =>
    link.label.toLowerCase().includes(linkSearch.toLowerCase())
  )

  if (loading) {
    return (
      <div className="flex-1">
        <AdminHeader title={isNew ? "New Article" : "Edit Article"} />
        <div className="flex items-center justify-center p-12">
          <Loader2 className="h-8 w-8 animate-spin text-slate-400" />
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1">
      <AdminHeader title={isNew ? "New Article" : "Edit Article"} />

      <div className="p-6">
        {/* Header actions */}
        <div className="mb-6 flex items-center justify-between">
          <Button variant="ghost" asChild>
            <Link href="/admin/articles">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Articles
            </Link>
          </Button>

          <div className="flex gap-2">
            <Dialog open={linkDialogOpen} onOpenChange={setLinkDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <LinkIcon className="mr-2 h-4 w-4" />
                  Add Internal Link
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <DialogHeader>
                  <DialogTitle>Quick Add Internal Links</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Search links..."
                      value={linkSearch}
                      onChange={(e) => setLinkSearch(e.target.value)}
                      className="flex-1"
                    />
                  </div>

                  <div className="flex gap-2">
                    {(Object.keys(INTERNAL_LINKS) as Array<keyof typeof INTERNAL_LINKS>).map((cat) => (
                      <Button
                        key={cat}
                        variant={activeCategory === cat ? "default" : "outline"}
                        size="sm"
                        onClick={() => setActiveCategory(cat)}
                      >
                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                      </Button>
                    ))}
                  </div>

                  <ScrollArea className="h-96 border rounded-lg p-4">
                    <div className="space-y-2">
                      {filteredLinks.map((link) => (
                        <div
                          key={link.href}
                          className="flex items-center justify-between p-2 hover:bg-slate-50 rounded cursor-pointer"
                          onClick={() => insertInternalLink(link.label, link.href)}
                        >
                          <span className="text-sm">{link.label}</span>
                          <Badge variant="outline" className="text-xs">
                            {link.href}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </div>
              </DialogContent>
            </Dialog>

            <Button variant="outline" onClick={() => handleSave()} disabled={saving}>
              Save Draft
            </Button>
            <Button onClick={() => {
              setFormData((prev) => ({ ...prev, status: "published" }))
              handleSave()
            }} disabled={saving}>
              {saving ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  Publish
                </>
              )}
            </Button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Content</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Title *</Label>
                  <Input
                    value={formData.title}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, title: e.target.value }))
                    }
                    placeholder="Enter article title..."
                    className="text-lg"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Article Content *</Label>
                    <Badge variant="secondary">
                      <FileText className="h-3 w-3 mr-1" />
                      {wordCount.toLocaleString()} words
                    </Badge>
                  </div>
                  <RichTextEditor
                    content={formData.content}
                    onChange={(html) =>
                      setFormData((prev) => ({ ...prev, content: html }))
                    }
                    placeholder="Write your article content here... Use Markdown formatting or the toolbar above."
                  />
                  <p className="text-xs text-slate-500">
                    Target: 1500+ words for SEO optimization
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* SEO Settings */}
            <Card>
              <CardHeader>
                <CardTitle>SEO Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Target Keyword *</Label>
                  <div className="relative">
                    <Target className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <Input
                      value={formData.targetKeyword}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, targetKeyword: e.target.value }))
                      }
                      placeholder="e.g., USA World Cup 2026 Tickets"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Meta Title</Label>
                  <Input
                    value={formData.metaTitle}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, metaTitle: e.target.value }))
                    }
                    placeholder="SEO title for search engines"
                    maxLength={70}
                  />
                  <p className="text-xs text-slate-500">
                    {formData.metaTitle.length}/70 characters
                  </p>
                </div>

                <div className="space-y-2">
                  <Label>Meta Description</Label>
                  <Textarea
                    value={formData.metaDescription}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, metaDescription: e.target.value }))
                    }
                    rows={3}
                    placeholder="SEO description for search engines"
                    maxLength={170}
                  />
                  <p className="text-xs text-slate-500">
                    {formData.metaDescription.length}/170 characters
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Publish Settings */}
            <Card>
              <CardHeader>
                <CardTitle>Publish Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Category *</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, category: value }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {CATEGORIES.map((cat) => (
                        <SelectItem key={cat.value} value={cat.value}>
                          {cat.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Status</Label>
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
                      <SelectItem value="in-progress">In Progress</SelectItem>
                      <SelectItem value="published">Published</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Internal Links Guide */}
            <Card>
              <CardHeader>
                <CardTitle>Internal Linking Guide</CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-2">
                <p className="text-slate-600">
                  Use the "Add Internal Link" button to quickly insert links from:
                </p>
                <ul className="list-disc list-inside space-y-1 text-slate-600">
                  <li>Teams ({INTERNAL_LINKS.teams.length} links)</li>
                  <li>Venues ({INTERNAL_LINKS.venues.length} links)</li>
                  <li>Fixtures ({INTERNAL_LINKS.fixtures.length} links)</li>
                  <li>Groups ({INTERNAL_LINKS.groups.length} links)</li>
                  <li>Travel ({INTERNAL_LINKS.travel.length} links)</li>
                </ul>
                <p className="text-slate-600 mt-3">
                  Target: 15-30 internal links per article for optimal SEO.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
