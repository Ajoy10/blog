-- Creating USER table

CREATE TABLE IF NOT EXISTS public."User"
(
    user_id uuid NOT NULL,
    username character varying(25) COLLATE pg_catalog."default" NOT NULL,
    email character varying(320) COLLATE pg_catalog."default" NOT NULL,
    password character(60) COLLATE pg_catalog."default" NOT NULL,
    role character varying(20) COLLATE pg_catalog."default" NOT NULL,
    display_name character varying(40) COLLATE pg_catalog."default",
    created_at date NOT NULL,
    CONSTRAINT "User_pkey" PRIMARY KEY (user_id),
    CONSTRAINT constraint_email_unique UNIQUE (email),
    CONSTRAINT constraint_username_unique UNIQUE (username)
)
TABLESPACE pg_default;
