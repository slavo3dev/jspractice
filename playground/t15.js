function test(...arr) {
  console.log(arr[0][2]);
}

let arr = [[1, 2, 3, 4, 5], 1, 2, 3];
console.log(arr[2]);

const newArr = arr[0].concat(arr[1]);

let arrNew = newArr.sort();

console.log(newArr);
console.log(arrNew);
