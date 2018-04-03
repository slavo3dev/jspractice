// Return the remaining elements of an array after chopping off n elements from the head.

// The head means the beginning of the array, or the zeroth index.

function slasher(arr, howMany) {
  if (howMany > arr.length) {
    return [];
  } else if (howMany === 0) {
    return arr;
  }
  return arr.slice(howMany);
}

console.log(slasher([1, 2, 3], 0)); // should return [1, 2, 3].
console.log(slasher([1, 2, 3], 9)); // should return [].
console.log(slasher([1, 2, 3], 4)); // should return [].
console.log(slasher(["burgers", "fries", "shake"], 1)); // should return ["fries", "shake"].
console.log(slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5)); // should return ["cheese", 4].

// advance solution
function slasher(arr, howMany) {
  // Return string after the amount chopped off.
  return arr.slice(howMany);
}
