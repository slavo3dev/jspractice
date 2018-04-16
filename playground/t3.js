let l = [10, 20, 30, 40, 50];
let l1 = [3, 10, 5];
let l2 = [5, 3, 20, 3];
let num = 35;

l.push(num);
console.log(
  l.sort(function(a, b) {
    return a - b;
  })
);
l1.sort(function(a, b) {
  return a - b;
});
l2.sort((a, b) => a - b);
console.log(l2);
console.log(l.indexOf(num));
