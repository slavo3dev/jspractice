function last(x){
    let arr = x.split(' ')
    let rev_arr = []
    let alpha_arr = [];
    for (let i = 0; i < arr.length; i++){
       rev_arr.push(arr[i].split('').reverse().join(''))  
    }
    
    rev_arr = rev_arr.sort()
 
    for(let i = 0; i < rev_arr.length; i++){
        alpha_arr.push(rev_arr[i].split('').reverse().join(''))
    }
    return alpha_arr
 }
console.log(last('we time are the'))
console.log('---------------------')
function newLast(x){
let obj = {};
let arr = x.split(' ')
    let rev_arr = []
    let alpha_arr = [];
    for (let i = 0; i < arr.length; i++){
       rev_arr.push(arr[i].split('').reverse().join(''))  
    }
    
    
 
    // for(let i = 0; i < rev_arr.length; i++){
    //     alpha_arr.push(rev_arr[i].split('').reverse().join(''))
    // }
    for (const key of rev_arr) {
      obj[key] = key;
 }
 return obj
}

console.log(newLast('we time are the'))