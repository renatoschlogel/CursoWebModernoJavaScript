function Carro(velocidadeMaxima = 200, delta = 5) {
    //atributo
    let velocidadeAtual = 0
    // metodo publico
    this.acelerar = function (){
        if( velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        } else{
            velocidadeAtual = velocidadeMaxima
        }
    }

    this.getVelocidadeAtual =  function(){
        return velocidadeAtual
    }

}


const uno = new Carro();

uno.acelerar()
uno.acelerar()
uno.acelerar()
uno.acelerar()

console.log(uno.getVelocidadeAtual())

const mustang = new Carro(320, 35)

mustang.acelerar()

console.log(mustang.getVelocidadeAtual())