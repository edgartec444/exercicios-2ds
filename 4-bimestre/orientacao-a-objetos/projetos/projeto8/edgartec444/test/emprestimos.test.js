
const {
    listar,
    salvar,
    atualizar,
    remover
} = require("../repositorio");

const fs = require("fs/promises");
const path = require("path");
const os = require("os");

let arquivoOriginal;
let arquivoTeste;

beforeEach(async () => {
    arquivoOriginal = process.env.ARQUIVO_EMPRESTIMOS;

    arquivoTeste = path.join(
        os.tmpdir(),
        `emprestimos-${Date.now()}-${Math.random()}.json`
    );

    process.env.ARQUIVO_EMPRESTIMOS = arquivoTeste;
});

afterEach(async () => {
    try {
        await fs.unlink(arquivoTeste);
    } catch (erro) {
        if (erro.code !== "ENOENT") throw erro;
    }

    if (arquivoOriginal === undefined) {
        delete process.env.ARQUIVO_EMPRESTIMOS;
    } else {
        process.env.ARQUIVO_EMPRESTIMOS = arquivoOriginal;
    }
});

test("listar deve retornar array vazio inicialmente", async () => {
    expect(await listar()).toEqual([]);
});

test("salvar deve cadastrar empréstimo", async () => {
    const emprestimo = {
        id: 1,
        leitor: "Ana",
        livro: "Dom Casmurro",
        dias: 7,
        situacao: "reservado"
    };

    expect(await salvar(emprestimo)).toEqual(emprestimo);
    expect(await listar()).toEqual([emprestimo]);
});

test("atualizar deve preservar campos antigos", async () => {
    await salvar({
        id: 1,
        leitor: "Ana",
        livro: "Dom Casmurro",
        dias: 7,
        situacao: "reservado"
    });

    const resultado = await atualizar(1, {
        situacao: "devolvido"
    });

    expect(resultado).toEqual({
        id: 1,
        leitor: "Ana",
        livro: "Dom Casmurro",
        dias: 7,
        situacao: "devolvido"
    });
});

test("atualizar deve retornar null se não encontrar ID", async () => {
    expect(await atualizar(99, {
        situacao: "devolvido"
    })).toBeNull();
});

test("remover deve excluir empréstimo", async () => {
    await salvar({
        id: 1,
        leitor: "Ana",
        livro: "Dom Casmurro",
        dias: 7,
        situacao: "reservado"
    });

    expect(await remover(1)).toBe(true);
    expect(await listar()).toEqual([]);
});

test("remover deve retornar false se ID não existir", async () => {
    expect(await remover(99)).toBe(false);
});
