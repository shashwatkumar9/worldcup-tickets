import Link from "next/link"
import { createClient } from "@/lib/supabase/server"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { formatDistanceToNow } from "date-fns"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "World Cup 2026 Blog | News, Guides & Travel Tips | WorldCup-Tickets.net",
  description: "Stay updated with the latest World Cup 2026 news, ticket guides, travel tips, team previews, and venue information. Your ultimate resource for FIFA World Cup 2026.",
  openGraph: {
    title: "World Cup 2026 Blog | News, Guides & Travel Tips",
    description: "Stay updated with the latest World Cup 2026 news, ticket guides, travel tips, and more.",
    type: "website",
  },
}

interface BlogPost {
  id: string
  slug: string
  category: string
  published_at: string
  reading_time_minutes: number
  featured_image_url: string | null
  is_featured: boolean
  translations: {
    title: string
    excerpt: string
    language: string
  }[]
}

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    news: "bg-blue-100 text-blue-800",
    guide: "bg-green-100 text-green-800",
    travel: "bg-purple-100 text-purple-800",
    tickets: "bg-yellow-100 text-yellow-800",
    teams: "bg-red-100 text-red-800",
    venues: "bg-orange-100 text-orange-800",
    analysis: "bg-indigo-100 text-indigo-800",
    preview: "bg-pink-100 text-pink-800",
    review: "bg-teal-100 text-teal-800",
  }
  return colors[category] || "bg-slate-100 text-slate-800"
}

export default async function BlogPage() {
  const supabase = await createClient()

  const { data: posts } = await supabase
    .from("blog_posts")
    .select(`
      id,
      slug,
      category,
      published_at,
      reading_time_minutes,
      featured_image_url,
      is_featured,
      translations:blog_post_translations(title, excerpt, language)
    `)
    .eq("status", "published")
    .order("is_featured", { ascending: false })
    .order("published_at", { ascending: false })
    .limit(50)

  const getPostData = (post: BlogPost) => {
    const translation = post.translations?.find((t) => t.language === "en") || post.translations?.[0]
    return {
      title: translation?.title || post.slug,
      excerpt: translation?.excerpt || "",
    }
  }

  const featuredPosts = posts?.filter((p: any) => p.is_featured) || []
  const regularPosts = posts?.filter((p: any) => !p.is_featured) || []

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-emerald-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">World Cup 2026 Blog</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Your ultimate source for World Cup 2026 news, ticket guides, travel tips, team previews, and venue information.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Featured Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredPosts.slice(0, 3).map((post: any) => {
                const { title, excerpt } = getPostData(post)
                return (
                  <Link key={post.id} href={`/blog/${post.slug}`}>
                    <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden group">
                      {post.featured_image_url && (
                        <div className="h-48 overflow-hidden">
                          <img
                            src={post.featured_image_url}
                            alt={title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge className={getCategoryColor(post.category)}>
                            {post.category}
                          </Badge>
                          <Badge className="bg-yellow-100 text-yellow-800">Featured</Badge>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {title}
                        </h3>
                        <p className="text-slate-600 line-clamp-2 mb-4">{excerpt}</p>
                        <div className="flex items-center gap-4 text-sm text-slate-500">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {formatDistanceToNow(new Date(post.published_at), { addSuffix: true })}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {post.reading_time_minutes} min read
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </section>
        )}

        {/* All Posts */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Latest Articles</h2>
          {regularPosts.length === 0 && featuredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-slate-500 text-lg">No blog posts yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post: any) => {
                const { title, excerpt } = getPostData(post)
                return (
                  <Link key={post.id} href={`/blog/${post.slug}`}>
                    <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden group">
                      {post.featured_image_url && (
                        <div className="h-40 overflow-hidden">
                          <img
                            src={post.featured_image_url}
                            alt={title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <CardContent className="p-5">
                        <Badge className={`${getCategoryColor(post.category)} mb-3`}>
                          {post.category}
                        </Badge>
                        <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {title}
                        </h3>
                        <p className="text-slate-600 text-sm line-clamp-2 mb-3">{excerpt}</p>
                        <div className="flex items-center justify-between text-sm text-slate-500">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {formatDistanceToNow(new Date(post.published_at), { addSuffix: true })}
                          </span>
                          <span className="flex items-center gap-1 text-blue-600 group-hover:text-blue-700">
                            Read more <ArrowRight className="h-3 w-3" />
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          )}
        </section>
      </div>
    </div>
  )
}
