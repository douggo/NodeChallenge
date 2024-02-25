import { Cliente } from "../models/Cliente";

interface ICriaClienteDTO {
  nome: string
};

interface IClientesRepository {
  create({ nome }: ICriaClienteDTO): Promise<void>;
  getAll(): Promise<Cliente[]>;
  findById(clienteId: number): Promise<Cliente>;
};

export { ICriaClienteDTO, IClientesRepository };