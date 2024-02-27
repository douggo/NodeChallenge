import { Cliente } from "../../models/Cliente";
import { GetClientesService } from "./services/GetClientesService";

class GetClientesUseCase {

  constructor(private getClientesService: GetClientesService) {}

  async executeGetAllClientes(): Promise<any[]> {
    const clientes: Cliente[] = await this.getClientesService.getAllClientes();
    return clientes;
  }

  async executeGetCliente(clienteId: number): Promise<Cliente> {
    const cliente: Cliente = await this.getClientesService.getCliente(clienteId);
    return cliente;
  }

}

export { GetClientesUseCase };