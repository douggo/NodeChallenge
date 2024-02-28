import { QueryConfig } from "pg";
import { Contrato } from "../../models/Contrato";
import { IContratosRepository, ICriaContratosDTO } from "../IContratosRepository";
import { PostgreSQLQuery } from "./database/PostgreSQLQuery";
import { sqlGetValorEndividamentoContrato } from "../SQL/sqlGetValorEndividamentoContrato";

interface ContratoDB {
  id: string,
  cliente_id: number;
  data: string,
  valor_total: number,
  valor_entrada: number,
  valor_financiado: number
}

class ContratosPostgreSQLRepository implements IContratosRepository {

  private static TABLENAME:string = "contratos";
  private static COLUMNS: string[] = [ "id", "cliente_id", "data", "valor_total", "valor_entrada", "valor_financiado" ];

  constructor(private database: PostgreSQLQuery) {}
  
  async getValorEndividamento(contratoId: string): Promise<any> {
    const valorEndividamento = await this.database.getDataFromSql(sqlGetValorEndividamentoContrato.concat(`WHERE c.id = '${contratoId}';`));
    return valorEndividamento.shift();
  }
  
  createInsertQueryConfig(clienteId: number, contrato: ICriaContratosDTO): QueryConfig {
    return this.database.createInsertCommand(
        ContratosPostgreSQLRepository.TABLENAME,
        ContratosPostgreSQLRepository.COLUMNS,
        [
          contrato.contrato,
          clienteId,
          contrato.data,
          contrato.valortotal,
          contrato.valorentrada,
          contrato.valorfinanciado
        ]
    );
  }

  async complexCreate(queries: QueryConfig[]): Promise<void> {
    await this.database.insertMultipleDataWithTransaction(queries);
  }

  create(clienteId: number, contrato: ICriaContratosDTO): void {
    this.database.insertData(
      ContratosPostgreSQLRepository.TABLENAME, 
      ContratosPostgreSQLRepository.COLUMNS, 
      [
        contrato.contrato,
        clienteId,
        contrato.data,
        contrato.valortotal,
        contrato.valorentrada,
        contrato.valorfinanciado
      ]
    );
  }

  async getAll(clienteId: number): Promise<Contrato[]> {
    const result: any[] = await this.database.selectData(
      ContratosPostgreSQLRepository.TABLENAME,
      ContratosPostgreSQLRepository.COLUMNS,
      `AND cliente_id = ${clienteId}`,
      ''
    );
    const contratos: Contrato[]|undefined = this.createContratosFromResultQuery(result);
    if (contratos == undefined) {
      throw new Error('Erro ao realizar a query para consultar os contratos do cliente!');
    }
    return contratos;
  }

  async getAllAsPageable(clienteId: number, pagina: number, quantidadePorPagina: number): Promise<Contrato[]> {
    const result: any[] = await this.database.selectDataAsPageable(
      ContratosPostgreSQLRepository.TABLENAME,
      ContratosPostgreSQLRepository.COLUMNS,
      `AND cliente_id = ${clienteId}`,
      `"data"`,
      pagina,
      quantidadePorPagina
    );
    const contratos: Contrato[]|undefined = this.createContratosFromResultQuery(result);
    if (contratos == undefined) {
      throw new Error('Erro ao realizar a query para consultar os contratos do cliente!');
    }
    return contratos;
  }

  async findById(contratoId: string): Promise<Contrato> {
    const result: any[] = await this.database.selectData(
      ContratosPostgreSQLRepository.TABLENAME,
      ContratosPostgreSQLRepository.COLUMNS,
      `AND id = '${contratoId}'`,
      ''
    );
    const contrato: Contrato|undefined = this.createContratosFromResultQuery(result)?.shift();
    if (contrato == undefined) {
      throw new Error('Contrato não encontrado!');
    }
    return contrato;
  }

  private createContratosFromResultQuery(result: any[]): Contrato[]|undefined {
    return result.map((contratoDados: ContratoDB, indice) => {
      return new Contrato(
        contratoDados.id,
        contratoDados.cliente_id,
        contratoDados.data,
        contratoDados.valor_total,
        contratoDados.valor_entrada,
        contratoDados.valor_financiado
      );
    });
  }

}

export { ContratosPostgreSQLRepository };