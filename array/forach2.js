Array.prototype.forEach2 = function(callback){
    for(let i = 0; i<this.length; i++){
        callback(this[i], i, this)
    } 
}

let aprovados = ['Ren', 'Ana', 'Dan', 'Jose'];

aprovados.forEach2(function(nome, index){
    console.log(`${index + 1}) ${nome}` );
});

