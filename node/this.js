console.log(this === global);
console.log(this === module);
console.log(this ===module.exports);
console.log(this ===exports);


function teste() {
    console.log('dentro de uma funcao');
    console.log(this === global);
    console.log(this === module);
    console.log(this === module.exports);
    console.log(this === exports);
    
}

teste();