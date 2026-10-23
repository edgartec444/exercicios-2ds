
const express = require("express")
const router = express.Router()

const motoristas = [
    { id: 1, nome: "Ana", veiculo: "Fiesta" },
    { id: 2, nome: "Bruno", veiculo: "Strada" }
]

router.get("/", (req, res) => {
    res.status(200).json(motoristas)
})

router.get("/total", (req, res) => {
    res.status(200).json({ total: motoristas.length })
})

module.exports = router