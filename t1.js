let a = "A-tisket a-tasket A green and yellow basket";
let num = 11;
console.log(a);
console.log(a.slice(0, num));
console.log("----------------");

let arr = ["a", "b", "c", "d"];
let arr_new = [];

// console.log(arr.slice(0, 2));

for (var i = 0; i < 2; i++) {
  arr_new.push([]);
}

console.log(arr_new);

for (var i = 0; i < 2; i++) {
  arr_new[0].push(arr.slice(0, 2));
}

console.log(arr_new);
