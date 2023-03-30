//#region Imports

import { Student } from '../src/models/student';
import { BasicSubscription, PremiumSubscription } from '../models/subscription';
import { DataStore } from '../data/data.store';

//#endregion

export class LessonService {

  //#region Constructor

  constructor(
    protected readonly data: DataStore,
  ) { }

  //#endregion

  //#region Public Methods

  public getContentByStoreId(user: Student, lessonId: string): string {
    const student = this.data.students.find(s => s.id === user.id);

    if (!student)
      throw new Error('O usuário não existe.');

    if (!student.isValid())
      throw new Error('O usuário não possui uma conta válida.');

    const lesson = this.data.lessons.find(l =>l.id === lessonId);

    if(!lesson)
      throw new Error('A aula não existe');
    if(!lesson.content == null)
     throw new Error('A aula não possui conteúdo');

    const course = this.data.courses.find(c => c === lesson.course);

    if(!course)
      throw new Error('Esse curso não existe');
    
    if(course.subscription == PremiumSubscription && student.subscription == BasicSubscription)
      throw new Error('Essa aula é de privilégio premium');

    return lesson.getContent();
  }

  //#endregion

}
