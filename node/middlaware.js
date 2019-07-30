const passo1 = (contexto, next) => {
    contexto.valor1 = 'mid1';
    next();
}

const passo2 = (contexto, next) => {
    contexto.valor2 = 'mid2';
    next();
}

const passo3 = (contexto) => {
    contexto.valor3 = 'mid3';
}

const exec = (contexto, ...middlewares) =>{
    const execPasso = indice =>{
        if (middlewares && indice < middlewares.length){
            middlewares[indice](contexto, () => execPasso(indice + 1));
        }
    }
    execPasso(0);
}

let contexto = {};
exec(contexto, passo2, passo1, passo3);
console.log(contexto);