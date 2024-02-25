import { Pool, QueryResult, QueryResultRow } from 'pg'

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'crediario',
  password: 'postgres',
  port: 5432,
});

const insert = async (tableName: string,columns: string[], values: any[]): Promise<QueryResult<QueryResultRow>> => {
  const queryText = `INSERT INTO ${tableName} (${columns.join(', ')}) VALUES (${values.map((_, index) => '$' + (index + 1)).join(', ')})`;
  const client = await pool.connect();
  try {
    const result = await client.query(queryText, values);
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

export { insert, select };