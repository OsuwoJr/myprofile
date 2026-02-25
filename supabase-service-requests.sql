-- Service requests: quote requests (signed-in users) and meeting requests (contact page).
-- Run in Supabase SQL Editor after profiles and admin_emails exist.

-- Table: service_requests
CREATE TABLE public.service_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  client_email TEXT NOT NULL,
  client_name TEXT,
  request_type TEXT NOT NULL CHECK (request_type IN ('quote', 'meeting')),
  service_category TEXT,
  service_detail TEXT,
  description TEXT,
  budget_preference TEXT,
  timeline TEXT,
  example_link TEXT,
  meeting_preference TEXT,
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'quoted', 'accepted', 'closed')),
  admin_quote TEXT,
  admin_requirements TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for admin listing
CREATE INDEX idx_service_requests_created_at ON public.service_requests(created_at DESC);
CREATE INDEX idx_service_requests_status ON public.service_requests(status);
CREATE INDEX idx_service_requests_request_type ON public.service_requests(request_type);

-- RLS
ALTER TABLE public.service_requests ENABLE ROW LEVEL SECURITY;

-- Admins can read and update all requests (for sending back quote/requirements)
CREATE POLICY "Admins can select service_requests"
  ON public.service_requests FOR SELECT
  USING (
    EXISTS (SELECT 1 FROM public.admin_emails WHERE email = (auth.jwt()->>'email'))
  );

CREATE POLICY "Admins can update service_requests"
  ON public.service_requests FOR UPDATE
  USING (
    EXISTS (SELECT 1 FROM public.admin_emails WHERE email = (auth.jwt()->>'email'))
  );

-- Signed-in users can insert their own quote request (user_id = their id)
CREATE POLICY "Users can insert own quote request"
  ON public.service_requests FOR INSERT
  WITH CHECK (
    request_type = 'quote' AND auth.uid() = user_id
  );

-- Users can read their own requests (to see quote/status)
CREATE POLICY "Users can select own service_requests"
  ON public.service_requests FOR SELECT
  USING (auth.uid() = user_id);
