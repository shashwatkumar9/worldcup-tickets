/**
 * Migration Script: Extract articles from page files and insert into database
 * Usage: npx tsx scripts/migrate-articles.ts
 */

import { createClient } from '@supabase/supabase-js'
import * as fs from 'fs'
import * as path from 'path'

// Supabase connection
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing Supabase credentials')
  console.error('Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.local')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey)

interface ArticleToMigrate {
  pageSlug: string
  filePath: string
  metaTitle: string
  metaDescription: string
}

const articlesToMigrate: ArticleToMigrate[] = [
  {
    pageSlug: 'fifa-world-cup-2026-tickets',
    filePath: 'src/app/(public)/fifa-world-cup-2026-tickets/page.tsx',
    metaTitle: 'FIFA World Cup 2026 Tickets - Complete Guide',
    metaDescription: 'Complete guide to FIFA World Cup 2026 tickets, venues, teams, and fixtures. Buy tickets for all matches.'
  },
  {
    pageSlug: 'teams/usa-world-cup-2026-tickets',
    filePath: 'src/app/(public)/teams/usa-world-cup-2026-tickets/page.tsx',
    metaTitle: 'USA World Cup 2026 Tickets | Host Nation',
    metaDescription: 'Buy USA FIFA World Cup 2026 tickets. Watch the USMNT compete on home soil in Group D.'
  },
  {
    pageSlug: 'teams/mexico-world-cup-2026-tickets',
    filePath: 'src/app/(public)/teams/mexico-world-cup-2026-tickets/page.tsx',
    metaTitle: 'Mexico World Cup 2026 Tickets | El Tri',
    metaDescription: 'Buy Mexico World Cup 2026 tickets. Watch El Tri at Estadio Azteca opening match.'
  },
  {
    pageSlug: 'teams/canada-world-cup-2026-tickets',
    filePath: 'src/app/(public)/teams/canada-world-cup-2026-tickets/page.tsx',
    metaTitle: 'Canada World Cup 2026 Tickets | Les Rouges',
    metaDescription: 'Buy Canada World Cup 2026 tickets. Watch Les Rouges compete as co-hosts.'
  },
  {
    pageSlug: 'teams/brazil-world-cup-2026-tickets',
    filePath: 'src/app/(public)/teams/brazil-world-cup-2026-tickets/page.tsx',
    metaTitle: 'Brazil World Cup 2026 Tickets | Seleção',
    metaDescription: 'Buy Brazil World Cup 2026 tickets. Watch the 5-time champions compete.'
  },
  {
    pageSlug: 'teams/argentina-world-cup-2026-tickets',
    filePath: 'src/app/(public)/teams/argentina-world-cup-2026-tickets/page.tsx',
    metaTitle: 'Argentina World Cup 2026 Tickets | Defending Champions',
    metaDescription: 'Buy Argentina World Cup 2026 tickets. Watch Messi and the defending champions.'
  },
  {
    pageSlug: 'teams/france-world-cup-2026-tickets',
    filePath: 'src/app/(public)/teams/france-world-cup-2026-tickets/page.tsx',
    metaTitle: 'France World Cup 2026 Tickets | Les Bleus',
    metaDescription: 'Buy France World Cup 2026 tickets. Watch Mbappé and Les Bleus compete.'
  },
  {
    pageSlug: 'teams/england-world-cup-2026-tickets',
    filePath: 'src/app/(public)/teams/england-world-cup-2026-tickets/page.tsx',
    metaTitle: 'England World Cup 2026 Tickets | Three Lions',
    metaDescription: 'Buy England World Cup 2026 tickets. Watch the Three Lions compete.'
  },
  {
    pageSlug: 'teams/spain-world-cup-2026-tickets',
    filePath: 'src/app/(public)/teams/spain-world-cup-2026-tickets/page.tsx',
    metaTitle: 'Spain World Cup 2026 Tickets | La Roja',
    metaDescription: 'Buy Spain World Cup 2026 tickets. Watch La Roja compete.'
  },
  {
    pageSlug: 'teams/germany-world-cup-2026-tickets',
    filePath: 'src/app/(public)/teams/germany-world-cup-2026-tickets/page.tsx',
    metaTitle: 'Germany World Cup 2026 Tickets | Die Mannschaft',
    metaDescription: 'Buy Germany World Cup 2026 tickets. Watch the 4-time champions compete.'
  },
]

function extractArticleContent(filePath: string): string | null {
  try {
    const fullPath = path.join(process.cwd(), filePath)
    const content = fs.readFileSync(fullPath, 'utf-8')

    // For main page - extract content between {/* SEO Article Content Section */} and the closing Card
    if (filePath.includes('fifa-world-cup-2026-tickets/page.tsx')) {
      const startMarker = '{/* SEO Article Content Section */}'
      const startIndex = content.indexOf(startMarker)
      if (startIndex === -1) return null

      // Find the opening <article> tag
      const articleStart = content.indexOf('<CardContent className="prose prose-slate max-w-none">', startIndex)
      if (articleStart === -1) return null

      // Extract until closing </CardContent>
      const articleEnd = content.indexOf('</CardContent>', articleStart + 100)
      if (articleEnd === -1) return null

      let articleHtml = content.substring(articleStart, articleEnd)

      // Clean up: remove CardContent wrapper
      articleHtml = articleHtml.replace('<CardContent className="prose prose-slate max-w-none">', '')

      return articleHtml.trim()
    }

    // For team pages - extract article section
    if (filePath.includes('/teams/')) {
      const articleMarker = '<article className="prose prose-slate max-w-none">'
      const startIndex = content.indexOf(articleMarker)
      if (startIndex === -1) return null

      const articleEnd = content.indexOf('</article>', startIndex)
      if (articleEnd === -1) return null

      let articleHtml = content.substring(startIndex, articleEnd + '</article>'.length)

      // Remove the article wrapper, keep inner content
      articleHtml = articleHtml.replace(articleMarker, '').replace('</article>', '')

      return articleHtml.trim()
    }

    return null
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error)
    return null
  }
}

async function migrateArticle(article: ArticleToMigrate) {
  console.log(`\nMigrating: ${article.pageSlug}`)

  // Extract HTML content
  const contentHtml = extractArticleContent(article.filePath)

  if (!contentHtml) {
    console.error(`  ❌ Failed to extract content from ${article.filePath}`)
    return false
  }

  console.log(`  ✓ Extracted ${contentHtml.length} characters`)

  // Check if already exists
  const { data: existing } = await supabase
    .from('page_content')
    .select('id')
    .eq('entity_type', 'page')
    .eq('page_slug', article.pageSlug)
    .eq('language', 'en')
    .single()

  if (existing) {
    console.log(`  ⚠️  Already exists, updating...`)
    const { error } = await supabase
      .from('page_content')
      .update({
        content_html: contentHtml,
        meta_title: article.metaTitle,
        meta_description: article.metaDescription,
        is_complete: true,
        updated_at: new Date().toISOString()
      })
      .eq('id', existing.id)

    if (error) {
      console.error(`  ❌ Update failed:`, error.message)
      return false
    }

    console.log(`  ✓ Updated successfully`)
    return true
  }

  // Insert new
  const { error } = await supabase
    .from('page_content')
    .insert({
      entity_type: 'page',
      page_slug: article.pageSlug,
      language: 'en',
      content_html: contentHtml,
      meta_title: article.metaTitle,
      meta_description: article.metaDescription,
      is_complete: true
    })

  if (error) {
    console.error(`  ❌ Insert failed:`, error.message)
    return false
  }

  console.log(`  ✓ Inserted successfully`)
  return true
}

async function main() {
  console.log('🚀 Starting article migration...\n')
  console.log(`Total articles to migrate: ${articlesToMigrate.length}`)

  let successCount = 0
  let failCount = 0

  for (const article of articlesToMigrate) {
    const success = await migrateArticle(article)
    if (success) {
      successCount++
    } else {
      failCount++
    }
  }

  console.log('\n' + '='.repeat(50))
  console.log(`✅ Success: ${successCount}`)
  console.log(`❌ Failed: ${failCount}`)
  console.log(`📊 Total: ${articlesToMigrate.length}`)
  console.log('='.repeat(50))

  if (failCount === 0) {
    console.log('\n🎉 All articles migrated successfully!')
    console.log('Next step: Update pages to fetch from database')
  } else {
    console.log('\n⚠️  Some articles failed to migrate. Check errors above.')
  }
}

main().catch(console.error)
