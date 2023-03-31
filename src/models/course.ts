//#region Imports

import { v4 } from 'uuid';
import { Subscription } from './subscription';

//#endregion

export class Course {

  //#region Constructor

  constructor(
    public name: string,
    public subscription: Subscription | null,
    public price : number = 0,
  ) { }

  //#endregion

  //#region Public Properties

  public readonly id: string = v4();

  //#endregion

}
