let alunos = [
    {nome: 'Renato', nota: 9.8, bolsista:false},
    {nome: 'Welinton', nota: 8.8, bolsista:true},
    {nome: 'Schlogel', nota: 7.8, bolsista:false},
    {nome: 'Daiza', nota: 7.2, bolsista:false}
]

// imperativa

let total1 = 0;
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota;
}

console.log(total1 / alunos.length)

let getNota = aluno => aluno.nota;
let soma = (total, atual) => total + atual;
let total2 = alunos.map(getNota).reduce(soma);

console.log(total2 / alunos.length)