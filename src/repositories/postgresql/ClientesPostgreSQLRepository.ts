import { QueryConfig, QueryResultRow } from "pg";
import { Cliente } from "../../models/Cliente";
import { IClientesRepository, ICriaClienteDTO } from "../IClientesRepository";
import { PostgreSQLQuery } from "./database/PostgreSQLQuery";
import { error } from "console";

interface ClienteDB {
  id: string,
  nome: string
};

class ClientesPostgreSQLRepository implements IClientesRepository {

  private static TABLENAME:string = "clientes";
  private static COLUMNS: string[] = [ "id", "nome" ];

  constructor(private database: PostgreSQLQuery) {}

  createInsertQueryConfig({ nome }: ICriaClienteDTO): QueryConfig<any[]> {
    return this.database.createInsertCommand(
      ClientesPostgreSQLRepository.TABLENAME,
      ClientesPostgreSQLRepository.COLUMNS.filter((value: string, indice: number) => value != "id"),
      [ nome ]
    );
  }

  async create(valores: ICriaClienteDTO): Promise<void> {
    const result: QueryResultRow = await 
      this.database.insertData(
        ClientesPostgreSQLRepository.TABLENAME, 
        ClientesPostgreSQLRepository.COLUMNS.filter((value: string, indice: number) => value != "id"), 
        [valores.nome]
      );
  };

  async getAll(): Promise<Cliente[]> {
    const result: any[] = await this.database.selectData(
      ClientesPostgreSQLRepository.TABLENAME,
      ClientesPostgreSQLRepository.COLUMNS,
      ''
    );
    const clientes: Cliente[] = result.map((clienteDados: ClienteDB, indice) => {
      return new Cliente(clienteDados.id, clienteDados.nome);
    });
    return clientes;
  };
  
  async findById(clienteId: number): Promise<Cliente> {
    const result: any[] = await this.database.selectData(
      ClientesPostgreSQLRepository.TABLENAME,
      ClientesPostgreSQLRepository.COLUMNS,
      `AND id = ${clienteId}`
    );
    const cliente: Cliente|undefined = result.map((clienteDados: ClienteDB, indice) => {
      return new Cliente(clienteDados.id, clienteDados.nome);
    }).shift();
    if (cliente == undefined) {
      throw error('Usuário não existe!');
    }
    return cliente;
  };

  async getMaxIdFromTable(): Promise<number> {
    const result: any[] = await this.database.selectData(
      ClientesPostgreSQLRepository.TABLENAME,
      ['MAX(id)'],
      ''
    );
    const maxId: number|undefined = result.shift();
    if (maxId === undefined) {
      return 1;
    }
    return maxId;
  }

}

export { ClientesPostgreSQLRepository };