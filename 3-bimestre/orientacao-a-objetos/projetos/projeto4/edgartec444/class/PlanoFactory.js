const Mensal = require("./Mensal")
const Trimestral = require("./Trimestral")
const Anual = require("./Anual")

class PlanoFactory {
    static criar(tipo, nomeDoTitular, duracaoEmMeses) {
        switch (tipo) {
            case "mensal":
                return new Mensal(
                    nomeDoTitular,
                    duracaoEmMeses
                )

            case "trimestral":
                return new Trimestral(
                    nomeDoTitular,
                    duracaoEmMeses
                )

            case "anual":
                return new Anual(
                    nomeDoTitular,
                    duracaoEmMeses
                )

            default:
                throw new Error("Tipo de plano inválido")
        }
    }
}

module.exports = PlanoFactory