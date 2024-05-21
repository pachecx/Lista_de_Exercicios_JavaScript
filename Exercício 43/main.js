/*Exercício 43: Usando um laço while, crie um programa que determine se um número é palíndromo 
ou não (um número é palíndromo se for igual ao seu reverso).

Descrição: Neste exercício, você precisa criar um programa que determina se um número é um palíndromo. 
Um número é considerado um palíndromo se for o mesmo lido de trás para frente. Por exemplo, o número 12321 é um palíndromo.*/

function palindro(pali) {
  let pali2 = pali;

  while (pali != pali2.split("").reverse().join("")) {
    console.log(`O numero ${pali} não é um palindromo!`);
    return;
  }
  console.log(`O numero ${pali} é um palindromo!`);
}

palindro("02");
