import { Router, Request, Response } from "express";

const importacoesRouter: Router = Router();

importacoesRouter.post("/importaDadosDoCliente", (request: Request, response: Response) => {
  const { contratoId, valorTotal } = request.body;
  response.send(`Contrato: ${contratoId} & Valor Total: R$ ${valorTotal}`);
});

export { importacoesRouter };