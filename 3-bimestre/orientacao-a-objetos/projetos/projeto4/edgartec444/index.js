const PlanoFactory = require("./class/PlanoFactory")
const Modalidade = require("./class/Modalidade")
const Turma = require("./class/Turma")
const Frequencia = require("./class/Frequencia")

const membro = PlanoFactory.criar(
    "mensal",
    "Marcos Vinícius",
    12
)

const modalidade = new Modalidade(
    "Musculação",
    3
)

const turma = new Turma(
    "Turma da manhã"
)

turma.adicionarCategoria(modalidade)
turma.adicionarMembro(membro)

const registro = new Frequencia(
    4,
    modalidade
)

membro.adicionarRegistro(registro)

console.log("=== ACADEMIA FITNESS ===")
console.log(membro.resumo())
console.log("Titular:", membro.nomeDoTitular)
console.log("Duração:", membro.duracaoEmMeses, "meses")
console.log("Turma:", turma.nome)
console.log("Categorias:", turma.categorias)
console.log("Membros:", turma.membros)
console.log("Registros:", membro.registros)