import { NextRequest, NextResponse } from "next/server"
import fs from "fs"
import path from "path"
import matter from "gray-matter"

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params
    const articlesDirectory = path.join(process.cwd(), "content", "articles")
    const fullPath = path.join(articlesDirectory, `${slug}.md`)

    if (!fs.existsSync(fullPath)) {
      return NextResponse.json({ error: "Article not found" }, { status: 404 })
    }

    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    // Extract front matter data or parse from content
    const title = data.title || extractFromContent(content, /^# (.+)$/m) || slug
    const targetKeyword = data.targetKeyword || data["Target Keyword"] || ""
    const metaTitle = data.metaTitle || data["Meta Title"] || ""
    const metaDescription = data.metaDescription || data["Meta Description"] || ""
    const status = data.status || data["Article Status"] || "draft"

    // Determine category from slug
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

    return NextResponse.json({
      title,
      targetKeyword,
      metaTitle,
      metaDescription,
      content,
      status,
      category,
    })
  } catch (error) {
    console.error("Error fetching article:", error)
    return NextResponse.json({ error: "Failed to fetch article" }, { status: 500 })
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params
    const body = await request.json()
    const { title, targetKeyword, metaTitle, metaDescription, content, status, category } = body

    const articlesDirectory = path.join(process.cwd(), "content", "articles")
    const fullPath = path.join(articlesDirectory, `${slug}.md`)

    // Create front matter
    const frontMatter = {
      title,
      targetKeyword: targetKeyword || null,
      metaTitle: metaTitle || null,
      metaDescription: metaDescription || null,
      status: status || "draft",
      category: category || "other",
      lastModified: new Date().toISOString(),
    }

    // Generate markdown with front matter
    const fileContent = matter.stringify(content, frontMatter)

    // Ensure directory exists
    if (!fs.existsSync(articlesDirectory)) {
      fs.mkdirSync(articlesDirectory, { recursive: true })
    }

    // Write file
    fs.writeFileSync(fullPath, fileContent, "utf8")

    return NextResponse.json({ success: true, slug })
  } catch (error) {
    console.error("Error updating article:", error)
    return NextResponse.json({ error: "Failed to update article" }, { status: 500 })
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const body = await request.json()
    const { title, targetKeyword, metaTitle, metaDescription, content, status, category } = body

    // Generate slug from title
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")

    const articlesDirectory = path.join(process.cwd(), "content", "articles")
    const fullPath = path.join(articlesDirectory, `${slug}.md`)

    // Check if file already exists
    if (fs.existsSync(fullPath)) {
      return NextResponse.json({ error: "Article already exists" }, { status: 400 })
    }

    // Create front matter
    const frontMatter = {
      title,
      targetKeyword: targetKeyword || null,
      metaTitle: metaTitle || null,
      metaDescription: metaDescription || null,
      status: status || "draft",
      category: category || "other",
      created: new Date().toISOString(),
      lastModified: new Date().toISOString(),
    }

    // Generate markdown with front matter
    const fileContent = matter.stringify(content, frontMatter)

    // Ensure directory exists
    if (!fs.existsSync(articlesDirectory)) {
      fs.mkdirSync(articlesDirectory, { recursive: true })
    }

    // Write file
    fs.writeFileSync(fullPath, fileContent, "utf8")

    return NextResponse.json({ success: true, slug })
  } catch (error) {
    console.error("Error creating article:", error)
    return NextResponse.json({ error: "Failed to create article" }, { status: 500 })
  }
}

function extractFromContent(content: string, regex: RegExp): string | null {
  const match = content.match(regex)
  return match ? match[1] : null
}
