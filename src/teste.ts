export class StudentService {
    public getStudents(): any {
      var dados = '["Ronei", "Deivid", "Vinicius", "Tiago"]';
      var convertido = JSON.parse(dados);
  
      for (let i = 0; i < convertido.length; i++) {
        if (convertido[i] === 'Tiago') {
          console.log(convertido[i]);
        }
      }
    }
  }
  