import { Router, Request, Response } from "express";
import { importaDadosDoClienteController } from "../use-cases/importacoes";

const importacoesRouter: Router = Router();

/**
 * @swagger
 * /importacoes/importaDadosDoCliente:
 *   post:
 *     summary: Importa contratos e suas parcelas de um Cliente
 *     tags: [Importações]
 *     description: Importa contratos e suas parcelas de um Cliente.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               contratos:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     contrato:
 *                       type: string
 *                       description: ID do contrato.
 *                     data:
 *                       type: string
 *                       format: date
 *                       description: Data do Contrato.
 *                     valortotal:
 *                       type: number
 *                       description: Valor Total do Contrato.
 *                     valorentrada:
 *                       type: number
 *                       description: Valor de Entrada do Contrato.
 *                     valorfinanciado:
 *                       type: number
 *                       description: Valor Financiado do Contrato.
 *                     parcelas:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           valorvencimento:
 *                             type: number
 *                             description: Valor de Vencimento da Parcela.
 *                           datavencimento:
 *                             type: string
 *                             format: date
 *                             description: Data de Vencimento da Parcela.
 *                           dataultimopagamento:
 *                             type: string
 *                             format: date
 *                             description: Data do Último Pagamento realizado.
 *                           totalpago:
 *                             type: number
 *                             description: Valor Total pago.
 *                           capitalaberto:
 *                             type: number
 *                             description: Capital aberto.
 *     responses:
 *       200:
 *         description: JSON
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mes:
 *                   type: string
 *                   description: Mês e Ano.
 *                 total_aberto:
 *                   type: string
 *                   description: Maior valor em aberto.
 *             example:
 *               mes: "10/2019"
 *               total_aberto: "1425.99"
 * 
 */
importacoesRouter.post("/importaDadosDoCliente", (request: Request, response: Response) => {
  return importaDadosDoClienteController.handle(request, response);
}); 

export { importacoesRouter };