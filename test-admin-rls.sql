-- Test the admin_emails RLS policy
-- Run this in Supabase SQL Editor while signed in as your admin user

-- First, check what email is in your current JWT:
SELECT auth.jwt()->>'email' AS my_jwt_email;

-- Then, see if you can read your own admin_emails row:
SELECT * FROM public.admin_emails WHERE email = (auth.jwt()->>'email');

-- This should return one row if you're signed in with an admin email.
-- If it returns 0 rows, either:
-- 1. You're not signed in (JWT is null)
-- 2. Your JWT email doesn't match any row in admin_emails
-- 3. The RLS policy is blocking the read

-- To bypass RLS for testing, you can also run (requires service_role or postgres role):
-- SELECT * FROM public.admin_emails;
