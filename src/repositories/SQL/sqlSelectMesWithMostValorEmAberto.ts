const sqlSelectMesWithMostValorEmAberto = `
WITH

CONTRATO AS (
      SELECT ctr.id || '0' AS "contrato_id",
             EXTRACT(MONTH FROM ctr."data")::VARCHAR || '/' || EXTRACT(YEAR FROM ctr."data")::VARCHAR AS "mes/ano",
	         ctr."data" AS "data_operacao",
	         ctr.valor_total AS "valor",
	         'contrato' AS "operacao"
        FROM contratos ctr
    ORDER BY ctr."data"
),

PARCELA AS (
     SELECT prc.contrato_id || prc.id::VARCHAR AS "contrato_id",
	        (
		        CASE WHEN total_pago > 0
	   	             THEN EXTRACT(MONTH FROM prc.data_ultimo_pagamento)::VARCHAR || '/' || EXTRACT(YEAR FROM prc.data_ultimo_pagamento)::VARCHAR
			         ELSE EXTRACT(MONTH FROM prc.data_vencimento)::VARCHAR || '/' || EXTRACT(YEAR FROM prc.data_vencimento)::VARCHAR
		        END
	        ) AS "mes/ano",
	        COALESCE(data_ultimo_pagamento, data_vencimento) AS "data_operacao",
	        COALESCE(-total_pago, 0) AS "valor",
	        'parcela' AS "operacao"
        FROM parcelas_contrato prc
    ORDER BY "data_operacao"
),

CONJUNTO AS (
	SELECT "mes/ano",
	       valor,
	       data_operacao,
	       "operacao",
	       ROW_NUMBER() OVER () AS "id_operacao"
	  FROM (
	           SELECT "mes/ano",
	                  valor,
		              data_operacao,
		  			  "operacao"
	             FROM CONTRATO
                UNION ALL
	           SELECT "mes/ano",
	                  valor,
		              data_operacao,
		              "operacao"
	             FROM PARCELA
		   ) AS TEMP_TABLE
  ORDER BY data_operacao
)

  SELECT "mes/ano",
		 (
		     SELECT (
				 	    COALESCE(SUM(subselect.valor),0) + principal.valor
			        )::NUMERIC(10,2)
		       FROM CONJUNTO subselect
		      WHERE subselect.data_operacao <= principal.data_operacao
			    AND subselect."id_operacao" < principal."id_operacao"
		 ) AS "em_aberto"
    FROM CONJUNTO principal
   WHERE valor <> 0
ORDER BY em_aberto DESC
   LIMIT 1;
`;

export { sqlSelectMesWithMostValorEmAberto };
