// Exercício 65: Escreva uma função que aceite um array de números e uma função de callback
// e retorne a soma de todos os números do array após a aplicação da função de callback.

// Descrição:  Neste exercício, você deve criar uma função de alta ordem que receba um
// array de números e uma função de callback como argumentos, e retorne a soma de todos os
// números do array depois de aplicar a função de callback a cada número.

function somaComCallback(array, callback) {
  return array.map(callback).reduce((a, b) => a + b, 0);
}
let numeros = [1, 2, 3, 4, 5];
let callback = (num) => num * 2;
