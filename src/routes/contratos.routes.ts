import { Router, Request, Response } from "express";
import { getContratosController } from "../use-cases/contratos";
import { getParcelasContratoController } from "../use-cases/parcelas-contrato";

const contratosRouter: Router = Router();

/**
 * @swagger
 * /clientes/{clienteId}/contratos/:
 *   get:
 *     summary: Recupera todos os contratos cadastrados do cliente no Crediário
 *     description: Recupera uma lista de todos os contratos do cliente no Crediário.
 *     parameters:
 *       - in: query
 *         name: pagina
 *         required: true
 *         schema:
 *           type: integer
 *         description: Número da página.
 *       - in: query
 *         name: quantidadePorPagina
 *         required: true
 *         schema:
 *           type: integer
 *         description: Quantidade de contratos por página.
 *       - in: path
 *         name: clienteId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do cliente desejado.
 *     responses:
 *       200:
 *         description: Lista de contratos
 *         content:
 *            application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 contratos:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         description: ID do Contrato.
 *                       clienteId:
 *                         type: string
 *                         description: ID do Cliente do Contrato.
 *                       data:
 *                         type: string
 *                         description: Data do Contrato.
 *                       valorTotal:
 *                         type: number
 *                         description: Valor Total do Contrato.
 *                       valorEntrada:
 *                         type: number
 *                         description: Valor de Entrada do Contrato.
 *                       valorFinanciado:
 *                         type: number
 *                         description: Valor de Financiado do Contrato.
 *             example:
 *               contratos:
 *                 - id: "0480001240004830000001669920170504"
 *                   clienteId: "1"
 *                   data: "2017-05-04T03:00:00.000Z"
 *                   valorTotal: "229.8"
 *                   valorEntrada: "0"
 *                   valorFinanciado: "229.8"
*/
contratosRouter.get("/:clienteId/contratos", (request: Request, response: Response) => {
  return getContratosController.handleGetAllContratosAsPageable(request, response);
});

/**
 * @swagger
 * /clientes/{clienteId}/contratos/{contratoId}:
 *   get:
 *     summary: Recupera um contrato desejado
 *     description: Recupera um contrato desejado.
 *     parameters:
 *       - in: path
 *         name: clienteId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do cliente desejado.
 *       - in: path
 *         name: contratoId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do contrato desejado.
 *     responses:
 *       200:
 *         description: Contrato
 *         content:
 *            application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 contratos:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         description: ID do Contrato.
 *                       clienteId:
 *                         type: string
 *                         description: ID do Cliente do Contrato.
 *                       data:
 *                         type: string
 *                         description: Data do Contrato.
 *                       valorTotal:
 *                         type: number
 *                         description: Valor Total do Contrato.
 *                       valorEntrada:
 *                         type: number
 *                         description: Valor de Entrada do Contrato.
 *                       valorFinanciado:
 *                         type: number
 *                         description: Valor de Financiado do Contrato.
 *             example:
 *               id: "0480001240004830000001669920170504"
 *               clienteId: "1"
 *               data: "2017-05-04T03:00:00.000Z"
 *               valorTotal: "229.8"
 *               valorEntrada: "0"
 *               valorFinanciado: "229.8"
*/
contratosRouter.get("/:clienteId/contratos/:contratoId", (request: Request, response: Response) => {
  return getContratosController.handleGetContrato(request, response);
});

/**
 * @swagger
 * /clientes/{clienteId}/contratos/{contratoId}/parcelas:
 *   get:
 *     summary: Recupera todas as parcelas de um contrato
 *     description: Recupera uma lista de todas as parcelas de um contrato.
 *     parameters:
 *       - in: path
 *         name: clienteId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do cliente desejado.
 *       - in: path
 *         name: contratoId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do contrato desejado.
 *     responses:
 *       200:
 *         description: Lista das parcelas
 *         content:
 *            application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 parcelas:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: ID da Parcela.
 *                       contratoId:
 *                         type: string
 *                         description: ID do Contrato.
 *                       valorVencimento:
 *                         type: number
 *                         description: Valor de Vencimento da Parcela.
 *                       dataVencimento:
 *                         type: string
 *                         description: Data de Vencimento do Contrato.
 *                       dataUltimoPagamento:
 *                         type: string
 *                         description: Data do último pagamento realizado das parcelas do Contrato.
 *                       totalPago:
 *                         type: number
 *                         description: Valor Pago da Parcela.
 *                       capitalAberto:
 *                         type: number
 *                         description: Capital aberto da Parcela.
 *             example:
 *               parcelas:
 *                 - id: 1
 *                   contratoId: "0480001240004830000001669920170504"
 *                   valorVencimento: "45.96"
 *                   dataVencimento: "2017-06-18T03:00:00.000Z"
 *                   dataUltimoPagamento: "2017-08-21T03:00:00.000Z"
 *                   totalPago: "45.96"
 *                   capitalAberto: "0"
*/
contratosRouter.get("/:clienteId/contratos/:contratoId/parcelas", (request: Request, response: Response) => {
  return getParcelasContratoController.executeGetAllParcelasFromContrato(request, response);
});

/**
 * @swagger
 * /clientes/{clienteId}/contratos/{contratoId}/parcelas/{parcelaId}:
 *   get:
 *     summary: Recupera uma parcela de um contrato
 *     description: Recupera uma parcela de um contrato.
 *     parameters:
 *       - in: path
 *         name: clienteId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do cliente desejado.
 *       - in: path
 *         name: contratoId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do contrato desejado.
  *       - in: path
 *         name: parcelaId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da parcela desejada.
 *     responses:
 *       200:
 *         description: Parcela
 *         content:
 *            application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 parcelas:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: ID da Parcela.
 *                       contratoId:
 *                         type: string
 *                         description: ID do Contrato.
 *                       valorVencimento:
 *                         type: number
 *                         description: Valor de Vencimento da Parcela.
 *                       dataVencimento:
 *                         type: string
 *                         description: Data de Vencimento do Contrato.
 *                       dataUltimoPagamento:
 *                         type: string
 *                         description: Data do último pagamento realizado das parcelas do Contrato.
 *                       totalPago:
 *                         type: number
 *                         description: Valor Pago da Parcela.
 *                       capitalAberto:
 *                         type: number
 *                         description: Capital aberto da Parcela.
 *             example:
 *               id: 1
 *               contratoId: "0480001240004830000001669920170504"
 *               valorVencimento: "45.96"
 *               dataVencimento: "2017-06-18T03:00:00.000Z"
 *               dataUltimoPagamento: "2017-08-21T03:00:00.000Z"
 *               totalPago: "45.96"
 *               capitalAberto: "0"
*/
contratosRouter.get("/:clienteId/contratos/:contratoId/parcelas/:parcelaId", (request: Request, response: Response) => {
  return getParcelasContratoController.executeGetParcelaFromContrato(request, response);
});

export { contratosRouter };