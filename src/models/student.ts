//#region Imports

import { v4 } from 'uuid';
import { Course } from './course';
import { PremiumSubscription, Subscription } from './subscription';

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
    

    /**
     * @author Enrico Acquaviva
     */
    public setsubscription(subscricao: Subscription){
      this.subscription = subscricao;
    }

    /**
     * @author Enrico Acquaviva
     */
    public setcompletedCourse(curso:Course){
      this.completedCourses.push(curso);
    }
    /**
     * @author Enrico Acquaviva
     */
    public getcompletedCourse(){
      return this.completedCourses;
    }

  /**
     * @author Enrico Acquaviva
     */  
  public setCourse(course:Course){
    if(this.subscription == course.subscription || this.subscription == PremiumSubscription){
        this.courses.push(course);
    }
  }

  /**
     * @author Enrico Acquaviva
     */
  public getCourses(){
    return this.courses;
  }

  public isValid(): boolean {
    return this.isValidAccount;
  }

  public getCoins(): number {
    return this.coins;
  }
  
  public addCoins(value: number): number{
    this.coins = this.coins + value;   
    return this.coins;
  }
  
  public removeCoins(value: number): number{
    this.coins = this.coins - value;   
    return this.coins;
  }


  public setValid(isValid: boolean): void {
    this.isValidAccount = isValid;
  }
  

  public addCourse(course: Course): void {
    this.courses.push(course);
  }

  public getCourses(): Course[] {
    return this.courses;
  }

  //#endregion

}
