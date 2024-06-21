// Exercício 70: Escreva uma função de alta ordem que aceite um array de 
// funções de callback e um valor, e retorne um array de resultados de 
// aplicar cada função de callback ao valor.

// Descrição: Neste exercício, você deve criar uma função de alta ordem 
// que receba um array de funções de callback e um valor como argumentos, 
// e retorne um array que contenha os resultados de aplicar cada função 
// de callback ao valor.

function arCall(arr){
    return arr.map(cal1 => cal1(valor))
}


let cal1 = [num => 1 + 1, num => 2 + 2];
let valor = 4

console.log(arCall(cal1, valor))
