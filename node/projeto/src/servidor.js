const porta = 3003;

const express = require('express');
const app = express();
const bancoDeDados = require('./bancoDeDados');

app.get('/produtos', (request, response, next) => {
    response.send(bancoDeDados.getProdutos()); // será convertido para JSOM
});

app.get('/produtos/:id', (request, response, next) => {
    response.send(bancoDeDados.getProduto(request.params.id)); 
});

app.post('/produtos', (request, response, next) => {
    const produto = bancoDeDados.savarProduto({
        nome: request.body.name,
        preco: request.body.preco
    });

    response.send(produto); 
});


app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
});