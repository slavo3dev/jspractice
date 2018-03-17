let t = ["s", "l", "a", "v"];

for (var i = 0; i < t.length; i++) {
  for (var j = 1; j < t.length - 1; j++) {
    console.log(t[i] === t[j]);
  }
}
