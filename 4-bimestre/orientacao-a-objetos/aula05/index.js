
const express = require("express");

const app = express();

// Array com dois livros
const livros = [
    {
        id: 1,
        titulo: "Dom Casmurro",
        autor: "Machado de Assis"
    },
    {
        id: 2,
        titulo: "O Cortico",
        autor: "Aluisio Azevedo"
    }
];

// Rota principal
app.get("/", (req, res) => {
    res.json({
        mensagem: "API de Livros"
    });
});

// Listar todos os livros
app.get("/livros", (req, res) => {
    res.json(livros);
});

// Mostrar quantidade de livros
app.get("/livros/total", (req, res) => {
    res.json({
        total: livros.length
    });
});

// Cadastrar livro
app.post("/livros", (req, res) => {
    res.status(201).json({
        mensagem: "Livro criado"
    });
});

// Exportar aplicação
module.exports = app;
