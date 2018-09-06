let str = "My name is John";
let arr = str.split(" ")
console.log(arr);

arr = arr.map(x => x.slice(0, x.length - 1).toUpperCase() + x[x.length - 1].toLowerCase()).join(' ')

// for (var i = 0; i < arr.length; i++) {
//     arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
// }

console.log(arr)