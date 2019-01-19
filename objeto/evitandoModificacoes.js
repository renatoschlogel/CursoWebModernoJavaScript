let produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.90, tag: 'opaaa'
})

console.log('extensivel:', Object.isExtensible(produto))

produto.nome = 'soja';
produto.descricao = 'Teste';

delete produto.tag

console.log(produto)


let pessoa = {nome: 'Ana', idade: 57}
Object.seal(pessoa);


console.log('Selado', Object.isSealed(pessoa))

pessoa.sobrenome = 'Schlogel';
delete pessoa.nome;
pessoa.idade = 25;

console.log(pessoa);

Object.freeze // trava tudaooo;
