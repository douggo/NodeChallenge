import { ICriaContratosDTO } from "../../repositories/IContratosRepository";
import { ImportaContratosService } from "./services/ImportaContratosService";
import { CriaClienteService } from "./services/criaClienteService";

class importaDadosDoClienteUseCase {

  constructor(private criaClienteService: CriaClienteService, private importaContratosService: ImportaContratosService) {}

  execute(contratos: ICriaContratosDTO[]): void {
    this.criaClienteService.criaUsuario({ nome: "Maria" });
    this.importaContratosService.importaContratos(contratos);
  }

}

export { importaDadosDoClienteUseCase };