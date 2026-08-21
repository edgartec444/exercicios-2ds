class Produto {
  #preco

  constructor(preco) {
    this.#preco = preco
  }

  get preco() {
    return this.#preco
  }

  set preco(novoPreco) {
    if (novoPreco >= 0) {
      this.#preco = novoPreco
    }
  }
}

const produto = new Produto(100)

console.log(produto.preco)

produto.preco = 150
console.log(produto.preco)

produto.preco = -50
console.log(produto.preco)
