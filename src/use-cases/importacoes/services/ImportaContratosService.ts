import { QueryConfig } from "pg";
import { IContratosRepository, ICriaContratosDTO, IRequestContratos } from "../../../repositories/IContratosRepository";
import { ICriaParcelasContratoDTO, IParcelasContratoRepository } from "../../../repositories/IParcelaContratoRepository";
import { IClientesRepository } from "../../../repositories/IClientesRepository";


class ImportaContratosService {

  constructor(private clientesRepository:IClientesRepository, 
              private contratosRepository: IContratosRepository, 
              private parcelasContratoRepository: IParcelasContratoRepository) {}

  async importaContratos({ contratos }: IRequestContratos): Promise<void> {
    const queries: QueryConfig[] = [];
    const clienteId:number = await this.clientesRepository.getMaxIdFromTable();

    queries.push(this.clientesRepository.createInsertQueryConfig({ nome: 'Maria' }));

    contratos.forEach((contrato: ICriaContratosDTO, indice: number) => {
      console.log(`(${++indice}) - Contrato ${contrato.contrato} sendo importado...`);
      queries.push(this.contratosRepository.createInsertQueryConfig(clienteId, contrato));
      if (!this.doesContratoHaveParcelas(contrato.parcelas)) {
        return; 
      }
      contrato.parcelas.forEach((parcela: ICriaParcelasContratoDTO, indiceParcela: number) => {
        console.log(`Incluindo ${++indiceParcela}ª parcela do contrato...`)
        queries.push(this.parcelasContratoRepository.createInsertQueryConfig(contrato.contrato, indiceParcela, parcela));
      });
    });

    this.contratosRepository.complexCreate(queries);
  }

  private doesContratoHaveParcelas(parcelas: ICriaParcelasContratoDTO[]): boolean {
    return (parcelas != null || parcelas != undefined) && parcelas.length != 0;
  }

}

export { ImportaContratosService }