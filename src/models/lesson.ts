//#region Imports

import { v4 } from 'uuid';
import { Course } from './course';

//#endregion

export class Lesson {

  //#region Constructor

  constructor(
    public name: string,
    public content: string,
    public readonly course: Course,
  ) { }

  //#endregion

  //#region Public Properties

  public readonly id: string = v4();

  //#endregion

}
