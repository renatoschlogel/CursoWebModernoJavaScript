let contadorA = require('./instanciaUnica');
let contadorB = require('./instanciaUnica');

let contadorC = require('./instanciaNova')();
let contadorD = require('./instanciaNova')();

contadorA.inc();
contadorA.inc();

console.log(contadorA.valor, contadorB.valor);

contadorC.inc();
contadorC.inc();

console.log(contadorC.valor, contadorD.valor);