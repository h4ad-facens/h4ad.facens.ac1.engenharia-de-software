import { DataStore } from "../src/data/data.store";
import { Course } from "../src/models/course";
import { Lesson } from "../src/models/lesson";
import { Student } from "../src/models/student";
import { BasicSubscription } from '../src/models/subscription';
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

      lessonService.getContentByStoreId(student.id, lesson.id);
      expect(lessonService.getContentByStoreId(student.id, lesson.id)).toEqual(lesson.content);
    });

    it('deve lançar um erro caso o usuário não possua uma conta', () => {
      expect(true).toEqual('not implemented');
    });

    it('deve lançar um erro caso o usuário não possua o curso', () => {
      expect(true).toEqual('not implemented');
    });
  });
});