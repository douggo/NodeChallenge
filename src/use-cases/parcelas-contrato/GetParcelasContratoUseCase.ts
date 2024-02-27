import { ParcelaContrato } from "../../models/ParcelaContrato";
import { GetParcelasContratoService } from "./services/GetParcelasContratoService";

class GetParcelasContratoUseCase {

  constructor(private getParcelasContratoService: GetParcelasContratoService) {}

  async handleGetAllParcelasFromContrato(contratoId: string): Promise<ParcelaContrato[]> {
    const parcelas: ParcelaContrato[] = await this.getParcelasContratoService.getAllParcelasFromContrato(contratoId);
    return parcelas;
  }

  async handleGetParcelaFromContrato(contratoId: string, parcelaId: number): Promise<ParcelaContrato> {
    const parcela: ParcelaContrato = await this.getParcelasContratoService.getParcelaFromContrato(contratoId, parcelaId);
    return parcela;
  }

}

export { GetParcelasContratoUseCase };