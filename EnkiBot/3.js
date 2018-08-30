/*
Coding in function ```tailAndHead```. function accept 1 parameter ```arr```(a number array). 

We use an example to explain this task:

You got an array ```[123,456,789,12,34,56,78]```.

First, from left to right, the tail of an element and the head of the next element are added together. The results are put into an array. like this:
```
[123,456,789,1 2,3 4,5 6,78]
   3+4 6+7 9+1 2+3 4+5 6+7  
    |   |   |   |   |   |
   [7 ,13 ,10 , 5 , 9 ,13]
```
And then, Calculate their product and return it(```7x13x10x5x9x13=532350```)

So, ```tailAndHead([123,456,789,12,34,56,78]) should return 532350 ```

All elements of arr are positive integer. If a number is less than 10, its head and tail are the same. Please try to use ```reduce()``` solve this kata.

Some example:
```
tailAndHead([1,2,3,4,5]) should return 945
tailAndHead([111,2345,66,78,900]) should return 7293
tailAndHead([35456,782,569,2454,875]) should return 12012


*/

function tailAndHead(arr){
    let arrStr = [];
    let newArr = []
    // convert all numbers to string
    for (let i = 0; i < arr.length; i++){
        arrStr.push(arr[i].toString());
    }
    
    // split string and make array of every string and convert back to int 
    arrStr = arrStr.map(x => x.split(''));
    arrStr = arrStr.map(x => x.map(y => parseInt(y)));
    

    // prepare all array for future countung 
    for(var i = 0; i < arrStr.length; i++){
        if (i === 0){
            arrStr[i].splice(0, arrStr[i].length - 1)
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
    
    // concate array
    newArr = arrStr.reduce((a,b) => a.concat(b))
    
   
    // making chunks off array
    let chankArr = newArr.reduce((resultArray, item, index) => { 
        const chunkIndex = Math.floor(index/2)
      
        if(!resultArray[chunkIndex]) {
          resultArray[chunkIndex] = [] // start a new chunk
        }
      
        resultArray[chunkIndex].push(item)
      
        return resultArray
      }, [])
   
    // count chuncks 
    let accountArr = chankArr.map(x => x.reduce((a,b) => a + b));
    
    
    let result = accountArr.reduce((a,b) => a*b)
    
    return result
    
  }

console.log(tailAndHead([1,2,3,4,5])) // should return 945
console.log(tailAndHead([111,2345,66,78,900])) // should return 7293
console.log(tailAndHead([35456,782,569,2454,875])) // should return 12012