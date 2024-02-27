import { Cliente } from "../../../models/Cliente";
import { IClientesRepository } from "../../../repositories/IClientesRepository";

class GetClientesService {

  constructor(private clientesRepository: IClientesRepository) {}

  async getAllClientes(): Promise<any[]> {
    return await this.clientesRepository.getAll();
  }

  async getCliente(clienteId: number): Promise<Cliente> {
    return await this.clientesRepository.findById(clienteId);
  }

}

export { GetClientesService };