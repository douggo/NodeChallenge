import { QueryResult, QueryResultRow } from "pg";
import { insert } from "./database-connection";

class PostgreSQLQuery {

  private insert;
  private static INSTANCE = new PostgreSQLQuery();

  private constructor() {
    this.insert = insert;
  }

  public static getInstance():PostgreSQLQuery {
    if (!PostgreSQLQuery.INSTANCE) {
      PostgreSQLQuery.INSTANCE = new PostgreSQLQuery;
    }
    return PostgreSQLQuery.INSTANCE;
  }

  async insertData(tableName: string, columns: string[], values: any[]): Promise<QueryResultRow> {
    return await this.insert(tableName,columns, values); 
  }

}

export { PostgreSQLQuery };