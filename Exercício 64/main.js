// Exercício 64: Escreva uma função que receba uma string e retorne o número de palavras na string.

// Descrição:  Neste exercício, você deve criar uma função que receba uma string como argumento
// e retorne o número de palavras na string.

function stri(text) {
  return text.split(" ").length;
}

console.log(stri("Normal de mais"));
console.log(stri("Tudo Novo"));
