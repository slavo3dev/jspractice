function foo() {
    console.log(this.bar);
}

var bar = 'bar1';
var o2 = {
    bar: 'bar2',
    foo: foo
}
var o3 = {
    bar: 'bar3',
    foo: foo
}

console.log(foo());
console.log(o2.foo());
console.log(o3.foo());