import { Cliente } from "../models/Cliente";

interface ICriaClienteDTO {
  nome: string
};

interface IClientesRepository {
  create({ nome }: ICriaClienteDTO): void;
  getAll(): Cliente[];
  findById(clienteId: string): Cliente;
};

export { ICriaClienteDTO, IClientesRepository };