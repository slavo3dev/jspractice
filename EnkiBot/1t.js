
x = 'what time are we climbing up the volcano';
const words = x.split(' ')
console.log(words);
console.log('--------------')

const arrayWithFlippedWords = words.map(word => 
    word.split('').reverse().join('')
   );

console.log(arrayWithFlippedWords);
console.log('--------------------')

const arrayWithFlippedWordsSortedByFirstLetter = arrayWithFlippedWords.sort(
    (word1, word2) => word1[0] > word2[0]
  );

console.log(arrayWithFlippedWordsSortedByFirstLetter)
console.log('--------------------------------------')

const arraySortedByFirstLetter = arrayWithFlippedWordsSortedByFirstLetter.map(
word => word.split('').reverse().join(''))

console.log(arraySortedByFirstLetter)
console.log('-----------------------')