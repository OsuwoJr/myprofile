-- =============================================================================
-- Blog playlists (YouTube-style): curated reading order for readers
-- Run this in Supabase Dashboard → SQL Editor
-- =============================================================================

-- Playlists: e.g. "Introduction to software engineering", "Cyber security"
CREATE TABLE IF NOT EXISTS public.blog_playlists (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text NOT NULL UNIQUE,
  description text,
  sort_order int NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

COMMENT ON TABLE public.blog_playlists IS 'Curated blog playlists (e.g. Introduction to software engineering, Cyber security) for readers to follow systematically';
COMMENT ON COLUMN public.blog_playlists.sort_order IS 'Display order of playlists on the blog page (lower = first)';

-- Playlist items: which articles are in which playlist, and in what order
CREATE TABLE IF NOT EXISTS public.blog_playlist_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  playlist_id uuid NOT NULL REFERENCES public.blog_playlists(id) ON DELETE CASCADE,
  article_id uuid NOT NULL REFERENCES public.articles(id) ON DELETE CASCADE,
  position int NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE(playlist_id, article_id)
);

COMMENT ON TABLE public.blog_playlist_items IS 'Articles in a playlist; position defines reading order (lower = first)';
CREATE INDEX IF NOT EXISTS idx_playlist_items_playlist ON public.blog_playlist_items(playlist_id);
CREATE INDEX IF NOT EXISTS idx_playlist_items_article ON public.blog_playlist_items(article_id);

-- RLS: anyone can read; only authenticated users can write (admin routes are protected by app)
ALTER TABLE public.blog_playlists ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_playlist_items ENABLE ROW LEVEL SECURITY;

-- Read: public
CREATE POLICY "blog_playlists_select" ON public.blog_playlists
  FOR SELECT USING (true);

CREATE POLICY "blog_playlist_items_select" ON public.blog_playlist_items
  FOR SELECT USING (true);

-- Write: authenticated only (your admin layout already restricts to admin_emails)
CREATE POLICY "blog_playlists_insert" ON public.blog_playlists
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "blog_playlists_update" ON public.blog_playlists
  FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "blog_playlists_delete" ON public.blog_playlists
  FOR DELETE USING (auth.role() = 'authenticated');

CREATE POLICY "blog_playlist_items_insert" ON public.blog_playlist_items
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "blog_playlist_items_update" ON public.blog_playlist_items
  FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "blog_playlist_items_delete" ON public.blog_playlist_items
  FOR DELETE USING (auth.role() = 'authenticated');

-- Optional: keep updated_at in sync
CREATE OR REPLACE FUNCTION public.set_blog_playlist_updated_at()
RETURNS trigger AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS blog_playlists_updated_at ON public.blog_playlists;
CREATE TRIGGER blog_playlists_updated_at
  BEFORE UPDATE ON public.blog_playlists
  FOR EACH ROW EXECUTE FUNCTION public.set_blog_playlist_updated_at();
