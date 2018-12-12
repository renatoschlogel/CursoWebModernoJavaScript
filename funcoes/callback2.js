const notas = [7.7, 6.5, 7.7, 8.8, 9.0]

let notasBaixas  = []

for(let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
    
}

let notasBaixarFilter  = notas.filter(function(nota){
    return nota < 7
})


let notasBaixarFilter2  = notas.filter( nota => nota < 7)

console.log(notasBaixas)
console.log(notasBaixarFilter)
console.log(notasBaixarFilter2)

