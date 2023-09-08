/*Exercício 11: Escreva um programa que verifica se uma pessoa pode votar com base na idade.

Descrição: Nesse exercício, você vai criar uma função que recebe a idade de uma pessoa e 
verifica se ela pode votar. No Brasil, o voto é obrigatório para pessoas entre 18 e 70 anos, 
facultativo para pessoas com 16 ou 17 anos ou acima de 70. Menores de 16 anos não votam.*/


function podeVotar(idade){

    if(idade < 16){
        console.log("Não pode votar!")
    }

    else if(idade <= 17 || idade > 70 ){
        console.log("Voto facultativo!")
    }

    else{
        console.log("Voto obrigatório!")
    }
}

podeVotar(70)