/*Exercício 40: Usando um laço while, crie um programa que inverta uma string.

Descrição:  Neste exercício, você precisa criar um programa que inverte uma string. 
Por exemplo, a string "Hello" invertida se torna "olleH".*/


let original = 'Hello' ; 
let i = original.length - 1 ; 
let invertida = ""

while (i >= 0 ) { 
    invertida += original[i]; 
    i--; 
} 

console .log( `A string "${original}" invertida é "${invertida}"` );

