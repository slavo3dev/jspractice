function test(...arr) {
    console.log(arr[0][2]);
}

let arr = [
    [
        1, 2, 3, 4, 5
    ],
    1,
    2,
    3
];

let newArr = arr.filter(item => item === arr[0]);
