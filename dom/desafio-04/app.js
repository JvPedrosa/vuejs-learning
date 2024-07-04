new Vue({
  el: "#desafio",
  data: {
    classe1: "destaque",
    classeUsuario: "",
    classeUsuario2: "",
    perigo: true,
    cor5: "",
    estilo5: {
      width: "100px",
      height: "100px",
    },
    progresso: 0,
  },

  methods: {
    iniciarEfeito() {
      setInterval(() => {
        this.classe1 = this.classe1 == "destaque" ? "encolher" : "destaque";
      }, 1000);
    },
    iniciarProgresso() {
      let valor = 0;
      setInterval(() => {
        valor += 5;
        this.progresso = valor;
        if (valor === 100) {
          valor = 0;
        }
      }, 500);
    },
    setPerigo(event) {
      if (event.target.value === "true") {
        this.perigo = true;
      } else if (event.target.value === "false") {
        this.perigo = false;
      }
    },
  },
});
