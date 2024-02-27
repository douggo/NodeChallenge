import { QueryConfig } from "pg";
import { PostgreSQLQuery } from "../../../repositories/postgresql/database/PostgreSQLQuery";

class CriaTabelasIniciaisService {

  constructor(private database: PostgreSQLQuery, 
              private tableClientesSql: string, 
              private tableContratosSql: string, 
              private tableParcelasContratoSql: string) {}
  
  async criaTabelas(): Promise<void> {
    const queries: QueryConfig[] = [];
    queries.push(
      { 
        text: this.tableClientesSql,
        values: []
      },
      {
        text: this.tableContratosSql,
        values: []
      }, 
      {
        text: this.tableParcelasContratoSql,
        values: []
      });
    await this.database.insertMultipleDataWithTransaction(queries);
  }

}

export { CriaTabelasIniciaisService };