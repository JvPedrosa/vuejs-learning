new Vue({
  el: "#desafio",
  data: {
    nome: "João",
    idade: 24,
    imagem: "https://www.w3schools.com/w3images/lights.jpg",
  },
  methods: {
    idadeVezesTres() {
      return this.idade * 3;
    },
    numeroAleatorio() {
      return Math.random();
    },
  },
});
