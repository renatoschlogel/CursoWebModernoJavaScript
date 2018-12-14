let objeto1 = new Object

let objeto2 = {}


function meuObjeto(nome) {
    this.nome = nome
    this.falarNome = function (){
        console.log(this.nome);
    } 
}

let objeto3 = new meuObjeto('Renato');

objeto3.falarNome();
