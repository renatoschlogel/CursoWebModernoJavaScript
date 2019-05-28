let fs = require('fs')

let caminho = __dirname + '/arquivo.json';

//sincrono

let conteudo = fs.readFileSync(caminho, 'utf-8');

console.log(conteudo);

// assincrono
fs.readFile(caminho, 'utf-8', (erro, dado) => {
    const config = dado;
    console.log('OOpaaa', config);
})
