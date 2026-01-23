# Quick Start: Database Migrations & Article Setup

## 🚀 What This Will Do

1. ✅ Fix empty teams, fixtures, and venues in admin panel
2. ✅ Migrate all existing articles to database (admin editable)
3. ✅ Enable real-time article editing from admin panel
4. ✅ Set up page content management system

## 📋 Prerequisites

- Access to Supabase dashboard
- `.env.local` with `SUPABASE_SERVICE_ROLE_KEY` (admin key)

## ⚡ Quick Steps

### Step 1: Install Dependencies

```bash
npm install
```

This will install `tsx` (TypeScript executor) needed for migration script.

### Step 2: Run Database Migrations

Open your **Supabase SQL Editor** and run these files in order:

**File 1:** `supabase/migrations/add_page_content_support.sql`
```sql
-- Run this entire file in SQL Editor
-- Adds support for general page content
```

**File 2:** `supabase/migrations/seed_world_cup_2026_data.sql`
```sql
-- Run this entire file in SQL Editor
-- Populates teams, venues, fixtures
```

### Step 3: Verify Data in Admin Panel

1. Restart dev server: `npm run dev`
2. Go to: http://localhost:3001/admin/teams
   - ✅ Should see 9 teams (USA, Mexico, Canada, Brazil, Argentina, France, England, Spain, Germany)
3. Go to: http://localhost:3001/admin/venues
   - ✅ Should see 16 venues
4. Go to: http://localhost:3001/admin/fixtures
   - ✅ Should see sample fixtures

### Step 4: Migrate Articles to Database

Run the migration script:

```bash
npm run migrate:articles
```

This will:
- Extract article HTML from all 10 pages (main page + 9 teams)
- Insert them into `page_content` table
- Make them editable from admin panel

Expected output:
```
🚀 Starting article migration...
Total articles to migrate: 10

Migrating: fifa-world-cup-2026-tickets
  ✓ Extracted 52000 characters
  ✓ Inserted successfully

Migrating: teams/usa-world-cup-2026-tickets
  ✓ Extracted 8500 characters
  ✓ Inserted successfully

[...repeat for all teams...]

✅ Success: 10
❌ Failed: 0
📊 Total: 10

🎉 All articles migrated successfully!
```

### Step 5: Verify Articles in Admin Panel

1. Go to: http://localhost:3001/admin/page-content
2. ✅ Should see 10 entries:
   - `fifa-world-cup-2026-tickets`
   - `teams/usa-world-cup-2026-tickets`
   - `teams/mexico-world-cup-2026-tickets`
   - `teams/canada-world-cup-2026-tickets`
   - `teams/brazil-world-cup-2026-tickets`
   - `teams/argentina-world-cup-2026-tickets`
   - `teams/france-world-cup-2026-tickets`
   - `teams/england-world-cup-2026-tickets`
   - `teams/spain-world-cup-2026-tickets`
   - `teams/germany-world-cup-2026-tickets`

3. Click "Edit" on any article
4. ✅ Should see the article content in rich text editor
5. ✅ Try making changes and saving

## 🎯 What's Working Now

### Admin Panel
- ✅ Teams management (9 teams with full data)
- ✅ Venues management (16 World Cup venues)
- ✅ Fixtures management (sample fixtures)
- ✅ Page Content management (10 articles)
- ✅ Rich text editor with proper colors

### Article Management
- ✅ All articles stored in database
- ✅ Edit articles in real-time from admin panel
- ✅ Rich formatting support (headings, lists, links, images)
- ✅ SEO metadata (meta title, description)
- ✅ Multi-language support (ready for future)

## 📝 Next Steps (Optional)

### A. Update Pages to Fetch from Database

Currently, pages still show hardcoded content. To use database content:

1. Update each page component to:
   ```tsx
   import { getPageContent } from '@/lib/page-content'

   // In page component
   const content = await getPageContent('fifa-world-cup-2026-tickets')

   // Render database content if available
   {content?.content_html ? (
     <div dangerouslySetInnerHTML={{ __html: content.content_html }} />
   ) : (
     // Fallback to hardcoded content
   )}
   ```

2. Benefits:
   - Edit articles from admin panel
   - Changes reflect immediately on website
   - No code deployments needed for content updates

### B. Add More Teams

Add articles for:
- Portugal (Ronaldo's farewell)
- Netherlands (Total Football)
- Belgium (Golden Generation)
- Croatia (2018 finalists)
- Uruguay (2x champions)
- Switzerland, Denmark, Japan, South Korea

### C. Add More Fixtures

Currently only 2 sample fixtures. Add:
- All group stage matches
- Knockout rounds (R32, R16, QF, SF, Final)
- Use admin panel: `/admin/fixtures/new`

## 🐛 Troubleshooting

### "Teams still empty in admin"
- Verify migrations ran: Run queries in Step 2
- Clear browser cache
- Restart dev server: `Ctrl+C` then `npm run dev`

### "Migration script fails"
- Check `.env.local` has `SUPABASE_SERVICE_ROLE_KEY`
- Verify Supabase connection
- Check file paths are correct

### "Articles not showing in admin"
- Run migration script: `npm run migrate:articles`
- Check script output for errors
- Verify in Supabase: `SELECT * FROM page_content;`

### "Rich text editor text invisible"
- Already fixed! Editor now uses light text (slate-100)
- If still dark, clear cache and restart

## 📊 Database Schema Overview

```
competitions (FIFA World Cup 2026)
   ↓
teams (9 teams) ←→ fixtures (matches) ←→ venues (16 stadiums)

page_content (10 articles)
   ├── fifa-world-cup-2026-tickets
   └── teams/[team-slug] (9 teams)
```

## ✨ Features After Migration

1. **Admin Panel Management**
   - Edit any article in real-time
   - Rich text formatting
   - SEO optimization
   - Multi-language ready

2. **Automatic Linking**
   - Teams linked to fixtures
   - Fixtures linked to venues
   - Articles linked to pages

3. **Scalability**
   - Easy to add new teams
   - Easy to add new articles
   - Easy to add new fixtures/venues

## 🎉 You're Done!

After completing these steps:
- ✅ Admin panel fully functional
- ✅ Teams, venues, fixtures populated
- ✅ All articles editable from admin panel
- ✅ Ready to add more content

Questions? Check `MIGRATION_INSTRUCTIONS.md` for detailed docs.
