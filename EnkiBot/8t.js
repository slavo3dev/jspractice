let str = "My name is John";

let arr = str.split(" ")
console.log(arr);
arr = arr.map(x => x.split(""))
console.log(arr)



for (let i = 0; i < arr.length; i++) {
    for (let x = 0; x < arr[i].length; x++) {
        if (x === (arr[i].length - 1)) {
            n = n + arr[i][x].toLowerCase()
        } else {
            n = "" + arr[i][x].toUpperCase();
        }
    }
}

console.log(n);