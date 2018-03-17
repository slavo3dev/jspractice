let t = ["s", "l", "a", "v"];
let x = "slavo";

// for (var i = 0; i < t.length; i++) {
//   for (var j = 1; j < t.length; j++) {
//     console.log(t[i]);
//     console.log(t[j]);
//     console.log(t[i] === t[j]);
//     console.log('----------------')
//   }
// }

for (var i = 0; i < t.length; i++) {
  if (x.includes(t[i])) {
    console.log(true);
  } else {
    console.log(false);
  }
}

let a = x.includes("s");

console.log(a);
