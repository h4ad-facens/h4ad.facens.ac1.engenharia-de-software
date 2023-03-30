/* eslint-disable node/no-missing-import */
import { DataStore } from "../src/data/data.store";
import { Course } from "../src/models/course";
import { Lesson } from "../src/models/lesson";
import { Student } from "../src/models/student";
import { BasicSubscription, PremiumSubscription } from '../src/models/subscription';
import { LessonService } from "../src/services/lesson.service";

describe('LessonService', () => {
  describe('ao visualizar uma aula', () => {
    it('deve ser possível visualizar o conteúdo', () => {
    /**
     * @author Thiago Gomes
     */

      const student = new Student('José Pilintra', BasicSubscription);
      const dataStore = new DataStore();
      dataStore.students.push(student);

      const course = new Course('Cursao do violao', student.subscription);
      dataStore.courses.push(course);

      const lesson = new Lesson('Super Aula Daorona', 'Conteudo muito massa', course);
      dataStore.lessons.push(lesson);

      const lessonService = new LessonService(dataStore);

      expect(lessonService.getContentByStoreId(student, lesson.id)).toEqual(lesson.content);
    });

    it('deve lançar um erro caso o usuário não possua uma conta', () => {

          /**
     * @author Thiago Gomes
     */

      const dataStore = new DataStore();

      const student = new Student('José Pilintra', BasicSubscription);


      const course = new Course('Curso de malandragem', BasicSubscription);
      dataStore.courses.push(course);

      const lesson = new Lesson('Super Aula Daorona', 'Conteudo muito massa', course);
      dataStore.lessons.push(lesson);

      const lessonService = new LessonService(dataStore);


      expect(() => lessonService.getContentByStoreId(student, lesson.id)).toThrowError('O usuário não existe.');
    });

    it('deve lançar um erro caso o usuário não possua o curso', () => {

          /**
     * @author Thiago Gomes
     */


      const student = new Student('José Pilintra', BasicSubscription);
      const dataStore = new DataStore();
      dataStore.students.push(student);

      const course = new Course('Cursao de samba', PremiumSubscription);
      dataStore.courses.push(course);

      const lesson = new Lesson('Super Aula Daorona', 'Conteudo muito massa', course);
      dataStore.lessons.push(lesson);

      const lessonService = new LessonService(dataStore);

      expect(() => lessonService.getContentByStoreId(student, lesson.id)).toThrowError('Essa aula é de privilégio premium');
    });
  });
});
