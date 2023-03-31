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
      const dataStore = new DataStore();
      const student = new Student('José Pilintra', BasicSubscription);
      const course = new Course('Curso de malandragem', BasicSubscription);
      dataStore.courses.push(course);
      const lesson = new Lesson('Super Aula Daorona', 'Conteudo muito massa', course);
      dataStore.lessons.push(lesson);
      const lessonService = new LessonService(dataStore);

      expect(() => lessonService.getContentByStoreId(student, lesson.id)).toThrowError('O usuário não existe.');
    });

    it('deve lançar um erro caso o usuário não possua uma subscrição válida para o conteúdo', () => {
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

/**
     * @author Lucas da Costa
     */
describe('LessonService', () => {
  it('deve adicionar 3 moedas ao saldo do usuário quando ele se tornar um usuário premium', () => {
    const student = new Student('Lucas', BasicSubscription);
    const dataStore = new DataStore();
    dataStore.students.push(student);
    const lessonService = new LessonService(dataStore);

    // Verifica o saldo do aluno antes de se tornar premium
    expect(student.getCoins()).toEqual(0);

    // Faz upgrade da assinatura do aluno para premium
    student.upgradeSubscription(PremiumSubscription);

    // Verifica que foram adicionadas 3 moedas ao saldo do aluno
    expect(student.getCoins()).toEqual(3);
  });

  it('deve lançar um erro quando o usuário não existir', () => {
    const nonExistentStudent = new Student('João', BasicSubscription);
    const dataStore = new DataStore();
    const lessonService = new LessonService(dataStore);

    expect(() => nonExistentStudent.addCoins(3)).toThrowError('O usuário não existe.');
  });
});
  
  // codigo para falhar o teste 1, pq o teste espera 3, mas estou adicionando apenas 2 
  describe('LessonService', () => {
    it('deve adicionar 3 moedas ao saldo do usuário quando ele se tornar um usuário premium', () => {
      const student = new Student('Lucas', BasicSubscription);
      const dataStore = new DataStore();
      const lessonService = new LessonService(dataStore);
      dataStore.students.push(student);
  
      student.upgradeSubscription(PremiumSubscription);
      lessonService.addCoinsToStudent(student, 2);
  
      // Verifica que foram adicionadas 3 moedas ao saldo do aluno
      expect(student.getCoins()).toEqual(3);
    });
  });

  //codigo refatorado
  describe('LessonService', () => {
    let student;
    let dataStore;
    let lessonService;
  
    beforeEach(() => {
      dataStore = new DataStore();
      student = new Student('Lucas', BasicSubscription);
      dataStore.students.push(student);
      lessonService = new LessonService(dataStore);
    });
  
    it('deve adicionar 3 moedas ao saldo do usuário quando ele se tornar um usuário premium', () => {
      expect(student.getCoins()).toEqual(0);
      student.upgradeSubscription(PremiumSubscription);
      expect(student.getCoins()).toEqual(3);
    });
  
    it('deve lançar um erro quando o usuário não existir', () => {
      const nonExistentStudent = new Student('João', BasicSubscription);
      expect(() => lessonService.addCoins(nonExistentStudent, 3)).toThrowError('O usuário não existe.');
    });
  });
  