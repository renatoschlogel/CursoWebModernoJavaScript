let fs = require('fs')

let caminho = __dirname + '/arquivo.json';

//sincrono

let conteudo = fs.readFileSync(caminho, 'utf-8');

console.log(conteudo);

// assincrono
fs.readFile(caminho, 'utf-8', (erro, dado) => {
    const config = JSON.parse(dado);
    console.log('OOpaaa', config.db.host);
})

let config = require('./arquivo.json');

console.log('OOpaaSimples assim:', config.db);

fs.readdir(__dirname, (erro, arquivos)=>{
    console.log('Conteundo Pasta');
    console.log(arquivos);
});
