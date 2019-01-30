let alunos = [
    {nome: 'Renato', nota: 9.8, bolsista:false},
    {nome: 'Welinton', nota: 8.8, bolsista:true},
    {nome: 'Schlogel', nota: 7.8, bolsista:false},
    {nome: 'Daiza', nota: 7.2, bolsista:false}
]

let todosBolsistas = alunos.map(a=> a.bolsista).reduce(function(acum, current){
    return acum && current;
});

let algumEhBolsista = alunos.map(a=> a.bolsista).reduce(function(acum, current){
    return acum || current;
});

console.log(todosBolsistas, algumEhBolsista);