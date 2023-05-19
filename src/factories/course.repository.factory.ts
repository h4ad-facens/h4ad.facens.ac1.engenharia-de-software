import { Context } from "hono";
import { CourseRepository } from "../repositories/course.repository";
import { ICourseRepository } from "../repositories/course.repository.interface";
import { ICreateDatabaseFactory } from "./db.factory";

export function createCourseRepository(
  context: Context,
  createDatabaseFactory: ICreateDatabaseFactory
): ICourseRepository {
  return new CourseRepository(createDatabaseFactory(context.env.DB));
}

export type ICreateCourseRepositoryFactory = typeof createCourseRepository;
