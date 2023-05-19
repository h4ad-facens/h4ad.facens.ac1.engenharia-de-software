import { Course } from "../entities/course";

export class CourseDTO {

  constructor(course: Course) {
    this.id = course.id;
    this.name = course.name;
    this.price = course.price;
  }

  public id: string;
  public name: string;
  public price : number;
}
