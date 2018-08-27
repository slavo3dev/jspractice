// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

function last(x){
  const words = x.split(' ')

  const arrayWithFlippedWords = words.map(word => 
    word.split('').reverse().join('')
   );
  
  const arrayWithFlippedWordsSortedByFirstLetter = arrayWithFlippedWords.sort(
    (word1, word2) => word1[0] > word2[0]
  );
  
  const arraySortedByFirstLetter = arrayWithFlippedWordsSortedByFirstLetter.map(
    word => word.split('').reverse().join('')
  )

  return arraySortedByFirstLetter;
}

console.log("['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up'] =");
console.log(last("man i need a taxi up to ubud"))
console.log('---------------------------')
console.log("['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']==");
console.log(last('what time are we climbing up the volcano'))