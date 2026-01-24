"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Plus, Eye, Edit } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PageContent {
  id: string
  entity_type: string
  entity_id: string
  page_slug: string
  meta_title: string
  meta_description: string
  is_complete: boolean
}

export default function ArticlesPage() {
  const router = useRouter()
  const [articles, setArticles] = useState<PageContent[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchArticles()
  }, [])

  const fetchArticles = async () => {
    try {
      const response = await fetch("/api/db", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          table: "page_content",
          action: "select",
        }),
      })
      const data = await response.json()
      if (data.data) {
        setArticles(data.data)
      }
    } catch (error) {
      console.error("Error fetching articles:", error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <div className="text-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
          <p className="mt-2 text-sm text-slate-500">Loading articles...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Articles & Content</h1>
          <p className="mt-1 text-sm text-slate-500">
            All published articles and page content
          </p>
        </div>
        <Button onClick={() => router.push("/admin/teams")}>
          <Plus className="mr-2 h-4 w-4" />
          Create Article
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-blue-500 p-3">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">{articles.length}</p>
                <p className="text-sm text-slate-500">Total Articles</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-green-500 p-3">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">
                  {articles.filter((a) => a.is_complete).length}
                </p>
                <p className="text-sm text-slate-500">Completed</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-orange-500 p-3">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">
                  {articles.filter((a) => a.entity_type === "team").length}
                </p>
                <p className="text-sm text-slate-500">Team Articles</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Articles Grid */}
      <div className="space-y-4">
        {articles.map((article) => (
          <Card key={article.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-5">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {article.meta_title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    {article.meta_description}
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="inline-flex rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">
                      {article.entity_type}
                    </span>
                    {article.is_complete && (
                      <span className="inline-flex rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                        Published
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="mr-2 h-4 w-4" />
                    View
                  </Button>
                  <Button size="sm" onClick={() => router.push(`/admin/teams/${article.entity_id}`)}>
                    <Edit className="mr-2 h-4 w-4" />
                    Edit
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {articles.length === 0 && (
        <Card>
          <CardContent className="py-12 text-center">
            <FileText className="mx-auto h-12 w-12 text-slate-300" />
            <p className="mt-4 text-slate-500">No articles found</p>
            <Button className="mt-4" onClick={() => router.push("/admin/teams")}>
              <Plus className="mr-2 h-4 w-4" />
              Create Your First Article
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
