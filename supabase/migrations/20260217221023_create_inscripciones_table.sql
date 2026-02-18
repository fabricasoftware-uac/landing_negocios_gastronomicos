CREATE TABLE public.inscripciones (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nombre_completo TEXT NOT NULL,
  documento TEXT NOT NULL,
  email TEXT NOT NULL,
  telefono TEXT NOT NULL,
  ciudad TEXT NOT NULL,
  nivel_educativo TEXT NOT NULL,
  acepta_terminos BOOLEAN NOT NULL DEFAULT false,
  estado TEXT NOT NULL DEFAULT 'pendiente',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.inscripciones ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public enrollment form, no auth required)
CREATE POLICY "Anyone can create an inscription"
ON public.inscripciones
FOR INSERT
WITH CHECK (true);

-- Allow reading own inscription by email/documento (for resume flow)
CREATE POLICY "Anyone can read inscriptions by email or documento"
ON public.inscripciones
FOR SELECT
USING (true);

-- Trigger for updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_inscripciones_updated_at
BEFORE UPDATE ON public.inscripciones
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();