import { Contrato } from "../models/Contrato";
import { ICriaParcelasContratoDTO } from "./IParcelaContratoRepository";

interface IRequestContratos {
  contratos: ICriaContratosDTO[],
}

interface ICriaContratosDTO {
  contrato: string,
  data: string,
  valortotal: number,
  valorentrada: number,
  valorfinanciado: number,
  parcelas: ICriaParcelasContratoDTO[]
};

interface IContratosRepository {
  create(clienteId:number, contratos: ICriaContratosDTO): void;
  getAll(clienteId: string): Promise<Contrato[]>;
  findById(contratoId: string): Promise<Contrato>;
};

export { IRequestContratos, ICriaContratosDTO, IContratosRepository };