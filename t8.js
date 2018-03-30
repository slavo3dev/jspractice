let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 4, 5];
let newArr = [];

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

for (var i = 0; i < arr2.length; i++) {
  for (var j = 1; j < arr1.length; j++) {
    if (arr2[i] === arr1[j]) {
      console.log(arr2[i]);
      console.log(arr1[j]);
      console.log("======================");
      console.log(arr2.splice(i, 1));
      console.log(arr1.splice(j, 1));
    }
    console.log("***************************");
  }

  i = i - 1;
}
console.log(arr1);
console.log(arr2);
console.log(arr1.concat(arr2));
