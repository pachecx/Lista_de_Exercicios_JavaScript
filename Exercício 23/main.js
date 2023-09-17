/*Exercício 23: Escreva um programa que verifica as cores de um semafáro.

Descrição:  Neste exercício, você deve criar uma função que recebe uma cor, 
e imprime no console o que essa cor representa, o console deve imprimir uma 
mensagem específica para cores que não existem em um semáforo..
*/

function sinal(cor){

    if(cor == "verde"){
        console.log("Pode passar!")
    }

    else if(cor == "amarelo"){
        console.log("Atenção!")
    }

    else if( cor == "vermelho"){
        console.log("Pare!")
    }

    else{
        console.log("Essa cor não existe no semaforo!")
    }
}

sinal("verde")
sinal("amarelo")
sinal("vermelho")
sinal("roxo")
sinal("azul")


