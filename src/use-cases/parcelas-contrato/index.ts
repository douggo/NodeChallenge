import { ParcelasContratoPostgreSQLRepository } from "../../repositories/postgresql/ParcelasContratoPostgreSQLRepository";
import { PostgreSQLQuery } from "../../repositories/postgresql/database/PostgreSQLQuery";
import { GetParcelasContratoController } from "./GetParcelasContratoController";
import { GetParcelasContratoUseCase } from "./GetParcelasContratoUseCase";
import { GetParcelasContratoService } from "./services/GetParcelasContratoService";

const postgresSQLQuery = PostgreSQLQuery.getInstance();

const parcelasContratoRepository = new ParcelasContratoPostgreSQLRepository(postgresSQLQuery);

const getParcelasContratoService = new GetParcelasContratoService(parcelasContratoRepository);
const getParcelasContratoUseCase = new GetParcelasContratoUseCase(getParcelasContratoService);
const getParcelasContratoController = new GetParcelasContratoController(getParcelasContratoUseCase);

export { getParcelasContratoController };