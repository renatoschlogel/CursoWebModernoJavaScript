Array.prototype.map2 = function (callback){
    let newarray = [];
    for (let i = 0; i < this.length; i++) {
        newarray.push(callback(this[i], i, this));
    }
    return newarray;
}

let carro = ['{"nome": "Borracha", "preco": "3.45"}',
             '{"nome": "Lapis", "preco": "1.45"}',
             '{"nome": "faquinha", "preco": "0.45"}'];

let result = carro.map2(function(dados){
    
    let value = JSON.parse(dados);

    return value.preco;
})

console.log(result)