import { ContratosPostgreSQLRepository } from "../../repositories/postgresql/ContratosPostgreSQLRepository";
import { PostgreSQLQuery } from "../../repositories/postgresql/database/PostgreSQLQuery";
import { GetContratosController } from "./GetContratosController";
import { GetContratosUseCase } from "./GetContratosUseCase";
import { GetContratosService } from "./services/GetContratosService";

const postgreSQLQuery = PostgreSQLQuery.getInstance();

const contratosRepository = new ContratosPostgreSQLRepository(postgreSQLQuery);

const getContratosService = new GetContratosService(contratosRepository);
const getContratosUseCase = new GetContratosUseCase(getContratosService);
const getContratosController = new GetContratosController(getContratosUseCase);

export { getContratosController };