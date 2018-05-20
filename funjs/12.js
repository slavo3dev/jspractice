// addRecurse(...nums) ⇒ number
// Write a function addRecurse that is the
//  generalized add function but uses recursion

function addRecurse(...nums) {
  res = 0;
  for (num in nums) {
    res += nums[num];
  }
  return res;
}

console.log(addRecurse(1, 2, 5));
console.log(addRecurse());

console.log('------------------------');

// Recursion

function addRecurse_solution(...nums) {
  if (nums.length < 1) {
    return 0;
  }
  if (nums.length === 1) {
    return nums[0];
  }
  return nums[0] + addRecurse_solution(...nums.slice(1));
}

console.log(addRecurse_solution(1, 2, 5));
console.log(addRecurse_solution());
