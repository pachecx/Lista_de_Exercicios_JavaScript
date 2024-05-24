// Exercício 50: Escreva uma função que aceite uma string como argumento e retorne a string invertida.

// Descrição:  Neste exercício, você precisa escrever uma função que receba uma string como argumento
// e retorne a string com seus caracteres na ordem inversa.

function invertida(text) {
  return text.split("").reverse().join("");
}

console.log(invertida("texto"));