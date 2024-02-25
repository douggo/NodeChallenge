import { ParcelaContrato } from "../../../models/ParcelaContrato";
import { IContratosRepository, ICriaContratosDTO } from "../../../repositories/IContratosRepository";
import { ICriaParcelasContratoDTO, IParcelasContratoRepository } from "../../../repositories/IParcelaContratoRepository";

class ImportaContratosService {

  constructor(private contratosRepository: IContratosRepository, private parcelasContratoRepository: IParcelasContratoRepository) {}

  importaContratos(contratos: ICriaContratosDTO[]): void {
    contratos.forEach((contrato: ICriaContratosDTO, indice: number) => {
      this.contratosRepository.create(contrato);
      if (!this.doesContratoHaveParcelas(contrato.parcelas)) {
        return;
      }
      contrato.parcelas.forEach((parcela: ParcelaContrato, indice: number) => {
        this.parcelasContratoRepository.create(contrato.contratoId, indice, parcela);
      });
    });
  }

  private doesContratoHaveParcelas(parcelas: ICriaParcelasContratoDTO[]): boolean {
    return (parcelas != null || parcelas != undefined) && parcelas.length == 0;
  }

}

export { ImportaContratosService }