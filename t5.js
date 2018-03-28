var str = "race car";
str.replace(/\w+/, "");
var str_new = str
  .toLowerCase()
  .replace(" ", "")
  .split(" ")
  .reverse()
  .join(" ");

console.log(`NEW: ${str_new}`);
console.log(str);
