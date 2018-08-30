let arr = [111,2345,66,78,900]; 
let arr1 = [1,2,3,4,5]
let arrStr = [];
let newArr = []

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
    } else if (arrStr[i].length === 2) {
        continue
    } else if (arrStr[i].length === 1){
           arrStr[i].push(arrStr[i][0])
    } else {
        arrStr[i].splice(1, arrStr[i].length - 2)
    }
}
console.log("-------Filtred Arr-------")
console.log(arrStr);
console.log("---------New Arr---------")
newArr = arrStr.reduce((a,b) => a.concat(b))

console.log(newArr)

let chankArr = newArr.reduce((resultArray, item, index) => { 
    const chunkIndex = Math.floor(index/2)
  
    if(!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [] // start a new chunk
    }
  
    resultArray[chunkIndex].push(item)
  
    return resultArray
  }, [])
console.log("-------Chunk Arr-------")

console.log(chankArr)

console.log('-------- Count Arr -----------' )

let accountArr = chankArr.map(x => x.reduce((a,b) => a + b));
console.log(accountArr)

let result = accountArr.reduce((a,b) => a*b)
console.log('-------- Result ----------------')
console.log(result)
