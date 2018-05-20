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

// Write a function add that is generalized for any amount of arguments

const add = (...nums) => {
    return nums.reduce((a, b) => a + b)
}
console.log(add(1, 2, 4, 5))
console.log('-----------------');

// Write a function sub that is generalized for any amount of arguments

const sub = (...nums) => {
    return nums.reduce((a, b) => a - b)
}

console.log(sub(1, 2, 4))
console.log('-----------------');

// Write a function mul that is generalized for any amount of arguments

const mul = (...nums) => {
    return nums.reduce((a, b) => a * b)
}

console.log(mul(1, 2, 4))
console.log('-----------------');

// Write a function min that is generalized for any amount of arguments

const min = (...nums) => {
    return nums.reduce((a, b) => a < b
        ? a
        : b);
}

console.log(min(1, 2, 4))
console.log('-----------------');
