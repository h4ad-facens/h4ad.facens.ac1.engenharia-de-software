import { Context, Hono } from "hono";
import { createCourseService } from "../factories/course.service.factory";
import { CourseDTO } from "../models/course.dto";
import { CreateCourseDTOValidator } from "../models/create-course.dto";

export class CourseController {
  constructor(app: Hono) {
    app.get("/courses", this.listCourses.bind(this));
    app.post("/courses", this.createCourse.bind(this));
  }

  public async listCourses(c: Context): Promise<Response> {
    const service = createCourseService(c);
    const courses = await service.listCourses();

    return c.json(courses, 200);
  }

  public async createCourse(c: Context): Promise<Response> {
    const service = createCourseService(c);

    const body = await c.req.json();
    const result = await CreateCourseDTOValidator.safeParseAsync(body);

    if (!result.success) {
      return c.json(result.error, 400);
    }

    const entity = await service.createCourse(result.data);
    const dto = new CourseDTO(entity);

    return c.json(dto, 201);
  }
}
