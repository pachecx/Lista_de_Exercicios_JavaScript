// Exercício 48: Escreva uma função que aceite um número como argumento e retorne se ele é par ou ímpar.

// Descrição: Neste exercício, você precisa escrever uma função que receba um número como argumento e
//retorne uma string indicando se o número é par ou ímpar.

function iOuP(num) {
  if (num % 2 === 0) {
    console.log("É par");
  } else {
    console.log("É impar");
  }
}

iOuP(7);