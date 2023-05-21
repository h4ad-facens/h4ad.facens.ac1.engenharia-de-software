import { Context } from "hono";
import { Kysely } from "kysely";
import { D1Dialect } from "kysely-d1";
import { Database } from "../@types/database";

export function createDatabase(context: Context): Kysely<Database> {
  return new Kysely<Database>({
    dialect: new D1Dialect({ database: context.env.DB }),
  });
}

export type ICreateDatabaseFactory = typeof createDatabase;
