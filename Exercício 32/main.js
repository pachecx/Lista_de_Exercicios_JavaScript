/*Exercício 32: Usando um laço do-while, crie um jogo de "Pedra, papel e tesoura" contra o computador.

Descrição: Neste exercício, você vai simular um jogo de "Pedra, papel e tesoura" contra o computador. 
Para simplificar, vamos supor que a escolha do usuário é sempre "pedra".*/


let user = "pedra";
let options = ["papel", "pedra", "tesoura"];
let i = 0;
let pc = options[i];


do {
   i++
   pc = options[i]

} while (i < options.length && pc != user);

console.log(i)
console.log(pc)