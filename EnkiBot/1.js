// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.



function last(x){
   let arr = x.split(' ')
   for (let i = 0; i < arr.length; i++){
       arr[i].split().reverse()
   }
   console.log(arr)
}

console.log(last("man i need a taxi up to ubud"))