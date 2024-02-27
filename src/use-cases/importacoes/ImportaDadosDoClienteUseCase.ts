import { IRequestContratos } from "../../repositories/IContratosRepository";
import { ConsultaMesComMaiorValorEmAbertoService } from "./services/ConsultaMesComMaiorValorEmAbertoService";
import { CriaTabelasIniciaisService } from "./services/CriaTabelasIniciaisService";
import { ImportaContratosService } from "./services/ImportaContratosService";

class ImportaDadosDoClienteUseCase {

  constructor(private criaTabelasIniciaisService: CriaTabelasIniciaisService,
              private importaContratosService: ImportaContratosService,
              private consultaMesComMaiorValorEmAbertoService: ConsultaMesComMaiorValorEmAbertoService) {}

  async execute(contratos: IRequestContratos): Promise<any[]> {
    this.criaTabelasIniciaisService.criaTabelas();
    this.importaContratosService.importaContratos(contratos);
    const mesComMaiorValorEmAberto: any = await this.consultaMesComMaiorValorEmAbertoService.getMesAndValorEmAberto();
    return mesComMaiorValorEmAberto;
  }

}

export { ImportaDadosDoClienteUseCase };