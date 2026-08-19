class Cofre {
    #codigo;

    constructor(codigo) {
        this.#codigo = codigo;
    }

    verificarCodigo(codigo) {
        return codigo === this.#codigo;
    }
}

module.exports = Cofre;
