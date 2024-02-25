import { IClientesRepository, ICriaClienteDTO } from "../../../repositories/IClientesRepository";

class CriaClienteService {

  constructor(private clienteRepositoru: IClientesRepository) {}

  criaUsuario({ nome }: ICriaClienteDTO) {

  }


}

export { CriaClienteService }