import { Context } from "hono";
import { CourseRepository } from "../repositories/course.repository";
import { ICourseRepository } from "../repositories/course.repository.interface";
import { createDatabase } from "./db.factory";

export function createCourseRepository(context: Context): ICourseRepository {
  return new CourseRepository(createDatabase(context.env.DB));
}
