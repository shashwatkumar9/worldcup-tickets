-- =====================================================
-- Migration: Add Page Content Support for General Pages
-- Date: 2026-01-24
-- Description: Extends page_content table to support general pages (not just entity-specific content)
-- =====================================================

-- Add page_slug column for general page content
ALTER TABLE page_content ADD COLUMN IF NOT EXISTS page_slug VARCHAR(255);

-- Modify entity_type check constraint to include 'page'
ALTER TABLE page_content DROP CONSTRAINT IF EXISTS page_content_entity_type_check;
ALTER TABLE page_content ADD CONSTRAINT page_content_entity_type_check
  CHECK (entity_type IN ('competition', 'team', 'fixture', 'venue', 'page'));

-- Make entity_id nullable (for page entity types that use page_slug instead)
ALTER TABLE page_content ALTER COLUMN entity_id DROP NOT NULL;

-- Add check constraint: entity_id OR page_slug must be provided
ALTER TABLE page_content ADD CONSTRAINT page_content_reference_check
  CHECK (
    (entity_type = 'page' AND page_slug IS NOT NULL AND entity_id IS NULL) OR
    (entity_type != 'page' AND entity_id IS NOT NULL AND page_slug IS NULL)
  );

-- Update unique constraint to handle both entity and page slugs
ALTER TABLE page_content DROP CONSTRAINT IF EXISTS page_content_entity_type_entity_id_language_key;
ALTER TABLE page_content ADD CONSTRAINT page_content_unique_reference
  UNIQUE NULLS NOT DISTINCT (entity_type, entity_id, page_slug, language);

-- Create index for page_slug lookups
CREATE INDEX IF NOT EXISTS idx_page_content_page_slug ON page_content(page_slug) WHERE page_slug IS NOT NULL;

-- Create index for faster content queries
CREATE INDEX IF NOT EXISTS idx_page_content_entity_lookup ON page_content(entity_type, entity_id) WHERE entity_id IS NOT NULL;

-- Add comment for documentation
COMMENT ON COLUMN page_content.page_slug IS 'Page slug for general pages (e.g., "fifa-world-cup-2026-tickets", "teams/usa-world-cup-2026-tickets"). Used when entity_type="page".';
