const sequence = {
    _id: 1,
    get id(){
        return this._id++
    }
}

const produtos = {}

function savarProduto(produto) {
    if(!produto.id){
        produto.id = sequence.id;
    }

    produtos[produto.id] = produto;
    return produto;
}

function getProduto(id) {
    return produtos[id] || {};
}

function getProdutos() {
    return Object.values(produtos);
}

module.exports = { savarProduto, getProduto, getProdutos};