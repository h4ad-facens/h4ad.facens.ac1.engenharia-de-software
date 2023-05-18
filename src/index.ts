import { Hono } from "hono";
import { CourseController } from "./controllers/course.controller";
import { createCourseService } from "./factories/course.service.factory";
import { createCourseRepository } from "./factories/course.repository.factory";
import { createDatabase } from "./factories/db.factory";
const app = new Hono();

new CourseController(
  app,
  createCourseService,
  createCourseRepository,
  createDatabase
);

export default app;
