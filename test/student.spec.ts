import { DataStore } from '../src/data/data.store';
import { Course } from '../src/models/course';
import { Student } from '../src/models/student';
import { BasicSubscription, NoSubscription, PremiumSubscription } from '../src/models/subscription';
import { StudentService } from '../src/services/student.service';

describe('StudentService', () => {
  describe('ao visualizar as moedas', () => {
    /**
     * @author Vinícius Lourenço
     */
    it('deve ser possível visualizar', () => {
      const student = new Student('Vinícius Lourenço', BasicSubscription);
      const dataStore = new DataStore();
      dataStore.students.push(student);
      const studentService = new StudentService(dataStore);

      const coins = studentService.getCoinsByUserId(student.id);

      expect(coins).toEqual(student.getCoins());
    });

    /**
     * @author Vinícius Lourenço
     */
    it('deve lançar um erro caso o usuário não possua uma conta', () => {
      const dataStore = new DataStore();
      const studentService = new StudentService(dataStore);

      expect(() => studentService.getCoinsByUserId('123')).toThrowError('não existe');
    });

    /**
     * @author Vinícius Lourenço
     */
    it('deve lançar um erro caso o usuário não seja válido', () => {
      const student = new Student('Vinícius Lourenço', BasicSubscription);
      const dataStore = new DataStore();
      dataStore.students.push(student);
      const studentService = new StudentService(dataStore);
      student.setValid(false);

      expect(() => studentService.getCoinsByUserId(student.id)).toThrowError('não possui uma conta válida');
    });
  });

  describe('ao dar uma inscrição premium', () => {
    let student: Student;

    beforeEach(() => {
      student = new Student('Lucas', BasicSubscription);
    });

    /**
     * @author Lucas da Costa
     */
    it('dar 3 moedas e retornar a nova quantidade de moedas', () => {
      // Verifica o saldo do aluno antes de se tornar premium
      expect(student.getCoins()).toEqual(0);

      // Faz upgrade da assinatura do aluno para premium
      student.upgradeSubscription(PremiumSubscription);

      // Verifica que foram adicionadas 3 moedas ao saldo do aluno
      expect(student.getCoins()).toEqual(3);
    });

    /**
     * @author Lucas da Costa
     */
    it('não deve fazer nada com as moedas do usuário se ele sair de premium para usuário básico', () => {
      student.upgradeSubscription(PremiumSubscription);

      // Primeiro atualiza apra premium e ganha moeda
      expect(student.getCoins()).toEqual(3);

      student.upgradeSubscription(BasicSubscription);

      // Verifica que não foi adicionado 3 moedas ao saldo do aluno
      expect(student.getCoins()).toEqual(3);
    });
  });

  describe('ao possuir uma assinatura', () => {
    it('deve-se possibilitar a visualização dos cursos', () => {
      const student = new Student('Gustavo Takao', BasicSubscription);
      const course1 = new Course('Java', BasicSubscription);
      const course2 = new Course('Python', BasicSubscription);
      const dataStore = new DataStore();

      const courses = student.getCourses();
      student.setCourse(course1);
      student.setCourse(course2);
      dataStore.students.push(student);

      expect(courses).toEqual(student.getCourses());
    });

    it('lançar um erro caso o usuário não possua uma assinatura', () => {
      const student = new Student('Gustavo Takao', NoSubscription);
      const dataStore = new DataStore();
      dataStore.students.push(student);
      const studentService = new StudentService(dataStore);

      expect(() => studentService.getUserSubscription(student.id).type).toThrowError('não possui uma assinatura');
    });

    it('lançar um erro caso o usuário não possua uma conta válida', () => {
      const student = new Student('Gustavo Takao', BasicSubscription);
      const dataStore = new DataStore();
      dataStore.students.push(student);
      const studentService = new StudentService(dataStore);
      student.setValid(false);

      expect(() => studentService.getCoinsByUserId(student.id)).toThrowError('não possui uma conta válida');
    });
  });
});
