import Database from "better-sqlite3"
import * as path from "path"

const dbPath = path.join(process.cwd(), "data", "worldcup.db")
const db = new Database(dbPath)

console.log("🔧 Adding competition content tables...")

try {
  // Check if column exists helper
  const checkColumn = (tableName: string, columnName: string) => {
    const result = db.prepare(`PRAGMA table_info(${tableName})`).all() as any[]
    return result.some((col) => col.name === columnName)
  }

  // Add meta fields to competitions table
  if (!checkColumn("competitions", "meta_title")) {
    console.log("  Adding meta_title column...")
    db.exec(`ALTER TABLE competitions ADD COLUMN meta_title TEXT;`)
  }
  if (!checkColumn("competitions", "meta_description")) {
    console.log("  Adding meta_description column...")
    db.exec(`ALTER TABLE competitions ADD COLUMN meta_description TEXT;`)
  }
  if (!checkColumn("competitions", "meta_keywords")) {
    console.log("  Adding meta_keywords column...")
    db.exec(`ALTER TABLE competitions ADD COLUMN meta_keywords TEXT;`)
  }

  // Create competition_content table
  console.log("  Creating competition_content table...")
  db.exec(`
    CREATE TABLE IF NOT EXISTS competition_content (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      competition_id INTEGER NOT NULL,
      section_type TEXT NOT NULL DEFAULT 'text',
      section_key TEXT NOT NULL,
      section_title TEXT,
      content_text TEXT,
      content_json TEXT,
      display_order INTEGER DEFAULT 0,
      is_active BOOLEAN DEFAULT 1,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `)

  // Check if affiliate_links table exists
  const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table'").all() as any[]
  const hasAffiliateTable = tables.some((t) => t.name === "affiliate_links")

  if (!hasAffiliateTable) {
    console.log("  Creating affiliate_links table...")
    db.exec(`
      CREATE TABLE affiliate_links (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        competition_id INTEGER,
        title TEXT NOT NULL,
        url TEXT NOT NULL,
        button_text TEXT DEFAULT 'Buy Tickets',
        description TEXT,
        display_order INTEGER DEFAULT 0,
        is_active BOOLEAN DEFAULT 1,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `)
  } else {
    // Add competition_id if it doesn't exist
    if (!checkColumn("affiliate_links", "competition_id")) {
      console.log("  Adding competition_id to affiliate_links...")
      db.exec(`ALTER TABLE affiliate_links ADD COLUMN competition_id INTEGER;`)
    }
  }

  // Create indexes
  console.log("  Creating indexes...")
  db.exec(`
    CREATE INDEX IF NOT EXISTS idx_competition_content_comp_id ON competition_content(competition_id);
    CREATE INDEX IF NOT EXISTS idx_competition_content_active ON competition_content(is_active);
    CREATE INDEX IF NOT EXISTS idx_competition_content_order ON competition_content(display_order);
    CREATE INDEX IF NOT EXISTS idx_affiliate_links_comp_id ON affiliate_links(competition_id);
    CREATE INDEX IF NOT EXISTS idx_affiliate_links_active ON affiliate_links(is_active);
  `)

  console.log("\n✅ Competition content tables added successfully!")
  console.log("\nTables ready:")
  console.log("  ✓ competition_content")
  console.log("  ✓ affiliate_links")
  console.log("\nNew columns in competitions:")
  console.log("  ✓ meta_title, meta_description, meta_keywords")
} catch (error) {
  console.error("\n❌ Error adding tables:", error)
  process.exit(1)
} finally {
  db.close()
}
