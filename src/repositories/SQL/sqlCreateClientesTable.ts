const sqlCreateClientesTable: string = `
CREATE TABLE IF NOT EXISTS public.clientes
(
    id SERIAL NOT NULL,
    nome character varying(255) COLLATE pg_catalog."default",
    CONSTRAINT clientes_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.clientes
    OWNER to postgres;
`;

export { sqlCreateClientesTable };