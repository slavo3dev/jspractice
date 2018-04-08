let arr = [
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
];

let new_arr = [];

for (var i = 0; i < arr.length; i++) {
  new_arr.push(Math.max(...arr[i]));
}

console.log(new_arr);
