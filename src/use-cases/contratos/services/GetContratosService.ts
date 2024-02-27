import { Contrato } from "../../../models/Contrato";
import { IContratosRepository } from "../../../repositories/IContratosRepository";

class GetContratosService {

  constructor(private contratosRepository: IContratosRepository) {}

  async getContratosFromCliente(clienteId: number): Promise<Contrato[]> {
    const contratos: Contrato[] = await this.contratosRepository.getAll(clienteId);
    return contratos;
  }

  async getContratosFromClienteAsPageable(clienteId: number, pagina: number, quantidadePorPagina: number): Promise<Contrato[]> {
    const contratos: Contrato[] = await this.contratosRepository.getAllAsPageable(clienteId, pagina, quantidadePorPagina);
    return contratos;
  }

  async getContrato(contratoId: string): Promise<Contrato> {
    const contrato: Contrato = await this.contratosRepository.findById(contratoId);
    return contrato;
  }

}

export { GetContratosService };