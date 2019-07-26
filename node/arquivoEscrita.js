let fs = require('fs');

let produto = {
    nome: 'Not',
    preco: 2500.00,
    desconto: 100.00
}

fs.writeFile(__dirname + '/temp/arquivoGerado.json',
             JSON.stringify(produto),
             err => {
    console.log(err || 'Arquivo Salvo com Sucesso!');
})