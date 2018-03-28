// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

// The lowest number will not always come first.

function sumAll(arr) {
  let a = [];
  for (let i = arr[0]; arr[0] <= arr[1]; i++) {
    a.push(i);
  }
  return a.reduce((a, b) => a + b);
}

console.log(sumAll([1, 4]));
