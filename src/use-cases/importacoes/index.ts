import { ClientesPostgreSQLRepository } from "../../repositories/postgresql/ClientesPostgreSQLRepository";
import { ContratosPostgreSQLRepository } from "../../repositories/postgresql/ContratosPostgreSQLRepository";
import { ParcelasContratoPostgreSQLRepository } from "../../repositories/postgresql/ParcelasContratoPostgreSQLRepository";
import { PostgreSQLQuery } from "../../repositories/postgresql/database/PostgreSQLQuery";
import { ImportaDadosDoClienteController } from "./ImportaDadosDoClienteController";
import { ImportaDadosDoClienteUseCase } from "./ImportaDadosDoClienteUseCase";
import { ImportaContratosService } from "./services/ImportaContratosService";

const postgreSQLQuery = PostgreSQLQuery.getInstance();

const clientesRespository = new ClientesPostgreSQLRepository(postgreSQLQuery);
const contratosRepository = new ContratosPostgreSQLRepository(postgreSQLQuery);
const parcelasContratoRepository = new ParcelasContratoPostgreSQLRepository(postgreSQLQuery);

const importaContratosService = new ImportaContratosService(clientesRespository, contratosRepository, parcelasContratoRepository);

const importaDadosDoClienteUseCase = new ImportaDadosDoClienteUseCase(importaContratosService);
const importaDadosDoClienteController = new ImportaDadosDoClienteController(importaDadosDoClienteUseCase);

export { importaDadosDoClienteController };
