//#region Imports

import { v4 } from 'uuid';
import { Course } from './course';
import { Subscription } from './subscription';

//#endregion

export class Student {

  //#region Constructor

  constructor(
    public name: string,
    public subscription: Subscription,
  ) { }

  //#endregion

  //#region Public Properties

  public readonly id: string = v4();

  protected readonly courses: Course[] = [];
  protected coins: number = 0;
  protected isValidAccount: boolean = true;

  //#endregion

  //#region Public Methods

  public setCourse(course){
    this.courses[course];
  }

  
  public getCourses(index){
    return this.courses[index];
  }

  public isValid(): boolean {
    return this.isValidAccount;
  }

  public getCoins(): number {
    return this.coins;
  }

  public setValid(isValid: boolean): void {
    this.isValidAccount = isValid;
  }
  

  //#endregion

}
