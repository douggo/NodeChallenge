import { IRequestContratos } from "../../repositories/IContratosRepository";
import { ImportaContratosService } from "./services/ImportaContratosService";
import { ConsultaMesComMaiorValorEmAbertoService } from "./services/consultaMesComMaiorValorEmAbertoService";

class ImportaDadosDoClienteUseCase {

  constructor(private importaContratosService: ImportaContratosService,
              private consultaMesComMaiorValorEmAbertoService: ConsultaMesComMaiorValorEmAbertoService) {}

  async execute(contratos: IRequestContratos): Promise<void> {
    this.importaContratosService.importaContratos(contratos);
    this.consultaMesComMaiorValorEmAbertoService.getMesAndValorEmAberto();
  }

}

export { ImportaDadosDoClienteUseCase };