//#region Imports

import { uid } from "uid";
import { Course } from "../entities/course";
import { CreateCourseDTO } from "../models/create-course.dto";
import { ICourseRepository } from "../repositories/course.repository.interface";
import { ICourseService } from "./course.service.interface";

//#endregion

export class CourseService implements ICourseService {
  //#region Constructor

  constructor(protected readonly repository: ICourseRepository) {}

  //#endregion

  //#region Public Methods

  public async createCourse(dto: CreateCourseDTO): Promise<Course> {
    const course = new Course(uid(), dto.name, dto.price);

    await this.repository.insertCourse(course);

    return course;
  }

  public async listCourses(): Promise<Course[]> {
    return this.repository.listCourses();
  }

  //#endregion
}
