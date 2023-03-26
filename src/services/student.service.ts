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

  //#endregion

}
