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

  public completedCourses: Course[] = [];

  //#endregion

  //#region Public Methods

    public setsubscription(subscricao: Subscription){
      this.subscription = subscricao;
    }

    public setcompletedCourse(curso:Course){
      this.completedCourses.push(curso);
    }
    public getcompletedCourse(){
      return this.completedCourses;
    }

  public setCourse(course:Course){
    this.courses.push(course);
  }

  
  public getCourses(){
    return this.courses;
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
