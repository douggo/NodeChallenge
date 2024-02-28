import { QueryConfig } from "pg";
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
  createInsertQueryConfig(clienteId: number, contrato: ICriaContratosDTO): QueryConfig;
  complexCreate(queries: QueryConfig[]): Promise<void>;
  create(clienteId:number, contratos: ICriaContratosDTO): void;
  getAll(clienteId: number): Promise<Contrato[]>;
  getAllAsPageable(clienteId: number, pagina: number, quantidadePorPagina: number): Promise<Contrato[]>;
  findById(contratoId: string): Promise<Contrato>;
  getValorEndividamento(contratoId: string): Promise<any>;
};

export { IRequestContratos, ICriaContratosDTO, IContratosRepository };