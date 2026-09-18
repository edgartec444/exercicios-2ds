class Laudo {
    constructor(responsavel) {
        this.responsavel = responsavel
    }

    emitir() {
        return "Laudo técnico emitido por: " + this.responsavel
    }
}

class Estrutural extends Laudo {
    emitir() {
        return "Laudo estrutural emitido por: " + this.responsavel
    }
}

class Eletrico extends Laudo {
    emitir() {
        return "Laudo elétrico emitido por: " + this.responsavel
    }
}

class Hidraulico extends Laudo {
    emitir() {
        return "Laudo hidráulico emitido por: " + this.responsavel
    }
}

module.exports = Laudo
module.exports.Estrutural = Estrutural
module.exports.Eletrico = Eletrico
module.exports.Hidraulico = Hidraulico