let url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
let axios = require('axios');

let chineses = f => f.pais === 'China'
let mulheres = f => f.genero === 'F';
let menorSalario = (fun, funAtual ) =>{
    return fun.salario > funAtual.salario ? fun : funAtual;
}

axios.get(url).then(function(funcionarios){
    let func = funcionarios.data
                .filter(chineses)
                .filter(mulheres)
                .reduce(menorSalario);
    console.log(func);
});

