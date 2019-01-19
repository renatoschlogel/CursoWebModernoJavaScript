function Aula(nome, idvideo) {
    this.nome = nome
    this.idvideo = idvideo
}

let aula1 = new Aula('Bem vindo', 1) 
let aula2 = new Aula('até mais', 2)

console.log(aula1, aula2)

function novo(f, ...params) {
    let ob = {}
    ob.__proto__ = f.prototype
    f.apply(ob, params)
    return ob;
}

let aula3 = novo(Aula, 'Bem vindo', 1)
let aula4 = novo(Aula, 'até', 2)

console.log(aula3, aula4)