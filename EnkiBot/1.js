// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.



function last(x){
   let arr = x.split(' ')
   let rev_arr = []
   let alpha_arr = [];
   for (let i = 0; i < arr.length; i++){
      rev_arr.push(arr[i].split('').reverse().join(''))  
   }
   rev_arr = rev_arr.sort()
   for(let i = 0; i < rev_arr.length; i++){
       alpha_arr.push(rev_arr[i].split(' ').reverse().join(''))
   }
   console.log(alpha_arr)
}

console.log(last("man i need a taxi up to ubud"))