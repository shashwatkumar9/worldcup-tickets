-- =====================================================
-- Seed Data: FIFA World Cup 2026
-- Date: 2026-01-24
-- Description: Populates competition, venues, teams, and fixtures for World Cup 2026
-- =====================================================

-- =====================================================
-- 1. COMPETITION
-- =====================================================

INSERT INTO competitions (
  id,
  slug,
  name,
  sport_type,
  competition_type,
  start_date,
  end_date,
  host_countries,
  season,
  status,
  is_featured,
  main_image_url,
  logo_url
) VALUES (
  gen_random_uuid(),
  'fifa-world-cup-2026',
  'FIFA World Cup 2026',
  'football',
  'world_cup',
  '2026-06-11',
  '2026-07-19',
  ARRAY['US', 'MX', 'CA'],
  '2026',
  'published',
  true,
  '/images/world-cup-2026.jpg',
  '/images/wc2026-logo.svg'
) ON CONFLICT (slug) DO NOTHING;

-- =====================================================
-- 2. VENUES
-- =====================================================

-- Get competition ID
DO $$
DECLARE
  comp_id UUID;
BEGIN
  SELECT id INTO comp_id FROM competitions WHERE slug = 'fifa-world-cup-2026';

  -- United States Venues
  INSERT INTO venues (slug, name, city, state, country, country_code, capacity, venue_type, status, is_world_cup_venue) VALUES
  ('sofi-stadium-world-cup-2026-tickets', 'SoFi Stadium', 'Los Angeles', 'California', 'United States', 'US', 70240, 'stadium', 'published', true),
  ('metlife-stadium-world-cup-2026-tickets', 'MetLife Stadium', 'East Rutherford', 'New Jersey', 'United States', 'US', 82500, 'stadium', 'published', true),
  ('att-stadium-world-cup-2026-tickets', 'AT&T Stadium', 'Arlington', 'Texas', 'United States', 'US', 80000, 'stadium', 'published', true),
  ('mercedes-benz-stadium-world-cup-2026-tickets', 'Mercedes-Benz Stadium', 'Atlanta', 'Georgia', 'United States', 'US', 71000, 'stadium', 'published', true),
  ('hard-rock-stadium-world-cup-2026-tickets', 'Hard Rock Stadium', 'Miami Gardens', 'Florida', 'United States', 'US', 65326, 'stadium', 'published', true),
  ('gillette-stadium-world-cup-2026-tickets', 'Gillette Stadium', 'Foxborough', 'Massachusetts', 'United States', 'US', 65878, 'stadium', 'published', true),
  ('arrowhead-stadium-world-cup-2026-tickets', 'Arrowhead Stadium', 'Kansas City', 'Missouri', 'United States', 'US', 76416, 'stadium', 'published', true),
  ('lincoln-financial-field-world-cup-2026-tickets', 'Lincoln Financial Field', 'Philadelphia', 'Pennsylvania', 'United States', 'US', 69796, 'stadium', 'published', true),
  ('levis-stadium-world-cup-2026-tickets', 'Levi''s Stadium', 'Santa Clara', 'California', 'United States', 'US', 68500, 'stadium', 'published', true),
  ('lumen-field-world-cup-2026-tickets', 'Lumen Field', 'Seattle', 'Washington', 'United States', 'US', 68740, 'stadium', 'published', true),
  ('nrg-stadium-world-cup-2026-tickets', 'NRG Stadium', 'Houston', 'Texas', 'United States', 'US', 72220, 'stadium', 'published', true)
  ON CONFLICT (slug) DO NOTHING;

  -- Mexico Venues
  INSERT INTO venues (slug, name, city, country, country_code, capacity, venue_type, status, is_world_cup_venue) VALUES
  ('estadio-azteca-world-cup-2026-tickets', 'Estadio Azteca', 'Mexico City', 'Mexico', 'MX', 87523, 'stadium', 'published', true),
  ('estadio-akron-world-cup-2026-tickets', 'Estadio Akron', 'Guadalajara', 'Mexico', 'MX', 46232, 'stadium', 'published', true),
  ('estadio-bbva-world-cup-2026-tickets', 'Estadio BBVA', 'Monterrey', 'Mexico', 'MX', 53500, 'stadium', 'published', true)
  ON CONFLICT (slug) DO NOTHING;

  -- Canada Venues
  INSERT INTO venues (slug, name, city, state, country, country_code, capacity, venue_type, status, is_world_cup_venue) VALUES
  ('bmo-field-world-cup-2026-tickets', 'BMO Field', 'Toronto', 'Ontario', 'Canada', 'CA', 30000, 'stadium', 'published', true),
  ('bc-place-world-cup-2026-tickets', 'BC Place', 'Vancouver', 'British Columbia', 'Canada', 'CA', 54500, 'stadium', 'published', true)
  ON CONFLICT (slug) DO NOTHING;
END $$;

-- =====================================================
-- 3. TEAMS
-- =====================================================

DO $$
DECLARE
  comp_id UUID;
BEGIN
  SELECT id INTO comp_id FROM competitions WHERE slug = 'fifa-world-cup-2026';

  INSERT INTO teams (slug, name, short_name, country_code, confederation, fifa_ranking, world_cup_titles, status, is_featured, competition_id) VALUES
  ('usa-world-cup-2026-tickets', 'United States', 'USA', 'US', 'CONCACAF', 11, 0, 'published', true, comp_id),
  ('mexico-world-cup-2026-tickets', 'Mexico', 'MEX', 'MX', 'CONCACAF', 15, 0, 'published', true, comp_id),
  ('canada-world-cup-2026-tickets', 'Canada', 'CAN', 'CA', 'CONCACAF', 49, 0, 'published', true, comp_id),
  ('brazil-world-cup-2026-tickets', 'Brazil', 'BRA', 'BR', 'CONMEBOL', 5, 5, 'published', true, comp_id),
  ('argentina-world-cup-2026-tickets', 'Argentina', 'ARG', 'AR', 'CONMEBOL', 1, 3, 'published', true, comp_id),
  ('france-world-cup-2026-tickets', 'France', 'FRA', 'FR', 'UEFA', 2, 2, 'published', true, comp_id),
  ('england-world-cup-2026-tickets', 'England', 'ENG', 'GB', 'UEFA', 4, 1, 'published', true, comp_id),
  ('spain-world-cup-2026-tickets', 'Spain', 'ESP', 'ES', 'UEFA', 3, 1, 'published', true, comp_id),
  ('germany-world-cup-2026-tickets', 'Germany', 'GER', 'DE', 'UEFA', 12, 4, 'published', true, comp_id)
  ON CONFLICT (slug) DO NOTHING;
END $$;

-- =====================================================
-- 4. FIXTURES (Sample Group Stage Matches)
-- =====================================================

DO $$
DECLARE
  comp_id UUID;
  usa_id UUID;
  mex_id UUID;
  bra_id UUID;
  sofi_id UUID;
  azteca_id UUID;
BEGIN
  SELECT id INTO comp_id FROM competitions WHERE slug = 'fifa-world-cup-2026';
  SELECT id INTO usa_id FROM teams WHERE slug = 'usa-world-cup-2026-tickets';
  SELECT id INTO mex_id FROM teams WHERE slug = 'mexico-world-cup-2026-tickets';
  SELECT id INTO bra_id FROM teams WHERE slug = 'brazil-world-cup-2026-tickets';
  SELECT id INTO sofi_id FROM venues WHERE slug = 'sofi-stadium-world-cup-2026-tickets';
  SELECT id INTO azteca_id FROM venues WHERE slug = 'estadio-azteca-world-cup-2026-tickets';

  -- Opening Match
  INSERT INTO fixtures (
    slug,
    competition_id,
    home_team_id,
    fixture_type,
    match_date,
    match_time,
    venue_id,
    group_name,
    status
  ) VALUES (
    'mexico-opening-match-world-cup-2026-tickets',
    comp_id,
    mex_id,
    'group_stage',
    '2026-06-11',
    '20:00:00',
    azteca_id,
    'A',
    'scheduled'
  ) ON CONFLICT (slug) DO NOTHING;

  -- USA Match
  INSERT INTO fixtures (
    slug,
    competition_id,
    home_team_id,
    fixture_type,
    match_date,
    match_time,
    venue_id,
    group_name,
    status
  ) VALUES (
    'usa-group-match-1-world-cup-2026-tickets',
    comp_id,
    usa_id,
    'group_stage',
    '2026-06-12',
    '20:00:00',
    sofi_id,
    'D',
    'scheduled'
  ) ON CONFLICT (slug) DO NOTHING;
END $$;

-- =====================================================
-- 5. INDEXES FOR PERFORMANCE
-- =====================================================

CREATE INDEX IF NOT EXISTS idx_teams_competition ON teams(competition_id);
CREATE INDEX IF NOT EXISTS idx_teams_slug ON teams(slug);
CREATE INDEX IF NOT EXISTS idx_venues_slug ON venues(slug);
CREATE INDEX IF NOT EXISTS idx_fixtures_competition ON fixtures(competition_id);
CREATE INDEX IF NOT EXISTS idx_fixtures_teams ON fixtures(home_team_id, away_team_id);
