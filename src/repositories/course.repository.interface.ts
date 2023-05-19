import { Course } from "../entities/course";

export interface ICourseRepository {
  listCourses(): Promise<Course[]>;
  insertCourse(course: Course): Promise<void>;
}
