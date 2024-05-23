// Exercício 44: Usando um laço do-while, crie um programa que imprima a soma de duas matrizes.

/*Descrição: Neste exercício, você deve criar um programa que soma duas matrizes. As matrizes são listas bidimensionais de números. 
A soma de duas matrizes é obtida somando os elementos correspondentes de cada matriz.*/


function somarMatriz(a, b) {
  for (let i = 0; i < a.length; i++) {
    let soma = a[i] + b[i];
    console.log(soma);
  }
}

somarMatriz([1, 2, 3, -4], [5, 7, 8, 4]);

function doaile(c, d) {
  let i = 0;

  do {
    let soma = c[i] + d[i];
    i++;

    console.log(soma);
  } while (i < c.length);
}

doaile([1, 2, 3, 4], [2, 3, 3, 5]);
