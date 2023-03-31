//#region Imports

import { DataStore } from '../data/data.store';

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

  public verifyTwelveCourses(userId: string){
    const student = this.data.students.find(s => s.id === userId);
    
    if (!student)
      throw new Error('O usuário não existe.');

    if (!student.isValid())
      throw new Error('O usuário não possui uma conta válida.');

   if(student.completedCourses.length == 12){
        student.completedCourses.map((i) => {
            const course = this.data.courses.find(c => c === i);
            if(!course){
              throw new Error('O usuário possui cursos inválidos.');
            }
        })
    student.setsubscription(premium);
   }

  }

  //#endregion
  
}
