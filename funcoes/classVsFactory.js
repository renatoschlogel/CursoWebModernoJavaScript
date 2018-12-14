class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}      

const p1 = new Pessoa('Renato W Schlogel')
p1.falar()

const criarPessoa = nome => {
    return {
        falar: () => console.log(`MEU NOME È ${nome}`)
    }
}

const p2 = criarPessoa('Daiza')
p2.falar()