var str = "race car";
console.log(`str: ${str}`);
str = str.replace(" ", "");
var str_new = str
  .toLowerCase()
  .replace(" ", "")
  .split(" ")
  .reverse()
  .join(" ");

console.log(`NEW: ${str_new}`);
console.log(str);
