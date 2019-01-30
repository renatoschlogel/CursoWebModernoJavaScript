Array.prototype.filter2 = function(callback){
    let newArray = []
    for (let i = 0; i< this.length; i++){
        if (callback(this[i], i, this)){
            newArray.push(this[i]);
        }
    }

    return newArray;
}

let produtos = [
    {nome:'Not', preco: 4000, fragil: true},
    {nome:'celular', preco: 2000, fragil: true},
    {nome:'Copo vidro', preco: 12.50, fragil: true},
    {nome:'Copo Plastico', preco: 1.50, fragil: false}
]

console.log(produtos.filter2(function(p){
    if(p.fragil){
        return p;
    }
}))