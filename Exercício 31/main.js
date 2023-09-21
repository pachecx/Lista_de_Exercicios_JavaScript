/*Exercício 31: Usando um laço while, crie um programa que 
adivinha um número que o usuário pensou, através do método de busca binária.

Descrição: Neste exercício, você vai simular um jogo onde o usuário "pensa" 
em um número de 1 a 100 e o programa deve adivinhar o número usando o método 
de busca binária. Para simplificar, simplificar, vamos supor que o número pensado pelo usuário é 50.*/

let min = 1;
let max = 100;
let chute = Math.floor((max + min) / 2);
let number = 50;

while(chute !== number){

    if(chute > number){
        max = chute;
    }

    else{
        min = chute;
    }

    chute = Math.floor((max + min) / 2);
}

console.log(chute);
