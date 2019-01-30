let alunos = [
    {nome: 'Renato', nota: 9.8, bolsista:false},
    {nome: 'Welinton', nota: 8.8, bolsista:true},
    {nome: 'Schlogel', nota: 7.8, bolsista:false},
    {nome: 'Daiza', nota: 7.2, bolsista:true}
]

let resultado = alunos.map(a => a.nota);

resultado = resultado.reduce(function(a, b){
    return a + b;
})

console.log(resultado / alunos.length);