// Exercício 78: Crie um objeto "cachorro" com propriedades para raça, nome e idade.
// Adicione um método que retorne a idade do cachorro em anos humanos (idade do cachorro * 7).

// Descrição: Neste exercício, você precisa criar um objeto que represente um cachorro. Este objeto
// deve ter propriedades para raça, nome e idade. Em seguida, adicione um método que converta a idade
// do cachorro em anos humanos (multiplique a idade do cachorro por 7).

let cachorro = {
  raca: "viraLata",
  nome: "geleia",
  idade: 5,
  anosHumanos: function () {
    console.log(
      `O nome do cachorro é ${this.nome}, é da raça ${this.raca} e tem ${
        this.idade * 7
      } em anos humanos.`
    );
  },
};

cachorro.anosHumanos();
