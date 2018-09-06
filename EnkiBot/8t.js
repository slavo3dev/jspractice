let str = "My name is John";

let arr = str.split(" ")
console.log(arr);
arr = arr.map(x => x.split(" "))
console.log(arr)