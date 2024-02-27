import { QueryConfig, QueryResult, QueryResultRow } from "pg";
import { complexSelect, createInsertQueryConfig, insert, insertMultipleQueriesWithTransaction, select, selectAsPageable } from "./database-connection";

class PostgreSQLQuery {

  private insert;
  private select;
  private selectAsPageable;
  private insertMultipleQueriesWithTransaction;
  private createInsertQueryConfig;
  private complexSelect;
  private static INSTANCE = new PostgreSQLQuery();

  private constructor() {
    this.insert = insert;
    this.select = select;
    this.selectAsPageable = selectAsPageable;
    this.insertMultipleQueriesWithTransaction = insertMultipleQueriesWithTransaction;
    this.createInsertQueryConfig = createInsertQueryConfig;
    this.complexSelect = complexSelect;
  }

  public static getInstance():PostgreSQLQuery {
    if (!PostgreSQLQuery.INSTANCE) {
      PostgreSQLQuery.INSTANCE = new PostgreSQLQuery;
    }
    return PostgreSQLQuery.INSTANCE;
  }

  async insertData(tableName: string, columns: string[], values: any[]): Promise<QueryResultRow> {
    return await this.insert(tableName, columns, values); 
  }

  async selectData(tableName: string, columns: string[], whereClause: string): Promise<any[]> {
    return await this.select(tableName, columns, whereClause);
  }
  
  async selectDataAsPageable(tableName: string, columns: string[], whereClause: string, pagina: number, quantidadePorPagina: number): Promise<any[]> {
    return await this.selectAsPageable(tableName, columns, whereClause, pagina, quantidadePorPagina);
  }

  createInsertCommand(tableName: string, columns: string[], values: any[]): QueryConfig {
    return this.createInsertQueryConfig(tableName, columns, values);
  }

  async insertMultipleDataWithTransaction(queries: QueryConfig[]): Promise<void> {
    await this.insertMultipleQueriesWithTransaction(queries);
  }

  async getDataFromSql(sql: string): Promise<any[]> {
    return await this.complexSelect(sql);
  }

}

export { PostgreSQLQuery };