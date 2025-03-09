// Exercício 79: Crie um objeto que represente um carro, com propriedades para a marca, modelo,
// ano e velocidade atual, e os seguintes métodos: acelerar, frear e obter velocidade atual.

// Descrição: Neste exercício, você deve criar um objeto que represente um carro.
// O carro deve ter propriedades para marca, modelo, ano e velocidade atual. Em seguida, adicione os seguintes métodos ao
// objeto: um método que aumenta a velocidade atual, um método que diminui a velocidade atual e um método que retorna a velocidade atual.

let carro = {
  marca: "fiat",
  modelo: "uno mile",
  ano: 2000,
  velocidadeAtual: 50,

  acelerar: function () {
    return (this.velocidadeAtual += 10);
  },

  frear: function () {
    return (this.velocidadeAtual -= 10);
  },
};

console.log(carro.velocidadeAtual);
console.log(carro.acelerar());
console.log(carro.frear());
console.log(carro.velocidadeAtual);
console.log(carro.frear());
console.log(carro.frear());
