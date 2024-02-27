import { PostgreSQLQuery } from "../../../repositories/postgresql/database/PostgreSQLQuery";

class ConsultaMesComMaiorValorEmAbertoService {

  constructor(private database: PostgreSQLQuery, private sql: string) {}

  async getMesAndValorEmAberto(): Promise<any> {
    const mesComMaiorValorEmAberto: any[] = await this.database.getDataFromSql(this.sql);
    if (!this.hasResposta(mesComMaiorValorEmAberto)) {
      return {};
    }
    return mesComMaiorValorEmAberto.shift();
  }

  private hasResposta(mesComMaiorValorEmAberto: any[]): boolean {
    return (mesComMaiorValorEmAberto != null || mesComMaiorValorEmAberto != undefined);
  }

}

export { ConsultaMesComMaiorValorEmAbertoService };