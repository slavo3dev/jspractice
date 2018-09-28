var enki = ["e", "n", "k", "i"]

var enkiIterator = enki.keys()

console.log(enki[enkiIterator.next().value])

console.log('---------')

let ints = ['1','2','3','4','5','6','7'];
console.log(ints.copyWithin(1,6,7)); // ['7','3','4','5','6','7']
console.log(ints.copyWithin(1,2,3));

console.log('--------------')
let ints1 = ['1','2','3','4','5','6'];
console.log(ints1.copyWithin(1,2,3));
// console.log(ints1.copyWithin(1,5));  //['1','2','1','2','5','6']
 //['1','2','1','2','5','6']