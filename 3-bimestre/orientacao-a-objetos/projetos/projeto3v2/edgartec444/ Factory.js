const Laudo = require("./Laudo")

class Factory {

    static criar(tipo, responsavel) {

        switch (tipo) {

            case "estrutural":
                return new Laudo.Estrutural(responsavel)

            case "eletrico":
                return new Laudo.Eletrico(responsavel)

            case "hidraulico":
                return new Laudo.Hidraulico(responsavel)

            default:
                throw new Error("Tipo de laudo inválido")
        }
    }
}

module.exports = Factory