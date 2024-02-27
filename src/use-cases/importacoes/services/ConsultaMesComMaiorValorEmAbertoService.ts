import { PostgreSQLQuery } from "../../../repositories/postgresql/database/PostgreSQLQuery";

class ConsultaMesComMaiorValorEmAbertoService {

  constructor(private database: PostgreSQLQuery, private sql: string) {}

  async getMesAndValorEmAberto(): Promise<any> {
    const mesComMaiorValorEmAberto: any = await this.database.getDataFromSql(this.sql);
    console.log("realizou a query com o sql");
    return mesComMaiorValorEmAberto;
  }

}

export { ConsultaMesComMaiorValorEmAbertoService };