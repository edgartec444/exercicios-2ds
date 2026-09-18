class Plano {
    #nomeDoTitular
    #duracaoEmMeses

    constructor(nomeDoTitular, duracaoEmMeses) {
        this.#nomeDoTitular = nomeDoTitular
        this.#duracaoEmMeses = duracaoEmMeses
    }

    get nomeDoTitular() {
        return this.#nomeDoTitular
    }

    get duracaoEmMeses() {
        return this.#duracaoEmMeses
    }

    resumo() {
        return "Plano registrado no sistema"
    }
}

module.exports = Plano