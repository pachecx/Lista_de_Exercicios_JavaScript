/*Exercício 9: Escreva um programa que recebe um número e verifica se ele é positivo, negativo ou zero.

Descrição:  Você precisará de uma função que receba um número como argumento. 
Essa função usará estruturas if, else if e else para determinar e imprimir 
se o número é positivo, negativo ou zero. Por exemplo, se recebermos o número 10, 
a saída deve ser "positivo". Se recebermos -5, a saída deve ser "negativo". 
Se recebermos 0, a saída deve ser "zero".*/



function verificaçao(){
   
    let numero = -2

    if(numero > 0){
        console.log("O numero é positivo ")
    }

    else if(numero == 0){
        console.log("O numero é zero ")
    }

    else{
        console.log("O numero é negativo ")

    }
}

verificaçao()