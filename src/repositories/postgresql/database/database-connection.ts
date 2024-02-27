import { Pool, QueryConfig, QueryResult, QueryResultRow } from 'pg'

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'crediario',
  password: 'postgres',
  port: 5432,
});

const createInsertQueryConfig = (tableName: string,columns: string[], values: any[]): QueryConfig => {
  return {
    text: `INSERT INTO ${tableName} (${columns.join(', ')}) VALUES (${values.map((_, index) => '$' + (index + 1)).join(', ')})`,
    values
  }
}

const insertMultipleQueriesWithTransaction = async (queries: QueryConfig[]) => {
  const client = await pool.connect();

  try {
    await client.query('BEGIN');
    for (const query of queries) {
      await client.query(query);
    }
    await client.query('COMMIT');
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }

};

const insert = async (tableName: string,columns: string[], values: any[]): Promise<QueryResult<QueryResultRow>> => {
  const client = await pool.connect();
  try {
    const result = await client.query(createInsertQueryConfig(tableName, columns, values));
    return result;
  } finally {
    client.release();
  }
};

const select = async (tableName: string, columns: string[], whereClause: string): Promise<any[]> => {
  const queryText = `SELECT ${columns.join(', ')} FROM ${tableName} WHERE TRUE ${whereClause}`;
  const client = await pool.connect();
  try {
    const result = await client.query(queryText, []);
    return result.rows;
  } finally {
    client.release();
  }
};

const complexSelect = async (sql: string) => {
  const client = await pool.connect();
  try {
    const result = await client.query(sql, []);
    return result.rows;
  } finally {
    client.release();
  }
}

export { createInsertQueryConfig, insertMultipleQueriesWithTransaction, insert, select, complexSelect };