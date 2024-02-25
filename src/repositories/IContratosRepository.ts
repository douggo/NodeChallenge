import { Contrato } from "../models/Contrato";
import { ICriaParcelasContratoDTO } from "./IParcelaContratoRepository";

interface ICriaContratosDTO {
  contratoId: string,
  data: string,
  valorTotal: number,
  valorEntrada: number,
  valorFinanciado: number,
  parcelas: ICriaParcelasContratoDTO[]
};

interface IContratosRepository {
  create(contratos: ICriaContratosDTO): void;
  getAll(clienteId: string): Contrato[];
  findById(contratoId: string): Contrato;
};

export { ICriaContratosDTO, IContratosRepository };