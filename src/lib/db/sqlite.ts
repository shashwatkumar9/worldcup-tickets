import Database from 'better-sqlite3'
import path from 'path'
import fs from 'fs'

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

  // Seed initial data
  seedData()
}

function seedData() {
  if (!db) return

  // Check if data already exists
  const teamsCount = db.prepare('SELECT COUNT(*) as count FROM teams').get() as { count: number }
  if (teamsCount.count > 0) return // Already seeded

  // Seed teams
  const insertTeam = db.prepare(`
    INSERT INTO teams (id, slug, name, short_name, country_code, confederation, fifa_ranking, world_cup_titles, status, is_featured)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `)

  const teams = [
    ['1', 'usa-world-cup-2026-tickets', 'United States', 'USA', 'US', 'CONCACAF', 11, 0, 'published', 1],
    ['2', 'mexico-world-cup-2026-tickets', 'Mexico', 'MEX', 'MX', 'CONCACAF', 15, 0, 'published', 1],
    ['3', 'canada-world-cup-2026-tickets', 'Canada', 'CAN', 'CA', 'CONCACAF', 49, 0, 'published', 1],
    ['4', 'brazil-world-cup-2026-tickets', 'Brazil', 'BRA', 'BR', 'CONMEBOL', 5, 5, 'published', 1],
    ['5', 'argentina-world-cup-2026-tickets', 'Argentina', 'ARG', 'AR', 'CONMEBOL', 1, 3, 'published', 1],
    ['6', 'france-world-cup-2026-tickets', 'France', 'FRA', 'FR', 'UEFA', 2, 2, 'published', 1],
    ['7', 'england-world-cup-2026-tickets', 'England', 'ENG', 'GB', 'UEFA', 4, 1, 'published', 1],
    ['8', 'spain-world-cup-2026-tickets', 'Spain', 'ESP', 'ES', 'UEFA', 3, 1, 'published', 1],
    ['9', 'germany-world-cup-2026-tickets', 'Germany', 'GER', 'DE', 'UEFA', 12, 4, 'published', 1],
  ]

  teams.forEach(team => insertTeam.run(...team))

  // Seed venues
  const insertVenue = db.prepare(`
    INSERT INTO venues (id, slug, name, city, state, country, country_code, capacity, venue_type, status, is_world_cup_venue)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `)

  const venues = [
    ['1', 'sofi-stadium-world-cup-2026-tickets', 'SoFi Stadium', 'Los Angeles', 'California', 'United States', 'US', 70240, 'stadium', 'published', 1],
    ['2', 'metlife-stadium-world-cup-2026-tickets', 'MetLife Stadium', 'East Rutherford', 'New Jersey', 'United States', 'US', 82500, 'stadium', 'published', 1],
    ['3', 'att-stadium-world-cup-2026-tickets', 'AT&T Stadium', 'Arlington', 'Texas', 'United States', 'US', 80000, 'stadium', 'published', 1],
    ['4', 'mercedes-benz-stadium-world-cup-2026-tickets', 'Mercedes-Benz Stadium', 'Atlanta', 'Georgia', 'United States', 'US', 71000, 'stadium', 'published', 1],
    ['5', 'hard-rock-stadium-world-cup-2026-tickets', 'Hard Rock Stadium', 'Miami Gardens', 'Florida', 'United States', 'US', 65326, 'stadium', 'published', 1],
    ['6', 'gillette-stadium-world-cup-2026-tickets', 'Gillette Stadium', 'Foxborough', 'Massachusetts', 'United States', 'US', 65878, 'stadium', 'published', 1],
    ['7', 'arrowhead-stadium-world-cup-2026-tickets', 'Arrowhead Stadium', 'Kansas City', 'Missouri', 'United States', 'US', 76416, 'stadium', 'published', 1],
    ['8', 'lincoln-financial-field-world-cup-2026-tickets', 'Lincoln Financial Field', 'Philadelphia', 'Pennsylvania', 'United States', 'US', 69796, 'stadium', 'published', 1],
    ['9', 'levis-stadium-world-cup-2026-tickets', "Levi's Stadium", 'Santa Clara', 'California', 'United States', 'US', 68500, 'stadium', 'published', 1],
    ['10', 'lumen-field-world-cup-2026-tickets', 'Lumen Field', 'Seattle', 'Washington', 'United States', 'US', 68740, 'stadium', 'published', 1],
    ['11', 'nrg-stadium-world-cup-2026-tickets', 'NRG Stadium', 'Houston', 'Texas', 'United States', 'US', 72220, 'stadium', 'published', 1],
    ['12', 'estadio-azteca-world-cup-2026-tickets', 'Estadio Azteca', 'Mexico City', null, 'Mexico', 'MX', 87523, 'stadium', 'published', 1],
    ['13', 'estadio-akron-world-cup-2026-tickets', 'Estadio Akron', 'Guadalajara', null, 'Mexico', 'MX', 46232, 'stadium', 'published', 1],
    ['14', 'estadio-bbva-world-cup-2026-tickets', 'Estadio BBVA', 'Monterrey', null, 'Mexico', 'MX', 53500, 'stadium', 'published', 1],
    ['15', 'bmo-field-world-cup-2026-tickets', 'BMO Field', 'Toronto', 'Ontario', 'Canada', 'CA', 30000, 'stadium', 'published', 1],
    ['16', 'bc-place-world-cup-2026-tickets', 'BC Place', 'Vancouver', 'British Columbia', 'Canada', 'CA', 54500, 'stadium', 'published', 1],
  ]

  venues.forEach(venue => insertVenue.run(...venue))

  // Seed competition
  db.prepare(`
    INSERT INTO competitions (id, slug, name, sport_type, competition_type, start_date, end_date, host_countries, season, status, is_featured)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).run('1', 'fifa-world-cup-2026', 'FIFA World Cup 2026', 'football', 'world_cup', '2026-06-11', '2026-07-19', 'US,MX,CA', '2026', 'published', 1)

  // Seed fixtures
  const insertFixture = db.prepare(`
    INSERT INTO fixtures (id, slug, competition_id, home_team_id, venue_id, fixture_type, match_date, match_time, group_name, status)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `)

  insertFixture.run('1', 'mexico-opening-match-world-cup-2026-tickets', '1', '2', '12', 'group_stage', '2026-06-11', '20:00:00', 'A', 'scheduled')
  insertFixture.run('2', 'usa-group-match-1-world-cup-2026-tickets', '1', '1', '1', 'group_stage', '2026-06-12', '20:00:00', 'D', 'scheduled')

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
