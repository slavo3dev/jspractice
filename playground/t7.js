let str = "I'm a little tea pot";
let str_new = [];

str.split(" ").forEach(item => {
  str_new.push(item.charAt(0).toUpperCase() + item.slice(1).toLowerCase());
});

console.log(str_new.join(" "));

console.log("---------------------");
// let arr1 = [1, 2, 3, 5];
// let arr2 = [1, 2, 3, 4, 5];
let arr1 = [1, "calf", 3, "piglet"];
let arr2 = [7, "filly"];

let newArr = [];

if (arr1.length > arr2.length) {
  for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        console.log(arr1.splice(i, 1));
      }
    }
  }
} else {
  for (var i = 0; i < arr2.length; i++) {
    for (var j = 0; j < arr1.length; j++) {
      if (arr2[i] === arr1[j]) {
        console.log(arr2.splice(i, 1));
      }
    }
  }
}
newArr = arr1.concat(arr2);
console.log(newArr);
// console.log(newArr.sort()); const words = [   "spray",   "limit",   "elite",
//  "exuberant",   "destruction",   "present",   "happy" ]; let longWords =
// words.filter(word => word.length > 6); console.log(longWords);
