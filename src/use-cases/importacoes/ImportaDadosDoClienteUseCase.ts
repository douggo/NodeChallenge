import { IRequestContratos } from "../../repositories/IContratosRepository";
import { ImportaContratosService } from "./services/ImportaContratosService";
import { ConsultaMesComMaiorValorEmAbertoService } from "./services/consultaMesComMaiorValorEmAbertoService";

class ImportaDadosDoClienteUseCase {

  constructor(private importaContratosService: ImportaContratosService,
              private consultaMesComMaiorValorEmAbertoService: ConsultaMesComMaiorValorEmAbertoService) {}

  async execute(contratos: IRequestContratos): Promise<any[]> {
    this.importaContratosService.importaContratos(contratos);
    const mesComMaiorValorEmAberto: any = await this.consultaMesComMaiorValorEmAbertoService.getMesAndValorEmAberto();
    return mesComMaiorValorEmAberto;
  }

}

export { ImportaDadosDoClienteUseCase };