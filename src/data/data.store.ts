//#region Imports

import { Course } from '../models/course';
import { Lesson } from '../models/lesson';
import { Student } from '../models/student';
import { Subscription } from '../models/subscription';

//#endregion

export class DataStore {

  public readonly students: Student[] = [];
  public readonly courses: Course[] = [];
  public readonly lessons: Lesson[] = [];
  public readonly subscriptions: Subscription[] = [];

}
