// Enum types matching the database schema
export type SportType =
  | 'football'
  | 'cricket'
  | 'rugby'
  | 'basketball'
  | 'american_football'
  | 'baseball'
  | 'ice_hockey'
  | 'tennis'
  | 'athletics'
  | 'swimming'
  | 'multi_sport'
  | 'other';

export type CompetitionType =
  | 'world_cup'
  | 'olympics'
  | 'continental'
  | 'league'
  | 'tournament'
  | 'qualifier'
  | 'friendly';

export type FixtureType =
  | 'group_stage'
  | 'round_of_32'
  | 'round_of_16'
  | 'quarter_final'
  | 'semi_final'
  | 'third_place'
  | 'final'
  | 'regular_season'
  | 'playoff'
  | 'all_star'
  | 'qualifier'
  | 'friendly';

export type VenueType =
  | 'stadium'
  | 'arena'
  | 'cricket_ground'
  | 'tennis_complex'
  | 'olympic_park'
  | 'multi_purpose';

export type EntityStatus = 'draft' | 'published' | 'archived';

export type FixtureStatus = 'scheduled' | 'live' | 'completed' | 'postponed' | 'cancelled';

export type AffiliatePartner =
  | 'ticketmaster'
  | 'ticombo'
  | 'viagogo'
  | 'stubhub'
  | 'hello_tickets'
  | 'football_tickets_net'
  | 'vivid_seats'
  | 'seat_geek'
  | 'manual';

export type LanguageCode = 'en' | 'de' | 'fr' | 'es' | 'it' | 'ar' | 'pt' | 'ja' | 'zh';

export type BlogStatus = 'draft' | 'published' | 'scheduled' | 'archived';

export type BlogCategory =
  | 'news'
  | 'guide'
  | 'travel'
  | 'tickets'
  | 'teams'
  | 'venues'
  | 'analysis'
  | 'preview'
  | 'review';

export type TeamType = 'national' | 'franchise' | 'club';

// Database table types
export interface Competition {
  id: string;
  slug: string;
  sport_type: SportType;
  competition_type: CompetitionType;
  start_date: string;
  end_date: string;
  status: EntityStatus;
  is_featured: boolean;
  is_hot: boolean;
  display_order: number;
  logo_url: string | null;
  banner_url: string | null;
  thumbnail_url: string | null;
  host_countries: string[];
  external_id: string | null;
  created_at: string;
  updated_at: string;
  created_by: string | null;
}

export interface Team {
  id: string;
  slug: string;
  team_type: TeamType;
  sport_type: SportType;
  country_code: string | null;
  city: string | null;
  founded_year: number | null;
  logo_url: string | null;
  flag_url: string | null;
  jersey_url: string | null;
  banner_url: string | null;
  status: EntityStatus;
  is_featured: boolean;
  is_hot: boolean;
  display_order: number;
  world_ranking: number | null;
  championships_won: number;
  home_venue_id: string | null;
  external_id: string | null;
  created_at: string;
  updated_at: string;
  created_by: string | null;
}

export interface Fixture {
  id: string;
  slug: string;
  fixture_type: FixtureType;
  sport_type: SportType;
  home_team_id: string | null;
  away_team_id: string | null;
  home_team_placeholder: string | null;
  away_team_placeholder: string | null;
  competition_id: string;
  round: string | null;
  group_name: string | null;
  match_number: number | null;
  date: string;
  time: string | null;
  timezone: string | null;
  date_tbd: boolean;
  time_tbd: boolean;
  venue_id: string | null;
  status: FixtureStatus;
  is_featured: boolean;
  is_hot: boolean;
  is_sold_out: boolean;
  home_score: number | null;
  away_score: number | null;
  price_from: number | null;
  price_currency: string;
  external_id: string | null;
  last_api_sync: string | null;
  created_at: string;
  updated_at: string;
  created_by: string | null;
}

export interface Venue {
  id: string;
  slug: string;
  venue_type: VenueType;
  name: string;
  city: string;
  state: string | null;
  country: string;
  country_code: string;
  address: string | null;
  latitude: number | null;
  longitude: number | null;
  timezone: string | null;
  capacity: number | null;
  opened_year: number | null;
  surface: string | null;
  sports: SportType[];
  main_image_url: string | null;
  seating_map_url: string | null;
  thumbnail_url: string | null;
  gallery: string[];
  status: EntityStatus;
  is_featured: boolean;
  is_world_cup_venue: boolean;
  is_olympic_venue: boolean;
  display_order: number;
  external_id: string | null;
  created_at: string;
  updated_at: string;
  created_by: string | null;
}

export interface Translation {
  id: string;
  entity_type: 'competition' | 'team' | 'fixture' | 'venue' | 'page' | 'menu';
  entity_id: string;
  language: LanguageCode;
  name: string;
  slug: string | null;
  description: string | null;
  meta_title: string | null;
  meta_description: string | null;
  content_html: string | null;
  is_complete: boolean;
  created_at: string;
  updated_at: string;
  updated_by: string | null;
}

export interface AffiliateLink {
  id: string;
  entity_type: 'competition' | 'team' | 'fixture' | 'venue';
  entity_id: string;
  partner: AffiliatePartner;
  url: string;
  is_active: boolean;
  priority: number;
  source_type: 'api' | 'manual';
  api_event_id: string | null;
  price_from: number | null;
  price_currency: string;
  seats_available: number | null;
  click_count: number;
  last_clicked: string | null;
  last_verified: string | null;
  is_verified: boolean;
  created_at: string;
  updated_at: string;
}

export interface AffiliateClick {
  id: string;
  affiliate_link_id: string;
  entity_type: string;
  entity_id: string;
  partner: AffiliatePartner;
  session_id: string | null;
  ip_hash: string | null;
  user_agent: string | null;
  referrer: string | null;
  country: string | null;
  region: string | null;
  clicked_at: string;
}

export interface CompetitionTeam {
  competition_id: string;
  team_id: string;
  group_name: string | null;
  seed: number | null;
}

export interface CompetitionVenue {
  competition_id: string;
  venue_id: string;
  is_host_venue: boolean;
}

export interface MenuItem {
  id: string;
  parent_id: string | null;
  menu_location: string;
  label: string;
  slug: string | null;
  url: string | null;
  item_type: 'link' | 'dropdown' | 'column';
  entity_type: string | null;
  entity_filter: Record<string, unknown> | null;
  display_order: number;
  max_items: number | null;
  icon: string | null;
  image_url: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface MenuItemTranslation {
  id: string;
  menu_item_id: string;
  language: LanguageCode;
  label: string;
}

export interface HomepageSection {
  id: string;
  section_type: string;
  title: string | null;
  subtitle: string | null;
  config: Record<string, unknown>;
  display_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface ApiSyncLog {
  id: string;
  api_source: string;
  entity_type: string | null;
  entity_id: string | null;
  status: 'success' | 'error' | 'partial';
  items_processed: number;
  items_created: number;
  items_updated: number;
  items_failed: number;
  error_message: string | null;
  error_details: Record<string, unknown> | null;
  started_at: string;
  completed_at: string | null;
  created_at: string;
}

export interface AdminUser {
  id: string;
  email: string;
  name: string | null;
  role: 'admin' | 'editor' | 'viewer';
  is_active: boolean;
  last_login: string | null;
  created_at: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  category: BlogCategory;
  sport_type: SportType;
  competition_id: string | null;
  team_id: string | null;
  venue_id: string | null;
  fixture_id: string | null;
  featured_image_url: string | null;
  thumbnail_url: string | null;
  gallery: string[];
  status: BlogStatus;
  published_at: string | null;
  scheduled_for: string | null;
  is_featured: boolean;
  is_sticky: boolean;
  display_order: number;
  reading_time_minutes: number;
  view_count: number;
  tags: string[];
  author_id: string | null;
  created_at: string;
  updated_at: string;
}

export interface BlogPostTranslation {
  id: string;
  blog_post_id: string;
  language: LanguageCode;
  title: string;
  excerpt: string | null;
  content_html: string;
  meta_title: string | null;
  meta_description: string | null;
  slug: string | null;
  is_complete: boolean;
  created_at: string;
  updated_at: string;
  updated_by: string | null;
}

export interface PageContent {
  id: string;
  entity_type: 'competition' | 'team' | 'fixture' | 'venue';
  entity_id: string;
  language: LanguageCode;
  content_html: string | null;
  sections: ContentSection[];
  meta_title: string | null;
  meta_description: string | null;
  faqs: FAQ[];
  is_complete: boolean;
  created_at: string;
  updated_at: string;
  updated_by: string | null;
}

export interface ContentSection {
  id: string;
  type: 'text' | 'image' | 'gallery' | 'table' | 'cta' | 'faq';
  title?: string;
  content?: string;
  data?: Record<string, unknown>;
  order: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

// Extended types with relations
export interface CompetitionWithRelations extends Competition {
  translations?: Translation[];
  affiliate_links?: AffiliateLink[];
  teams?: Team[];
  venues?: Venue[];
  fixtures?: Fixture[];
}

export interface TeamWithRelations extends Team {
  translations?: Translation[];
  affiliate_links?: AffiliateLink[];
  competitions?: Competition[];
  home_venue?: Venue | null;
  fixtures?: Fixture[];
}

export interface FixtureWithRelations extends Fixture {
  translations?: Translation[];
  affiliate_links?: AffiliateLink[];
  competition?: Competition;
  home_team?: Team | null;
  away_team?: Team | null;
  venue?: Venue | null;
}

export interface VenueWithRelations extends Venue {
  translations?: Translation[];
  affiliate_links?: AffiliateLink[];
  fixtures?: Fixture[];
  home_teams?: Team[];
  page_content?: PageContent | null;
}

export interface BlogPostWithRelations extends BlogPost {
  translations?: BlogPostTranslation[];
  competition?: Competition | null;
  team?: Team | null;
  venue?: Venue | null;
  fixture?: Fixture | null;
}

// Form types for creating/updating entities
export type CompetitionFormData = Omit<Competition, 'id' | 'created_at' | 'updated_at' | 'created_by'>;
export type TeamFormData = Omit<Team, 'id' | 'created_at' | 'updated_at' | 'created_by'>;
export type FixtureFormData = Omit<Fixture, 'id' | 'created_at' | 'updated_at' | 'created_by'>;
export type VenueFormData = Omit<Venue, 'id' | 'created_at' | 'updated_at' | 'created_by'>;
export type TranslationFormData = Omit<Translation, 'id' | 'created_at' | 'updated_at' | 'updated_by'>;
export type AffiliateLinkFormData = Omit<AffiliateLink, 'id' | 'created_at' | 'updated_at' | 'click_count' | 'last_clicked'>;
export type BlogPostFormData = Omit<BlogPost, 'id' | 'created_at' | 'updated_at' | 'author_id' | 'view_count'>;
export type BlogPostTranslationFormData = Omit<BlogPostTranslation, 'id' | 'created_at' | 'updated_at' | 'updated_by'>;
export type PageContentFormData = Omit<PageContent, 'id' | 'created_at' | 'updated_at' | 'updated_by'>;
