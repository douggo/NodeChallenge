import { ICriaContratosDTO, IRequestContratos } from "../../repositories/IContratosRepository";
import { CriaClienteService } from "./services/CriaClienteService";
import { ImportaContratosService } from "./services/ImportaContratosService";

class ImportaDadosDoClienteUseCase {

  constructor(/*private criaClienteService: CriaClienteService, */private importaContratosService: ImportaContratosService) {}

  async execute(contratos: IRequestContratos): Promise<void> {
    //this.criaClienteService.criaUsuario({ nome: "Maria" });
    this.importaContratosService.importaContratos(4, contratos);
  }

}

export { ImportaDadosDoClienteUseCase };