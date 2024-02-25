import { Router, Request, Response } from "express";

const contratosRouter: Router = Router();

contratosRouter.get("/", (request: Request, response: Response) => {
  response.send("Retorna todos os contratos do cliente [verificar a paginação!]");
});

contratosRouter.get("/:contratoId", (request: Request, response: Response) => {
  response.send("Retorna o contrato " + request.params.contratoId);
});

contratosRouter.get(":/contratoId/parcelas", (request: Request, response: Response) => {
  response.send("Retorna as parcelas do contrato " + request.params.contratoId);
});

export { contratosRouter };