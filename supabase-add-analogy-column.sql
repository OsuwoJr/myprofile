-- Add optional "analogy" / plain-language version for blog articles.
-- Run this in Supabase Dashboard → SQL Editor.
-- Some posts can have it (deeper understanding); others leave it null.
-- You can add or update it later (e.g. when readers request it in comments).

ALTER TABLE articles
ADD COLUMN IF NOT EXISTS analogy text;

COMMENT ON COLUMN articles.analogy IS 'Optional plain-language or analogy version of the article for deeper understanding. Markdown supported.';
