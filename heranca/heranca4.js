function MeuObjeto() {
    
}

console.log(MeuObjeto.prototype);


let ob1 = new MeuObjeto
let ob2 = new MeuObjeto

console.log(ob1.__proto__ === ob1.__proto__);
console.log(MeuObjeto.prototype === ob1.__proto__);

MeuObjeto.prototype.nome = 'Renato';
MeuObjeto.prototype.falar = function () {
    console.log(`meu nome é ${this.nome}`)
}


ob1.falar();

ob2.nome = 'Daiza';
ob2.falar();

let ob3 = {}

ob3.__proto__ = MeuObjeto.prototype;
ob3.nome = 'ob33333'
ob3.falar();

console.log((new MeuObjeto).__proto__);
console.log(MeuObjeto.__proto__ === Function.prototype)




