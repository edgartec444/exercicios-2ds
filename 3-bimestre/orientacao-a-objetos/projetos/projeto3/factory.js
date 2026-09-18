const Notificacao = require("./notificacao")

class Factory {

    static criar(tipo, mensagem) {

        switch (tipo) {

            case "email":
                return new Notificacao.Email(mensagem)

            case "sms":
                return new Notificacao.SMS(mensagem)

            case "app":
                return new Notificacao.App(mensagem)

            default:
                throw new Error("Tipo de notificação inválido")
        }
    }
}

module.exports = Factory