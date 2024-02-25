import { QueryResult, QueryResultRow } from "pg";
import { insert, select } from "./database-connection";

class PostgreSQLQuery {

  private insert;
  private select;
  private static INSTANCE = new PostgreSQLQuery();

  private constructor() {
    this.insert = insert;
    this.select = select;
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

}

export { PostgreSQLQuery };