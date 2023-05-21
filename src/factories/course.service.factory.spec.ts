import { createMock } from "@golevelup/ts-jest";
import { Context } from "hono";
import { Kysely } from "kysely";
import { ICourseRepository } from "../repositories/course.repository.interface";
import { CourseService } from "../services/course.service";
import { createCourseService } from "./course.service.factory";
import { Database } from "../@types/database";

describe("CourseServiceFactory", () => {
  it("should return course service instance", () => {
    const context = createMock<Context>();
    const createRepository = jest.fn(() => createMock<ICourseRepository>());
    const createDB = jest.fn(() => createMock<any>());

    expect(
      createCourseService(context, createRepository, createDB)
    ).toBeInstanceOf(CourseService);
  });
});
