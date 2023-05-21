import { createMock } from "@golevelup/ts-jest";
import { Context } from "hono";
import { Kysely } from "kysely";
import { createDatabase } from "./db.factory";

describe("DBFactory", () => {
  it("should return kysely instance", () => {
    const context = createMock<Context>();

    expect(createDatabase(context)).toBeInstanceOf(Kysely);
  });
});
