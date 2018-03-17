// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str) {
  var t = str.split("");
  for (var i = 0; i < t.length; i++) {
    for (j = 1 + i; j < t.length; j++) {
      console.log(t[i]);
      console.log(t[j]);
      console.log("Inside");
      console.log("----------");
    }
    console.log("Outside");
    console.log("------ The End ---------");
  }
}

isIsogram("Dermatoglyphics"); // true
isIsogram("aba"); // false
isIsogram("moOse"); // false // -- ignore letter case
