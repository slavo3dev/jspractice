// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

var maxSequence = function(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let nArr = arr.filter(x => x >= -1);
  let arr_new = nArr.filter((a,b) => nArr.indexOf(a) === b);
  return arr_new.reduce((a, b) => a + b);
};

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// should be 6: [4, -1, 2, 1]
