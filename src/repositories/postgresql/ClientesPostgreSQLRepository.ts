import { QueryResultRow } from "pg";
import { Cliente } from "../../models/Cliente";
import { IClientesRepository, ICriaClienteDTO } from "../IClientesRepository";
import { PostgreSQLQuery } from "./PostgreSQLQuery";


class ClientesPostgreSQLRepository implements IClientesRepository {

  private static TABLENAME:string = "clientes";
  private static COLUMNS: string[] = [ "nome" ];

  constructor(private database: PostgreSQLQuery) {}

  async create(valores: ICriaClienteDTO): Promise<void> {
    const result:QueryResultRow = await 
      this.database.insertData(
        ClientesPostgreSQLRepository.TABLENAME, 
        ClientesPostgreSQLRepository.COLUMNS, 
        [valores.nome]
      );
  };

  async getAll(): Promise<void> {
    //const result:QueryResultRow = await this.database.queryStatement("SELECT * FROM clientes", []);
  };
  
  findById(clienteId: string): Cliente {
    throw new Error("Method not implemented.");
  };

}

export { ClientesPostgreSQLRepository };