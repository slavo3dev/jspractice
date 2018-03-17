let t = ["s", "l", "a", "v"];
let name = "slavo";
let l = [];
var j = 0;
for (var i = 0; i < t.length; i++) {
  for (j = 1 + i; j < t.length; j++) {
    console.log(t[i]);
    console.log(t[j]);
    console.log("Inside");
    console.log("----------");
  }
  console.log("Outside");
  console.log("------ The End ---------");
}
