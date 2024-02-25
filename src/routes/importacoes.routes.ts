import { Router, Request, Response } from "express";
import { importaDadosDoClienteController } from "../use-cases/importacoes";

const importacoesRouter: Router = Router();

importacoesRouter.post("/importaDadosDoCliente", (request: Request, response: Response) => {
  return importaDadosDoClienteController.handle(request, response);
}); 

export { importacoesRouter };