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
