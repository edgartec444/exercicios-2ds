class Notificacao {
    constructor(mensagem) {
        this.mensagem = mensagem
    }

    enviar() {
        return "Notificação enviada: " + this.mensagem
    }
}

class Email extends Notificacao {
    enviar() {
        return "E-mail enviado: " + this.mensagem
    }
}

class SMS extends Notificacao {
    enviar() {
        return "SMS enviado: " + this.mensagem
    }
}

class App extends Notificacao {
    enviar() {
        return "Notificação no aplicativo: " + this.mensagem
    }
}

module.exports = Notificacao
module.exports.Email = Email
module.exports.SMS = SMS
module.exports.App = App