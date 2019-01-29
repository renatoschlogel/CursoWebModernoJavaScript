const quaseArray = {0: 'Renato', 2: 'Welinton', 3: 'Schlogel'};
console.log(quaseArray);

Object.defineProperty(quaseArray, 'toString', {
    value: function(){
        return Object.values(this)
    },
    enumerable: false
})


console.log(quaseArray[0]);

