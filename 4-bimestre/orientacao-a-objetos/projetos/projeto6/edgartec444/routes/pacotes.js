
const express = require("express")
const router = express.Router()

const pacotes = [
    { id: 1, nome: "Simples", porte: "pequeno", preco: 35, disponivel: true },
    { id: 2, nome: "Completo", porte: "medio", preco: 70, disponivel: true },
    { id: 3, nome: "Premium", porte: "grande", preco: 140, disponivel: false }
]

router.get("/", (req, res) => {
    res.status(200).json(pacotes)
})

router.get("/disponiveis", (req, res) => {
    res.status(200).json(
        pacotes.filter(pacote => pacote.disponivel === true)
    )
})

router.get("/total", (req, res) => {
    res.status(200).json({ total: pacotes.length })
})

router.post("/", (req, res) => {
    res.status(201).json({
        mensagem: "Cadastro de pacote realizado"
    })
})

module.exports = router