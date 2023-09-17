/*Exercício 20: Escreva um programa que imprime uma classificação baseada na nota de um aluno.

Descrição:  Neste exercício, você vai criar uma função que recebe uma nota de um aluno como 
argumento e imprime uma classificação com base nessa nota.
*/

function nota(notaFinal){

    if(notaFinal >= 90){
        console.log("A")
    }

    else if(notaFinal >= 80){
        console.log("B")
    }

    else if(notaFinal >= 70){
        console.log("C")
    }

    else{
        console.log("D")
    }
}

nota(91)
nota(100)
nota(50)
nota(71)

