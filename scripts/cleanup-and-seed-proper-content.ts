import Database from 'better-sqlite3'
import path from 'path'

const dbPath = path.join(process.cwd(), 'data', 'worldcup.db')
const db = new Database(dbPath)

// Delete all existing content for FIFA World Cup 2026
console.log('🗑️  Deleting old content...')
db.prepare('DELETE FROM competition_content WHERE competition_id = 1').run()

console.log('✅ Inserting proper editable sections...')

// 1. Hero Section
db.prepare(`
  INSERT INTO competition_content
  (competition_id, section_type, section_key, section_title, content_text, content_json, display_order, is_active)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?)
`).run(
  1,
  'hero',
  'hero_section',
  'Hero Section',
  null,
  JSON.stringify({
    title: "FIFA World Cup 2026™ Tickets",
    subtitle: "🇺🇸 United States • 🇲🇽 Mexico • 🇨🇦 Canada",
    description: "The first World Cup with 48 teams. 104 matches across 16 cities in 3 countries. Experience football history from June 11 to July 19, 2026.",
    badges: [
      { text: "HISTORIC 48-TEAM FORMAT", color: "yellow" },
      { text: "HOT", color: "red" }
    ],
    primaryButton: {
      text: "Buy Tickets from $95",
      url: "#tickets"
    },
    secondaryButton: {
      text: "View Full Schedule",
      url: "#full-schedule"
    }
  }),
  0,
  1
)

// 2. Tournament Statistics
db.prepare(`
  INSERT INTO competition_content
  (competition_id, section_type, section_key, section_title, content_text, content_json, display_order, is_active)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?)
`).run(
  1,
  'stats',
  'tournament_stats',
  'Tournament Statistics',
  null,
  JSON.stringify({
    stats: [
      { label: "Teams", value: "48", icon: "Users" },
      { label: "Matches", value: "104", icon: "Trophy" },
      { label: "Venues", value: "16", icon: "MapPin" },
      { label: "Host Countries", value: "3", icon: "Globe" },
      { label: "Duration", value: "39 Days", icon: "Calendar" },
      { label: "Cities", value: "16", icon: "Flag" }
    ]
  }),
  1,
  1
)

// 3. SEO Article Content (Long-form content with rich text)
const seoContent = `<h2>Tournament Overview - The First 48-Team World Cup</h2>

<h3>Historic Expansion and Format</h3>
<p>The FIFA World Cup 2026 marks a revolutionary moment in football history as the tournament expands from 32 to 48 teams. This expansion creates 16 additional spots for nations to qualify, providing unprecedented opportunities for countries from every confederation to compete on football's biggest stage. The new format features 12 groups of four teams each, followed by a knockout stage beginning with the Round of 32.</p>

<h3>Group Stage Structure</h3>
<p>The 48 teams will be divided into 12 groups with four teams in each group. Each team plays three group-stage matches, with the top two teams from each group advancing to the knockout stage, along with the eight best third-placed teams. This format ensures a total of 72 group-stage matches, providing fans with unprecedented access to world-class football.</p>

<h2>FIFA World Cup 2026 Tickets - How to Buy and What to Expect</h2>

<h3>Ticket Categories and Pricing</h3>
<p>FIFA World Cup tickets are typically divided into four main categories:</p>

<div class="grid md:grid-cols-2 gap-4 mb-6">
  <div class="border rounded-lg p-4 bg-blue-50">
    <h4 class="font-semibold text-blue-900 mb-2">Category 1 (Premium)</h4>
    <p class="text-sm text-slate-700 mb-2"><strong>Price:</strong> $500 - $3,000+ per match</p>
    <p class="text-sm text-slate-700 mb-2"><strong>Seating:</strong> Best views, centerline positions</p>
    <p class="text-sm text-slate-700"><strong>Best For:</strong> Final, semi-finals, marquee matches</p>
  </div>
  <div class="border rounded-lg p-4 bg-green-50">
    <h4 class="font-semibold text-green-900 mb-2">Category 2 (Mid-Range)</h4>
    <p class="text-sm text-slate-700 mb-2"><strong>Price:</strong> $250 - $800 per match</p>
    <p class="text-sm text-slate-700 mb-2"><strong>Seating:</strong> Excellent views, behind goals</p>
    <p class="text-sm text-slate-700"><strong>Best For:</strong> Quarter-finals, popular teams</p>
  </div>
  <div class="border rounded-lg p-4 bg-yellow-50">
    <h4 class="font-semibold text-yellow-900 mb-2">Category 3 (Standard)</h4>
    <p class="text-sm text-slate-700 mb-2"><strong>Price:</strong> $100 - $400 per match</p>
    <p class="text-sm text-slate-700 mb-2"><strong>Seating:</strong> Good views, corners and upper tiers</p>
    <p class="text-sm text-slate-700"><strong>Best For:</strong> Group-stage matches</p>
  </div>
  <div class="border rounded-lg p-4 bg-slate-50">
    <h4 class="font-semibold text-slate-900 mb-2">Category 4 (Budget)</h4>
    <p class="text-sm text-slate-700 mb-2"><strong>Price:</strong> $50 - $150 per match</p>
    <p class="text-sm text-slate-700 mb-2"><strong>Seating:</strong> Furthest from pitch</p>
    <p class="text-sm text-slate-700"><strong>Best For:</strong> Budget-conscious fans</p>
  </div>
</div>

<h2>Top Teams to Watch at World Cup 2026</h2>
<p>The expanded 48-team format brings unprecedented talent to North America. Here are the marquee nations expected to dominate headlines and ticket sales.</p>

<h2>Frequently Asked Questions (FAQs)</h2>

<div class="space-y-4">
  <div class="border-l-4 border-blue-500 pl-4">
    <h4 class="font-semibold text-slate-900 mb-1">Q: When do FIFA World Cup 2026 tickets go on sale?</h4>
    <p class="text-slate-700 text-sm">A: FIFA typically releases tickets in phases starting 8-12 months before the tournament. Expect the first sales phase (random selection draw) in late 2025, with subsequent first-come-first-served phases through spring 2026.</p>
  </div>

  <div class="border-l-4 border-blue-500 pl-4">
    <h4 class="font-semibold text-slate-900 mb-1">Q: How much do World Cup 2026 tickets cost?</h4>
    <p class="text-slate-700 text-sm">A: Prices range from $50 for Category 4 group-stage matches to $5,000+ for Category 1 Final tickets. Most group-stage matches are $100-$500.</p>
  </div>

  <div class="border-l-4 border-blue-500 pl-4">
    <h4 class="font-semibold text-slate-900 mb-1">Q: Where is the World Cup 2026 Final?</h4>
    <p class="text-slate-700 text-sm">A: The FIFA World Cup 2026 Final will be held at MetLife Stadium in East Rutherford, New Jersey on July 19, 2026 at 21:00 CET (3:00 PM ET). Capacity: 82,500.</p>
  </div>
</div>

<h2>Start Planning Your World Cup 2026 Journey Today</h2>
<p>Don't wait to secure your piece of football history. FIFA World Cup 2026 tickets will be among the most sought-after events of the decade.</p>`

db.prepare(`
  INSERT INTO competition_content
  (competition_id, section_type, section_key, section_title, content_text, content_json, display_order, is_active)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?)
`).run(
  1,
  'seo_content',
  'seo_article',
  'Complete Guide to FIFA World Cup 2026 Tickets',
  seoContent,
  null,
  2,
  1
)

// 4. Quick Links Section
db.prepare(`
  INSERT INTO competition_content
  (competition_id, section_type, section_key, section_title, content_text, content_json, display_order, is_active)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?)
`).run(
  1,
  'quick_links',
  'sidebar_quick_links',
  'Quick Links',
  null,
  JSON.stringify({
    links: [
      { label: "Group A Tickets", href: "/fixtures/group-a-world-cup-2026-tickets" },
      { label: "Round of 32 Tickets", href: "/fixtures/round-of-32-world-cup-2026-tickets" },
      { label: "Round of 16 Tickets", href: "/fixtures/round-of-16-world-cup-2026-tickets" },
      { label: "Quarter-Final Tickets", href: "/fixtures/quarter-finals-world-cup-2026-tickets" },
      { label: "Semi-Final Tickets", href: "/fixtures/semi-finals-world-cup-2026-tickets" },
      { label: "World Cup Final Tickets", href: "/fixtures/final-world-cup-2026-tickets" },
      { label: "Third Place Match", href: "/fixtures/third-place-world-cup-2026-tickets" }
    ]
  }),
  3,
  1
)

// 5. Tournament Info Section
db.prepare(`
  INSERT INTO competition_content
  (competition_id, section_type, section_key, section_title, content_text, content_json, display_order, is_active)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?)
`).run(
  1,
  'tournament_info',
  'sidebar_tournament_info',
  'Tournament Info',
  null,
  JSON.stringify({
    info: [
      { icon: "Calendar", label: "Dates", value: "June 11 - July 19, 2026" },
      { icon: "MapPin", label: "Final Venue", value: "MetLife Stadium, New Jersey" },
      { icon: "Trophy", label: "Defending Champions", value: "🇦🇷 Argentina" },
      { icon: "Users", label: "Total Teams", value: "48 Teams" }
    ]
  }),
  4,
  1
)

console.log('✅ Content seeded successfully!')

db.close()
