import { Context } from "hono";
import { Kysely, PostgresDialect } from "kysely";
import { Pool } from 'pg';
import { Database } from "../@types/database";

export const createPostgresDatabase = (pool: Pool) => (context: Context) => {
  return new Kysely<Database>({
    dialect: new PostgresDialect({
      pool,
    }),
  });
}
