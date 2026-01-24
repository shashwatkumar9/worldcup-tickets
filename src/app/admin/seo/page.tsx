"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, TrendingUp, Search, Eye } from "lucide-react"

const seoPages = [
  {
    url: "/teams/usa-world-cup-2026-tickets",
    title: "USA World Cup 2026 Tickets",
    metaScore: 95,
    keywords: 12,
    status: "optimized",
  },
  {
    url: "/teams/mexico-world-cup-2026-tickets",
    title: "Mexico World Cup 2026 Tickets",
    metaScore: 92,
    keywords: 11,
    status: "optimized",
  },
  {
    url: "/teams/brazil-world-cup-2026-tickets",
    title: "Brazil World Cup 2026 Tickets",
    metaScore: 94,
    keywords: 13,
    status: "optimized",
  },
  {
    url: "/teams/argentina-world-cup-2026-tickets",
    title: "Argentina World Cup 2026 Tickets",
    metaScore: 93,
    keywords: 12,
    status: "optimized",
  },
  {
    url: "/teams/france-world-cup-2026-tickets",
    title: "France World Cup 2026 Tickets",
    metaScore: 91,
    keywords: 10,
    status: "optimized",
  },
  {
    url: "/teams/england-world-cup-2026-tickets",
    title: "England World Cup 2026 Tickets",
    metaScore: 88,
    keywords: 9,
    status: "needs-improvement",
  },
]

export default function SEOPage() {
  const avgScore = Math.round(seoPages.reduce((sum, p) => sum + p.metaScore, 0) / seoPages.length)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">SEO & Meta</h1>
        <p className="mt-1 text-sm text-slate-500">
          Manage SEO optimization and metadata for all pages
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-blue-500 p-3">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">{seoPages.length}</p>
                <p className="text-sm text-slate-500">Total Pages</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-green-500 p-3">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">{avgScore}/100</p>
                <p className="text-sm text-slate-500">Avg SEO Score</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-orange-500 p-3">
                <Search className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">
                  {seoPages.filter((p) => p.status === "optimized").length}
                </p>
                <p className="text-sm text-slate-500">Optimized</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-purple-500 p-3">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">1.2K</p>
                <p className="text-sm text-slate-500">Monthly Visits</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* SEO Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Page SEO Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {seoPages.map((page) => (
              <div
                key={page.url}
                className="flex items-center justify-between rounded-lg border border-slate-100 p-4"
              >
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900">{page.title}</h3>
                  <p className="text-sm text-slate-500">{page.url}</p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <p className="text-xs text-slate-500">SEO Score</p>
                    <p
                      className={`text-lg font-bold ${
                        page.metaScore >= 90
                          ? "text-green-600"
                          : page.metaScore >= 80
                          ? "text-orange-600"
                          : "text-red-600"
                      }`}
                    >
                      {page.metaScore}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-slate-500">Keywords</p>
                    <p className="text-lg font-bold text-slate-900">{page.keywords}</p>
                  </div>
                  <div>
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                        page.status === "optimized"
                          ? "bg-green-100 text-green-700"
                          : "bg-orange-100 text-orange-700"
                      }`}
                    >
                      {page.status === "optimized" ? "Optimized" : "Needs Improvement"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* SEO Tips */}
      <Card>
        <CardHeader>
          <CardTitle>SEO Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3 rounded-lg bg-blue-50 p-3">
              <Search className="h-5 w-5 text-blue-600" />
              <div>
                <p className="font-medium text-blue-900">Add more keywords</p>
                <p className="text-sm text-blue-700">
                  Include location-specific keywords for better local SEO
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg bg-green-50 p-3">
              <TrendingUp className="h-5 w-5 text-green-600" />
              <div>
                <p className="font-medium text-green-900">Optimize meta descriptions</p>
                <p className="text-sm text-green-700">
                  Keep meta descriptions between 150-160 characters
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg bg-orange-50 p-3">
              <Globe className="h-5 w-5 text-orange-600" />
              <div>
                <p className="font-medium text-orange-900">Add structured data</p>
                <p className="text-sm text-orange-700">
                  Implement schema.org markup for better search visibility
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
