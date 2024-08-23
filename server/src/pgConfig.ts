import pg from "pg";

export const pgConfig = {
  user: process.env.PGUSER || "admin",
  host: process.env.PGHOST,
  database: process.env.PGDATABASE || "event-x",
  password: process.env.PGPASSWORD || "root",
  port: 5432,
};

export const pgClient = new pg.Client(pgConfig);
export const pool = new pg.Pool(pgConfig);

export async function query(text: string, params?: unknown[]) {
  return pool.query(text, params);
}
