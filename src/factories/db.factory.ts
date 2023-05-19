import { Kysely } from "kysely";
import { D1Dialect } from "kysely-d1";
import { Database } from "../@types/database";

export function createDatabase(database: D1Database): Kysely<Database> {
  return new Kysely<Database>({
    dialect: new D1Dialect({ database }),
  });
}

export type ICreateDatabaseFactory = typeof createDatabase;
