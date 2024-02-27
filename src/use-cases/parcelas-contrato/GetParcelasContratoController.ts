import { Request, Response } from "express";
import { GetParcelasContratoUseCase } from "./GetParcelasContratoUseCase";
import { ParcelaContrato } from "../../models/ParcelaContrato";

class GetParcelasContratoController {

  constructor(private getParcelasContratoUseCase: GetParcelasContratoUseCase) {}

  async executeGetAllParcelasFromContrato(request: Request, response: Response): Promise<Response> {
    const { contratoId } = request.params;
    const parcelas: ParcelaContrato[] = await this.getParcelasContratoUseCase.handleGetAllParcelasFromContrato(contratoId);
    return response.status(201).send({ 'parcelas': parcelas});
  }

  async executeGetParcelaFromContrato(request: Request, response: Response): Promise<Response> {
    const { contratoId, parcelaId } = request.params;
    const parcela: ParcelaContrato = await this.getParcelasContratoUseCase.handleGetParcelaFromContrato(contratoId, parseInt(parcelaId));
    return response.status(201).send({ 'parcela': parcela });
  }

}

export { GetParcelasContratoController };