// Exercício 57: Escreva uma função que retorne a soma de todos os números ímpares em um array de números.

// Descrição: Neste exercício, você deve criar uma função que aceita um array de números como argumento
// e retorna a soma de todos os números ímpares desse array.

function todosImpar(num) {
  let somaImpa = 0;

  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 !== 0) {
      somaImpa += num[i];
    }
  }

  return somaImpa;
}

console.log(todosImpar([1, 2, 3, 4, 5, 11]));
