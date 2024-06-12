// Exercício 63: Escreva uma função que receba um número e retorne um array com todos os números primos até aquele número.

// Descrição: Neste exercício, você deve criar uma função que receba um número como argumento e retorne um array
// com todos os números primos até aquele número.

function primosAteN(num) {
  let primos = [];

  for (let i = 2; i <= num; i++) {
    if (isPrimo(i)) {
      primos.push(i);
    }
  }
  return primos;
}

function isPrimo(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(primosAteN(10));
