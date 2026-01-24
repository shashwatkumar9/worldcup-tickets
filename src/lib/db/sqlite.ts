import Database from 'better-sqlite3'
import path from 'path'
import fs from 'fs'
import teamsData from '../data/teams.json'
import venuesData from '../data/venues.json'
import fixturesData from '../data/fixtures.json'

const dbPath = path.join(process.cwd(), 'data', 'worldcup.db')

// Ensure data directory exists
const dataDir = path.dirname(dbPath)
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true })
}

let db: Database.Database | null = null

export function getDb() {
  if (!db) {
    db = new Database(dbPath)
    db.pragma('journal_mode = WAL')
    initializeDatabase()
  }
  return db
}

function initializeDatabase() {
  if (!db) return

  // Create teams table
  db.exec(`
    CREATE TABLE IF NOT EXISTS teams (
      id TEXT PRIMARY KEY,
      slug TEXT UNIQUE NOT NULL,
      name TEXT NOT NULL,
      short_name TEXT,
      country_code TEXT,
      confederation TEXT,
      fifa_ranking INTEGER,
      world_cup_titles INTEGER DEFAULT 0,
      status TEXT DEFAULT 'published',
      is_featured INTEGER DEFAULT 0,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      updated_at TEXT DEFAULT CURRENT_TIMESTAMP
    )
  `)

  // Create venues table
  db.exec(`
    CREATE TABLE IF NOT EXISTS venues (
      id TEXT PRIMARY KEY,
      slug TEXT UNIQUE NOT NULL,
      name TEXT NOT NULL,
      city TEXT,
      state TEXT,
      country TEXT,
      country_code TEXT,
      capacity INTEGER,
      venue_type TEXT DEFAULT 'stadium',
      status TEXT DEFAULT 'published',
      is_world_cup_venue INTEGER DEFAULT 0,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      updated_at TEXT DEFAULT CURRENT_TIMESTAMP
    )
  `)

  // Create competitions table
  db.exec(`
    CREATE TABLE IF NOT EXISTS competitions (
      id TEXT PRIMARY KEY,
      slug TEXT UNIQUE NOT NULL,
      name TEXT NOT NULL,
      sport_type TEXT DEFAULT 'football',
      competition_type TEXT DEFAULT 'world_cup',
      start_date TEXT,
      end_date TEXT,
      host_countries TEXT,
      season TEXT,
      status TEXT DEFAULT 'published',
      is_featured INTEGER DEFAULT 0,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      updated_at TEXT DEFAULT CURRENT_TIMESTAMP
    )
  `)

  // Create fixtures table
  db.exec(`
    CREATE TABLE IF NOT EXISTS fixtures (
      id TEXT PRIMARY KEY,
      slug TEXT UNIQUE NOT NULL,
      competition_id TEXT,
      home_team_id TEXT,
      away_team_id TEXT,
      venue_id TEXT,
      fixture_type TEXT DEFAULT 'group_stage',
      match_date TEXT,
      match_time TEXT,
      group_name TEXT,
      round TEXT,
      status TEXT DEFAULT 'scheduled',
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      updated_at TEXT DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (home_team_id) REFERENCES teams(id),
      FOREIGN KEY (away_team_id) REFERENCES teams(id),
      FOREIGN KEY (venue_id) REFERENCES venues(id)
    )
  `)

  // Create page_content table
  db.exec(`
    CREATE TABLE IF NOT EXISTS page_content (
      id TEXT PRIMARY KEY,
      entity_type TEXT NOT NULL,
      entity_id TEXT,
      page_slug TEXT,
      language TEXT DEFAULT 'en',
      content_html TEXT,
      meta_title TEXT,
      meta_description TEXT,
      is_complete INTEGER DEFAULT 0,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      updated_at TEXT DEFAULT CURRENT_TIMESTAMP
    )
  `)

  // Create affiliate_links table
  db.exec(`
    CREATE TABLE IF NOT EXISTS affiliate_links (
      id TEXT PRIMARY KEY,
      entity_type TEXT NOT NULL,
      entity_id TEXT NOT NULL,
      page_slug TEXT,
      provider TEXT NOT NULL,
      affiliate_url TEXT,
      button_text TEXT DEFAULT 'Buy Now',
      display_order INTEGER DEFAULT 0,
      is_active INTEGER DEFAULT 1,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      updated_at TEXT DEFAULT CURRENT_TIMESTAMP
    )
  `)

  // Create seo_meta table
  db.exec(`
    CREATE TABLE IF NOT EXISTS seo_meta (
      id TEXT PRIMARY KEY,
      page_url TEXT UNIQUE NOT NULL,
      entity_type TEXT,
      entity_id TEXT,
      meta_title TEXT,
      meta_description TEXT,
      meta_keywords TEXT,
      og_title TEXT,
      og_description TEXT,
      og_image TEXT,
      canonical_url TEXT,
      robots TEXT DEFAULT 'index, follow',
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      updated_at TEXT DEFAULT CURRENT_TIMESTAMP
    )
  `)

  // Run migrations
  runMigrations()

  // Seed initial data
  seedData()
}

function runMigrations() {
  if (!db) return

  try {
    // Check if competition_id column exists in teams table
    const teamsColumns = db.prepare("PRAGMA table_info(teams)").all() as any[]
    const hasCompetitionIdInTeams = teamsColumns.some(col => col.name === 'competition_id')

    if (!hasCompetitionIdInTeams) {
      console.log('Adding competition_id to teams table...')
      db.exec('ALTER TABLE teams ADD COLUMN competition_id TEXT')
      // Link all existing teams to FIFA World Cup 2026
      db.exec("UPDATE teams SET competition_id = '1' WHERE competition_id IS NULL")
    }

    // Check if competition_id column exists in venues table
    const venuesColumns = db.prepare("PRAGMA table_info(venues)").all() as any[]
    const hasCompetitionIdInVenues = venuesColumns.some(col => col.name === 'competition_id')

    if (!hasCompetitionIdInVenues) {
      console.log('Adding competition_id to venues table...')
      db.exec('ALTER TABLE venues ADD COLUMN competition_id TEXT')
      // Link all existing venues to FIFA World Cup 2026
      db.exec("UPDATE venues SET competition_id = '1' WHERE competition_id IS NULL")
    }

    // Update all existing fixtures to link to FIFA World Cup 2026 if not set
    db.exec("UPDATE fixtures SET competition_id = '1' WHERE competition_id IS NULL OR competition_id = ''")

    console.log('✅ Migrations completed successfully')
  } catch (error) {
    console.error('Migration error:', error)
  }
}

function seedData() {
  if (!db) return

  // Check if data already exists
  const teamsCount = db.prepare('SELECT COUNT(*) as count FROM teams').get() as { count: number }
  if (teamsCount.count > 0) return // Already seeded

  // Seed teams from JSON data
  const insertTeam = db.prepare(`
    INSERT INTO teams (id, slug, name, short_name, country_code, confederation, fifa_ranking, world_cup_titles, status, is_featured)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `)

  teamsData.forEach(team => {
    insertTeam.run(
      team.id,
      team.slug,
      team.name,
      team.short_name,
      team.country_code,
      team.confederation,
      team.fifa_ranking,
      team.world_cup_titles,
      team.status,
      team.is_featured ? 1 : 0
    )
  })

  console.log(`✅ Seeded ${teamsData.length} teams`)

  // Seed venues from JSON data
  const insertVenue = db.prepare(`
    INSERT INTO venues (id, slug, name, city, state, country, country_code, capacity, venue_type, status, is_world_cup_venue)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `)

  venuesData.forEach(venue => {
    insertVenue.run(
      venue.id,
      venue.slug,
      venue.name,
      venue.city,
      venue.state,
      venue.country,
      venue.country_code,
      venue.capacity,
      venue.venue_type,
      venue.status,
      venue.is_world_cup_venue ? 1 : 0
    )
  })

  console.log(`✅ Seeded ${venuesData.length} venues`)

  // Seed competition
  db.prepare(`
    INSERT INTO competitions (id, slug, name, sport_type, competition_type, start_date, end_date, host_countries, season, status, is_featured)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).run('1', 'fifa-world-cup-2026', 'FIFA World Cup 2026', 'football', 'world_cup', '2026-06-11', '2026-07-19', 'US,MX,CA', '2026', 'published', 1)

  // Seed fixtures from JSON data
  const insertFixture = db.prepare(`
    INSERT INTO fixtures (id, slug, competition_id, home_team_id, away_team_id, venue_id, fixture_type, match_date, match_time, group_name, round, status)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `)

  fixturesData.forEach(fixture => {
    insertFixture.run(
      fixture.id,
      fixture.slug,
      '1', // competition_id for FIFA World Cup 2026
      fixture.home_team_id,
      fixture.away_team_id,
      fixture.venue_id,
      fixture.fixture_type,
      fixture.match_date,
      fixture.match_time,
      fixture.group_name,
      fixture.round,
      fixture.status
    )
  })

  console.log(`✅ Seeded ${fixturesData.length} fixtures`)
  console.log('✅ Database seeded successfully!')
}

// Query builder to mimic Supabase API
export function createQueryBuilder(tableName: string) {
  const db = getDb()
  let query = `SELECT * FROM ${tableName}`
  let params: any[] = []
  let whereClauses: string[] = []
  let orderClause = ''
  let limitClause = ''
  let singleMode = false

  const builder = {
    select: (fields?: string) => {
      if (fields && fields !== '*') {
        query = `SELECT ${fields} FROM ${tableName}`
      }
      return builder
    },
    eq: (column: string, value: any) => {
      whereClauses.push(`${column} = ?`)
      params.push(value)
      return builder
    },
    order: (column: string, options?: { ascending?: boolean }) => {
      const direction = options?.ascending === false ? 'DESC' : 'ASC'
      orderClause = ` ORDER BY ${column} ${direction}`
      return builder
    },
    limit: (count: number) => {
      limitClause = ` LIMIT ${count}`
      return builder
    },
    single: async () => {
      singleMode = true
      const result = await builder.execute()
      return {
        data: result.data && result.data.length > 0 ? result.data[0] : null,
        error: result.error
      }
    },
    insert: (values: any) => {
      const keys = Object.keys(values)
      const placeholders = keys.map(() => '?').join(', ')
      const insertQuery = `INSERT INTO ${tableName} (${keys.join(', ')}) VALUES (${placeholders})`

      try {
        const stmt = db.prepare(insertQuery)
        stmt.run(...keys.map(k => values[k]))
        return Promise.resolve({ data: values, error: null })
      } catch (error: any) {
        return Promise.resolve({ data: null, error: { message: error.message } })
      }
    },
    update: (values: any) => {
      const updateBuilder = {
        eq: (column: string, value: any) => {
          const keys = Object.keys(values)
          const setClause = keys.map(k => `${k} = ?`).join(', ')
          const updateQuery = `UPDATE ${tableName} SET ${setClause} WHERE ${column} = ?`

          try {
            const stmt = db.prepare(updateQuery)
            stmt.run(...keys.map(k => values[k]), value)
            return Promise.resolve({ data: values, error: null })
          } catch (error: any) {
            return Promise.resolve({ data: null, error: { message: error.message } })
          }
        }
      }
      return updateBuilder
    },
    delete: () => {
      const deleteBuilder = {
        eq: (column: string, value: any) => {
          const deleteQuery = `DELETE FROM ${tableName} WHERE ${column} = ?`

          try {
            const stmt = db.prepare(deleteQuery)
            stmt.run(value)
            return Promise.resolve({ error: null })
          } catch (error: any) {
            return Promise.resolve({ error: { message: error.message } })
          }
        }
      }
      return deleteBuilder
    },
    execute: async () => {
      try {
        let finalQuery = query

        if (whereClauses.length > 0) {
          finalQuery += ` WHERE ${whereClauses.join(' AND ')}`
        }

        finalQuery += orderClause + limitClause

        const stmt = db.prepare(finalQuery)
        const rows = stmt.all(...params)

        return { data: rows, error: null }
      } catch (error: any) {
        return { data: null, error: { message: error.message } }
      }
    }
  }

  // Make it thenable
  builder.then = function(resolve: any) {
    return builder.execute().then(resolve)
  }

  return builder
}
