// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) {
    return -1;
  }

  return a1.length + a2.length;
}

s1 = [
  "hoqq",
  "bbllkw",
  "oox",
  "ejjuyyy",
  "plmiis",
  "xxxzgpsssa",
  "xxwwkktt",
  "znnnnfqknaz",
  "qqquuhii",
  "dvvvwz"
];
s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];

l1 = [];
l2 = ["Slavo", "Marko", "Jovan"];
console.log(mxdiflg(s1, s2)); // 13
console.log(mxdiflg(l1, l2)); // -1
