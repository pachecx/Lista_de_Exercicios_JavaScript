/*Exercício 12: Escreva um programa que verifica a situação de um estudante de acordo com sua média final.

Descrição: Neste  exercício, você vai criar uma função que recebe a média final de um estudante e 
verifica sua situação, se aprovado (média igual ou superior a 7), se em recuperação (média entre 5 e 6.9) 
ou se reprovado (média abaixo de 5).*/


function situacaoFinal(mediaFinal){

    if(mediaFinal >= 7){
        console.log("Aprovado!")
    }

    else if(mediaFinal >= 5){
        console.log("Recuperação!")
    }

    else{
        console.log("Reprovado!")
    }
}

situacaoFinal(4)
situacaoFinal(5)
situacaoFinal(6.9)
situacaoFinal(7)
situacaoFinal(9)