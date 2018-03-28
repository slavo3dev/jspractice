// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

// The lowest number will not always come first.

function sumAll(arr) {
  var a = [];
  if (arr[0] < arr[1]) {
    for (var i = arr[0]; i <= arr[1]; i++) {
      a.push(i);
    }
  }
  for (var i = arr[1]; i <= arr[0]; i++) {
    a.push(i);
  }
  return a.reduce((a, b) => a + b);
}

console.log(sumAll([1, 4]));

console.log(sumAll([1, 4]));
console.log(sumAll([1, 4])); // should return 10.
console.log(sumAll([4, 1])); // should return 10.
console.log(sumAll([5, 10])); // should return 45.
