// max(...nums) ⇒ number
// Write a function max
// that is generalized for any amount of arguments

function max(...nums) {
  return nums.reduce((total, num) => {
    return total > num ? total : num;
  });
}

console.log(max(1, 4, 89, 354, 3, 5, 6));
