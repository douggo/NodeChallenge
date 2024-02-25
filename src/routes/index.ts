import { Router, Request, Response } from "express";
import { clientesRouter } from "./clientes.routes";
import { contratosRouter } from "./contratos.routes";
import { importacoesRouter } from "./importacoes.routes";

const router: Router = Router();

const clientesEndpoint = "/clientes";
const contratosEndpoint = clientesEndpoint.concat("/:clienteId/contratos");
const importacoesEndpoint = "/importacoes";

router.get("/", (request: Request, response: Response) => {
  response.send("Seja bem-vindo à API do Crediário!");
})

router.use(clientesEndpoint, clientesRouter);
router.use(contratosEndpoint, contratosRouter);
router.use(importacoesEndpoint, importacoesRouter);

export { router };