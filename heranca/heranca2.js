let avo = { attr1: 'A'}
let pai = { __proto__:avo, attr2: 'B'}
let filho = {__proto__: pai, attr3: 'C'}

console.log(filho.attr1, filho.attr3);


const carro = {
    velatual: 0,
    velmax: 200,
    aceleraMais(delta){
        if(this.velatual + delta <= this.velmax){
            this.velatual +=  delta;
        }else {
            this.velatual = this.velmax;
        }

    },
    status(){
        return `${this.velatual}Km/h`;
    }
}

let ferrari = {
    modelo: 'F45',
    velmax: 380
}


let volvo = {
    modelo: 'v40',
    status(){
        return  `${this.modelo}: ${super.status()}`;
    }
}

Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);
volvo.aceleraMais(50);
volvo.aceleraMais(50);
console.log(volvo.status());

ferrari.aceleraMais(80);

console.log(ferrari.status());


