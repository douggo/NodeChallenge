const sqlCreateContratosTable: string = `
CREATE TABLE IF NOT EXISTS public.contratos
(
    id character varying COLLATE pg_catalog."default" NOT NULL,
    cliente_id bigint NOT NULL,
    data date,
    valor_total numeric,
    valor_entrada numeric,
    valor_financiado numeric,
    CONSTRAINT contratos_pkey PRIMARY KEY (id, cliente_id),
    CONSTRAINT idx_unique UNIQUE (id),
    CONSTRAINT fk_cliente FOREIGN KEY (cliente_id)
        REFERENCES public.clientes (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.contratos
    OWNER to postgres;
`;

export { sqlCreateContratosTable };