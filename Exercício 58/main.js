// Exercício 58: Escreva uma função que retorne a soma de todos os números pares em um array de números.

// Descrição: Neste exercício, você deve criar uma função que aceita um array de números como argumento
// e retorna a soma de todos os números pares desse array.

function somaPares(ar) {
  let total = 0;

  for (let i = 0; i < ar.length; i++) {
    if (ar[i] % 2 === 0) {
      total += ar[i];
    }
  }
  return total;
}

console.log(somaPares([1, 2, 3, 4, 5, 7, 18]));
