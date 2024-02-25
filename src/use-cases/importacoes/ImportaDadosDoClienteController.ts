import { Request, Response } from "express";
import { importaDadosDoClienteUseCase } from "./ImportaDadosDoClienteUseCase";

class ImportaDadosDoClienteController {

  constructor(private importaDadosDoClienteUseCase: importaDadosDoClienteUseCase) {}

  handle(request: Request, response: Response): Response {
    this.importaDadosDoClienteUseCase.execute(request.body);
    return response.status(201).send();
  }

}

export { ImportaDadosDoClienteController };