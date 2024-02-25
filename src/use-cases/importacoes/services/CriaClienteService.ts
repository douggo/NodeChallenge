import { Cliente } from "../../../models/Cliente";
import { IClientesRepository, ICriaClienteDTO } from "../../../repositories/IClientesRepository";

class CriaClienteService {

  constructor(private clienteRepository: IClientesRepository) {}

  async criaUsuario({ nome }: ICriaClienteDTO) {
    this.clienteRepository.create({ nome });
  }

}

export { CriaClienteService }