const sqlCreateParcelasContratoTable: string = `
CREATE TABLE IF NOT EXISTS public.parcelas_contrato
(
    id integer NOT NULL,
    contrato_id character varying COLLATE pg_catalog."default" NOT NULL,
    valor_vencimento numeric,
    data_vencimento date,
    data_ultimo_pagamento date,
    total_pago numeric,
    capital_aberto numeric,
    CONSTRAINT parcelas_contrato_pkey PRIMARY KEY (id, contrato_id),
    CONSTRAINT fk_contratos FOREIGN KEY (contrato_id)
        REFERENCES public.contratos (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.parcelas_contrato
    OWNER to postgres;
`;

export { sqlCreateParcelasContratoTable };