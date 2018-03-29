// regular expresion

const name = "My age. is 0, 0 si. ega ym.";
const new_name = name.replace(/[. ,]/g, "");
console.log(new_name);
str = "almostomla";
var str_new = str
  .toLowerCase()
  .replace(/[. ,]/g, "")
  .split("")
  .reverse()
  .join("");

console.log(
  str
    .split("")
    .reverse()
    .join("")
);
console.log(str_new);
