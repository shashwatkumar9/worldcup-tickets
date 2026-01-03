import { notFound } from "next/navigation"
import Link from "next/link"
import { createClient } from "@/lib/supabase/server"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, ArrowLeft, Share2, Tag } from "lucide-react"
import { format } from "date-fns"
import type { Metadata } from "next"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const supabase = await createClient()

  const { data: post } = await supabase
    .from("blog_posts")
    .select(`
      translations:blog_post_translations(title, excerpt, meta_title, meta_description, language)
    `)
    .eq("slug", slug)
    .eq("status", "published")
    .single()

  if (!post) {
    return {
      title: "Post Not Found | WorldCup-Tickets.net",
    }
  }

  const translation = post.translations?.find((t: any) => t.language === "en") || post.translations?.[0]

  return {
    title: translation?.meta_title || `${translation?.title} | WorldCup-Tickets.net`,
    description: translation?.meta_description || translation?.excerpt,
    openGraph: {
      title: translation?.title,
      description: translation?.excerpt,
      type: "article",
    },
  }
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

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const supabase = await createClient()

  const { data: post, error } = await supabase
    .from("blog_posts")
    .select(`
      *,
      translations:blog_post_translations(*),
      competition:competitions(slug, translations:translations(name, language)),
      team:teams(slug, translations:translations(name, language)),
      venue:venues(slug, name)
    `)
    .eq("slug", slug)
    .eq("status", "published")
    .single()

  if (error || !post) {
    notFound()
  }

  const translation = post.translations?.find((t: any) => t.language === "en") || post.translations?.[0]

  // Fetch related posts
  const { data: relatedPosts } = await supabase
    .from("blog_posts")
    .select(`
      id,
      slug,
      category,
      featured_image_url,
      published_at,
      translations:blog_post_translations(title, language)
    `)
    .eq("status", "published")
    .eq("category", post.category)
    .neq("id", post.id)
    .order("published_at", { ascending: false })
    .limit(3)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      {post.featured_image_url && (
        <div className="w-full h-64 md:h-96 overflow-hidden bg-slate-900">
          <img
            src={post.featured_image_url}
            alt={translation?.title}
            className="w-full h-full object-cover opacity-80"
          />
        </div>
      )}

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-700"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <article className="lg:col-span-2">
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge className={getCategoryColor(post.category)}>
                {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
              </Badge>
              <span className="flex items-center gap-1 text-slate-500 text-sm">
                <Calendar className="h-4 w-4" />
                {format(new Date(post.published_at), "MMMM d, yyyy")}
              </span>
              <span className="flex items-center gap-1 text-slate-500 text-sm">
                <Clock className="h-4 w-4" />
                {post.reading_time_minutes} min read
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {translation?.title}
            </h1>

            {/* Excerpt */}
            {translation?.excerpt && (
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                {translation.excerpt}
              </p>
            )}

            {/* Content */}
            <div
              className="prose prose-lg max-w-none prose-headings:text-slate-900 prose-p:text-slate-700 prose-a:text-blue-600 prose-strong:text-slate-900 prose-table:border prose-th:bg-slate-100 prose-th:p-3 prose-td:p-3 prose-td:border"
              dangerouslySetInnerHTML={{ __html: translation?.content_html || "" }}
            />

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-8 pt-6 border-t">
                <div className="flex items-center gap-2 flex-wrap">
                  <Tag className="h-4 w-4 text-slate-500" />
                  {post.tags.map((tag: string) => (
                    <Badge key={tag} variant="outline" className="text-sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Share */}
            <div className="mt-8 pt-6 border-t flex items-center gap-4">
              <span className="text-slate-600 font-medium">Share this article:</span>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Related Entity */}
            {(post.competition || post.team || post.venue) && (
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-slate-900 mb-4">Related Content</h3>
                  <div className="space-y-3">
                    {post.team && (
                      <Link
                        href={`/${post.team.slug}`}
                        className="block p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors"
                      >
                        <span className="text-sm text-slate-500">Team</span>
                        <p className="font-medium text-slate-900">
                          {post.team.translations?.find((t: any) => t.language === "en")?.name}
                        </p>
                      </Link>
                    )}
                    {post.venue && (
                      <Link
                        href={`/${post.venue.slug}`}
                        className="block p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors"
                      >
                        <span className="text-sm text-slate-500">Venue</span>
                        <p className="font-medium text-slate-900">{post.venue.name}</p>
                      </Link>
                    )}
                    {post.competition && (
                      <Link
                        href={`/${post.competition.slug}`}
                        className="block p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors"
                      >
                        <span className="text-sm text-slate-500">Competition</span>
                        <p className="font-medium text-slate-900">
                          {post.competition.translations?.find((t: any) => t.language === "en")?.name}
                        </p>
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Related Posts */}
            {relatedPosts && relatedPosts.length > 0 && (
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-slate-900 mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((related: any) => {
                      const relatedTranslation =
                        related.translations?.find((t: any) => t.language === "en") ||
                        related.translations?.[0]
                      return (
                        <Link
                          key={related.id}
                          href={`/blog/${related.slug}`}
                          className="block group"
                        >
                          {related.featured_image_url && (
                            <div className="h-24 rounded-lg overflow-hidden mb-2">
                              <img
                                src={related.featured_image_url}
                                alt={relatedTranslation?.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          )}
                          <p className="font-medium text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                            {relatedTranslation?.title}
                          </p>
                          <p className="text-sm text-slate-500">
                            {format(new Date(related.published_at), "MMM d, yyyy")}
                          </p>
                        </Link>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* CTA */}
            <Card className="bg-gradient-to-br from-blue-600 to-emerald-600 text-white">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-2">Get World Cup 2026 Tickets</h3>
                <p className="text-blue-100 mb-4">
                  Don&apos;t miss out on the biggest football event. Compare ticket prices from trusted resellers.
                </p>
                <Button asChild className="w-full bg-white text-blue-600 hover:bg-blue-50">
                  <Link href="/fifa-world-cup-2026-tickets">View Tickets</Link>
                </Button>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  )
}
