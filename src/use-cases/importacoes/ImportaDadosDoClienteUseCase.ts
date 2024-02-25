import { ICriaContratosDTO } from "../../repositories/IContratosRepository";
import { CriaClienteService } from "./services/CriaClienteService";
import { ImportaContratosService } from "./services/ImportaContratosService";

class ImportaDadosDoClienteUseCase {

  constructor(private criaClienteService: CriaClienteService, /*private importaContratosService: ImportaContratosService*/) {}

  execute(contratos: ICriaContratosDTO[]): void {
    this.criaClienteService.criaUsuario({ nome: "Maria" });
    //this.importaContratosService.importaContratos(contratos);
  }

}

export { ImportaDadosDoClienteUseCase };