/* eslint-disable import/no-unresolved */
/* eslint-disable node/no-missing-import */
//#region Imports

import { error } from 'console';
import { DataStore } from '../data/data.store';
import { Course } from '../models/course';
import { Student } from '../models/student';

//#endregion

export class CourseService {

  //#region Constructor

  constructor(
    protected readonly data: DataStore,

  ) { }

  //#endregion

  //#region Public Methods

  public buyCourse(studentId: string, courseId: string): Course {
    const student = this.data.students.find(s => s.id === studentId);
    const course = this.data.courses.find(c => c.id === courseId);

    if (!student)
      throw new Error('O usuário não existe.');

    if (!course)
      throw new Error('O curso não existe.');

    if (!student.isValid())
      throw new Error('Compra de curso efetuada');

    const coins = student.getCoins();

    if (course.price > coins)
      throw new Error('Você não possui moedas suficientes');

    student.removeCoins(course.price);
    student.addCourse(course);

    return course;
  }

  //#endregion

}
