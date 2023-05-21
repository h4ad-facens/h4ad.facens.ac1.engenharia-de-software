import { createMock } from "@golevelup/ts-jest";
import { Context } from "hono";
import { Kysely } from "kysely";
import { Pool } from "pg";
import { createPostgresDatabase } from "./postgres-db.factory";

describe("PostgresDBFactory", () => {
  it("should return kysely instance", () => {
    const pool = createMock<Pool>();
    const context = createMock<Context>();

    expect(createPostgresDatabase(pool)(context)).toBeInstanceOf(Kysely);
  });
});
