/*Exercício 18: Escreva um programa que verifica se uma pessoa pode dirigir com base na idade.

Descrição:  Nesse exercício, você vai criar uma função que recebe a idade de uma pessoa e verifica 
se ela pode dirigir. No Brasil, apenas pessoas com mais de 18 anos podem tirar carteira de habilitação.*/


function Dirigir(idade){

    if(idade >= 18){
        console.log("Pode tirar habilitação, então já pode dirigir!")
    }

    else{
        console.log("ainda não pode tirar habilitação, então não pode dirigir!")
    }

}


Dirigir(10)
Dirigir(20)
