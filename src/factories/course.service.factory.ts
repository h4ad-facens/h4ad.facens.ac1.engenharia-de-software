import { Context } from "hono";
import { CourseService } from "../services/course.service";
import { ICourseService } from "../services/course.service.interface";
import { ICreateCourseRepositoryFactory } from "./course.repository.factory";
import { ICreateDatabaseFactory } from "./db.factory";

export function createCourseService(
  context: Context,
  createCourseRepositoryFactory: ICreateCourseRepositoryFactory,
  createDatabaseFactory: ICreateDatabaseFactory
): ICourseService {
  const repository = createCourseRepositoryFactory(
    context,
    createDatabaseFactory
  );

  return new CourseService(repository);
}

export type ICreateCourseServiceFactory = typeof createCourseService;
