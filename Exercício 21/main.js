/*Exercício 21: Escreva um programa que determina a estação do ano com base no mês.

Descrição: Neste exercício, você criará uma função que recebe um número de 1 a 12 
(representando os meses de janeiro a dezembro) e imprimirá a estação do ano correspondente.*/

function mes(Mes){

    if(Mes <= 3 || Mes == 12){
        console.log("Verão")
    }

    else if(Mes >= 4 && Mes <= 6){
        console.log("Outono")
    }

    else if(Mes >= 7 && Mes <= 9){
        console.log("Inverno")
    }

    else{
        console.log("Primavera")
    }
}

mes(1)
mes(4)
mes(9)
mes(11)





