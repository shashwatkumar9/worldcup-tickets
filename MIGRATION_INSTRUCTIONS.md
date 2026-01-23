# Database Migration Instructions

## Overview
This guide will help you populate the database with teams, venues, fixtures, and migrate existing articles to the admin panel.

## Prerequisites
- Access to Supabase SQL Editor
- Admin access to the database

## Step 1: Run Schema Migration (Page Content Support)

1. Open Supabase SQL Editor
2. Run this file: `supabase/migrations/add_page_content_support.sql`
3. This adds support for general page content in the `page_content` table

## Step 2: Seed World Cup 2026 Data

1. Run this file: `supabase/migrations/seed_world_cup_2026_data.sql`
2. This will populate:
   - FIFA World Cup 2026 competition
   - 16 venues (11 USA, 3 Mexico, 2 Canada)
   - 9 teams (USA, Mexico, Canada, Brazil, Argentina, France, England, Spain, Germany)
   - Sample fixtures (Opening match, USA match)

## Step 3: Verify Data

Run these queries to verify:

```sql
-- Check competition
SELECT * FROM competitions WHERE slug = 'fifa-world-cup-2026';

-- Check teams
SELECT name, country_code, world_cup_titles FROM teams ORDER BY name;

-- Check venues
SELECT name, city, country FROM venues ORDER BY country, city;

-- Check fixtures
SELECT f.slug, t.name as home_team, v.name as venue
FROM fixtures f
LEFT JOIN teams t ON f.home_team_id = t.id
LEFT JOIN venues v ON f.venue_id = v.id;
```

## Step 4: Test Admin Panel

1. Go to: http://localhost:3001/admin/teams
2. You should see all 9 teams listed
3. Go to: http://localhost:3001/admin/venues
4. You should see all 16 venues
5. Go to: http://localhost:3001/admin/fixtures
6. You should see sample fixtures

## Step 5: Migrate Articles to Database

### Option A: Manual Migration (Recommended for accuracy)

1. Go to: http://localhost:3001/admin/page-content
2. Click "New Content"
3. For each page, manually copy the article content:

**FIFA World Cup 2026 Main Page:**
- Entity Type: General Page
- Page Slug: `fifa-world-cup-2026-tickets`
- Language: English
- Content: Copy from `/src/app/(public)/fifa-world-cup-2026-tickets/page.tsx` (lines 758-1099)

**Team Pages (9 teams):**
- Entity Type: General Page
- Page Slug: `teams/usa-world-cup-2026-tickets` (etc.)
- Language: English
- Content: Copy the article section from each team page

### Option B: Automated Script (TODO)

A Node.js script to automatically extract and migrate articles will be created if needed.

## Step 6: Update Page Components to Use Database

After articles are in the database, pages need to be updated to:
1. Fetch content from `page_content` table
2. Render the HTML from database instead of hardcoded content
3. Fall back to hardcoded content if database content not found

## Troubleshooting

### Error: "relation does not exist"
- Make sure you ran the schema migration first
- Check that all tables exist: `\dt` in psql

### Error: "duplicate key value"
- Data already exists - this is safe to ignore
- Or run `DELETE FROM teams; DELETE FROM venues; DELETE FROM fixtures;` first

### Teams/Venues showing empty in admin
- Verify migrations ran successfully
- Check data with SELECT queries above
- Restart dev server: `npm run dev`

## Next Steps

After migration:
1. Verify all teams, venues, fixtures show in admin panel
2. Test creating/editing page content
3. Update pages to fetch from database
4. Test that articles display correctly on public pages
5. Add remaining teams, fixtures, venues as needed
