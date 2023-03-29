//#region Imports

import { DataStore } from '../data/data.store';

//#endregion

export class LessonService {

  //#region Constructor

  constructor(
    protected readonly data: DataStore,
  ) { }

  //#endregion

  //#region Public Methods

  public getContentByStoreId(userId: string, lessonId: string): string {
    const student = this.data.students.find(s => s.id === userId);

    if (!student)
      throw new Error('O usuário não existe.');

    if (!student.isValid())
      throw new Error('O usuário não possui uma conta válida.');

    const lesson = this.data.lessons.find(s =>s.id === lessonId);

    if(!lesson)
      throw new Error('A aula não existe');
    if(!lesson.content == null)
      throw new Error('A aula não possui conteúdo');

    return lesson.getContent();
  }

  //#endregion

}
