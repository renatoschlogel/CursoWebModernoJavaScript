const porta = 3003;

const express = require('express');
const app = express();

app.get('/produtos', (request, response, next) => {
    response.send({nome: 'Not', preco: 1500.10}); // será convertido para JSOM
});

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
});