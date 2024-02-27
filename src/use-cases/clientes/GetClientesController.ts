import { Request, Response } from "express";
import { GetClientesUseCase } from "./GetClientesUseCase";
import { Cliente } from "../../models/Cliente";

class GetClientesController {

  constructor(private getClientesUseCase: GetClientesUseCase) {}

  async handleGetAllClientes(request: Request, response: Response): Promise<Response> {
    const requestResponse: any[] = await this.getClientesUseCase.executeGetAllClientes();
    return response.status(201).send({'clientes': requestResponse});
  }

  async handleGetCliente(request: Request, response: Response): Promise<Response> {
    const requestResponse: Cliente = await this.getClientesUseCase.executeGetCliente(parseInt(request.params.clienteId));
    return response.status(201).send({'cliente': requestResponse});
  }

}

export { GetClientesController };