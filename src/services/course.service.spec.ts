import { createMock } from "@golevelup/ts-jest";
import { Course } from "../entities/course";
import { CourseRepository } from "../repositories/course.repository";
import { CourseService } from "./course.service";

describe("CourseService", () => {
  it("should list courses", async () => {
    const course = new Course("1", "2", 3.0);
    const repository = createMock<CourseRepository>({
      listCourses: async () => [course],
    });

    const service = new CourseService(repository);
    const result = await service.listCourses();

    expect(repository.listCourses).toHaveBeenCalled();
    expect(result).toHaveLength(1);
    expect(result[0]).toBe(course);
  });

  it("create course", async () => {
    const repository = createMock<CourseRepository>({
      insertCourse: async (c) => void 0,
    });

    const service = new CourseService(repository);
    const result = await service.createCourse({
      name: "Potato",
      price: 3.0,
    });

    expect(repository.insertCourse).toHaveBeenCalled();
    expect(result).toHaveProperty("id");
    expect(result).toHaveProperty("name", "Potato");
    expect(result).toHaveProperty("price", 3.0);
  });
});
