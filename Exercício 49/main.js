// Exercício 49: Escreva uma função que aceite três números como argumentos e retorne o maior deles.

// Descrição:  Neste exercício, você precisa escrever uma função que receba três números como
// argumentos e retorne o maior desses números.

function maiorNumero(a, b, c) {
  if (a > b && a > c) {
    return "O primeiro numero é o maior!";
  } else if (b > a && b > c) {
    return "O segundo numero é o maior!";
  } else {
    return "O terceiro numero é o maior!";
  }
}

console.log(maiorNumero(12, 33, 4));

function maior(num1, num2, num3) {
  return Math.max(num1, num2, num3);
}

console.log(maior(5, 3, 8));