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
import { ArrowLeft, Save, Loader2, X, Plus } from "lucide-react"
import { Badge } from "@/components/ui/badge"

// Dynamically import the editor to avoid SSR issues
const RichTextEditor = dynamic(
  () => import("@/components/ui/rich-text-editor"),
  { ssr: false, loading: () => <div className="h-[400px] bg-slate-800 rounded-lg animate-pulse" /> }
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

const CATEGORIES = [
  { value: "news", label: "News" },
  { value: "guide", label: "Guide" },
  { value: "travel", label: "Travel" },
  { value: "tickets", label: "Tickets" },
  { value: "teams", label: "Teams" },
  { value: "venues", label: "Venues" },
  { value: "analysis", label: "Analysis" },
  { value: "preview", label: "Preview" },
  { value: "review", label: "Review" },
]

interface BlogFormData {
  slug: string
  category: string
  status: string
  is_featured: boolean
  is_sticky: boolean
  featured_image_url: string
  tags: string[]
  competition_id: string | null
  team_id: string | null
  venue_id: string | null
  translations: {
    [key: string]: {
      title: string
      excerpt: string
      content_html: string
      meta_title: string
      meta_description: string
    }
  }
}

export default function BlogEditPage({ params }: PageProps) {
  const { id } = use(params)
  const isNew = id === "new"
  const router = useRouter()

  const [loading, setLoading] = useState(!isNew)
  const [saving, setSaving] = useState(false)
  const [newTag, setNewTag] = useState("")
  const [activeTab, setActiveTab] = useState("en")
  const [formData, setFormData] = useState<BlogFormData>({
    slug: "",
    category: "news",
    status: "draft",
    is_featured: false,
    is_sticky: false,
    featured_image_url: "",
    tags: [],
    competition_id: null,
    team_id: null,
    venue_id: null,
    translations: {
      en: {
        title: "",
        excerpt: "",
        content_html: "",
        meta_title: "",
        meta_description: "",
      },
    },
  })

  useEffect(() => {
    if (!isNew) {
      fetchPost()
    }
  }, [id, isNew])

  const fetchPost = async () => {
    const supabase = createClient()

    const { data: post, error } = await supabase
      .from("blog_posts")
      .select(`
        *,
        translations:blog_post_translations(*)
      `)
      .eq("id", id)
      .single()

    if (error || !post) {
      console.error("Error fetching blog post:", error)
      router.push("/admin/blog")
      return
    }

    const translations: BlogFormData["translations"] = {}
    post.translations?.forEach((t: any) => {
      translations[t.language] = {
        title: t.title || "",
        excerpt: t.excerpt || "",
        content_html: t.content_html || "",
        meta_title: t.meta_title || "",
        meta_description: t.meta_description || "",
      }
    })

    if (!translations.en) {
      translations.en = {
        title: "",
        excerpt: "",
        content_html: "",
        meta_title: "",
        meta_description: "",
      }
    }

    setFormData({
      slug: post.slug,
      category: post.category,
      status: post.status,
      is_featured: post.is_featured,
      is_sticky: post.is_sticky,
      featured_image_url: post.featured_image_url || "",
      tags: post.tags || [],
      competition_id: post.competition_id,
      team_id: post.team_id,
      venue_id: post.venue_id,
      translations,
    })
    setLoading(false)
  }

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
  }

  const handleTitleChange = (lang: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      translations: {
        ...prev.translations,
        [lang]: {
          ...prev.translations[lang],
          title: value,
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
          [lang]: {
            title: "",
            excerpt: "",
            content_html: "",
            meta_title: "",
            meta_description: "",
          },
        },
      }))
      setActiveTab(lang)
    }
  }

  const addTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()],
      }))
      setNewTag("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }))
  }

  const handleSave = async () => {
    setSaving(true)

    try {
      const supabase = createClient()

      const postData = {
        slug: formData.slug,
        category: formData.category,
        status: formData.status,
        is_featured: formData.is_featured,
        is_sticky: formData.is_sticky,
        featured_image_url: formData.featured_image_url || null,
        tags: formData.tags,
        competition_id: formData.competition_id,
        team_id: formData.team_id,
        venue_id: formData.venue_id,
        published_at: formData.status === "published" ? new Date().toISOString() : null,
      }

      let postId = id

      if (isNew) {
        const { data: newPost, error: createError } = await supabase
          .from("blog_posts")
          .insert(postData)
          .select("id")
          .single()

        if (createError) throw createError
        postId = newPost.id
      } else {
        const { error: updateError } = await supabase
          .from("blog_posts")
          .update(postData)
          .eq("id", id)

        if (updateError) throw updateError

        // Delete existing translations
        await supabase
          .from("blog_post_translations")
          .delete()
          .eq("blog_post_id", id)
      }

      // Insert translations
      const translationInserts = Object.entries(formData.translations)
        .filter(([_, t]) => t.title)
        .map(([lang, t]) => ({
          blog_post_id: postId,
          language: lang,
          title: t.title,
          excerpt: t.excerpt || null,
          content_html: t.content_html || "",
          meta_title: t.meta_title || null,
          meta_description: t.meta_description || null,
        }))

      if (translationInserts.length > 0) {
        const { error: transError } = await supabase
          .from("blog_post_translations")
          .insert(translationInserts)

        if (transError) throw transError
      }

      router.push("/admin/blog")
    } catch (error) {
      console.error("Error saving blog post:", error)
      alert("Failed to save blog post")
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="flex-1">
        <AdminHeader title={isNew ? "New Post" : "Edit Post"} />
        <div className="flex items-center justify-center p-12">
          <Loader2 className="h-8 w-8 animate-spin text-slate-400" />
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1">
      <AdminHeader title={isNew ? "New Post" : "Edit Post"} />

      <div className="p-6">
        {/* Back button and save */}
        <div className="mb-6 flex items-center justify-between">
          <Button variant="ghost" asChild>
            <Link href="/admin/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => {
                setFormData((prev) => ({ ...prev, status: "draft" }))
                handleSave()
              }}
              disabled={saving}
            >
              Save Draft
            </Button>
            <Button
              onClick={() => {
                setFormData((prev) => ({ ...prev, status: "published" }))
                handleSave()
              }}
              disabled={saving}
            >
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
            {/* Content Editor */}
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
                        <Label>Title *</Label>
                        <Input
                          value={formData.translations[lang]?.title || ""}
                          onChange={(e) => handleTitleChange(lang, e.target.value)}
                          placeholder="Enter blog post title..."
                          className="text-lg"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>Excerpt</Label>
                        <Textarea
                          value={formData.translations[lang]?.excerpt || ""}
                          onChange={(e) =>
                            handleTranslationChange(lang, "excerpt", e.target.value)
                          }
                          rows={3}
                          placeholder="Brief description for listings and SEO..."
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>Content *</Label>
                        <RichTextEditor
                          content={formData.translations[lang]?.content_html || ""}
                          onChange={(html) =>
                            handleTranslationChange(lang, "content_html", html)
                          }
                          placeholder="Write your blog post content here... Use the toolbar above for formatting, tables, images, and more."
                        />
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>

            {/* SEO Settings */}
            <Card>
              <CardHeader>
                <CardTitle>SEO Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="mb-4">
                    {Object.keys(formData.translations).map((lang) => (
                      <TabsTrigger key={lang} value={lang}>
                        {LANGUAGES.find((l) => l.code === lang)?.name || lang}
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  {Object.keys(formData.translations).map((lang) => (
                    <TabsContent key={lang} value={lang} className="space-y-4">
                      <div className="space-y-2">
                        <Label>Meta Title</Label>
                        <Input
                          value={formData.translations[lang]?.meta_title || ""}
                          onChange={(e) =>
                            handleTranslationChange(lang, "meta_title", e.target.value)
                          }
                          placeholder="SEO title for search engines"
                          maxLength={70}
                        />
                        <p className="text-xs text-slate-500">
                          {(formData.translations[lang]?.meta_title || "").length}/70 characters
                        </p>
                      </div>

                      <div className="space-y-2">
                        <Label>Meta Description</Label>
                        <Textarea
                          value={formData.translations[lang]?.meta_description || ""}
                          onChange={(e) =>
                            handleTranslationChange(lang, "meta_description", e.target.value)
                          }
                          rows={2}
                          placeholder="SEO description for search engines"
                          maxLength={170}
                        />
                        <p className="text-xs text-slate-500">
                          {(formData.translations[lang]?.meta_description || "").length}/170 characters
                        </p>
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Publish Settings */}
            <Card>
              <CardHeader>
                <CardTitle>Publish Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Slug *</Label>
                  <Input
                    value={formData.slug}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, slug: e.target.value }))
                    }
                    placeholder="url-friendly-slug"
                  />
                  <p className="text-xs text-slate-500">/blog/{formData.slug || "..."}</p>
                </div>

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
                      <SelectItem value="published">Published</SelectItem>
                      <SelectItem value="scheduled">Scheduled</SelectItem>
                      <SelectItem value="archived">Archived</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Featured Image */}
            <Card>
              <CardHeader>
                <CardTitle>Featured Image</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Input
                    value={formData.featured_image_url}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        featured_image_url: e.target.value,
                      }))
                    }
                    placeholder="https://..."
                  />
                  {formData.featured_image_url && (
                    <div className="mt-2">
                      <img
                        src={formData.featured_image_url}
                        alt="Featured"
                        className="w-full h-32 object-cover rounded-lg"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://placehold.co/400x200?text=Invalid+URL"
                        }}
                      />
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Tags */}
            <Card>
              <CardHeader>
                <CardTitle>Tags</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <Input
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      placeholder="Add tag..."
                      onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
                    />
                    <Button type="button" size="icon" onClick={addTag}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {formData.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="gap-1">
                        {tag}
                        <button
                          type="button"
                          onClick={() => removeTag(tag)}
                          className="ml-1 hover:text-red-500"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
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
                    <Label>Sticky</Label>
                    <p className="text-sm text-slate-500">Pin to top of list</p>
                  </div>
                  <Switch
                    checked={formData.is_sticky}
                    onCheckedChange={(checked) =>
                      setFormData((prev) => ({ ...prev, is_sticky: checked }))
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
