// Return the length of the longest word in the provided sentence.

// Your response should be a number.

function findLongestWord(str) {
  return str.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // should return a number.
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // should return 6.
console.log(findLongestWord("May the force be with you")); // should return 5.
console.log(findLongestWord("Google do a barrel roll")); // should return 6.
console.log(
  findLongestWord("What is the average airspeed velocity of an unladen swallow")
); // should return 8.
console.log(
  findLongestWord(
    "What if we try a super-long word such as otorhinolaryngology"
  )
); // should return 19.
