// Write a function acc that takes
// a function and an initial value
// and returns a function that
// runs the initial function on
// each argument, accumulating the result

// let add = acc(addb, 0);
// add(1, 2, 4) // 7

// let mul = acc(mulb, 1);
// mul(1, 2, 4) // 8

function addb(a, b) {
  return a + b;
}

function acc(func, a) {
  return function(...nums) {
    return func(...nums) + a;
  };
}

let add = acc(addb, 0);
console.log(add(1, 2, 4)); // 7
