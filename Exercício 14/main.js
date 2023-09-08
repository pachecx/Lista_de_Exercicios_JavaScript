/*Exercício 14: Escreva um programa que verifica se um ano é bissexto.

Descrição: Nesse exercício, você vai criar uma função que recebe um ano e verifica se ele é bissexto.
bissexto. Um ano é bissexto se for divisível por 4, exceto os que são divisíveis por 100 mas não por 400. */

function calculo(bissexto){

    if((bissexto % 4 == 0 && bissexto % 100 != 0) || (bissexto % 400 == 0)){
        console.log("ano bissexto")
    }

    else{
        console.log("Não é bissexto")
    }

}

calculo(2000)
calculo(2001)
calculo(2100)



