
let seq = {
    _valor: 1,   // o underline é apenas uma convenção para dizer que o atributo não deve ser acessado diretamente
    get valor (){
        console.log('get')
        return this._valor++;
    }, 
    set valor(valor){
        console.log('set')
        if (valor > this._valor) {
            this._valor = valor;
        }

    }
}


console.log(seq.valor)
seq.valor = 5000

console.log(seq.valor)