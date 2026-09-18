const Plano = require("./Plano")

class Anual extends Plano {
    constructor(nomeDoTitular, duracaoEmMeses) {
        super(nomeDoTitular, duracaoEmMeses)
    }

    resumo() {
        return "Plano anual ativado"
    }
}

module.exports = Anual