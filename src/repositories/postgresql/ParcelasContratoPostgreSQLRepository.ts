import { QueryConfig } from "pg";
import { ParcelaContrato } from "../../models/ParcelaContrato";
import { ICriaParcelasContratoDTO, IParcelasContratoRepository } from "../IParcelaContratoRepository";
import { PostgreSQLQuery } from "./database/PostgreSQLQuery";

interface ParcelasContratoDB {
  id: number,
  contrato_id: string,
  valor_vencimento: number,
  data_vencimento: string,
  data_ultimo_pagamento: string,
  total_pago: number,
  capital_aberto: number
}

class ParcelasContratoPostgreSQLRepository implements IParcelasContratoRepository {
  
  private static TABLENAME:string = "parcelas_contrato";
  private static COLUMNS: string[] = [ 
    "id",
    "contrato_id", 
    "valor_vencimento", 
    "data_vencimento",
    "data_ultimo_pagamento",
    "total_pago",
    "capital_aberto"
  ];

  constructor(private database: PostgreSQLQuery) {}

  createInsertQueryConfig(contratoId: string, indice: number, parcela: ICriaParcelasContratoDTO): QueryConfig {
    return this.database.createInsertCommand(
        ParcelasContratoPostgreSQLRepository.TABLENAME,
        ParcelasContratoPostgreSQLRepository.COLUMNS,
        [
          indice,
          contratoId,
          parcela.valorvencimento,
          parcela.datavencimento,
          parcela.dataultimopagamento,
          parcela.totalpago,
          parcela.capitalaberto
        ]
    );
  }

  create(contratoId: string, indice: number, parcela: ICriaParcelasContratoDTO): void {
    this.database.insertData(
      ParcelasContratoPostgreSQLRepository.TABLENAME,
      ParcelasContratoPostgreSQLRepository.COLUMNS,
      [
        indice,
        contratoId,
        parcela.valorvencimento,
        parcela.datavencimento,
        parcela.dataultimopagamento,
        parcela.totalpago,
        parcela.capitalaberto
      ]
    );
  }

  async getAll(contratoId: string): Promise<ParcelaContrato[]> {
    const result: any[] = await this.database.selectData(
      ParcelasContratoPostgreSQLRepository.TABLENAME,
      ParcelasContratoPostgreSQLRepository.COLUMNS,
      `AND contrato_id = '${contratoId}'`
    );

    const parcelas: ParcelaContrato[] = result.map((parcelaDados: ParcelasContratoDB, indice) => {
      return new ParcelaContrato(
        parcelaDados.id,
        parcelaDados.contrato_id,
        parcelaDados.valor_vencimento,
        parcelaDados.data_vencimento,
        parcelaDados.data_ultimo_pagamento,
        parcelaDados.total_pago,
        parcelaDados.capital_aberto
      );
    });
    return parcelas;
  }

  async findById(contratoId: string, parcelaId: number): Promise<ParcelaContrato> {
    const result: any[] = await this.database.selectData(
      ParcelasContratoPostgreSQLRepository.TABLENAME,
      ParcelasContratoPostgreSQLRepository.COLUMNS,
      `AND (contrato_id = '${contratoId}' AND id = ${parcelaId})`
    );
    const parcela: ParcelaContrato|undefined = result.map((parcelaDados: ParcelasContratoDB, indice) => {
      return new ParcelaContrato(
        parcelaDados.id,
        parcelaDados.contrato_id,
        parcelaDados.valor_vencimento,
        parcelaDados.data_vencimento,
        parcelaDados.data_ultimo_pagamento,
        parcelaDados.total_pago,
        parcelaDados.capital_aberto
      );
    }).shift();
    if (parcela == undefined) {
      throw new Error('Parcela não encontrada!');
    }
    return parcela;
  }

}

export { ParcelasContratoPostgreSQLRepository };