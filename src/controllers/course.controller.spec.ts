import { createMock } from "@golevelup/ts-jest";
import { Context, Hono } from "hono";
import { ICreateCourseRepositoryFactory } from "../factories/course.repository.factory";
import { ICreateCourseServiceFactory } from "../factories/course.service.factory";
import { ICreateDatabaseFactory } from "../factories/db.factory";
import { ICourseRepository } from "../repositories/course.repository.interface";
import { ICourseService } from "../services/course.service.interface";
import { CourseController } from "./course.controller";

describe("CourseController", () => {
  let hono: Hono;
  let fakeService: ICourseService;
  let fakeRepository: ICourseRepository;
  let fakeDatabase: any;

  let fakeCreateService: ICreateCourseServiceFactory;
  let fakeCreateRepository: ICreateCourseRepositoryFactory;
  let fakeCreateDatabase: ICreateDatabaseFactory;

  let controller: CourseController;

  beforeEach(() => {
    hono = createMock<Hono>();

    fakeService = createMock<ICourseService>();
    fakeRepository = createMock<ICourseRepository>();
    fakeDatabase = createMock<any>();

    fakeCreateService = jest.fn(() => fakeService);
    fakeCreateRepository = jest.fn(() => fakeRepository);
    fakeCreateDatabase = jest.fn(() => fakeDatabase);

    controller = new CourseController(
      hono,
      fakeCreateService,
      fakeCreateRepository,
      fakeCreateDatabase
    );
  });

  it("should register the routes", () => {
    expect(hono.get).toBeCalledWith("/courses", expect.any(Function));
    expect(hono.post).toBeCalledWith("/courses", expect.any(Function));
  });

  it("should call service when list courses", async () => {
    const context = createMock<Context>();

    const response = await controller.listCourses(context);

    expect(fakeCreateService).toHaveBeenCalledWith(
      context,
      fakeCreateRepository,
      fakeCreateDatabase
    );
    expect(fakeService.listCourses).toHaveBeenCalled();
    expect(response).toHaveProperty("status", 201);
  });

  it("should call service when create course", async () => {
    const context = createMock<Context>({
      req: {
        json: async () => ({ name: "Ok", price: 3 }),
      },
    });

    await controller.createCourse(context);

    expect(context.json).toHaveBeenCalledWith(
      expect.objectContaining({
        id: expect.anything(),
        name: expect.anything(),
        price: expect.anything(),
      }),
      201
    );
    expect(fakeCreateService).toHaveBeenCalledWith(
      context,
      fakeCreateRepository,
      fakeCreateDatabase
    );
    expect(fakeService.createCourse).toHaveBeenCalledWith(
      expect.objectContaining({
        name: "Ok",
        price: 3,
      })
    );
  });

  it("should return error when course property is invalid", async () => {
    const context = createMock<Context>({
      req: {
        json: async () => ({ name: 132, price: "3" }),
      },
    });

    const response = await controller.createCourse(context);

    expect(response).toHaveProperty("status", 400);
    expect(context.json).toHaveBeenCalledWith(
      expect.anything(),
      400
    );
  });
});
