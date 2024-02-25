import { ParcelaContrato } from "../models/ParcelaContrato";

interface ICriaParcelasContratoDTO {
  valorVencimento: number,
  dataVencimento: string,
  dataUltimoPagamento: string,
  totalPago: number,
  capitalAberto: number
}

interface IParcelasContratoRepository {
  create(contratoId: string, indice: number, parcelas: ParcelaContrato): void;
  getAll(contratoId: string): ParcelaContrato[];
  findById(contratoId: string, parcelaId: number): ParcelaContrato;
}

export { ICriaParcelasContratoDTO, IParcelasContratoRepository };