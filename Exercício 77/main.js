// Exercício 77: Crie um objeto que represente um livro, com propriedades para o título, autor e número de páginas.
// Em seguida, adicione um método ao objeto que imprima uma descrição do livro.

// Descrição:  Neste exercício, você vai criar um objeto que represente um livro. O objeto deve ter propriedades para
// o título, autor e número de páginas. Além disso, o objeto deve ter um método que imprima uma descrição do livro.

let livro = {
  título: "Aqueda",
  autor: "jorge",
  paginas: 30,

  descricao: function () {
    console.log(
      `Este é um livro de ${this.autor}, com o titulo: ${this.autor} e com ${this.paginas} paginas`
    );
  },
};

livro.descricao();
