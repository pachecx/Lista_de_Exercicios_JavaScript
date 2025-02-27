// Exercício 74: Escreva uma função de alta ordem que aceite uma função de callback e um array,
// e retorne um novo array que contém os resultados de aplicar a função de callback a cada elemento
// do array, sem alterar o array original.

// Descrição: Neste exercício, você deve criar uma função de alta ordem que receba uma função de
// callback e um array como argumentos, e retorne um novo array que contenha os resultados de aplicar
// a função de callback a cada elemento do array. A função de callback deve ser uma função pura, ou seja,
// não deve alterar o estado do array original.

function altaOrdem(soma, array, result) {
  return (result = array.map((n) => n + soma));
}

function somaArray(a, b) {
  return (val = b.map((n) => n + a));
}

//console.log(altaOrdem(2, [1, 2, 3]));

//Correção da atividade

const numeros = [1, 2, 3];

function alta(callback, array) {
  return array.map(callback);
}

function somaDois(n) {
  return n + 2;
}

console.log("Valor alterado",alta(somaDois, numeros));
console.log("valor original", numeros);
