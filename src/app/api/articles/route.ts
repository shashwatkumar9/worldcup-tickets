import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"
import matter from "gray-matter"

export async function GET() {
  try {
    const articlesDirectory = path.join(process.cwd(), "content", "articles")

    // Check if directory exists
    if (!fs.existsSync(articlesDirectory)) {
      return NextResponse.json([])
    }

    const fileNames = fs.readdirSync(articlesDirectory)
    const articles = fileNames
      .filter((fileName) => fileName.endsWith(".md"))
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, "")
        const fullPath = path.join(articlesDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, "utf8")
        const { data, content } = matter(fileContents)

        // Count words in content
        const wordCount = content.trim().split(/\s+/).length

        // Get file stats for last modified date
        const stats = fs.statSync(fullPath)
        const lastModified = stats.mtime.toISOString().split("T")[0]

        // Extract front matter data or parse from content
        let title = data.title || extractFromContent(content, /^\*\*Meta Title:\*\* (.+)$/m) || extractFromContent(content, /^# (.+)$/m) || slug
        let targetKeyword = data.targetKeyword || data["Target Keyword"] || extractFromContent(content, /^\*\*Target Keyword:\*\* (.+)$/m) || ""
        let metaDescription = data.metaDescription || data["Meta Description"] || extractFromContent(content, /^\*\*Meta Description:\*\* (.+)$/m) || ""
        let status = data.status || data["Article Status"] || extractFromContent(content, /^\*\*Article Status:\*\* (.+)$/m) || "published"

        // If Meta Title is extracted, use that as title
        const extractedMetaTitle = extractFromContent(content, /^\*\*Meta Title:\*\* (.+)$/m)
        if (extractedMetaTitle) {
          title = extractedMetaTitle
        }

        // Determine category from slug or front matter
        let category = data.category || "other"
        if (slug.includes("-world-cup-2026-tickets-main")) {
          category = "competition"
        } else if (slug.match(/^group-[a-l]-/)) {
          category = "group"
        } else if (slug.includes("-vs-")) {
          category = "fixture"
        } else if (slug.match(/stadium|field|place|azteca|akron|bbva/)) {
          category = "venue"
        } else if (slug.match(/city-guide|travel-guide/)) {
          category = "travel"
        } else if (!slug.includes("-vs-") && !slug.includes("stadium")) {
          category = "team"
        }

        return {
          slug,
          title,
          targetKeyword,
          metaDescription,
          wordCount,
          status,
          category,
          lastModified,
        }
      })
      .sort((a, b) => b.lastModified.localeCompare(a.lastModified))

    return NextResponse.json(articles)
  } catch (error) {
    console.error("Error fetching articles:", error)
    return NextResponse.json({ error: "Failed to fetch articles" }, { status: 500 })
  }
}

function extractFromContent(content: string, regex: RegExp): string | null {
  const match = content.match(regex)
  return match ? match[1].trim() : null
}
