import { Course } from "../entities/course";
import { CreateCourseDTO } from "../models/create-course.dto";

export interface ICourseService {
  listCourses(): Promise<Course[]>;
  createCourse(payload: CreateCourseDTO): Promise<Course>;
}
