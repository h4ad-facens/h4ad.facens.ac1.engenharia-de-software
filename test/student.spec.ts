import { DataStore } from '../src/data/data.store';
import { Student } from '../src/models/student';
import { BasicSubscription } from '../src/models/subscription';
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
});
