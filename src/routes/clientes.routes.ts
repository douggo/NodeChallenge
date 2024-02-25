import { Router, Request, Response } from "express";

const clientesRouter: Router = Router();

clientesRouter.get("/", (request: Request, response: Response) => {
  response.send("Listagem dos clientes");
});

clientesRouter.get("/:clienteId", (request: Request, response: Response) => {
  response.send(`Dados do Cliente [${request.params.clienteId}]`)
});

export { clientesRouter };