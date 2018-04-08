// regular expresion

const name = "0_0 (: /- :) 0-0";
const new_name = name.replace(/[_\W]+/g, "");
console.log(new_name);
str = "_eye";
var str_new = str
  .replace(/[_\W]+/g, "")
  .toLowerCase()
  .split("")
  .reverse();

console.log(str.split("").reverse());
console.log(str_new);
console.log("--------------------------");

let arr = [
  "slavo",
  "pera",
  "adsadasdadasdasda",
  "sima",
  "joza",
  "dejan",
  "dragan"
];

let copy = [];
arr.forEach(function(word) {
  copy.push(word.length);
});

console.log(Math.max(...copy));

console.log("--------------------------");
