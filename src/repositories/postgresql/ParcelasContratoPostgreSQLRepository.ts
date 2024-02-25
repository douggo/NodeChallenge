import { ParcelaContrato } from "../../models/ParcelaContrato";
import { ICriaParcelasContratoDTO, IParcelasContratoRepository } from "../IParcelaContratoRepository";
import { PostgreSQLQuery } from "./database/PostgreSQLQuery";

class ParcelasContratoPostgreSQLRepository implements IParcelasContratoRepository {
  
  private static TABLENAME:string = "parcelas_contrato";
  private static COLUMNS: string[] = [ 
    "id", 
    "valor_vencimento", 
    "data_vencimento",
    "data_ultimo_pagamento",
    "total_pago",
    "capital_aberto"
  ];

  constructor(private database: PostgreSQLQuery) {}

  create(contratoId: string, indice: number, parcelas: ICriaParcelasContratoDTO): void {
    throw new Error("Method not implemented.");
  }
  getAll(contratoId: string): ParcelaContrato[] {
    throw new Error("Method not implemented.");
  }
  findById(contratoId: string, parcelaId: number): ParcelaContrato {
    throw new Error("Method not implemented.");
  }

}

export { ParcelasContratoPostgreSQLRepository };