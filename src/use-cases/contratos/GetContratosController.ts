import { Request, Response } from "express";
import { GetContratosUseCase } from "./GetContratosUseCase";
import { Contrato } from "../../models/Contrato";

class GetContratosController {
  
  constructor(private getContratosUseCase: GetContratosUseCase) {}

  async handleGetAllContratos(request: Request, response: Response): Promise<Response> {
    const requestResponse: Contrato[] = await this.getContratosUseCase.executeGetAllContratos(parseInt(request.params.clientId));
    return response.status(201).send({'contratos': requestResponse});
  }

  async handleGetContrato(request: Request, response: Response): Promise<Response> {
    const requestResponse: Contrato = await this.getContratosUseCase.executeGetContrato(request.params.contratoId);
    return response.status(201).send({ 'contrato': requestResponse });
  }

}

export { GetContratosController };