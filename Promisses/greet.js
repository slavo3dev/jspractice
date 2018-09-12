const greet = new Promise(function (resolve, reject) {
    var greeting = function greeting() {
        return "Hi, Slavo - first promisse"
    }
    resolve(greeting());

}).then(function (greeting) {
    return greeting();
}).catch(function () {
    return 'Deal'
});

console.log(typeof (greet));
console.log(greet);