import Database from "better-sqlite3"
import * as path from "path"

const dbPath = path.join(process.cwd(), "data", "worldcup.db")
const db = new Database(dbPath)

console.log("🌱 Seeding FIFA World Cup 2026 content...")

try {
  const competitionId = 1 // FIFA World Cup 2026

  // Update competition meta info
  console.log("  Updating competition metadata...")
  db.prepare(`
    UPDATE competitions SET
      meta_title = ?,
      meta_description = ?,
      meta_keywords = ?
    WHERE id = ?
  `).run(
    "FIFA World Cup 2026 Tickets | Full Schedule - All 104 Matches",
    "Buy FIFA World Cup 2026 tickets. Complete schedule of all 104 matches with dates, times (CET), and venues. 48-team World Cup hosted by USA, Mexico & Canada.",
    "FIFA World Cup 2026 tickets, World Cup 2026 schedule, USA World Cup tickets, Mexico World Cup tickets, Canada World Cup tickets, World Cup Final tickets",
    competitionId
  )

  // Add hero section content
  console.log("  Adding hero section...")
  db.prepare(`
    INSERT INTO competition_content (competition_id, section_type, section_key, section_title, content_text, display_order, is_active)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `).run(
    competitionId,
    "hero",
    "hero_main",
    "Hero Section",
    JSON.stringify({
      title: "FIFA World Cup 2026™ Tickets",
      subtitle: "🇺🇸 United States • 🇲🇽 Mexico • 🇨🇦 Canada",
      description: "The first World Cup with 48 teams. 104 matches across 16 cities in 3 countries. Experience football history from June 11 to July 19, 2026.",
      badge: "HISTORIC 48-TEAM FORMAT"
    }),
    0,
    1
  )

  // Add tournament stats section
  console.log("  Adding tournament stats...")
  db.prepare(`
    INSERT INTO competition_content (competition_id, section_type, section_key, section_title, content_text, display_order, is_active)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `).run(
    competitionId,
    "stats",
    "tournament_stats",
    "Tournament Statistics",
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

  // Add introduction section
  console.log("  Adding introduction...")
  db.prepare(`
    INSERT INTO competition_content (competition_id, section_type, section_key, section_title, content_text, display_order, is_active)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `).run(
    competitionId,
    "text",
    "introduction",
    "About the Tournament",
    `The 2026 FIFA World Cup will be the 23rd edition of the FIFA World Cup, the quadrennial international men's football championship. This historic tournament marks the first time the World Cup will be hosted by three nations: the United States, Mexico, and Canada.

It is also the first World Cup to feature 48 teams, expanded from the previous 32-team format. The tournament spans 39 days with 104 matches played across 16 world-class venues.

## Tournament Format

Teams will compete in 12 groups of four, with the top two teams from each group and the eight best third-placed teams advancing to the knockout rounds.

The knockout stage will feature:
- Round of 32 (16 matches)
- Round of 16 (8 matches)
- Quarter-finals (4 matches)
- Semi-finals (2 matches)
- Third Place Match (1 match)
- Final (1 match)`,
    2,
    1
  )

  // Add key dates section
  console.log("  Adding key dates...")
  db.prepare(`
    INSERT INTO competition_content (competition_id, section_type, section_key, section_title, content_text, display_order, is_active)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `).run(
    competitionId,
    "text",
    "key_dates",
    "Key Dates",
    `## Important Tournament Dates

- **Opening Match**: June 11, 2026 - Mexico vs South Africa at Estadio Azteca
- **Group Stage**: June 11-28, 2026 (72 matches)
- **Round of 32**: June 28 - July 3, 2026 (16 matches)
- **Round of 16**: July 4-7, 2026 (8 matches)
- **Quarter-finals**: July 9-11, 2026 (4 matches)
- **Semi-finals**: July 14-15, 2026 (2 matches)
- **Third Place Match**: July 18, 2026
- **Final**: July 19, 2026 at MetLife Stadium, New York/New Jersey`,
    3,
    1
  )

  // Add host cities section
  console.log("  Adding host cities...")
  db.prepare(`
    INSERT INTO competition_content (competition_id, section_type, section_key, section_title, content_text, display_order, is_active)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `).run(
    competitionId,
    "text",
    "host_cities",
    "Host Cities & Venues",
    `## 16 Host Cities Across 3 Nations

### United States (11 cities)
- New York/New Jersey - MetLife Stadium
- Los Angeles - SoFi Stadium
- Dallas - AT&T Stadium
- Atlanta - Mercedes-Benz Stadium
- Miami - Hard Rock Stadium
- Houston - NRG Stadium
- Philadelphia - Lincoln Financial Field
- Seattle - Lumen Field
- San Francisco Bay Area - Levi's Stadium
- Boston - Gillette Stadium
- Kansas City - Arrowhead Stadium

### Mexico (3 cities)
- Mexico City - Estadio Azteca
- Guadalajara - Estadio Akron
- Monterrey - Estadio BBVA

### Canada (2 cities)
- Toronto - BMO Field
- Vancouver - BC Place`,
    4,
    1
  )

  // Add some affiliate links (using existing schema)
  console.log("  Adding affiliate links...")

  db.prepare(`
    INSERT INTO affiliate_links (entity_type, entity_id, page_slug, provider, affiliate_url, button_text, display_order, is_active, competition_id)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    "competition",
    competitionId.toString(),
    "fifa-world-cup-2026-tickets",
    "FIFA Official",
    "https://www.fifa.com/tickets",
    "Buy Official Tickets",
    0,
    1,
    competitionId
  )

  db.prepare(`
    INSERT INTO affiliate_links (entity_type, entity_id, page_slug, provider, affiliate_url, button_text, display_order, is_active, competition_id)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    "competition",
    competitionId.toString(),
    "fifa-world-cup-2026-tickets",
    "VIP Hospitality",
    "https://www.fifaworldcup.com/hospitality",
    "View Packages",
    1,
    1,
    competitionId
  )

  db.prepare(`
    INSERT INTO affiliate_links (entity_type, entity_id, page_slug, provider, affiliate_url, button_text, display_order, is_active, competition_id)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    "competition",
    competitionId.toString(),
    "fifa-world-cup-2026-tickets",
    "Booking.com",
    "https://www.booking.com",
    "Book Hotels",
    2,
    1,
    competitionId
  )

  console.log("\n✅ Content seeded successfully!")
  console.log("\nSeeded items:")
  console.log("  ✓ Competition metadata (SEO)")
  console.log("  ✓ 5 content sections")
  console.log("  ✓ 3 affiliate links")
  console.log("\n👉 Visit: http://localhost:3001/admin/competitions/1")
} catch (error) {
  console.error("\n❌ Error seeding content:", error)
  process.exit(1)
} finally {
  db.close()
}
