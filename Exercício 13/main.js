/*Exercício 13: Escreva um programa que calcula o IMC (Índice de Massa Corporal) de uma pessoa e 
imprime uma mensagem indicando se a pessoa está abaixo do peso, com peso normal, com sobrepeso ou obesa.


Descrição:  Nesse exercício, você vai criar uma função que recebe o peso (em kg) e a altura (em m) de 
uma pessoa, calcula o IMC e verifica em qual faixa o valor se encaixa. As faixas são: abaixo do 
peso (IMC < 18.5), normal (18.5 ≤ IMC < 25), sobrepeso (25 ≤ IMC < 30) e obesidade (IMC ≥ 30).*/


function IMC(peso, altura){

    
    const imc = peso / (altura**2) 

    if( imc < 18.5){
        console.log("Abaixo do peso")
    }

    else if( imc < 25){
        console.log("Peso normal")
    }

    else if(imc < 30){
        console.log("Sobrepeso")
    }

    else{
        console.log("Obeso")
    }
}

IMC(66, 1.8)
IMC(80, 1.9)
IMC(90, 1.8)
IMC(66, 2)

//imc = peso / altura²