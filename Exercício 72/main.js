// Exercício 72: Escreva uma função que aceite um número, um array de funções de callback
// e um valor inicial, e retorne o resultado final após a aplicação de todas as funções de
// callback no valor inicial, o número de vezes especificado.

// Descrição: Neste exercício, você deve criar uma função de alta ordem que receba um número,
// um array de funções de callback e um valor inicial como argumentos, e retorne o resultado final após
// a aplicação de todas as funções de callback no valor inicial, o número de vezes especificado.

function aplicarCallbacksNTimes(n, callback, valorInicial) {
  let valor = valorInicial;
  for (let i = 0; i < n; i++) {
    callback.forEach((callback) => {
      valor = callback(valor);
    });
  }
  return valor;
}
let callback = [(num) => num * 2, (num) => num + 1];
let valorInicial = 1;
console.log(aplicarCallbacksNTimes(2, callback, valorInicial)); // Saída: 7
