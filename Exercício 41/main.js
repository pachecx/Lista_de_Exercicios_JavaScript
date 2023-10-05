/*Exercício 41: Usando um laço do-while, crie um programa que transforme um número decimal em binário.

Descrição: Neste exercício, você precisa criar um programa que transforma um número decimal em um número binário. 
Por exemplo, o número decimal 10 transformado em binário é 1010.*/

let num = 25
let binari = ""
do {
    binari = (num % 2) + binari
    num = Math.floor(num/2)
    
} while (num > 0);
console.log(binari)