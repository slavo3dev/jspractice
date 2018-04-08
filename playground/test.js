// test function return true if it found a match

let word = "e";
let t = "Pera";
let f = new RegExp(word);
let l = t.split("");
let a = [];

console.log(a);
console.log(f.test(t));

for (var i = 0; i < l.length; i++) {
  a.push(RegExp(t[i]));
}

console.log(a);

for (var i = 0; i < a.length; i++) {
  console.log(a[i].test(t));
}
