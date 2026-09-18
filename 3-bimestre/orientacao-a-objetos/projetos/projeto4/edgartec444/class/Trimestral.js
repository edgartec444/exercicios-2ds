const Plano = require("./Plano")

class Trimestral extends Plano {
    constructor(nomeDoTitular, duracaoEmMeses) {
        super(nomeDoTitular, duracaoEmMeses)
    }

    resumo() {
        return "Plano trimestral ativado"
    }
}

module.exports = Trimestral