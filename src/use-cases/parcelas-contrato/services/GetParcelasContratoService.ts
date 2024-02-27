import { ParcelaContrato } from "../../../models/ParcelaContrato";
import { IParcelasContratoRepository } from "../../../repositories/IParcelaContratoRepository";

class GetParcelasContratoService {

  constructor(private parcelasContratoRepository: IParcelasContratoRepository) {}

  async getAllParcelasFromContrato(contratoId: string): Promise<ParcelaContrato[]> {
    const parcelas: ParcelaContrato[] = await this.parcelasContratoRepository.getAll(contratoId);
    return parcelas;
  }

  async getParcelaFromContrato(contratoId: string, parcelaId: number): Promise<ParcelaContrato> {
    const parcela: ParcelaContrato = await this.parcelasContratoRepository.findById(contratoId, parcelaId);
    return parcela;
  }

}

export { GetParcelasContratoService };