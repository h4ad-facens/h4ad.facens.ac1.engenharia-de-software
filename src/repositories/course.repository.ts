import { Kysely } from "kysely";
import { Database } from "../@types/database";
import { Course } from "../entities/course";
import { ICourseRepository } from "./course.repository.interface";

export class CourseRepository implements ICourseRepository {
  constructor(protected readonly db: Kysely<Database>) {}

  public async listCourses(): Promise<Course[]> {
    return this.db
      .selectFrom("Courses")
      .selectAll()
      .execute()
      .then((results) =>
        results.map((row) => new Course(row.id, row.name, row.price))
      );
  }

  public async insertCourse(course: Course): Promise<void> {
    await this.db
      .insertInto("Courses")
      .values(course)
      .execute();
  }
}
