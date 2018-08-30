let arr = [111,2345,66,78,900]; 
let arrStr = [];
var newArr = []

for (let i = 0; i < arr.length; i++){
    arrStr.push(arr[i].toString());
}

arrStr = arrStr.map(x => x.split(''));
arrStr = arrStr.map(x => x.map(y => parseInt(y)));

for(var i = 0; i < arrStr.length; i++){
    if (i === 0){
        arrStr[i].splice(0, arrStr[i].length - 1)
        console.log('hello 1')
    } else if ( i === arrStr.length - 1 ){
        arrStr[i].splice(1)
    } else if (arrStr[i].length === 2  || arrStr[i].length === 1) {
        continue
    } else {
        arrStr[i].splice(1, arrStr[i].length - 2)
    }
}

console.log(arrStr);


console.log(newArr)