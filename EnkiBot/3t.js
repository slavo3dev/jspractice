let arr = [111,2345,66,78,900]; 
let arrStr = [];
var newArr = []

for (let i = 0; i < arr.length; i++){
    arrStr.push(arr[i].toString());
}

arrStr = arrStr.map(x => x.split(''));
arrStr = arrStr.map(x => x.map(y => parseInt(y)));

for (let i = 0; i < arrStr.length; i++){
    if (arrStr[0]){
        arr[0].splice(0,2)
    }
}



console.log(arrStr);