// Exercício 61: Escreva uma função que receba um array de números e retorne um novo array com a raiz quadrada de todos
// os números.

// Descrição: Neste exercício, você deve criar uma função que receba um array de números como argumento
// e retorne um novo array em que cada número seja a raiz quadrada do número original.

function quadrada(ar) {
  return ar.map((num) => Math.sqrt(num))
}

console.log(quadrada([49, 81, 9]));
