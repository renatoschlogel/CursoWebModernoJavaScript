const pai = {nome: 'pedro', corCabelo: 'preto'};

const filha1 = Object.create(pai);

filha1.corCabelo = 'Loiro';

console.log(filha1);


const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true}
});

filha2.nome = 'Carla';


console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);

console.log(Object.keys(filha2));
