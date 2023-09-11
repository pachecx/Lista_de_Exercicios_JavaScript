/*Exercício 17: Escreva um programa que determina se um número é par ou ímpar.

Descrição:  Nesse exercício, você vai criar uma função que recebe um número como argumento e imprime se ele é par ou ímpar.*/

function ImpaOuPar(number){

    if(number % 2 == 0){
        console.log("par")
    }

    else{
        console.log("impar")
    }
}

ImpaOuPar(4)
ImpaOuPar(115)
ImpaOuPar(67)
ImpaOuPar(80)
