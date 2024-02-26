import { QueryConfig } from "pg";
import { Cliente } from "../models/Cliente";

interface ICriaClienteDTO {
  nome: string
};

interface IClientesRepository {
  createInsertQueryConfig({ nome }: ICriaClienteDTO): QueryConfig;
  create({ nome }: ICriaClienteDTO): Promise<void>;
  getAll(): Promise<Cliente[]>;
  findById(clienteId: number): Promise<Cliente>;
};

export { ICriaClienteDTO, IClientesRepository };