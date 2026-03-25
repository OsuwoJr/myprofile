-- Add optional YouTube link for blog playlists.
-- Run this in Supabase Dashboard → SQL Editor.

ALTER TABLE public.blog_playlists
ADD COLUMN IF NOT EXISTS youtube_link text;

COMMENT ON COLUMN public.blog_playlists.youtube_link IS 'Optional YouTube URL for the playlist (e.g., watch link for the whole sequence).';

