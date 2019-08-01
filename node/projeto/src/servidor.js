const porta = 3003;

const express = require('express');
const app = express();
const bancoDeDados = require('./bancoDeDados');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}))

app.get('/produtos', (request, response, next) => {
    response.send(bancoDeDados.getProdutos()); // será convertido para JSOM
});

app.get('/produtos/:id', (request, response, next) => {
    response.send(bancoDeDados.getProduto(request.params.id)); 
});

app.post('/produtos', (request, response, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: request.body.nome,
        preco: request.body.preco
    });

    response.send(produto); 
});

app.delete('/produtos/:id', (request, response, next) => {
    return response.send(bancoDeDados.excluirProduto(request.params.id));
});

app.put('/produtos/:id', (request, response, next) => {
    const produto = bancoDeDados.savarProduto({
        id: request.params.id,
        nome: request.body.nome,
        preco: request.body.preco
    });

    response.send(produto); 
});


app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
});