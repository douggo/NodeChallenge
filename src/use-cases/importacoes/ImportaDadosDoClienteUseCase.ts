import { ICriaContratosDTO, IRequestContratos } from "../../repositories/IContratosRepository";
import { ImportaContratosService } from "./services/ImportaContratosService";

class ImportaDadosDoClienteUseCase {

  constructor(private importaContratosService: ImportaContratosService) {}

  async execute(contratos: IRequestContratos): Promise<void> {
    this.importaContratosService.importaContratos(contratos);
  }

}

export { ImportaDadosDoClienteUseCase };