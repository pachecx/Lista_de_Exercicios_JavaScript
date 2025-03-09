// Exercício 75: Escreva uma função de alta ordem que aceite um array de funções de callback e um valor,
// e retorne um novo array que contém os resultados de aplicar a função de callback ao valor, na ordem inversa.

// Descrição: Neste exercício, você deve criar uma função de alta ordem que receba um array de funções de callback
// e um valor como argumentos, e retorne um novo array que contenha os resultados de aplicar cada

function ChamarcallBack(callback, valor) {
  return callback.reverse().map((call) => call(valor));
}

let call = [(num) => num * 2, (num) => num * num, (num) => num / 2];
let valor = 2;

console.log(ChamarcallBack(call, valor))