/*

You probably know about Function.prototype.bind method in JavaScript. It returns a copy of the original function but this function will always be called in the specified context. The problem is that you can't rebind another context any more.

var func = function () {
  return this.prop;
};
var obj1 = {prop: 1},
    obj2 = {prop: 2};

func = func.bind(obj1);
func(); // Will produce 1

func = func.bind(obj2);
func(); // Will also produce 1 :

*/
function.prototype.bind = function (ctx) {

  var _this = this;

  if (this.orFn) {
    _this = this.orFn;
  }
  var foo = function () {
    return _this.apply(ctx);
  }

  foo.orFn = _this;
  return foo;
}