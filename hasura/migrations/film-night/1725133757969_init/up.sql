SET check_function_bodies = false;
CREATE FUNCTION public.set_current_timestamp_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$;
CREATE TABLE public.film_night (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    num_participants integer DEFAULT 0 NOT NULL,
    number integer NOT NULL,
    note text
);
CREATE TABLE public.nomination (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    film_name text NOT NULL,
    url text,
    participant_id uuid NOT NULL,
    film_night_id uuid NOT NULL,
    score integer DEFAULT 0
);
CREATE TABLE public.participant (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    name text NOT NULL
);
ALTER TABLE ONLY public.film_night
    ADD CONSTRAINT film_night_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.nomination
    ADD CONSTRAINT nomination_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.participant
    ADD CONSTRAINT participant_pkey PRIMARY KEY (id);
CREATE TRIGGER set_public_film_night_updated_at BEFORE UPDATE ON public.film_night FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_film_night_updated_at ON public.film_night IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_nomination_updated_at BEFORE UPDATE ON public.nomination FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_nomination_updated_at ON public.nomination IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_participant_updated_at BEFORE UPDATE ON public.participant FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_participant_updated_at ON public.participant IS 'trigger to set value of column "updated_at" to current timestamp on row update';
ALTER TABLE ONLY public.nomination
    ADD CONSTRAINT nomination_participant_id_fkey FOREIGN KEY (participant_id) REFERENCES public.participant(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
