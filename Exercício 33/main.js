/*Exercício 33: Usando um laço for, imprima os primeiros 10 números da sequência de Fibonacci.

Descrição: Neste exercício, você precisa imprimir os primeiros 10 números da sequência de Fibonacci. 
A sequência de Fibonacci é uma sequência de números onde cada número subsequente é a soma dos dois 
anteriores. Ela começa assim: 0, 1, 1, 2, 3, 5, 8, 13...*/

let num1 = 0;
let num2 = 1;

for(let i = 0; i < 10; i++){
    next = num1 + num2;
    
    console.log(next);

    num1 = num2;
    num2 = next;
}
