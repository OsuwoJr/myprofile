-- Article like/dislike reactions (YouTube-style) for blog posts
-- Run this in the Supabase SQL Editor

CREATE TABLE public.article_reactions (
  article_id UUID NOT NULL REFERENCES public.articles(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  reaction TEXT NOT NULL CHECK (reaction IN ('like', 'dislike')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  PRIMARY KEY (article_id, user_id)
);

CREATE INDEX idx_article_reactions_article_id ON public.article_reactions(article_id);

COMMENT ON TABLE public.article_reactions IS 'One like or dislike per user per article; used for counts above comments.';

-- RLS
ALTER TABLE public.article_reactions ENABLE ROW LEVEL SECURITY;

-- Anyone can read (to show counts)
CREATE POLICY "Article reactions are viewable by everyone"
  ON public.article_reactions FOR SELECT
  USING (true);

-- Authenticated users can insert their own reaction
CREATE POLICY "Users can insert own reaction"
  ON public.article_reactions FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Users can update their own reaction (e.g. switch from like to dislike)
CREATE POLICY "Users can update own reaction"
  ON public.article_reactions FOR UPDATE
  USING (auth.uid() = user_id);

-- Users can delete their own reaction (remove vote)
CREATE POLICY "Users can delete own reaction"
  ON public.article_reactions FOR DELETE
  USING (auth.uid() = user_id);
