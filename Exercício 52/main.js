// Exercício 53: Escreva uma função que verifique se um número é primo.

// Descrição:  Um número é primo se for maior do que 1 e tiver apenas dois divisores
// distintos: 1 e ele mesmo. Neste exercício, você deve escrever uma função que recebe
// um número e retorna true se o número for primo e false caso contrário.

function primo(num) {
  if (num === 2 || (num % 2 != 0 && num % 3 != 0)) {
    return true;
  } else {
    return false;
  }
}

console.log(primo(23));
console.log(primo(2));
console.log(primo(11));
console.log(primo(96));
console.log(primo(100));