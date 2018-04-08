var str = "race car";
console.log(`str: ${str}`);
str = str.replace(" ", "");
var str_new = str
    .toLowerCase()
    .replace(/[_\W]+/g, "")
    .split(" ")
    .reverse()
    .join(" ");

console.log(`NEW: ${str_new}`);
console.log(str);
