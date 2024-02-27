import { Router, Request, Response } from "express";
import { getContratosController } from "../use-cases/contratos";
import { getParcelasContratoController } from "../use-cases/parcelas-contrato";

const contratosRouter: Router = Router();

contratosRouter.get("/:clienteId/contratos", (request: Request, response: Response) => {
  return getContratosController.handleGetAllContratosAsPageable(request, response);
});

contratosRouter.get("/:clienteId/contratos/:contratoId", (request: Request, response: Response) => {
  return getContratosController.handleGetContrato(request, response);
});

contratosRouter.get("/:clienteId/contratos/:contratoId/parcelas", (request: Request, response: Response) => {
  return getParcelasContratoController.executeGetAllParcelasFromContrato(request, response);
});

contratosRouter.get("/:clienteId/contratos/:contratoId/parcelas/:parcelaId", (request: Request, response: Response) => {
  return getParcelasContratoController.executeGetParcelaFromContrato(request, response);
});

export { contratosRouter };