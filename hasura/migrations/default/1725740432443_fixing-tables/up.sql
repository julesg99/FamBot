CREATE SEQUENCE public.film_night_number_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.film_night_number_seq OWNED BY public.film_night.number;

ALTER TABLE ONLY public.film_night ALTER COLUMN number SET DEFAULT nextval('public.film_night_number_seq'::regclass);
