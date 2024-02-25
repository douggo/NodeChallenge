import { Contrato } from "../../models/Contrato";
import { IContratosRepository, ICriaContratosDTO } from "../IContratosRepository";
import { PostgreSQLQuery } from "./database/PostgreSQLQuery";

class ContratosPostgreSQLRepository implements IContratosRepository {

  private static TABLENAME:string = "contratos";
  private static COLUMNS: string[] = [ "id", "data", "valor_total", "valor_entrada", "valor_financiado" ];

  constructor(private database: PostgreSQLQuery) {}
  
  create(contratos: ICriaContratosDTO): void {
    throw new Error("Method not implemented.");
  }
  getAll(clienteId: string): Contrato[] {
    throw new Error("Method not implemented.");
  }
  findById(contratoId: string): Contrato {
    throw new Error("Method not implemented.");
  }

}

export { ContratosPostgreSQLRepository };