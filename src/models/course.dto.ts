import { Course } from "../entities/course";

export class CourseDTO {

  constructor(course: Course) {
    this.name = course.name;
    this.price = course.price;
  }

  public name: string;
  public price : number;
}
