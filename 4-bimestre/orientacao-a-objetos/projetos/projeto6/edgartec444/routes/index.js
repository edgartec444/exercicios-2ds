
const express = require("express")
const router = express.Router()

const pacotesRouter = require("./pacotes")
const motoristasRouter = require("./motoristas")

router.get("/", (req, res) => {
    res.status(200).json({
        mensagem: "API de Lava Rapido"
    })
})

router.use("/pacotes", pacotesRouter)
router.use("/motoristas", motoristasRouter)

module.exports = router