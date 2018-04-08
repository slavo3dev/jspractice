let a = [7, "ate", "", false, 9];

const result = a.filter(word => Boolean(word) === true);

console.log(result);
console.log(a.filter(word => Boolean(word) === true));
