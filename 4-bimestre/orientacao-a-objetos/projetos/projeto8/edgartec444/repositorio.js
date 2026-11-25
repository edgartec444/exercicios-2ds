
const fs = require("fs/promises");

const arquivo = process.env.ARQUIVO_EMPRESTIMOS || "emprestimos.json";

// LISTAR empréstimos
async function listar() {
    try {
        const dados = await fs.readFile(arquivo, "utf-8");
        return JSON.parse(dados);
    } catch (erro) {
        if (erro.code === "ENOENT") {
            return [];
        }
        throw erro;
    }
}

// SALVAR novo empréstimo
async function salvar(emprestimo) {
    const lista = await listar();

    lista.push(emprestimo);

    await fs.writeFile(
        arquivo,
        JSON.stringify(lista, null, 2)
    );

    return emprestimo;
}

// ATUALIZAR empréstimo
async function atualizar(id, dados) {
    const lista = await listar();

    const indice = lista.findIndex(
        item => item.id === id
    );

    if (indice === -1) {
        return null;
    }

    lista[indice] = {
        ...lista[indice],
        ...dados,
        id: lista[indice].id
    };

    await fs.writeFile(
        arquivo,
        JSON.stringify(lista, null, 2)
    );

    return lista[indice];
}

// REMOVER empréstimo
async function remover(id) {
    const lista = await listar();

    const novaLista = lista.filter(
        item => item.id !== id
    );

    if (novaLista.length === lista.length) {
        return false;
    }

    await fs.writeFile(
        arquivo,
        JSON.stringify(novaLista, null, 2)
    );

    return true;
}

// EXPORTAR funções
module.exports = {
    listar,
    salvar,
    atualizar,
    remover
};