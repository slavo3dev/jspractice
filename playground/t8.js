// let arr1 = [1, 2, 3, 4];
// let arr2 = [1, 2, 3, 4, 5];
let newArr = [];

let arr2 = ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"];

let arr1 = ["diorite", "andesite", "grass", "dirt", "dead shrub"];

// for (var i = 0; i < arr2.length; i++) {
//     for (var j = 0; j < arr1.length; j++) {
//       if (arr2[i] === arr1[j]) {
//         console.log(arr2[i]);
//         console.log(arr1[j]);
//         console.log("=============");
//         arr2.splice(i, 1);
//         arr1.splice(j, 1);
//       }
//     }
//   }
if (arr2.length > arr1.length) {
  for (var i = 0; i < arr2.length; i++) {
    for (var j = 0; j < arr1.length; j++) {
      if (arr2[i] === arr1[j]) {
        arr2.splice(i, 1);
      }
    }
  }
} else {
  for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        arr1.splice(i, 1);
      }
    }
  }
}

// console.log(arr1);
console.log(arr2);
// console.log(arr1.concat(arr2));
console.log(newArr.concat(arr2));
console.log(newArr.concat(arr1));
