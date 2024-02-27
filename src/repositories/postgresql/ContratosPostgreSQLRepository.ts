import { QueryConfig } from "pg";
import { Contrato } from "../../models/Contrato";
import { IContratosRepository, ICriaContratosDTO } from "../IContratosRepository";
import { PostgreSQLQuery } from "./database/PostgreSQLQuery";

interface ContratoDB {
  id: string,
  cliente_id: number;
  data: string,
  valorTotal: number,
  valorEntrada: number,
  valorFinanciado: number
}

class ContratosPostgreSQLRepository implements IContratosRepository {

  private static TABLENAME:string = "contratos";
  private static COLUMNS: string[] = [ "id", "cliente_id", "data", "valor_total", "valor_entrada", "valor_financiado" ];

  constructor(private database: PostgreSQLQuery) {}
  
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
      `AND cliente_id = ${clienteId}`
    );
    const contratos: Contrato[] = result.map((contratoDados: ContratoDB, indice) => {
      return new Contrato(
        contratoDados.id,
        contratoDados.cliente_id,
        contratoDados.data,
        contratoDados.valorTotal,
        contratoDados.valorEntrada,
        contratoDados.valorFinanciado
      );
    });
    return contratos;
  }

  async findById(contratoId: string): Promise<Contrato> {
    const result: any[] = await this.database.selectData(
      ContratosPostgreSQLRepository.TABLENAME,
      ContratosPostgreSQLRepository.COLUMNS,
      `AND id = ${contratoId}`
    );
    const contrato: Contrato|undefined = result.map((contratoDados: ContratoDB, indice) => {
      return new Contrato(
        contratoDados.id,
        contratoDados.cliente_id,
        contratoDados.data,
        contratoDados.valorTotal,
        contratoDados.valorEntrada,
        contratoDados.valorFinanciado
      );
    }).shift();
    if (contrato == undefined) {
      throw new Error('Contrato não encontrado!');
    }
    return contrato;
  }

}

export { ContratosPostgreSQLRepository };