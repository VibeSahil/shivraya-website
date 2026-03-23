
CREATE TABLE public.contact_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public contact form)
CREATE POLICY "Anyone can submit contact messages"
  ON public.contact_messages FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Only authenticated users (admin) can read messages
CREATE POLICY "Authenticated users can read messages"
  ON public.contact_messages FOR SELECT
  TO authenticated
  USING (true);

-- Only authenticated users (admin) can delete messages
CREATE POLICY "Authenticated users can delete messages"
  ON public.contact_messages FOR DELETE
  TO authenticated
  USING (true);
