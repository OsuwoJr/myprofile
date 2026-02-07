-- Step B2: admin_emails table (who can post articles)
-- Before running: replace your-email@example.com with the email you use to sign in to Supabase Auth

-- List of admin emails (only these can create/edit articles)
CREATE TABLE public.admin_emails (
  email TEXT PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Insert YOUR email so you can post articles (replace with your real email)
INSERT INTO public.admin_emails (email) VALUES ('your-email@example.com');

-- RLS: authenticated users can only "see" the row matching their own email (so they can check "am I admin?")
ALTER TABLE public.admin_emails ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own admin row"
  ON public.admin_emails FOR SELECT
  USING (auth.jwt()->>'email' = email);
