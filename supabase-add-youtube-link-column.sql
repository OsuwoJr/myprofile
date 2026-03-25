-- Add optional YouTube link for blog articles.
-- Run this in Supabase Dashboard → SQL Editor.
-- Some posts may have an accompanying YouTube video; others leave this NULL.

ALTER TABLE articles
ADD COLUMN IF NOT EXISTS youtube_link text;

COMMENT ON COLUMN articles.youtube_link IS 'Optional YouTube URL for the article (e.g., watch link).';

