//#region Imports

import { DataStore } from '../data/data.store';
import { Course } from '../models/course';
import { NoSubscription, PremiumSubscription, Subscription } from '../models/subscription';

//#endregion

export class StudentService {

  //#region Constructor

  constructor(
    protected readonly data: DataStore,
  ) { }

  //#endregion

  //#region Public Methods

  public getCoinsByUserId(userId: string): number {
    const student = this.data.students.find(s => s.id === userId);

    if (!student)
      throw new Error('O usuário não existe.');

    if (!student.isValid())
      throw new Error('O usuário não possui uma conta válida.');

    return student.getCoins();
  }


  /**
   * @author Enrico Acquaviva
   */
  public verifyTwelveCourses(userId: string) {
    const student = this.data.students.find(s => s.id === userId);

    if (!student)
      throw new Error('O usuário não existe.');

    if (!student.isValid())
      throw new Error('O usuário não possui uma conta válida.');

    if (student.completedCourses.length == 12) {
      student.completedCourses.map((i) => {
        const course = this.data.courses.find(c => c === i);
        if (!course) {
          throw new Error('O usuário possui cursos inválidos.');
        }
      });
      student.setsubscription(PremiumSubscription);
      return true;
    }
    return false;
  }

  public getCoursesByUserId(userId: string): Course[] {
    const student = this.data.students.find(s => s.id == userId);

    if (!student)
      throw new Error('O usuário não existe.');

    if (!student.isValid())
      throw new Error('O usuário não possui uma conta válida.');

    return student.getCourses();
  }

  public getUserSubscription(userId: string): Subscription {
    const student = this.data.students.find(s => s.id === userId);

    if (!student)
      throw new Error('O usuário não existe.');

    if (student.getSubscription() == NoSubscription)
      throw new Error('não possui uma assinatura.');

    if (!student.isValid())
      throw new Error('O usuário não possui uma conta válida.');

    return student.getSubscription();
  }

  //#endregion

}
