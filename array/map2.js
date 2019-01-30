let carro = ['{"nome": "Borracha", "preco": "3.45"}',
             '{"nome": "Lapis", "preco": "1.45"}',
             '{"nome": "faquinha", "preco": "0.45"}'];

let result = carro.map(function(dados){
    
    let value = JSON.parse(dados);

    return value.preco;
})

console.log(result)