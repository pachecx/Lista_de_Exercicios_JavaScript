/*Exercício 10: Escreva um programa que recebe duas notas de um aluno, 
calcula a média e imprime se o aluno foi aprovado ou 
reprovado (considerando que a média para aprovação é 7).

Descrição:  Nesse exercício, você vai criar uma função que recebe
duas notas, calcula a média e, com base na média, decide se o aluno 
foi aprovado (média maior ou igual a 7) ou reprovado (média menor que 7). 
Por exemplo, se as notas forem 8 e 6, a média será 7 e o aluno será aprovado.
*/


function media(nota1, nota2){

    if((nota1 + nota2) / 2 >= 7){
        console.log("O aluno foi APROVADO!")
    }

    else{
        console.log("O aluno foi REPROVADO")
    }
}

media(7, 8)