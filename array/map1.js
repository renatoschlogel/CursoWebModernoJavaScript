let nuns = [1, 2, 3, 4, 5];
 nuns = nuns.map(function(e){
    return e * 20;
})

console.log(nuns);

let soma10 = e => e + 10;
let triplo = e => e * 10;
let paraDinheiro = e => `R$${parseFloat(e).toFixed(2).replace('.', ',')}` 

let res = nuns.map(soma10).map(triplo).map(paraDinheiro);

console.log(res);