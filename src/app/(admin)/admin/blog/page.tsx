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

interface BlogPost {
  id: string
  slug: string
  category: string
  status: string
  is_featured: boolean
  is_sticky: boolean
  published_at: string | null
  created_at: string
  view_count: number
  tags: string[]
  translations: {
    title: string
    excerpt: string
    language: string
  }[]
}

const CATEGORIES = [
  { value: "all", label: "All Categories" },
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

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState<string>("all")
  const [status, setStatus] = useState<string>("all")

  useEffect(() => {
    fetchPosts()
  }, [category, status])

  const fetchPosts = async () => {
    setLoading(true)
    const supabase = createClient()

    let query = supabase
      .from("blog_posts")
      .select(`
        id,
        slug,
        category,
        status,
        is_featured,
        is_sticky,
        published_at,
        created_at,
        view_count,
        tags,
        translations:blog_post_translations(title, excerpt, language)
      `)
      .order("created_at", { ascending: false })

    if (category !== "all") {
      query = query.eq("category", category)
    }
    if (status !== "all") {
      query = query.eq("status", status)
    }

    const { data, error } = await query

    if (error) {
      console.error("Error fetching blog posts:", error)
    } else {
      setPosts(data || [])
    }
    setLoading(false)
  }

  const filteredPosts = posts.filter((post) => {
    const translation = post.translations?.find((t) => t.language === "en") || post.translations?.[0]
    const title = translation?.title || post.slug
    return title.toLowerCase().includes(search.toLowerCase())
  })

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this blog post?")) return

    const supabase = createClient()
    const { error } = await supabase.from("blog_posts").delete().eq("id", id)

    if (error) {
      console.error("Error deleting blog post:", error)
      alert("Failed to delete blog post")
    } else {
      fetchPosts()
    }
  }

  const getPostTitle = (post: BlogPost) => {
    const translation = post.translations?.find((t) => t.language === "en") || post.translations?.[0]
    return translation?.title || post.slug
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "published":
        return "bg-green-100 text-green-800"
      case "draft":
        return "bg-yellow-100 text-yellow-800"
      case "scheduled":
        return "bg-blue-100 text-blue-800"
      case "archived":
        return "bg-slate-100 text-slate-800"
      default:
        return "bg-slate-100 text-slate-800"
    }
  }

  const getCategoryLabel = (category: string) => {
    return category.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
  }

  return (
    <div className="flex-1">
      <AdminHeader title="Blog Posts" />

      <div className="p-6">
        {/* Filters */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-1 items-center gap-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                placeholder="Search blog posts..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {CATEGORIES.map((cat) => (
                  <SelectItem key={cat.value} value={cat.value}>
                    {cat.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger className="w-36">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="scheduled">Scheduled</SelectItem>
                <SelectItem value="archived">Archived</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button asChild>
            <Link href="/admin/blog/new">
              <Plus className="mr-2 h-4 w-4" />
              New Post
            </Link>
          </Button>
        </div>

        {/* Blog Posts Table */}
        <div className="rounded-lg border bg-white">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Views</TableHead>
                <TableHead>Date</TableHead>
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
              ) : filteredPosts.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8">
                    <FileText className="mx-auto h-12 w-12 text-slate-300" />
                    <p className="mt-2 text-slate-500">No blog posts found</p>
                    <Button asChild className="mt-4">
                      <Link href="/admin/blog/new">
                        <Plus className="mr-2 h-4 w-4" />
                        Create your first post
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ) : (
                filteredPosts.map((post) => (
                  <TableRow key={post.id}>
                    <TableCell>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-medium text-slate-900">
                            {getPostTitle(post)}
                          </p>
                          {post.is_featured && (
                            <Badge className="bg-yellow-100 text-yellow-800 text-xs">
                              Featured
                            </Badge>
                          )}
                          {post.is_sticky && (
                            <Badge className="bg-purple-100 text-purple-800 text-xs">
                              Sticky
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-slate-500 truncate max-w-md">
                          {post.translations?.[0]?.excerpt || post.slug}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">
                        {getCategoryLabel(post.category)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(post.status)}>
                        {post.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <span className="text-slate-600">{post.view_count.toLocaleString()}</span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1 text-sm text-slate-500">
                        <Calendar className="h-3 w-3" />
                        {post.published_at
                          ? formatDistanceToNow(new Date(post.published_at), { addSuffix: true })
                          : formatDistanceToNow(new Date(post.created_at), { addSuffix: true })}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="ghost" size="icon" asChild>
                          <Link href={`/blog/${post.slug}`} target="_blank">
                            <Eye className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                          <Link href={`/admin/blog/${post.id}`}>
                            <Edit className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDelete(post.id)}
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
