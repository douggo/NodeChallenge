import { Request, Response } from "express";
import { GetContratosUseCase } from "./GetContratosUseCase";
import { Contrato } from "../../models/Contrato";

class GetContratosController {
  
  constructor(private getContratosUseCase: GetContratosUseCase) {}

  async handleGetAllContratos(request: Request, response: Response): Promise<Response> {
    const requestResponse: Contrato[] = await this.getContratosUseCase.executeGetAllContratos(parseInt(request.params.clientId));
    return response.status(201).send({'contratos': requestResponse});
  }

  async handleGetAllContratosAsPageable(request: Request, response: Response): Promise<Response> {
    const pagina: number = parseInt(request.query.pagina as string);
    const quantidadePorPagina: number = parseInt(request.query.quantidadePorPagina as string);
    const clienteId: number = parseInt(request.params.clienteId);
    const requestResponse: Contrato[] = await this.getContratosUseCase.executeGetAllContratosAsPageable(clienteId, pagina, quantidadePorPagina);
    return response.status(201).send({ 'contratos': requestResponse });
  }

  async handleGetContrato(request: Request, response: Response): Promise<Response> {
    const requestResponse: Contrato = await this.getContratosUseCase.executeGetContrato(request.params.contratoId);
    return response.status(201).send(requestResponse);
  }

}

export { GetContratosController };