/*Nesse desafio você irá criar uma lista de 
**estudantes** e, cada estudante dentro dessa 
lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a 
média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso 
é **7**, verifique **se** cada 
aluno obteve sucesso ou não em entrar no concurso 
e mostre uma mensagem na tela.

*/

const students = [
  {
    name: "Giovani",
    firstNote: 7,
    secondNote: 3,
  },
  {
    name: "Adriana",
    firstNote: 7,
    secondNote: 7,
  },
  {
    name: "Gabriel",
    firstNote: 7,
    secondNote: 8,
  },
  {
    name:"Lais",
    firstNote: 10,
    secondNote: 10,
  },
]


let avarage = [] /*essa variável serve para incrementação de dados*/
let result

function grade(firstNote, secondNote){
  let avarage = ((firstNote + secondNote) / 2).toFixed(2)
  return Number(avarage) 
}

for(let student of students){
  let result = grade(student.firstNote, student.secondNote)

  if( result >= 7){
     alert (`
    A média do(a) ${student.name}: ${grade(student.firstNote, student.secondNote)}
    Você foi aprovado!`)
  }else{
    alert("Não foi dessa vez " + student.name +", tente na próxima")
  }

}

