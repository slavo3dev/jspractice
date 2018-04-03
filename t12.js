let name = "slavog";

for (var i = 0; i < name.length; i++) {
  if ("moroslav".indexOf(name[i]) === -1) {
    console.log("Nothing");
    break;
    console.log("You are Fucked");
  }

  console.log("Its Working");
}

console.log("miroslav".indexOf("o"));

function mutation(arr) {
  var arr1 = arr[1].toLowerCase();
  var arr0 = arr[0].toLowerCase();

  for (var i = 0; i < arr1.length; i++) {
    if (arr[0].indexOf(arr1[i]) === -1) {
      return false;
    }

    return true;
  }
}

console.log(mutation(["floor", "for"]));
console.log(mutation(["miroslavilicmiroslav", "slavo"]));
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])); // should return true.
