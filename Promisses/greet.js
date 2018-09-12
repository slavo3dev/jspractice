let greet = new Promise(function (resolve, reject) {

    resolve("Hello Slavo Finnaly");

}).then(function () {
    return console.log('I am going first');
})

// console.log(typeof (greet));
console.log(greet);