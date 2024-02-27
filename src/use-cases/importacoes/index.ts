import { sqlCreateClientesTable } from "../../repositories/SQL/sqlCreateClientesTable";
import { sqlCreateContratosTable } from "../../repositories/SQL/sqlCreateContratosTable";
import { sqlCreateParcelasContratoTable } from "../../repositories/SQL/sqlCreateParcelasContratoTable";
import { sqlSelectMesWithMostValorEmAberto } from "../../repositories/SQL/sqlSelectMesWithMostValorEmAberto";
import { ClientesPostgreSQLRepository } from "../../repositories/postgresql/ClientesPostgreSQLRepository";
import { ContratosPostgreSQLRepository } from "../../repositories/postgresql/ContratosPostgreSQLRepository";
import { ParcelasContratoPostgreSQLRepository } from "../../repositories/postgresql/ParcelasContratoPostgreSQLRepository";
import { PostgreSQLQuery } from "../../repositories/postgresql/database/PostgreSQLQuery";
import { ImportaDadosDoClienteController } from "./ImportaDadosDoClienteController";
import { ImportaDadosDoClienteUseCase } from "./ImportaDadosDoClienteUseCase";
import { ConsultaMesComMaiorValorEmAbertoService } from "./services/ConsultaMesComMaiorValorEmAbertoService";
import { CriaTabelasIniciaisService } from "./services/CriaTabelasIniciaisService";
import { ImportaContratosService } from "./services/ImportaContratosService";

const postgreSQLQuery = PostgreSQLQuery.getInstance();

const clientesRespository = new ClientesPostgreSQLRepository(postgreSQLQuery);
const contratosRepository = new ContratosPostgreSQLRepository(postgreSQLQuery);
const parcelasContratoRepository = new ParcelasContratoPostgreSQLRepository(postgreSQLQuery);

const criaTabelasIniciaisService = new CriaTabelasIniciaisService(postgreSQLQuery, sqlCreateClientesTable, sqlCreateContratosTable, sqlCreateParcelasContratoTable);
const importaContratosService = new ImportaContratosService(clientesRespository, contratosRepository, parcelasContratoRepository);
const consultaMesComMaiorValorEmAbertoService = new ConsultaMesComMaiorValorEmAbertoService(postgreSQLQuery, sqlSelectMesWithMostValorEmAberto);

const importaDadosDoClienteUseCase = new ImportaDadosDoClienteUseCase(criaTabelasIniciaisService,importaContratosService, consultaMesComMaiorValorEmAbertoService);
const importaDadosDoClienteController = new ImportaDadosDoClienteController(importaDadosDoClienteUseCase);

export { importaDadosDoClienteController };
