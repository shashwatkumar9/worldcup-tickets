"use client"

import { use, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import { AdminHeader } from "@/components/admin/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { RichTextEditor } from "@/components/ui/rich-text-editor"
import { Save, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface PageContentForm {
  entity_type: string
  page_slug: string
  language: string
  content_html: string
  meta_title: string
  meta_description: string
  is_complete: boolean
}

export default function PageContentEditPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const router = useRouter()
  const isNew = resolvedParams.id === "new"

  const [loading, setLoading] = useState(!isNew)
  const [saving, setSaving] = useState(false)
  const [formData, setFormData] = useState<PageContentForm>({
    entity_type: "page",
    page_slug: "",
    language: "en",
    content_html: "",
    meta_title: "",
    meta_description: "",
    is_complete: false,
  })

  useEffect(() => {
    if (!isNew) {
      fetchContent()
    }
  }, [resolvedParams.id])

  const fetchContent = async () => {
    const supabase = createClient()
    const { data, error } = await supabase
      .from("page_content")
      .select("*")
      .eq("id", resolvedParams.id)
      .single()

    if (error) {
      console.error("Error fetching content:", error)
      alert("Failed to load content")
      router.push("/admin/page-content")
    } else {
      setFormData({
        entity_type: data.entity_type,
        page_slug: data.page_slug || "",
        language: data.language,
        content_html: data.content_html || "",
        meta_title: data.meta_title || "",
        meta_description: data.meta_description || "",
        is_complete: data.is_complete,
      })
    }
    setLoading(false)
  }

  const handleSave = async () => {
    // Validation
    if (formData.entity_type === "page" && !formData.page_slug) {
      alert("Page slug is required for page content")
      return
    }
    if (!formData.content_html) {
      alert("Content is required")
      return
    }

    setSaving(true)
    const supabase = createClient()

    const dataToSave = {
      entity_type: formData.entity_type,
      page_slug: formData.entity_type === "page" ? formData.page_slug : null,
      entity_id: null, // For now, only supporting page content
      language: formData.language,
      content_html: formData.content_html,
      meta_title: formData.meta_title || null,
      meta_description: formData.meta_description || null,
      is_complete: formData.is_complete,
      updated_at: new Date().toISOString(),
    }

    if (isNew) {
      const { data, error } = await supabase
        .from("page_content")
        .insert(dataToSave)
        .select()
        .single()

      if (error) {
        console.error("Error creating content:", error)
        alert(`Failed to create content: ${error.message}`)
      } else {
        alert("Content created successfully!")
        router.push("/admin/page-content")
      }
    } else {
      const { error } = await supabase
        .from("page_content")
        .update(dataToSave)
        .eq("id", resolvedParams.id)

      if (error) {
        console.error("Error updating content:", error)
        alert(`Failed to update content: ${error.message}`)
      } else {
        alert("Content updated successfully!")
        router.push("/admin/page-content")
      }
    }

    setSaving(false)
  }

  if (loading) {
    return (
      <div className="flex-1">
        <AdminHeader title="Loading..." />
        <div className="p-6">
          <p>Loading content...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1">
      <AdminHeader title={isNew ? "New Page Content" : "Edit Page Content"} />

      <div className="p-6">
        <div className="mb-6">
          <Button variant="outline" asChild>
            <Link href="/admin/page-content">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Content
            </Link>
          </Button>
        </div>

        <div className="max-w-5xl bg-white rounded-lg border p-6 space-y-6">
          {/* Entity Type and Language */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="entity_type">Entity Type</Label>
              <Select
                value={formData.entity_type}
                onValueChange={(value) =>
                  setFormData({ ...formData, entity_type: value })
                }
              >
                <SelectTrigger id="entity_type">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="page">General Page</SelectItem>
                  <SelectItem value="competition">Competition</SelectItem>
                  <SelectItem value="team">Team</SelectItem>
                  <SelectItem value="fixture">Fixture</SelectItem>
                  <SelectItem value="venue">Venue</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="language">Language</Label>
              <Select
                value={formData.language}
                onValueChange={(value) =>
                  setFormData({ ...formData, language: value })
                }
              >
                <SelectTrigger id="language">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="de">German</SelectItem>
                  <SelectItem value="fr">French</SelectItem>
                  <SelectItem value="es">Spanish</SelectItem>
                  <SelectItem value="it">Italian</SelectItem>
                  <SelectItem value="ar">Arabic</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Page Slug (for page content) */}
          {formData.entity_type === "page" && (
            <div className="space-y-2">
              <Label htmlFor="page_slug">
                Page Slug <span className="text-red-500">*</span>
              </Label>
              <Input
                id="page_slug"
                value={formData.page_slug}
                onChange={(e) =>
                  setFormData({ ...formData, page_slug: e.target.value })
                }
                placeholder="fifa-world-cup-2026-tickets or teams/usa-world-cup-2026-tickets"
                className="font-mono"
              />
              <p className="text-sm text-slate-500">
                Enter the page path without leading slash. Examples:
                <br />• Home page: <code className="bg-slate-100 px-1 rounded">home</code>
                <br />• Main page: <code className="bg-slate-100 px-1 rounded">fifa-world-cup-2026-tickets</code>
                <br />• Team page: <code className="bg-slate-100 px-1 rounded">teams/usa-world-cup-2026-tickets</code>
              </p>
            </div>
          )}

          {/* SEO Fields */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">SEO Metadata</h3>

            <div className="space-y-2">
              <Label htmlFor="meta_title">Meta Title</Label>
              <Input
                id="meta_title"
                value={formData.meta_title}
                onChange={(e) =>
                  setFormData({ ...formData, meta_title: e.target.value })
                }
                placeholder="SEO-optimized title (70 chars max)"
                maxLength={70}
              />
              <p className="text-xs text-slate-500">
                {formData.meta_title.length}/70 characters
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="meta_description">Meta Description</Label>
              <Input
                id="meta_description"
                value={formData.meta_description}
                onChange={(e) =>
                  setFormData({ ...formData, meta_description: e.target.value })
                }
                placeholder="SEO-optimized description (170 chars max)"
                maxLength={170}
              />
              <p className="text-xs text-slate-500">
                {formData.meta_description.length}/170 characters
              </p>
            </div>
          </div>

          {/* Content Editor */}
          <div className="space-y-2">
            <Label htmlFor="content">
              Article Content <span className="text-red-500">*</span>
            </Label>
            <RichTextEditor
              content={formData.content_html}
              onChange={(html) =>
                setFormData({ ...formData, content_html: html })
              }
              placeholder="Write your article content here..."
            />
            <p className="text-sm text-slate-500">
              Use the rich text editor to format your content with headings, lists, links, images, and more.
            </p>
          </div>

          {/* Status */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="is_complete"
              checked={formData.is_complete}
              onChange={(e) =>
                setFormData({ ...formData, is_complete: e.target.checked })
              }
              className="rounded"
            />
            <Label htmlFor="is_complete" className="cursor-pointer">
              Mark as complete
            </Label>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-6 border-t">
            <Button variant="outline" asChild>
              <Link href="/admin/page-content">Cancel</Link>
            </Button>
            <Button onClick={handleSave} disabled={saving}>
              <Save className="mr-2 h-4 w-4" />
              {saving ? "Saving..." : "Save Content"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
