/*Exercício 42: Usando um laço for, crie um programa que transforme um número binário em decimal.

Descrição: Neste exercício, você deve criar um programa que converte um número binário em um número decimal. 
Por exemplo, o número binário 1010 convertido em decimal é 10.*/

let binario = 1010
let decimal = 0
for (let i = binario.length -1, j = 0; i >= 0; i--, j++) {
    decimal += parseInt(binario[i])*Math.pow(2,j)
}

console.log(decimal)