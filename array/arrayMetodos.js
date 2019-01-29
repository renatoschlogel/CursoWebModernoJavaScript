const pilotos = ['1', '2', '3', '4'];

pilotos.pop();  // remove o ultimo
console.log(pilotos);  

pilotos.push('4');  // inclui valor na ultima posicao
console.log(pilotos); 

pilotos.unshift('0')  // inclui valor na primeira posicao
console.log(pilotos); 

pilotos.splice(2, 0, 'opa', 'opa2') //incluiu
console.log(pilotos); 

pilotos.splice(2, 1) // remove opa
console.log(pilotos); 
