import { Router, Request, Response } from "express";
import { getClientesController } from "../use-cases/clientes";

const clientesRouter: Router = Router();

/**
 * @swagger
 * /clientes/:
 *   get:
 *     summary: Recupera todos os clientes cadastrados no Crediário
 *     description: Recupera uma lista de todos os clientes cadastrados no Crediário.
 *     responses:
 *       200:
 *         description: Lista de clientes
 *         content:
 *            application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 clientes:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: ID do cliente.
 *                       nome:
 *                         type: string
 *                         description: Nome do cliente.
 *             example:
 *               clientes:
 *                 - id: 1
 *                   nome: Doug
*/
clientesRouter.get("/", (request: Request, response: Response) => {
  return getClientesController.handleGetAllClientes(request, response);
});

/**
 * @swagger
 * /clientes/{clienteId}:
 *   get:
 *     summary: Recupera dados de um cliente em específico
 *     description: Recupera um objeto JavaScript de um cliente em específico.
 *     parameters:
 *       - in: path
 *         name: clienteId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do cliente desejado.
 *     responses:
 *       200:
 *         description: Cliente
 *         content:
 *            application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID do Cliente.
 *                 nome:
 *                   type: string
 *                   description: Nome do Cliente.
 *             example:
 *               id: 1
 *               nome: Doug
*/
clientesRouter.get("/:clienteId", (request: Request, response: Response) => {
  return getClientesController.handleGetCliente(request, response);
});

export { clientesRouter };