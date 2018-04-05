function mutation(arr) {
  let arr0 = arr[0].toLowerCase();
  let arr1 = arr[1].toLowerCase();
  console.log(arr0);
  console.log(arr1);
  for (i = 0; i < arr1.length; i++) {
    if (arr0.indexOf(arr1[i]) === -1) console.log(arr.indexOf(arr[i]));
    return false;
  }
  return true;
}

console.log(mutation(["hello", "hey"]));
