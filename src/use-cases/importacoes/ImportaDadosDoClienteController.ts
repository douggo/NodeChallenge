import { Request, Response } from "express";
import { ImportaDadosDoClienteUseCase } from "./ImportaDadosDoClienteUseCase";

class ImportaDadosDoClienteController {

  constructor(private importaDadosDoClienteUseCase: ImportaDadosDoClienteUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const requestResponse: any[] = await this.importaDadosDoClienteUseCase.execute(request.body);
    return response.status(201).send(requestResponse);
  }

}

export { ImportaDadosDoClienteController };