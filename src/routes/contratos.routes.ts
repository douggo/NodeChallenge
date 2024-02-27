import { Router, Request, Response } from "express";
import { getContratosController } from "../use-cases/contratos";

const contratosRouter: Router = Router();

contratosRouter.get("/", (request: Request, response: Response) => {
  return getContratosController.handleGetAllContratos(request, response);
});

contratosRouter.get("/:contratoId", (request: Request, response: Response) => {
  return getContratosController.handleGetContrato(request, response);
});

contratosRouter.get(":/contratoId/parcelas", (request: Request, response: Response) => {
  response.send("Retorna as parcelas do contrato " + request.params.contratoId);
});

export { contratosRouter };