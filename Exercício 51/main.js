// Exercício 51: Escreva uma função que calcule o fatorial de um número.

// Descrição: O fatorial de um número é o produto de todos os números inteiros
// positivos de 1 até o número. Por exemplo, o fatorial de 5 é 5*4*3*2*1 = 120.
// Neste exercício, você deve criar uma função que calcule o fatorial de um número.

function fatorial(num) {
  if (num === 0 || num === 1) return 1;

  for (let i = num - 1; i >= 1; i--) {
    num = num * i;

    console.log(num);
  }
}

fatorial(5);
console.log("///");

function calcularFatorial(num) {
  let fatorial = 1;
  for (let i = 2; i <= num; i++) {
    fatorial *= i;
  }
  return fatorial;
}

console.log(calcularFatorial(5)); // Saída: 120
