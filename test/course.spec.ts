import { Course } from '../src/models/course';
import { DataStore } from '../src/data/data.store';
import { Student } from '../src/models/student';
import { BasicSubscription } from '../src/models/subscription';
import { StudentService } from '../src/services/student.service';
import { isSet } from 'util/types';

describe('CourseService', () => {
  describe('ao comprar um curso com moedas', () => {
    it('deve subtrair as moedas do usuário', () => {
      expect(true).toEqual('not implemented');
    });

    it('deve lançar um erro caso o usuário não tenha a quantidade de moedas necessárias', () => {
      expect(true).toEqual('not implemented');
    });

    it('deve lançar um erro caso o usuário já possua o curso', () => {
      expect(true).toEqual('not implemented');
    });
  });

  describe('ao listar os cursos que o usuário comprou', () => {
    it('deve retornar apenas os que ele realmente comprou', () => {
      expect(true).toEqual('not implemented');
    });

    it('deve lançar um erro caso o usuário não possua uma conta', () => {
      expect(true).toEqual('not implemented');
    });
  });

  describe('ao listar os cursos da assinatura', () => {
    it('deve retornar cursos de acordo com a assinatura do usuário', () => {
      expect(true).toEqual('not implemented');
    });

    it('deve lançar um erro caso o usuário não possua uma conta', () => {
      expect(true).toEqual('not implemented');
    });
  });

  describe('quando um usuário finalizar um curso', () => {
    it('retornar uma mensagem de sucesso', () => {
      expect(true).toEqual('not implemented');
    });



    /**
     * @author Enrico Acquaviva
     */
    it('ao finalizar o 12 curso, se sim, transformar o usuário em premium', () => {
      const student = new Student('Enrico', BasicSubscription);
      const curso = new Course('Curso1', null);
      const curso2 = new Course('Curso2', null);
      const dataStore = new DataStore();
      dataStore.students.push(student);
      dataStore.courses.push(curso);
      student.setCourse(curso);
      student.setCourse(curso2);
      const studentService = new StudentService(dataStore);
      let cursosEstudante; 
      let tamanho = 0;
      let i=0;
    for (i; i<12;i++){
        cursosEstudante = student.getCourses(i);
        if(cursosEstudante != null){
            tamanho += 1;
        }
    } 
      expect(tamanho).toBe(12);
    });
    

    it('se certificar que o usuário recebeu as 3 moedas', () => {
      expect(true).toEqual('not implemented');
    });
  });
});
