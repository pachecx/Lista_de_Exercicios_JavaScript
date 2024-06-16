// Exercício 67: Escreva uma função que aceite uma função de callback e um array de arrays,
// e retorne um novo array que contém os resultados de aplicar a função de callback a cada array.

// Descrição: Neste exercício, você deve criar uma função de alta ordem que receba uma função de
// callback e um array de arrays como argumentos, e retorne um novo array que contenha os resultados
// de aplicar a função de callback a cada array.

function exer(call, ar) {
  return ar.map(call);
}

let call = (num) => num * 2;

console.log(exer(call, [1, 2, 3]));
