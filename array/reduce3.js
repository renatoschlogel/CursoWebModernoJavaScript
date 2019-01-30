Array.prototype.recude2 = function(callbabk){
    let acumm = this[0];
    for(i = 1; i < this.length; i++){
        acumm = callbabk(acumm, this[i], this);
    }
    return acumm;
}

let valores = [1,2,3,4,5];

let soma = function(a, b) {
    return a + b;
}

console.log(valores.recude2(soma));

