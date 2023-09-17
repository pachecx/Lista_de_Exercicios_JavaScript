/*Exercício 19: Escreva um programa que verifica se um número está dentro de um determinado intervalo.

Descrição:  Neste exercício, você vai criar uma função que recebe três números como argumentos: um número 
a ser verificado, o limite inferior e o limite superior do intervalo. A função deve imprimir se o número 
está dentro do intervalo ou não.*/

function limite(number, limite1, limite2){

    if(number > limite1 && number < limite2){
        console.log("O numero esta dentro do intervalo!")
    }

    else{
        console.log("O numero esta fora do intervalo!")
    }
}

limite(5, 2, 10)
limite(0, 2, 10)
limite(10, 2, 10)

