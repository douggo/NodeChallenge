import { Cliente } from "../models/Cliente";

interface ICriaClienteDTO {
  nome: string
};

interface IClientesRepository {
  create({ nome }: ICriaClienteDTO): Promise<void>;
  getAll(): Promise<void>;
  findById(clienteId: string): Cliente;
};

export { ICriaClienteDTO, IClientesRepository };