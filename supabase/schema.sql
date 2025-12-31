-- =====================================================
-- WorldCup-Tickets.net Database Schema
-- Run this in your Supabase SQL Editor
-- =====================================================

-- =====================================================
-- ENUMS
-- =====================================================

CREATE TYPE sport_type AS ENUM (
  'football', 'cricket', 'rugby', 'basketball', 'american_football',
  'baseball', 'ice_hockey', 'tennis', 'athletics', 'swimming',
  'multi_sport', 'other'
);

CREATE TYPE competition_type AS ENUM (
  'world_cup', 'olympics', 'continental', 'league', 'tournament',
  'qualifier', 'friendly'
);

CREATE TYPE fixture_type AS ENUM (
  'group_stage', 'round_of_32', 'round_of_16', 'quarter_final',
  'semi_final', 'third_place', 'final', 'regular_season',
  'playoff', 'all_star', 'qualifier', 'friendly'
);

CREATE TYPE venue_type AS ENUM (
  'stadium', 'arena', 'cricket_ground', 'tennis_complex',
  'olympic_park', 'multi_purpose'
);

CREATE TYPE entity_status AS ENUM (
  'draft', 'published', 'archived'
);

CREATE TYPE fixture_status AS ENUM (
  'scheduled', 'live', 'completed', 'postponed', 'cancelled'
);

CREATE TYPE affiliate_partner AS ENUM (
  'ticketmaster', 'ticombo', 'viagogo', 'stubhub', 'hello_tickets',
  'football_tickets_net', 'vivid_seats', 'seat_geek', 'manual'
);

CREATE TYPE language_code AS ENUM (
  'en', 'de', 'fr', 'es', 'it', 'ar'
);

-- =====================================================
-- VENUES TABLE (created first due to foreign key references)
-- =====================================================

CREATE TABLE venues (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug VARCHAR(255) UNIQUE NOT NULL CHECK (slug ~ '-tickets$'),

  -- Type
  venue_type venue_type NOT NULL,

  -- Location
  name VARCHAR(255) NOT NULL,
  city VARCHAR(100) NOT NULL,
  state VARCHAR(100),
  country VARCHAR(100) NOT NULL,
  country_code VARCHAR(2) NOT NULL,
  address TEXT,
  latitude DECIMAL(10,7),
  longitude DECIMAL(10,7),
  timezone VARCHAR(50),

  -- Details
  capacity INTEGER,
  opened_year INTEGER,
  surface VARCHAR(50),

  -- Sports
  sports sport_type[] DEFAULT '{}',

  -- Media
  main_image_url TEXT,
  seating_map_url TEXT,
  thumbnail_url TEXT,
  gallery TEXT[] DEFAULT '{}',

  -- Status & Display
  status entity_status DEFAULT 'draft',
  is_featured BOOLEAN DEFAULT false,
  is_world_cup_venue BOOLEAN DEFAULT false,
  is_olympic_venue BOOLEAN DEFAULT false,
  display_order INTEGER DEFAULT 0,

  -- Metadata
  external_id VARCHAR(255),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  created_by UUID REFERENCES auth.users(id)
);

-- =====================================================
-- COMPETITIONS TABLE
-- =====================================================

CREATE TABLE competitions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug VARCHAR(255) UNIQUE NOT NULL CHECK (slug ~ '-tickets$'),

  -- Type
  sport_type sport_type NOT NULL,
  competition_type competition_type NOT NULL,

  -- Dates
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,

  -- Status & Display
  status entity_status DEFAULT 'draft',
  is_featured BOOLEAN DEFAULT false,
  is_hot BOOLEAN DEFAULT false,
  display_order INTEGER DEFAULT 0,

  -- Media
  logo_url TEXT,
  banner_url TEXT,
  thumbnail_url TEXT,

  -- Hosting
  host_countries VARCHAR(2)[] DEFAULT '{}',

  -- Metadata
  external_id VARCHAR(255),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  created_by UUID REFERENCES auth.users(id)
);

-- =====================================================
-- TEAMS TABLE
-- =====================================================

CREATE TABLE teams (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug VARCHAR(255) UNIQUE NOT NULL CHECK (slug ~ '-tickets$'),

  -- Type
  team_type VARCHAR(20) NOT NULL CHECK (team_type IN ('national', 'franchise', 'club')),
  sport_type sport_type NOT NULL,

  -- Identity
  country_code VARCHAR(2),
  city VARCHAR(100),
  founded_year INTEGER,

  -- Media
  logo_url TEXT,
  flag_url TEXT,
  jersey_url TEXT,
  banner_url TEXT,

  -- Status & Display
  status entity_status DEFAULT 'draft',
  is_featured BOOLEAN DEFAULT false,
  is_hot BOOLEAN DEFAULT false,
  display_order INTEGER DEFAULT 0,

  -- Stats
  world_ranking INTEGER,
  championships_won INTEGER DEFAULT 0,

  -- Relations
  home_venue_id UUID REFERENCES venues(id),

  -- Metadata
  external_id VARCHAR(255),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  created_by UUID REFERENCES auth.users(id)
);

-- =====================================================
-- FIXTURES TABLE
-- =====================================================

CREATE TABLE fixtures (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug VARCHAR(255) UNIQUE NOT NULL CHECK (slug ~ '-tickets$'),

  -- Type
  fixture_type fixture_type NOT NULL,
  sport_type sport_type NOT NULL,

  -- Teams
  home_team_id UUID REFERENCES teams(id),
  away_team_id UUID REFERENCES teams(id),
  home_team_placeholder VARCHAR(100),
  away_team_placeholder VARCHAR(100),

  -- Competition Context
  competition_id UUID NOT NULL REFERENCES competitions(id),
  round VARCHAR(100),
  group_name VARCHAR(20),
  match_number INTEGER,

  -- Date & Time
  date DATE NOT NULL,
  time TIME,
  timezone VARCHAR(50),
  date_tbd BOOLEAN DEFAULT false,
  time_tbd BOOLEAN DEFAULT false,

  -- Venue
  venue_id UUID REFERENCES venues(id),

  -- Status
  status fixture_status DEFAULT 'scheduled',
  is_featured BOOLEAN DEFAULT false,
  is_hot BOOLEAN DEFAULT false,
  is_sold_out BOOLEAN DEFAULT false,

  -- Results
  home_score INTEGER,
  away_score INTEGER,

  -- Pricing
  price_from DECIMAL(10,2),
  price_currency VARCHAR(3) DEFAULT 'USD',

  -- Metadata
  external_id VARCHAR(255),
  last_api_sync TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  created_by UUID REFERENCES auth.users(id)
);

-- =====================================================
-- TRANSLATIONS TABLE
-- =====================================================

CREATE TABLE translations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  -- Reference
  entity_type VARCHAR(20) NOT NULL CHECK (entity_type IN ('competition', 'team', 'fixture', 'venue', 'page', 'menu')),
  entity_id UUID NOT NULL,
  language language_code NOT NULL,

  -- Core Fields
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) CHECK (slug ~ '-tickets$' OR slug IS NULL),
  description TEXT,

  -- SEO
  meta_title VARCHAR(70),
  meta_description VARCHAR(170),

  -- Content
  content_html TEXT,

  -- Status
  is_complete BOOLEAN DEFAULT false,

  -- Metadata
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  updated_by UUID REFERENCES auth.users(id),

  -- Unique constraint
  UNIQUE(entity_type, entity_id, language)
);

-- =====================================================
-- AFFILIATE LINKS TABLE
-- =====================================================

CREATE TABLE affiliate_links (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  -- Reference
  entity_type VARCHAR(20) NOT NULL CHECK (entity_type IN ('competition', 'team', 'fixture', 'venue')),
  entity_id UUID NOT NULL,

  -- Link Details
  partner affiliate_partner NOT NULL,
  url TEXT NOT NULL,
  is_active BOOLEAN DEFAULT true,
  priority INTEGER DEFAULT 0,

  -- Source
  source_type VARCHAR(10) NOT NULL CHECK (source_type IN ('api', 'manual')),
  api_event_id VARCHAR(255),

  -- Pricing
  price_from DECIMAL(10,2),
  price_currency VARCHAR(3) DEFAULT 'USD',
  seats_available INTEGER,

  -- Tracking
  click_count INTEGER DEFAULT 0,
  last_clicked TIMESTAMPTZ,

  -- Verification
  last_verified TIMESTAMPTZ,
  is_verified BOOLEAN DEFAULT false,

  -- Metadata
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =====================================================
-- AFFILIATE CLICKS TABLE (Analytics)
-- =====================================================

CREATE TABLE affiliate_clicks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  affiliate_link_id UUID NOT NULL REFERENCES affiliate_links(id),

  -- Context
  entity_type VARCHAR(20) NOT NULL,
  entity_id UUID NOT NULL,
  partner affiliate_partner NOT NULL,

  -- User Info (anonymized)
  session_id VARCHAR(255),
  ip_hash VARCHAR(64),
  user_agent TEXT,
  referrer TEXT,

  -- Geo
  country VARCHAR(2),
  region VARCHAR(100),

  -- Timestamp
  clicked_at TIMESTAMPTZ DEFAULT NOW()
);

-- =====================================================
-- COMPETITION-TEAM JUNCTION TABLE
-- =====================================================

CREATE TABLE competition_teams (
  competition_id UUID NOT NULL REFERENCES competitions(id) ON DELETE CASCADE,
  team_id UUID NOT NULL REFERENCES teams(id) ON DELETE CASCADE,
  group_name VARCHAR(20),
  seed INTEGER,
  PRIMARY KEY (competition_id, team_id)
);

-- =====================================================
-- COMPETITION-VENUE JUNCTION TABLE
-- =====================================================

CREATE TABLE competition_venues (
  competition_id UUID NOT NULL REFERENCES competitions(id) ON DELETE CASCADE,
  venue_id UUID NOT NULL REFERENCES venues(id) ON DELETE CASCADE,
  is_host_venue BOOLEAN DEFAULT false,
  PRIMARY KEY (competition_id, venue_id)
);

-- =====================================================
-- MENU ITEMS TABLE
-- =====================================================

CREATE TABLE menu_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  -- Hierarchy
  parent_id UUID REFERENCES menu_items(id),
  menu_location VARCHAR(50) NOT NULL,

  -- Content
  label VARCHAR(100) NOT NULL,
  slug VARCHAR(255),
  url TEXT,

  -- Type
  item_type VARCHAR(20) NOT NULL,
  entity_type VARCHAR(20),
  entity_filter JSONB,

  -- Display
  display_order INTEGER DEFAULT 0,
  max_items INTEGER,
  icon VARCHAR(50),
  image_url TEXT,

  -- Status
  is_active BOOLEAN DEFAULT true,

  -- Metadata
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =====================================================
-- MENU ITEM TRANSLATIONS
-- =====================================================

CREATE TABLE menu_item_translations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  menu_item_id UUID NOT NULL REFERENCES menu_items(id) ON DELETE CASCADE,
  language language_code NOT NULL,
  label VARCHAR(100) NOT NULL,
  UNIQUE(menu_item_id, language)
);

-- =====================================================
-- HOMEPAGE SECTIONS TABLE
-- =====================================================

CREATE TABLE homepage_sections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  -- Type
  section_type VARCHAR(50) NOT NULL,

  -- Content
  title VARCHAR(100),
  subtitle VARCHAR(255),

  -- Configuration
  config JSONB NOT NULL DEFAULT '{}',

  -- Display
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,

  -- Metadata
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =====================================================
-- API SYNC LOGS TABLE
-- =====================================================

CREATE TABLE api_sync_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  api_source VARCHAR(50) NOT NULL,
  entity_type VARCHAR(20),
  entity_id UUID,

  status VARCHAR(20) NOT NULL,
  items_processed INTEGER DEFAULT 0,
  items_created INTEGER DEFAULT 0,
  items_updated INTEGER DEFAULT 0,
  items_failed INTEGER DEFAULT 0,

  error_message TEXT,
  error_details JSONB,

  started_at TIMESTAMPTZ NOT NULL,
  completed_at TIMESTAMPTZ,

  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =====================================================
-- ADMIN USERS TABLE
-- =====================================================

CREATE TABLE admin_users (
  id UUID PRIMARY KEY REFERENCES auth.users(id),
  email VARCHAR(255) NOT NULL UNIQUE,
  name VARCHAR(100),
  role VARCHAR(20) NOT NULL DEFAULT 'editor',
  is_active BOOLEAN DEFAULT true,
  last_login TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =====================================================
-- INDEXES
-- =====================================================

-- Competitions
CREATE INDEX idx_competitions_sport ON competitions(sport_type);
CREATE INDEX idx_competitions_status ON competitions(status);
CREATE INDEX idx_competitions_dates ON competitions(start_date, end_date);
CREATE INDEX idx_competitions_featured ON competitions(is_featured) WHERE is_featured = true;

-- Teams
CREATE INDEX idx_teams_sport ON teams(sport_type);
CREATE INDEX idx_teams_country ON teams(country_code);
CREATE INDEX idx_teams_status ON teams(status);
CREATE INDEX idx_teams_featured ON teams(is_featured) WHERE is_featured = true;

-- Fixtures
CREATE INDEX idx_fixtures_competition ON fixtures(competition_id);
CREATE INDEX idx_fixtures_date ON fixtures(date);
CREATE INDEX idx_fixtures_teams ON fixtures(home_team_id, away_team_id);
CREATE INDEX idx_fixtures_venue ON fixtures(venue_id);
CREATE INDEX idx_fixtures_status ON fixtures(status);
CREATE INDEX idx_fixtures_hot ON fixtures(is_hot) WHERE is_hot = true;
CREATE INDEX idx_fixtures_upcoming ON fixtures(date) WHERE date >= CURRENT_DATE AND status = 'scheduled';

-- Venues
CREATE INDEX idx_venues_country ON venues(country_code);
CREATE INDEX idx_venues_city ON venues(city);
CREATE INDEX idx_venues_type ON venues(venue_type);
CREATE INDEX idx_venues_featured ON venues(is_featured) WHERE is_featured = true;

-- Translations
CREATE INDEX idx_translations_entity ON translations(entity_type, entity_id);
CREATE INDEX idx_translations_language ON translations(language);

-- Affiliate Links
CREATE INDEX idx_affiliate_entity ON affiliate_links(entity_type, entity_id);
CREATE INDEX idx_affiliate_partner ON affiliate_links(partner);
CREATE INDEX idx_affiliate_active ON affiliate_links(is_active) WHERE is_active = true;

-- Clicks
CREATE INDEX idx_clicks_date ON affiliate_clicks(clicked_at);
CREATE INDEX idx_clicks_partner ON affiliate_clicks(partner);
CREATE INDEX idx_clicks_entity ON affiliate_clicks(entity_type, entity_id);

-- Full-text search
CREATE INDEX idx_competitions_search ON competitions USING gin(to_tsvector('english', slug));
CREATE INDEX idx_teams_search ON teams USING gin(to_tsvector('english', slug));
CREATE INDEX idx_venues_search ON venues USING gin(to_tsvector('english', name || ' ' || city));

-- =====================================================
-- ROW LEVEL SECURITY (RLS)
-- =====================================================

ALTER TABLE competitions ENABLE ROW LEVEL SECURITY;
ALTER TABLE teams ENABLE ROW LEVEL SECURITY;
ALTER TABLE fixtures ENABLE ROW LEVEL SECURITY;
ALTER TABLE venues ENABLE ROW LEVEL SECURITY;
ALTER TABLE translations ENABLE ROW LEVEL SECURITY;
ALTER TABLE affiliate_links ENABLE ROW LEVEL SECURITY;
ALTER TABLE affiliate_clicks ENABLE ROW LEVEL SECURITY;
ALTER TABLE menu_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE menu_item_translations ENABLE ROW LEVEL SECURITY;
ALTER TABLE homepage_sections ENABLE ROW LEVEL SECURITY;

-- Public read access for published content
CREATE POLICY "Public read competitions" ON competitions
  FOR SELECT USING (status = 'published');

CREATE POLICY "Public read teams" ON teams
  FOR SELECT USING (status = 'published');

CREATE POLICY "Public read fixtures" ON fixtures
  FOR SELECT USING (true);

CREATE POLICY "Public read venues" ON venues
  FOR SELECT USING (status = 'published');

CREATE POLICY "Public read translations" ON translations
  FOR SELECT USING (true);

CREATE POLICY "Public read affiliate_links" ON affiliate_links
  FOR SELECT USING (is_active = true);

CREATE POLICY "Public insert affiliate_clicks" ON affiliate_clicks
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Public read menu_items" ON menu_items
  FOR SELECT USING (is_active = true);

CREATE POLICY "Public read menu_item_translations" ON menu_item_translations
  FOR SELECT USING (true);

CREATE POLICY "Public read homepage_sections" ON homepage_sections
  FOR SELECT USING (is_active = true);

-- Admin full access function
CREATE OR REPLACE FUNCTION is_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM admin_users
    WHERE id = auth.uid() AND is_active = true AND role IN ('admin', 'editor')
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Admin policies
CREATE POLICY "Admin full access competitions" ON competitions
  FOR ALL USING (is_admin());

CREATE POLICY "Admin full access teams" ON teams
  FOR ALL USING (is_admin());

CREATE POLICY "Admin full access fixtures" ON fixtures
  FOR ALL USING (is_admin());

CREATE POLICY "Admin full access venues" ON venues
  FOR ALL USING (is_admin());

CREATE POLICY "Admin full access translations" ON translations
  FOR ALL USING (is_admin());

CREATE POLICY "Admin full access affiliate_links" ON affiliate_links
  FOR ALL USING (is_admin());

CREATE POLICY "Admin read affiliate_clicks" ON affiliate_clicks
  FOR SELECT USING (is_admin());

CREATE POLICY "Admin full access menu_items" ON menu_items
  FOR ALL USING (is_admin());

CREATE POLICY "Admin full access menu_item_translations" ON menu_item_translations
  FOR ALL USING (is_admin());

CREATE POLICY "Admin full access homepage_sections" ON homepage_sections
  FOR ALL USING (is_admin());

-- =====================================================
-- TRIGGERS FOR updated_at
-- =====================================================

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_competitions_updated_at BEFORE UPDATE ON competitions
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_teams_updated_at BEFORE UPDATE ON teams
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_fixtures_updated_at BEFORE UPDATE ON fixtures
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_venues_updated_at BEFORE UPDATE ON venues
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_translations_updated_at BEFORE UPDATE ON translations
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_affiliate_links_updated_at BEFORE UPDATE ON affiliate_links
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_menu_items_updated_at BEFORE UPDATE ON menu_items
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_homepage_sections_updated_at BEFORE UPDATE ON homepage_sections
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
