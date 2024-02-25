import { IClientesRepository, ICriaClienteDTO } from "../../../repositories/IClientesRepository";

class CriaClienteService {

  constructor(private clienteRepository: IClientesRepository) {}

  criaUsuario({ nome }: ICriaClienteDTO) {
    this.clienteRepository.create({ nome });
  }

}

export { CriaClienteService }