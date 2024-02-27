import { Router, Request, Response } from "express";
import { getClientesController } from "../use-cases/clientes";

const clientesRouter: Router = Router();

clientesRouter.get("/", (request: Request, response: Response) => {
  return getClientesController.handleGetAllClientes(request, response);
});

clientesRouter.get("/:clienteId", (request: Request, response: Response) => {
  return getClientesController.handleGetCliente(request, response);
});

export { clientesRouter };