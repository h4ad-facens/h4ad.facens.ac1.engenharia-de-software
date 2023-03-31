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

  //#endregion

  //#region Public Methods

  public isValid(): boolean {
    return this.isValidAccount;
  }

  public getCoins(): number {
    return this.coins;
  }

  public setValid(isValid: boolean): void {
    this.isValidAccount = isValid;
  }

  public getcoinBalance(): number {
    return this.coins;
  }
  
  //#endregion

  public addCoins(amount: number): void {
    this.coins += amount;
  }
  public upgradeSubscription(subscription: Subscription): void {
    this.subscription = subscription;

  // adiciona 3 coins quando o usuário se torna premium
  if (subscription === PremiumSubscription) {
    this.addCoins(3);
  }
}

}
