// var numeros = [1,2,3,4,5,6,7,8,9,10]

// for(let i = 0; i < numeros.lenght; i++) {

// if(numeros[i] > 5) { //se for verdadeiro

// console.log(numeros[i]);
// }
// }

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
  
  