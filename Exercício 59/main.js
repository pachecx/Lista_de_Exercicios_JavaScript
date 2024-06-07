// Exercício 59: Escreva uma função que receba um array de números e retorne um novo array com todos os números duplicados.

// Descrição:  Neste exercício, você deve criar uma função que receba um array de números como argumento e retorne um novo
// array em que cada número seja duplicado.

function duplicata(ar) {
  ar.map((a) => a * 2);

  return ar;
}

console.log(duplicata([1, 2, 3, 4]));
