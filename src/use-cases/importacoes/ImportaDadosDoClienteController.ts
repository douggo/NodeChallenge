import { Request, Response } from "express";
import { ImportaDadosDoClienteUseCase } from "./ImportaDadosDoClienteUseCase";

class ImportaDadosDoClienteController {

  constructor(private importaDadosDoClienteUseCase: ImportaDadosDoClienteUseCase) {}

  handle(request: Request, response: Response): Response {
    this.importaDadosDoClienteUseCase.execute(request.body);
    return response.status(201).send();
  }

}

export { ImportaDadosDoClienteController };