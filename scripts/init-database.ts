#!/usr/bin/env tsx
/**
 * Initialize SQLite database with World Cup 2026 data
 * Run: npx tsx scripts/init-database.ts
 */

import { getDb } from '../src/lib/db/sqlite'

console.log('🚀 Initializing database...\n')

try {
  // This will create the database, tables, and seed data
  const db = getDb()

  // Verify data
  const teams = db.prepare('SELECT COUNT(*) as count FROM teams').get() as { count: number }
  const venues = db.prepare('SELECT COUNT(*) as count FROM venues').get() as { count: number }
  const fixtures = db.prepare('SELECT COUNT(*) as count FROM fixtures').get() as { count: number }

  console.log('✅ Database initialized successfully!')
  console.log(`📊 Teams: ${teams.count}`)
  console.log(`🏟️  Venues: ${venues.count}`)
  console.log(`⚽ Fixtures: ${fixtures.count}`)
  console.log('\n✨ You can now access the admin panel at http://localhost:3001/admin')
} catch (error) {
  console.error('❌ Error initializing database:', error)
  process.exit(1)
}
