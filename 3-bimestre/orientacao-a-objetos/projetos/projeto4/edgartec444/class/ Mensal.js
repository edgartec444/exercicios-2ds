const Plano = require("./Plano")

class Mensal extends Plano {
    constructor(nomeDoTitular, duracaoEmMeses) {
        super(nomeDoTitular, duracaoEmMeses)

        this.registros = []
    }

    resumo() {
        return "Plano mensal ativado"
    }

    adicionarRegistro(registro) {
        this.registros.push(registro)
    }
}

module.exports = Mensal