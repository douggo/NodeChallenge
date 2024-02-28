const sqlGetValorEndividamentoContrato: string = `
SELECT (
  SELECT SUM(valor_vencimento)
        FROM parcelas_contrato pc
       WHERE pc.contrato_id = c.id
         AND pc.valor_vencimento = pc.capital_aberto
) as em_aberto
FROM contratos c
`;

export { sqlGetValorEndividamentoContrato };