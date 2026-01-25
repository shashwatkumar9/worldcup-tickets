import Database from 'better-sqlite3'
import path from 'path'

const dbPath = path.join(process.cwd(), 'data', 'worldcup.db')
const db = new Database(dbPath)

console.log('🗑️  Adding schedule, venues, and city guide sections...')

// 6. Venues Section (16 venues)
db.prepare(`
  INSERT INTO competition_content
  (competition_id, section_type, section_key, section_title, content_text, content_json, display_order, is_active)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?)
`).run(
  1,
  'venues',
  'host_venues',
  'All 16 Host Venues',
  null,
  JSON.stringify({
    venues: [
      { name: "MetLife Stadium", city: "New York/NJ", highlight: "FINAL", slug: "metlife-stadium-world-cup-2026-tickets" },
      { name: "SoFi Stadium", city: "Los Angeles", highlight: "QF", slug: "sofi-stadium-world-cup-2026-tickets" },
      { name: "AT&T Stadium", city: "Dallas", highlight: "SF", slug: "att-stadium-world-cup-2026-tickets" },
      { name: "Mercedes-Benz Stadium", city: "Atlanta", highlight: "SF", slug: "mercedes-benz-stadium-world-cup-2026-tickets" },
      { name: "Hard Rock Stadium", city: "Miami", highlight: "3rd Place", slug: "hard-rock-stadium-world-cup-2026-tickets" },
      { name: "Estadio Azteca", city: "Mexico City", highlight: "Opening", slug: "estadio-azteca-world-cup-2026-tickets" },
      { name: "NRG Stadium", city: "Houston", highlight: "R16", slug: "nrg-stadium-world-cup-2026-tickets" },
      { name: "Arrowhead Stadium", city: "Kansas City", highlight: "QF", slug: "arrowhead-stadium-world-cup-2026-tickets" },
      { name: "Lincoln Financial Field", city: "Philadelphia", highlight: "R16", slug: "lincoln-financial-field-world-cup-2026-tickets" },
      { name: "Lumen Field", city: "Seattle", highlight: "R16", slug: "lumen-field-world-cup-2026-tickets" },
      { name: "Levi's Stadium", city: "San Francisco", highlight: "R16", slug: "levis-stadium-world-cup-2026-tickets" },
      { name: "Gillette Stadium", city: "Boston", highlight: "QF", slug: "gillette-stadium-world-cup-2026-tickets" },
      { name: "Estadio BBVA", city: "Monterrey", highlight: "R32", slug: "estadio-bbva-world-cup-2026-tickets" },
      { name: "Estadio Akron", city: "Guadalajara", highlight: "R32", slug: "estadio-akron-world-cup-2026-tickets" },
      { name: "BMO Field", city: "Toronto", highlight: "R32", slug: "bmo-field-world-cup-2026-tickets" },
      { name: "BC Place", city: "Vancouver", highlight: "R32", slug: "bc-place-world-cup-2026-tickets" }
    ]
  }),
  5,
  1
)

// 7. City Travel Guides Section
db.prepare(`
  INSERT INTO competition_content
  (competition_id, section_type, section_key, section_title, content_text, content_json, display_order, is_active)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?)
`).run(
  1,
  'city_guides',
  'travel_guides',
  'Host Cities Travel Guide',
  null,
  JSON.stringify({
    cities: [
      {
        name: "New York/New Jersey",
        emoji: "🗽",
        slug: "new-york-world-cup-2026-city-guide",
        venue: "MetLife Stadium",
        venueSlug: "metlife-stadium-world-cup-2026-tickets",
        highlight: "FIFA World Cup 2026 Final",
        highlightSlug: "final-world-cup-2026-tickets",
        matches: "7+ matches including Round of 16",
        hotels: "Times Square, Jersey City",
        transport: "NJ Transit, subway",
        mustSee: "Statue of Liberty, Central Park"
      },
      {
        name: "Los Angeles",
        emoji: "🌴",
        slug: "los-angeles-world-cup-2026-city-guide",
        venue: "SoFi Stadium",
        venueSlug: "sofi-stadium-world-cup-2026-tickets",
        highlight: "Quarter-Finals",
        highlightSlug: "quarter-finals-world-cup-2026-tickets",
        matches: "8+ matches. Home to potential USA opener",
        hotels: "Inglewood, Santa Monica",
        transport: "Metro, rental car",
        mustSee: "Hollywood, Venice Beach"
      },
      {
        name: "Dallas",
        emoji: "🤠",
        slug: "dallas-world-cup-2026-city-guide",
        venue: "AT&T Stadium",
        venueSlug: "att-stadium-world-cup-2026-tickets",
        highlight: "Semi-Finals",
        highlightSlug: "semi-finals-world-cup-2026-tickets",
        matches: "9+ matches. Largest capacity venue",
        hotels: "Arlington, Downtown Dallas",
        transport: "DART, rental car",
        mustSee: "JFK Memorial, Fort Worth"
      },
      {
        name: "Atlanta",
        emoji: "🍑",
        slug: "atlanta-world-cup-2026-city-guide",
        venue: "Mercedes-Benz Stadium",
        venueSlug: "mercedes-benz-stadium-world-cup-2026-tickets",
        highlight: "Semi-Finals",
        highlightSlug: "semi-finals-world-cup-2026-tickets",
        matches: "8+ matches",
        hotels: "Downtown, Midtown",
        transport: "MARTA",
        mustSee: "World of Coca-Cola, MLK National Park"
      },
      {
        name: "Miami",
        emoji: "🏖️",
        slug: "miami-world-cup-2026-city-guide",
        venue: "Hard Rock Stadium",
        venueSlug: "hard-rock-stadium-world-cup-2026-tickets",
        highlight: "Third Place Match",
        highlightSlug: "third-place-world-cup-2026-tickets",
        matches: "Third Place Match + Quarter-Final",
        hotels: "South Beach, Brickell",
        transport: "Metrorail, rental car",
        mustSee: "Art Deco District"
      },
      {
        name: "Mexico City",
        emoji: "🇲🇽",
        slug: "mexico-city-world-cup-2026-city-guide",
        venue: "Estadio Azteca",
        venueSlug: "estadio-azteca-world-cup-2026-tickets",
        highlight: "Opening Match June 11",
        highlightSlug: "mexico-world-cup-2026-tickets",
        matches: "Mexico group matches + Round of 16",
        hotels: "Polanco, Condesa",
        transport: "Metro, Metrobus",
        mustSee: "Zócalo, Teotihuacán"
      }
    ]
  }),
  6,
  1
)

// 8. Groups Section (12 groups)
db.prepare(`
  INSERT INTO competition_content
  (competition_id, section_type, section_key, section_title, content_text, content_json, display_order, is_active)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?)
`).run(
  1,
  'groups',
  'tournament_groups',
  'Group Stage Draw',
  null,
  JSON.stringify({
    groups: [
      { name: "Group A", teams: ["Mexico", "South Africa", "Korea Republic", "TBD"], host: "Mexico" },
      { name: "Group B", teams: ["Canada", "TBD", "Qatar", "Switzerland"], host: "Canada" },
      { name: "Group C", teams: ["Brazil", "Morocco", "Haiti", "Scotland"], host: "East" },
      { name: "Group D", teams: ["United States", "Paraguay", "Australia", "TBD"], host: "West USA" },
      { name: "Group E", teams: ["Germany", "Curacao", "Ivory Coast", "Ecuador"], host: "Central" },
      { name: "Group F", teams: ["Japan", "Senegal", "Peru", "Honduras"], host: "Midwest" },
      { name: "Group G", teams: ["Portugal", "Nigeria", "Tunisia", "Ukraine"], host: "Northeast" },
      { name: "Group H", teams: ["Spain", "Saudi Arabia", "Egypt", "Mali"], host: "South" },
      { name: "Group I", teams: ["France", "Denmark", "Uruguay", "Algeria"], host: "Canada/East" },
      { name: "Group J", teams: ["Argentina", "Colombia", "Chile", "Venezuela"], host: "Mexico" },
      { name: "Group K", teams: ["Netherlands", "South Korea", "Ghana", "Poland"], host: "West" },
      { name: "Group L", teams: ["England", "Croatia", "Belgium", "Serbia"], host: "Northeast" }
    ]
  }),
  7,
  1
)

console.log('✅ Venues, city guides, and groups seeded successfully!')

db.close()
