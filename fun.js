// Write a function identity that takes an argument and returns that argument
const identity = function identity(x) {
    return x
}
console.log(identity('Hello Slavo'))
console.log('---------------------')

// Write a binary function addb that takes two numbers and returns their sum

const addb = (a, b) => {
    return a + b
}
console.log(addb(3, 4))
console.log('-----------------------')

// Write a binary function subb that takes two numbers and returns their
// difference

const subb = (a, b) => {
    return a - b
}
console.log(subb(3, 4));
console.log('----------------------')

// Write a binary function mulb that takes two numbers and returns their product

const mulb = (a, b) => {
    return a * b
}
console.log(mulb(3, 4))
console.log('-------------------')

// Write a binary function minb that takes two numbers and returns the smaller
// one

const minb = (a, b) => {
    return a < b
        ? a
        : b
}
console.log(minb(3, 4))
console.log('--------------------')

// Write a binary function maxb that takes two numbers and returns the larger
// one

const maxb = (a, b) => {
    return a > b
        ? a
        : b
}
console.log(maxb(3, 4));
console.log('---------------------------')