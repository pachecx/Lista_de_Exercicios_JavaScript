// Exercício 68: Escreva uma função de alta ordem que aceite um array de números
// e uma função de callback, e retorne um novo array que contém apenas os números
// do array original que satisfazem a condição da função de callback.

// Descrição: Neste exercício, você deve criar uma função de alta ordem que receba
// um array de números e uma função de callback como argumentos, e retorne um novo
// array que contenha apenas os números do array original que passam no teste
// implementado pela função de callback.

function funCall(ar, call) {
  return ar.filter(call);
}

let ar = [1, 2, 3, 4, 5, 6];

let call = (num) => num > 3;

console.log(funCall(ar, call));
