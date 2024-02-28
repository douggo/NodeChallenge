import { Contrato } from "../../models/Contrato";
import { GetContratosService } from "./services/GetContratosService";

class GetContratosUseCase {

  constructor(private getContratosService: GetContratosService) {}

  async executeGetAllContratos(clienteId: number): Promise<Contrato[]> {
    const contratos: Promise<Contrato[]> = this.getContratosService.getContratosFromCliente(clienteId);
    return contratos;
  }

  async executeGetAllContratosAsPageable(clienteId: number, pagina: number, quantidadePorPagina: number): Promise<Contrato[]> {
    const contratos: Promise<Contrato[]> = this.getContratosService.getContratosFromClienteAsPageable(clienteId, pagina, quantidadePorPagina);
    return contratos;
  }

  async executeGetContrato(contratoId: string): Promise<Contrato> {
    const contrato: Promise<Contrato> = this.getContratosService.getContrato(contratoId);
    return contrato;
  }

  async executeGetEndividamentoFromContrato(contratoId: string): Promise<any> {
    const valorEndividamento: Promise<any> = this.getContratosService.getValorEndividamento(contratoId);
    return valorEndividamento;
  }

}

export { GetContratosUseCase };