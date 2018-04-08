console.log(`Substring: ${"slavo".substring(-1, 1)}`);

console.log(`Substr: ${"slavo".substr(-3)}`);

let name = "Slavoljub";

let end = "pera";

const check = function check(str, target) {
  return str.substr(-end.length) === end ? true : false;
};

console.log(check(name, end));
