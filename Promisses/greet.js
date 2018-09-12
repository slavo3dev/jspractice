let number = 10;

let test = new Promise(function (resolve, reject) {
    let myNumber = 10;
    if (number === myNumber) {
        resolve();
    } else {
        reject()
    }
    // resolve('Hello Slavo');
})

// console.log(test);

test.then(function () {
    console.log('Hello Slavo!!!!!')
}).catch(function () {
    console.log('Wrong Number baby')
});