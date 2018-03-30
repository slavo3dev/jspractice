let str = "I'm a little tea pot";
let str_new = [];

str.split(" ").forEach(item => {
  str_new.push(item.charAt(0).toUpperCase() + item.slice(1).toLowerCase());
});

console.log(str_new.join(" "));

console.log("---------------------");
let arr1 = [1, 2, 3, 5];
let arr2 = [1, 2, 3, 4, 5];
let newArr = [];

newArr = arr1.concat(arr2);

for (var i = 0; i < arr1.lenght; i++) {
  for (var j = 0; j < arr2.lenght; j++) {
    if (arr1[i] === arr2[j]) {
      arr[i].splice(i, 1);
      arr2[i].splice(i, 1);
      break;
    }
  }
}

console.log(arr1);
console.log(arr2);

// console.log(newArr.sort());
// const words = [
//   "spray",
//   "limit",
//   "elite",
//   "exuberant",
//   "destruction",
//   "present",
//   "happy"
// ];

// let longWords = words.filter(word => word.length > 6);
// console.log(longWords);
