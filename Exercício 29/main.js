/*Exercício 29: Usando um laço do-while, imprima todos os números pares de 1 a 100.

Descrição: Neste exercício, você deve criar um loop usando a estrutura de repetição 
do-while que percorra todos os números de 1 a 100 e imprima no console apenas os números pares.*/

number = 1

do {
    
    if(number % 2 == 0){
        console.log(number)
    }
    
    number++

} while ( number <= 100 );

