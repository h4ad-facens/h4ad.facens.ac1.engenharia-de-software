import { Context } from "hono";
import { ICourseService } from "../services/course.service.interface";
import { createCourseRepository } from "./course.repository.factory";
import { CourseService } from "../services/course.service";

export function createCourseService(context: Context): ICourseService {
  const repository = createCourseRepository(context);

  return new CourseService(repository);
}
