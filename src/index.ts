import { Hono } from "hono";
import { CourseController } from "./controllers/course.controller";
const app = new Hono();

new CourseController(app);

export default app;
