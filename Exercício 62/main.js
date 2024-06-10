// Exercício 62: Escreva uma função que receba um número e retorne uma string repetida aquele número de vezes.

// Descrição:  Neste exercício, você deve criar uma função que receba um número como argumento e retorne uma
// string que é repetida aquele número de vezes.

function repetida(num) {
  for (let i = 0; i < num; i++) {
    console.log(num.toString());
  }
}

 repetida(15);
