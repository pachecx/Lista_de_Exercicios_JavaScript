// Exercício 56: Escreva uma função que retorne o maior número em um array de números.

// Descrição: Neste exercício, você deve criar uma função que aceita um array de números
// como argumento e retorna o maior número desse array.

function maiorNum(maxi) {
  return Math.max(...maxi);
}

console.log(maiorNum([0, 2, 3, 100, 5, 10, 15, 55]));
