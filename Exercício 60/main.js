// Exercício 60: Escreva uma função que receba um array de números e retorne um novo array com todos os números ao quadrado.

// Descrição:  Neste exercício, você deve criar uma função que receba um array de números como argumento e retorne um novo
// array em que cada número seja elevado ao quadrado.

function quadrado(ar) {
  return ar.map((num) => num ** 2);
}

console.log(quadrado([5, 2, 1, 3, 4]));
