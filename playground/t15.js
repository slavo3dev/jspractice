let arr = [[1, 2, 3, 4], 1, 2];

let test = arr.slice(1);
let target = arr[0];
let newArr = []

for (i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) === -1) { newArr.push(i);
  } else {
      console.log(`Same Elements + ${i}`)
  }

console.log(test);
console.log(target);

for (i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) === -1) { newArr.push(i);
  } else {
      console.log(`Same Elements + ${i}`)
  }