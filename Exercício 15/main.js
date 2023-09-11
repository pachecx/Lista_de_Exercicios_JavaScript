/*Exercício 15: Escreva um programa que verifica se uma palavra é um palíndromo.

Descrição: Um palíndromo é uma palavra que tem a propriedade de poder ser lida 
tanto da direita para a esquerda como da esquerda para a direita. Nesse exercício, 
você irá criar uma função que recebe uma palavra como argumento e verifica se ela é um palíndromo.*/

function palindromo(word){

    let Word = word.split("").reverse("").join("")

    if( word == Word){
        console.log("É um palindromo")
    }

    else{
        console.log("Não é um palindromo")
    }
    
}

palindromo("tenet")
palindromo("amor")
palindromo("radar")
palindromo("casa")


