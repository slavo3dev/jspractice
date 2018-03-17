let names = ["Slavo", "Vedran", "Dejan", "Milan"];

let l = [1, 2, 3, 4];
let new_string = l.reduce((test, test1) => test + test1);
let new_arr = names.reduce((word, words) => word + " and " + words);

console.log(new_string);
console.log(new_arr);
