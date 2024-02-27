import { Contrato } from "../../models/Contrato";
import { GetContratosService } from "./services/GetContratosService";

class GetContratosUseCase {

  constructor(private getContratosService: GetContratosService) {}

  async executeGetAllContratos(clienteId: number): Promise<Contrato[]> {
    const contratos: Promise<Contrato[]> = this.getContratosService.getContratosFromCliente(clienteId);
    return contratos;
  }

  async executeGetContrato(contratoId: string): Promise<Contrato> {
    const contrato: Promise<Contrato> = this.getContratosService.getContrato(contratoId);
    return contrato;
  }

}

export { GetContratosUseCase };