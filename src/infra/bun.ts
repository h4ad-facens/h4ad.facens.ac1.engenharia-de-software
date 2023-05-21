import { Hono } from "hono";
import { Pool } from "pg";
import { CourseController } from "../controllers/course.controller";
import { createCourseRepository } from "../factories/course.repository.factory";
import { createCourseService } from "../factories/course.service.factory";
import { createPostgresDatabase } from "../factories/postgres-db.factory";
const app = new Hono();

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

new CourseController(
  app,
  createCourseService,
  createCourseRepository,
  createPostgresDatabase(pool)
);

const port = parseInt(process.env.PORT!) || 3000;
console.log(`Running at http://localhost:${port}`);

const exportedApp: any = {
  port,
  fetch: app.fetch,
};

export default exportedApp;
