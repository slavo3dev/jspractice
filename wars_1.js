// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str) {
  var t = str.split("");
  for (var i = 0; i < t.length; i++) {
    for (j = 1 + i; j < t.length; j++) {
      if (t[j].toLowerCase() === t[i].toLowerCase()) {
        return false;
        break;
      }
    }
    // return true;
    // console.log("Outside");
    // console.log("------ The End ---------");
  }
  return true;
}

console.log(isIsogram("Dermatoglyphics")); // true
console.log(isIsogram("aba")); // false
console.log(isIsogram("moOse")); // false // -- ignore letter case
