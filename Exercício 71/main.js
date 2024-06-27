// Exercício 71: Escreva uma função que aceite uma função de callback e um número,
// e execute a função de callback após um certo número de milissegundos especificados pelo número.

// Descrição: Neste exercício, você deve criar uma função de alta ordem que receba uma função de
// callback e um número como argumentos, e execute a função de callback após um certo número de
// milissegundos especificado pelo número. Isso é conhecido como programação assíncrona.

function alta(call, num) {
  setInterval(call, num);
}

let call = () => console.log("executou");

alta(call, 5000);
