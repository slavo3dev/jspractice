let arr = [[1, 2, 3, 4], 1, 2];

let test = arr.slice(1);
let target = arr[0];
let newArr = [];

console.log(`test ${test}`);
console.log(`target ${target}`);

for (i = 0; i < test.length; i++) {
  if (target.indexOf(test[i]) === -1) {
    newArr.push(arr[i]);
  } else {
    console.log(`Same Elements  ${arr[i]}`);
  }
}

console.log(`newArr ${newArr}`);
