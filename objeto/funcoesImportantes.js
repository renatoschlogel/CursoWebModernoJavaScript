let pessoa = { 
    nome: 'Renato',
    idade: 26,
    peso: 78
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
});


Object.defineProperty(pessoa, 'dataNascimento', { enumerable: true, writable: false, value: 'hojee'})

let o1 = {a: 1}
let o2 = {b:2 }
let o3 = {a:3, c:4}
let objetoConcatenado = Object.assign(o1, o2,o3)

Object.freeze(objetoConcatenado)  // contantear atributos

