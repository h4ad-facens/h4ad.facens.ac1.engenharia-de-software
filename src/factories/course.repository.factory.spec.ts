import { createMock } from "@golevelup/ts-jest";
import { Context } from "hono";
import { CourseRepository } from "../repositories/course.repository";
import { createCourseRepository } from "./course.repository.factory";

describe("CourseRepositoryFactory", () => {
  it("should return course service instance", () => {
    const context = createMock<Context>();
    const createDB = jest.fn(() => createMock<any>());

    expect(createCourseRepository(context, createDB)).toBeInstanceOf(CourseRepository);
  });
});
