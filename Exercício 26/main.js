/*Exercício 26: Usando um laço do-while, imprima todos os números ímpares de 1 a 20.

Descrição: Neste exercício, você deve criar um loop usando a estrutura de repetição 
do-while que percorra todos os números de 1 a 20 e imprima no console apenas os números ímpares.*/

number = 1

do {
    if(number % 2 != 0){
        console.log(number)
    }    
    number++
} while ( number <= 20 );