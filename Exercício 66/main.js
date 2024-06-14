// Exercício 66: Escreva uma função que aceite uma função de callback que 
// retorne verdadeiro ou falso e um array, e retorne um novo array que 
// contém apenas os elementos para os quais a função de callback retornou verdadeiro.

// Descrição:  Neste exercício, você deve criar uma função de alta ordem que receba uma 
// função de callback e um array como argumentos, e retorne um novo array que contenha 
// apenas os elementos para os quais a função de callback retornou verdadeiro.

function aray(ar, CallparTrue){
  return ar.filter(CallparTrue)
}

let numeros = [1,2,3,4,5]
let CallparTrue = num => num % 2 ===0;

console.log(aray(numeros, CallparTrue))


