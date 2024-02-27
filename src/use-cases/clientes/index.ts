import { ClientesPostgreSQLRepository } from "../../repositories/postgresql/ClientesPostgreSQLRepository";
import { PostgreSQLQuery } from "../../repositories/postgresql/database/PostgreSQLQuery";
import { GetClientesController } from "./GetClientesController";
import { GetClientesUseCase } from "./GetClientesUseCase";
import { GetClientesService } from "./services/GetClientesService";

const postgreSQLQuery = PostgreSQLQuery.getInstance();

const clientesRepository = new ClientesPostgreSQLRepository(postgreSQLQuery);

const getClientesService = new GetClientesService(clientesRepository);
const getClientesUseCase = new GetClientesUseCase(getClientesService);
const getClientesController = new GetClientesController(getClientesUseCase);

export { getClientesController };



