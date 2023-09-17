/*Exercício 22: Escreva um programa que determina o número de dias em um mês.

Descrição:  Neste exercício, você criará uma função que recebe o número de um mês e imprime o número de dias desse mês.*/

function dias(mes){

    if(mes == 4 || mes == 6 || mes == 9 || mes == 11 ){
        console.log("O mês possui apenas 30 dias!")
    }

    else if(mes == 2){
        console.log("Poosui apenas 28 dias!")
    }

    else{
        console.log("O mês possui 31 dias!")
    }
}

dias(5)
dias(2)
dias(6)
dias(9)
dias(12)


