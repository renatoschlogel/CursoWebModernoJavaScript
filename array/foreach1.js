let aprovados = ['Ren', 'Ana', 'Dan', 'Jose'];

aprovados.forEach(function(nome, index){
    console.log(`${index + 1}) ${nome}` );
});

aprovados.forEach(nome=> console.log(nome));
