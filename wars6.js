// Write a program that will calculate the number of trailing zeros in a factorial of a given number.

// N! = 1 * 2 * 3 * ... * N

// Be careful 1000! has 2568 digits...

// For more info, see: http://mathworld.wolfram.com/Factorial.html

function factorial(n) {
  if (n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

function zeros(n) {
  var result = 0;
  while ((n = Math.floor(n / 5))) result += n;
  return result;
}

console.log(`Factorial numnber: ${factorial(6)}`);
console.log(`Number of trailing zeros of N! is: ${zeros(6)}`);
