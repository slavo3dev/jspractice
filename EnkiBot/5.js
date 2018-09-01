/* 

Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 21445 Output: 54421

Input: 145263 Output: 654321

Input: 1254859723 Output: 9875543221

*/

function descendingOrder(n){
   
    // convert number to the srting and split string to a single caracter 
    // use map function to map all charachter and convert to int
    // use sort function to sort all number from bigger to smaller
    // use join function to join all characeters - join automaticly coverts array of numbers to string.
    let reversNumberSort = n.toString().split('').map(x => parseInt(x)).sort((a,b) => b -a ).join('')
   
    // return sting and covert string to a number
    return parseInt(reversNumberSort);
  }

console.log("4563 reverse and sort: ", descendingOrder(4563));
console.log("145263 reverse and sort ", descendingOrder(145263));
console.log("1254859723 reverse and sort ", descendingOrder(1254859723));
