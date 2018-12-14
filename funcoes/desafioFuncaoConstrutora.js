function Pessoa(nome){
    
    this.nome = nome

    this.falar = function (){
        console.log(`Meu nome é ${this.nome}`)
    }
}      

const p1 = new Pessoa('Renato W Schlogel')
p1.nome = 'Jose'
p1.falar()
