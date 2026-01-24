# World Cup Tickets Admin Panel - Development TODO

**Last Updated:** January 25, 2025
**Project:** Multi-Competition Ticketing CMS
**Repository:** https://github.com/shashwatkumar9/worldcuptickets-new-mac

---

## ✅ COMPLETED FEATURES

### Database & Schema
- [x] SQLite database setup with better-sqlite3
- [x] Teams table with competition_id
- [x] Venues table with competition_id
- [x] Fixtures table with competition_id
- [x] Competitions table
- [x] Page content table (for articles)
- [x] **Affiliate links table** (provider, entity linking, button text, display order)
- [x] **SEO metadata table** (meta tags, Open Graph, canonical URLs, robots)
- [x] Database migrations for competition_id columns
- [x] Automatic linking of existing data to FIFA World Cup 2026 (competition_id='1')

### Competition Management
- [x] Competition context provider
- [x] Competition selector dropdown in admin header
- [x] Create new competition modal
- [x] Auto-select newest competition
- [x] LocalStorage persistence for selected competition
- [x] Competition ordering by created_at DESC
- [x] Competition filtering across all pages

### Teams Management (`/admin/teams`)
- [x] View all teams (46 teams seeded)
- [x] Filter by confederation (CONCACAF, UEFA, CONMEBOL, AFC, CAF, OFC)
- [x] Search teams by name/short name
- [x] Stats dashboard (Total, Articles Complete, Pending)
- [x] **Create team modal** (all fields editable)
- [x] **Edit team modal** (name, ranking, titles, confederation, featured status)
- [x] Filter teams by selected competition
- [x] Empty state when switching to new competition

### Team Detail Page (`/admin/teams/[id]`)
- [x] View team information
- [x] **Article content editor** (TipTap rich text editor)
- [x] Page Content SEO (basic meta title & description)
- [x] **Advanced SEO & Open Graph section:**
  - Meta title, description, keywords
  - Open Graph title, description, image
  - Canonical URL
  - Robots meta tags (index/noindex, follow/nofollow)
- [x] **Affiliate Links Section:**
  - View all affiliate links for the team
  - Add new affiliate links (HelloTickets, TicketFootball.net, Viagogo, StubHub, Ticombo, Custom)
  - Edit existing affiliate links
  - Delete affiliate links with confirmation
  - Display order management
  - Active/inactive toggle
  - Color-coded provider badges
  - Empty state with call-to-action
- [x] Save article content with meta data
- [x] Preview live page button
- [x] Status banners (article exists/pending)

### Venues Management (`/admin/venues`)
- [x] View all venues (16 venues seeded)
- [x] Search venues by name/city/country
- [x] Stats dashboard (Total, Featured, Capacity)
- [x] **Create venue modal** (name, location, capacity, type, featured status)
- [x] **Edit venue modal** (all fields editable)
- [x] Filter venues by selected competition
- [x] Featured venue badges

### Fixtures Management (`/admin/fixtures`)
- [x] View all fixtures (104 fixtures seeded)
- [x] Search fixtures by team/venue
- [x] Filter by fixture type (Group Stage/Knockout)
- [x] Stats dashboard (Total, Group Stage, Knockout, Venues)
- [x] **Create fixture modal:**
  - Home/Away team selection (dropdowns)
  - Venue selection (dropdown)
  - Fixture type (Group Stage/Knockout)
  - Conditional fields (Group A-L for group stage, Round text for knockout)
  - Match date & time
  - Status (Scheduled/Live/Completed/Postponed/Cancelled)
  - Auto-generate slug from team names
- [x] **Edit fixture modal** (all fields editable)
- [x] Filter fixtures by selected competition
- [x] Team and venue name display

### Affiliate Links Management (`/admin/affiliates`)
- [x] Global affiliate links management page
- [x] View all affiliate links across all pages
- [x] Stats by provider (HelloTickets, TicketFootball.net, Viagogo, StubHub, Ticombo)
- [x] Search by page slug or provider
- [x] Filter by entity type (team, fixture, venue, group, city_guide)
- [x] **Create affiliate link modal:**
  - Entity type selection
  - Provider selection (5 predefined + custom)
  - Entity ID and page slug
  - Affiliate URL
  - Button text customization
  - Display order
  - Active/inactive toggle
- [x] **Edit affiliate link modal**
- [x] Delete affiliate links with confirmation
- [x] Color-coded provider badges

### Other Admin Pages (Created)
- [x] `/admin` - Dashboard with stats
- [x] `/admin/competitions` - Competitions list
- [x] `/admin/groups` - Groups management (hardcoded for now)
- [x] `/admin/articles` - Articles placeholder
- [x] `/admin/travel-guides` - Travel guides placeholder
- [x] `/admin/page-content` - Page content placeholder
- [x] `/admin/settings` - Settings placeholder
- [x] `/admin/seo` - SEO placeholder

### Authentication & Navigation
- [x] NextAuth.js integration
- [x] Admin navbar with all links
- [x] Session provider
- [x] Protected admin routes

---

## 🔄 IN PROGRESS / NEEDS TESTING

### Data Verification
- [ ] **Verify team count** - CONTENT-TODO.md shows 46 teams but only 42 qualified for World Cup 2026
  - Need to check teams.json and remove 4 teams that didn't qualify
  - Update seed data accordingly
- [ ] Test competition switching with empty states
- [ ] Verify all affiliate links are properly filtered
- [ ] Test SEO metadata save/load functionality

---

## 🚀 TODO - HIGH PRIORITY

### Venue Detail Page (`/admin/venues/[id]`) - NOT CREATED YET
- [ ] Create venue detail page (similar to team detail page)
- [ ] Add article content editor for venues
- [ ] Add affiliate links section for venues
- [ ] Add SEO metadata section for venues
- [ ] Preview button for live venue page

### Fixture Detail Page (`/admin/fixtures/[id]`) - NOT CREATED YET
- [ ] Create fixture detail page (similar to team/venue detail pages)
- [ ] Add article content editor for fixtures
- [ ] Add affiliate links section for fixtures
- [ ] Add SEO metadata section for fixtures
- [ ] Preview button for live fixture page

### Groups Management (`/admin/groups`)
- [ ] Make groups dynamic (currently hardcoded)
- [ ] Create groups table in database
- [ ] Link groups to competitions
- [ ] Add CRUD operations for groups
- [ ] Create group detail page with affiliate links & SEO

### SEO Management Page (`/admin/seo`)
- [ ] Create global SEO management page
- [ ] List all pages with SEO status
- [ ] Bulk edit SEO metadata
- [ ] SEO health check (missing titles, descriptions, etc.)
- [ ] Preview social media cards
- [ ] Export SEO data

### City Guides / Travel Guides
- [ ] Create travel_guides table in database
- [ ] Build city guides management page (`/admin/travel-guides`)
- [ ] Create city guide detail page with:
  - Article content editor
  - Affiliate links
  - SEO metadata
- [ ] Link city guides to venues/fixtures
- [ ] Add 16 city guides (per CONTENT-TODO.md)

---

## 🎯 TODO - MEDIUM PRIORITY

### Content Creation
- [ ] Create main competition article (FIFA World Cup 2026 Tickets)
- [ ] Create team articles (42 teams as per qualified list)
- [ ] Create venue articles (16 venues)
- [ ] Create fixture articles (104+ fixtures)
- [ ] Create group articles (12 groups A-L)
- [ ] Create knockout round articles (Round of 32, R16, QF, SF, Final)
- [ ] Create city guide articles (16 cities)

### Article Requirements (per CONTENT-TODO.md)
- [ ] Minimum 1500 words per article
- [ ] 40-50 internal links per article
- [ ] 8-10 FAQs per article
- [ ] H1 with target keyword
- [ ] H2-H4 structure
- [ ] Meta descriptions 150-160 characters

### Affiliate Link Implementation
- [ ] Add affiliate link display on public team pages
- [ ] Add affiliate link display on public venue pages
- [ ] Add affiliate link display on public fixture pages
- [ ] Style "Buy Now" buttons with provider colors
- [ ] Track affiliate link clicks (analytics)
- [ ] A/B testing for button text

### SEO Implementation
- [ ] Generate meta tags on public pages from seo_meta table
- [ ] Add JSON-LD structured data (Event, SportsEvent, Place schemas)
- [ ] Generate XML sitemap
- [ ] Generate robots.txt
- [ ] Add canonical tags
- [ ] Add Open Graph meta tags for social sharing

---

## 💡 TODO - LOW PRIORITY / ENHANCEMENTS

### Delete Functionality
- [ ] Add delete button for teams (with confirmation)
- [ ] Add delete button for venues (with confirmation)
- [ ] Add delete button for fixtures (with confirmation)
- [ ] Add delete button for competitions (with cascade warning)
- [ ] Implement soft delete vs hard delete

### Bulk Operations
- [ ] Bulk edit teams (change confederation, status, etc.)
- [ ] Bulk edit fixtures (change status, reschedule)
- [ ] Bulk import teams from CSV
- [ ] Bulk import fixtures from CSV
- [ ] Clone competition (copy all teams/venues/fixtures to new competition)

### Image Management
- [ ] Add team logos upload
- [ ] Add venue images upload
- [ ] Add competition logos upload
- [ ] Image optimization and compression
- [ ] CDN integration for images

### Advanced Features
- [ ] **Multi-language support** (articles in Spanish, French, etc.)
- [ ] **User roles & permissions** (Admin, Editor, Viewer)
- [ ] **Content workflow** (Draft, Review, Published)
- [ ] **Version history** for articles
- [ ] **Content scheduling** (publish at specific date/time)
- [ ] **Email notifications** for content changes
- [ ] **Activity log** (audit trail)

### Analytics & Reporting
- [ ] Page views tracking
- [ ] Affiliate link click tracking
- [ ] Conversion tracking
- [ ] Revenue reporting by provider
- [ ] Popular teams/fixtures dashboard
- [ ] SEO performance metrics

### Public-Facing Site
- [ ] Build public team pages (`/teams/[slug]`)
- [ ] Build public venue pages (`/venues/[slug]`)
- [ ] Build public fixture pages (`/fixtures/[slug]`)
- [ ] Build public group pages (`/groups/[slug]`)
- [ ] Build public city guide pages (`/travel/[slug]`)
- [ ] Build homepage with featured content
- [ ] Build competition landing page
- [ ] Add search functionality
- [ ] Add ticket price comparison
- [ ] Add seat map visualizations

---

## 🐛 KNOWN ISSUES

### Data Issues
- [ ] Team count discrepancy: 46 teams in database vs 42 qualified teams
- [ ] Some teams have placeholder data (TBD teams in groups)
- [ ] Hardcoded group assignments need to be made dynamic

### UI/UX Issues
- [ ] Color classes in affiliate links may not work with dynamic Tailwind (bg-${color}-100)
- [ ] Long affiliate URLs truncate in UI
- [ ] Modal scroll on small screens needs improvement
- [ ] Mobile responsiveness needs testing

### Technical Debt
- [ ] No validation on slug uniqueness
- [ ] No error handling for duplicate entries
- [ ] No loading states on some operations
- [ ] LocalStorage can get out of sync with database

---

## 📋 NOTES FOR TOMORROW

### Priority Order
1. **Fix team count** - Remove 4 unqualified teams from database
2. **Test current features** - Ensure everything works end-to-end
3. **Create venue detail page** - Add article content, affiliate links, SEO
4. **Create fixture detail page** - Add article content, affiliate links, SEO
5. **Build SEO management page** - Global SEO overview and editing

### Database Cleanup Needed
```sql
-- Need to verify and remove 4 teams that didn't qualify
-- Check teams.json against CONTENT-TODO.md qualified teams list
-- Ensure groups have correct team assignments
```

### Files to Review
- `/src/lib/data/teams.json` - Verify 42 qualified teams
- `/src/lib/data/fixtures.json` - Verify fixture data
- `/CONTENT-TODO.md` - Full content requirements

### Testing Checklist
- [ ] Create new competition (e.g., "Test Tournament 2027")
- [ ] Add teams to new competition
- [ ] Add venues to new competition
- [ ] Create fixtures linking teams and venues
- [ ] Switch between competitions - verify filtering
- [ ] Add affiliate links to a team
- [ ] Save SEO metadata for a team
- [ ] Delete affiliate links
- [ ] Edit all entity types (teams, venues, fixtures)

---

## 🎨 TECH STACK

**Frontend:**
- Next.js 16.1.1 (App Router, Turbopack)
- React 19.2.3
- TypeScript
- Tailwind CSS
- Radix UI components
- TipTap editor (rich text)

**Backend:**
- SQLite (better-sqlite3)
- NextAuth.js (authentication)

**Key Libraries:**
- Lucide React (icons)
- React Hook Form (forms)

**Database Tables:**
- `teams` - Team information
- `venues` - Venue/stadium information
- `fixtures` - Match fixtures
- `competitions` - Competition/tournament information
- `page_content` - Article content and basic SEO
- `affiliate_links` - Ticket provider affiliate links
- `seo_meta` - Advanced SEO metadata

---

## 🔗 USEFUL LINKS

- **GitHub Repo:** https://github.com/shashwatkumar9/worldcuptickets-new-mac
- **Content Requirements:** `/CONTENT-TODO.md`
- **Database:** `/data/worldcup.db`
- **Seed Data:** `/src/lib/data/*.json`

---

## 📝 DEVELOPMENT COMMANDS

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Initialize database
npm run db:init

# Commit changes
git add .
git commit -m "Your commit message"
git push origin main
```

---

**STATUS:** Admin panel is 70% complete. Core CRUD operations work. Need to add detail pages for venues/fixtures and complete SEO management.
