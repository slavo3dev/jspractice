// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

function mutation(arr) {
  var test = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();
  for (i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) === -1) return false;
  }
  return true;
}

console.log(mutation(["hello", "hey"])); // should return false.
console.log(mutation(["hello", "Hello"])); // should return true.
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])); // should return true.
console.log(mutation(["Mary", "Army"])); // should return true.
console.log(mutation(["Mary", "Aarmy"])); // should return true.
console.log(mutation(["Alien", "line"])); // should return true.
console.log(mutation(["floor", "for"])); //should return true.
console.log(mutation(["hello", "neo"])); // should return false.
console.log(mutation(["voodoo", "no"])); // should return false.
