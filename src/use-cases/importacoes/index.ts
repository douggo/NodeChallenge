import { ClientesPostgreSQLRepository } from "../../repositories/postgresql/ClientesPostgreSQLRepository";
import { PostgreSQLQuery } from "../../repositories/postgresql/database/PostgreSQLQuery";
import { ImportaDadosDoClienteController } from "./ImportaDadosDoClienteController";
import { ImportaDadosDoClienteUseCase } from "./ImportaDadosDoClienteUseCase";
import { CriaClienteService } from "./services/CriaClienteService";

const postgreSQLQuery = PostgreSQLQuery.getInstance();

const clientesRespository = new ClientesPostgreSQLRepository(postgreSQLQuery);
//const contratosRepository = new ContratosPostgreSQLRepository(postgreSQLQuery);
//const parcelasContratoRepository = new ParcelasContratoPostgreSQLRepository(postgreSQLQuery);

const criaClienteService = new CriaClienteService(clientesRespository);
//const importaContratosService = new ImportaContratosService();

const importaDadosDoClienteUseCase = new ImportaDadosDoClienteUseCase(criaClienteService);
const importaDadosDoClienteController = new ImportaDadosDoClienteController(importaDadosDoClienteUseCase);

export { importaDadosDoClienteController };
