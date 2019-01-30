let produtos = [
    {nome:'Not', preco: 4000, fragil: true},
    {nome:'celular', preco: 2000, fragil: true},
    {nome:'Copo vidro', preco: 12.50, fragil: true},
    {nome:'Copo Plastico', preco: 1.50, fragil: false}
]

console.log(produtos.filter(function(p){
    if(p.fragil){
        return p;
    }
}))