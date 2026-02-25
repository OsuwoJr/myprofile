-- Add optional "example link" column to service_requests (for existing databases).
-- Run this in Supabase SQL Editor if you created service_requests before this column existed.

ALTER TABLE public.service_requests
  ADD COLUMN IF NOT EXISTS example_link TEXT;
