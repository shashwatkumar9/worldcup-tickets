"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { createClient } from "@/lib/supabase/client"
import { AdminHeader } from "@/components/admin/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Plus, Search, Edit, Eye, Trash2, FileText, Calendar } from "lucide-react"
import { formatDistanceToNow } from "date-fns"

interface PageContent {
  id: string
  entity_type: string
  entity_id: string | null
  page_slug: string | null
  language: string
  content_html: string | null
  meta_title: string | null
  meta_description: string | null
  is_complete: boolean
  created_at: string
  updated_at: string
}

const ENTITY_TYPES = [
  { value: "all", label: "All Types" },
  { value: "page", label: "General Page" },
  { value: "competition", label: "Competition" },
  { value: "team", label: "Team" },
  { value: "fixture", label: "Fixture" },
  { value: "venue", label: "Venue" },
]

const LANGUAGES = [
  { value: "all", label: "All Languages" },
  { value: "en", label: "English" },
  { value: "de", label: "German" },
  { value: "fr", label: "French" },
  { value: "es", label: "Spanish" },
  { value: "it", label: "Italian" },
  { value: "ar", label: "Arabic" },
]

export default function PageContentPage() {
  const [content, setContent] = useState<PageContent[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [entityType, setEntityType] = useState<string>("all")
  const [language, setLanguage] = useState<string>("all")

  useEffect(() => {
    fetchContent()
  }, [entityType, language])

  const fetchContent = async () => {
    setLoading(true)
    const supabase = createClient()

    let query = supabase
      .from("page_content")
      .select("*")
      .order("updated_at", { ascending: false })

    if (entityType !== "all") {
      query = query.eq("entity_type", entityType)
    }
    if (language !== "all") {
      query = query.eq("language", language)
    }

    const { data, error } = await query

    if (error) {
      console.error("Error fetching page content:", error)
    } else {
      setContent(data || [])
    }
    setLoading(false)
  }

  const filteredContent = content.filter((item) => {
    const searchTarget = (item.page_slug || item.meta_title || item.entity_id || "").toLowerCase()
    return searchTarget.includes(search.toLowerCase())
  })

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this content?")) return

    const supabase = createClient()
    const { error } = await supabase.from("page_content").delete().eq("id", id)

    if (error) {
      console.error("Error deleting content:", error)
      alert("Failed to delete content")
    } else {
      fetchContent()
    }
  }

  const getContentTitle = (item: PageContent) => {
    if (item.page_slug) return item.page_slug
    if (item.meta_title) return item.meta_title
    if (item.entity_id) return `${item.entity_type}: ${item.entity_id.slice(0, 8)}...`
    return "Untitled"
  }

  const getEntityTypeColor = (type: string) => {
    switch (type) {
      case "page":
        return "bg-blue-100 text-blue-800"
      case "team":
        return "bg-green-100 text-green-800"
      case "competition":
        return "bg-purple-100 text-purple-800"
      case "fixture":
        return "bg-orange-100 text-orange-800"
      case "venue":
        return "bg-pink-100 text-pink-800"
      default:
        return "bg-slate-100 text-slate-800"
    }
  }

  return (
    <div className="flex-1">
      <AdminHeader title="Page Content & SEO Articles" />

      <div className="p-6">
        {/* Filters */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-1 items-center gap-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                placeholder="Search by page slug or title..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={entityType} onValueChange={setEntityType}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Entity Type" />
              </SelectTrigger>
              <SelectContent>
                {ENTITY_TYPES.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="w-36">
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent>
                {LANGUAGES.map((lang) => (
                  <SelectItem key={lang.value} value={lang.value}>
                    {lang.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button asChild>
            <Link href="/admin/page-content/new">
              <Plus className="mr-2 h-4 w-4" />
              New Content
            </Link>
          </Button>
        </div>

        {/* Content Table */}
        <div className="rounded-lg border bg-white">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Page / Entity</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Language</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Updated</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8">
                    Loading...
                  </TableCell>
                </TableRow>
              ) : filteredContent.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8">
                    <FileText className="mx-auto h-12 w-12 text-slate-300" />
                    <p className="mt-2 text-slate-500">No content found</p>
                    <Button asChild className="mt-4">
                      <Link href="/admin/page-content/new">
                        <Plus className="mr-2 h-4 w-4" />
                        Create your first content
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ) : (
                filteredContent.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium text-slate-900">
                          {getContentTitle(item)}
                        </p>
                        {item.meta_title && (
                          <p className="text-sm text-slate-500 truncate max-w-md">
                            {item.meta_title}
                          </p>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getEntityTypeColor(item.entity_type)}>
                        {item.entity_type}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{item.language.toUpperCase()}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={item.is_complete ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}>
                        {item.is_complete ? "Complete" : "Draft"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1 text-sm text-slate-500">
                        <Calendar className="h-3 w-3" />
                        {formatDistanceToNow(new Date(item.updated_at), { addSuffix: true })}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        {item.page_slug && (
                          <Button variant="ghost" size="icon" asChild>
                            <Link href={`/${item.page_slug}`} target="_blank">
                              <Eye className="h-4 w-4" />
                            </Link>
                          </Button>
                        )}
                        <Button variant="ghost" size="icon" asChild>
                          <Link href={`/admin/page-content/${item.id}`}>
                            <Edit className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDelete(item.id)}
                        >
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
