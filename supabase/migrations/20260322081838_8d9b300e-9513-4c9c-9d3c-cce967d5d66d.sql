
-- Auto-assign admin role to the known admin email on sign-in
-- This function runs as a trigger on auth.users changes
CREATE OR REPLACE FUNCTION public.auto_assign_admin_role()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF NEW.email = 'shivrayagroupofcompanies@gmail.com' THEN
    INSERT INTO public.user_roles (user_id, role)
    VALUES (NEW.id, 'admin')
    ON CONFLICT (user_id, role) DO NOTHING;
  END IF;
  RETURN NEW;
END;
$$;

-- Try to insert admin role for any existing user with the admin email
INSERT INTO public.user_roles (user_id, role)
SELECT id, 'admin'::app_role
FROM auth.users
WHERE email = 'shivrayagroupofcompanies@gmail.com'
ON CONFLICT (user_id, role) DO NOTHING;
