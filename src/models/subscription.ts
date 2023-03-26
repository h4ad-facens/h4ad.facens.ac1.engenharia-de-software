//#region Imports

import { v4 } from 'uuid';

//#endregion

export class Subscription {

  //#region Constructor

  constructor(
    public readonly type: 'basic' | 'premium',
  ) { }

  //#endregion

  //#region Public Properties

  public readonly id: string = v4();

  //#endregion

}

export const BasicSubscription = new Subscription('basic');
export const PremiumSubscription = new Subscription('premium');
