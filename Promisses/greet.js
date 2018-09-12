const greet = new Promise(function (resolve, reject) {
    resolve('hi');
    reject('bye');
})

console.log(greet);