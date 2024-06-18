// Exercício 69: Escreva uma função que aceite um número e uma função de callback, e execute
// a função de callback o número de vezes especificado.

// Descrição: Neste exercício, você deve criar uma função de alta ordem que receba um número
// e uma função de callback como argumentos, e execute a função de callback o número de vezes especificado.

function varias(ar, call) {
  for (let i = 0; i < ar; i++) {
    call(i);
  }
}

let call = (i) => console.log(`teste ${i + 1}`);

varias(5, call);
