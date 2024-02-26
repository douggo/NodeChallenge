import { QueryConfig } from "pg";
import { ParcelaContrato } from "../models/ParcelaContrato";

interface ICriaParcelasContratoDTO {
  valorvencimento: number,
  datavencimento: string,
  dataultimopagamento: string,
  totalpago: number,
  capitalaberto: number
}

interface IParcelasContratoRepository {
  createInsertQueryConfig(contratoId: string, indice: number, parcela: ICriaParcelasContratoDTO): QueryConfig;
  create(contratoId: string, indice: number, parcelas: ICriaParcelasContratoDTO): void;
  getAll(contratoId: string): Promise<ParcelaContrato[]>;
  findById(contratoId: string, parcelaId: number): Promise<ParcelaContrato>;
}

export { ICriaParcelasContratoDTO, IParcelasContratoRepository };