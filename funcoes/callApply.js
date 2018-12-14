function getPreco(imposto = 0, moeda = 'R$') {
    this.imposto = imposto

    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
   nome: 'PC',
   preco: 4589,
   desc: 0.15,
   getPreco
}

global.preco = 10
global.desc = 0.25

console.log(getPreco())
console.log(produto.getPreco())

console.log(getPreco.call(produto, 10, 'Temers'))
console.log(getPreco.apply(produto, [11, 'Bolsonaros']))