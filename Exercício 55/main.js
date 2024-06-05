// Exercício 55: Escreva uma função que retorne o menor número em um array de números.

// Descrição: Neste exercício, você deve criar uma função que aceita um array de números
// como argumento e retorna o menor número desse array.

function menorNum(ar) {
  return Math.min(...ar);
}

console.log(menorNum([30, 5, 15, 10, 22, 2]));
