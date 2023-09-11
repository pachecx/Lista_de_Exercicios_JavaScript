/*Exercício 16: Escreva um programa que determina o maior entre três números.

Descrição: Nesse exercício, você irá criar uma função que recebe três números como argumentos e imprime o maior deles.*/

function Maior(number1, number2, number3){

    if(number1 > number2 && number1 > number3){
        console.log("O numero 1 é o maior entre os três!")
    }

    else if(number2 > number1 && number2 > number3){
        console.log("O numero 2 é o maior entre os três!")
    }

    else{
        console.log("O numero 3 é o maior entre os três!")
    }
}

Maior(10, 25, 5)
Maior(10, 25, 50)
Maior(100, 25, 5)

