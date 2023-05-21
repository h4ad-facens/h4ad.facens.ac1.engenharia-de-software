import betterSqlite from "better-sqlite3";
import { Kysely, SqliteDialect } from "kysely";
import { Database } from "../@types/database";
import { CourseRepository } from "./course.repository";
import { Course } from "../entities/course";

describe("CourseRepository", () => {
  let database: Kysely<Database>;

  beforeEach(async () => {
    database = new Kysely({
      dialect: new SqliteDialect({
        database: betterSqlite(":memory:"),
      }),
    });

    await database.schema
      .createTable("Courses")
      .addColumn("id", "text", (c) => c.primaryKey())
      .addColumn("name", "text")
      .addColumn("price", "float4")
      .execute();
  });

  it("should select from Courses", async () => {
    const course = new Course("123", "Test", 3);
    await database.insertInto("Courses").values(course).execute();

    const repository = new CourseRepository(database);

    const result = await repository.listCourses();

    expect(result[0]).toEqual(course);
  });

  it("should insert course", async () => {
    const course = new Course("123", "Test", 3);

    const repository = new CourseRepository(database);
    await repository.insertCourse(course);

    const exist = await database
      .selectFrom("Courses")
      .selectAll()
      .where("id", "=", course.id)
      .executeTakeFirst();

    expect(exist).toEqual(course);
  });
});
